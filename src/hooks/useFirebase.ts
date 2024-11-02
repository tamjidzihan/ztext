import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { authCollectionName, db, userCollection } from "../firebase/FirebaseApp";
import { useAuth } from "./useAuth";

export interface AuthInfoProps {
    id: string
    website: string
    username: string
    email: string
    password: string
    otherInfo: string
}

export const useDB = () => {
    const [authInfos, setAuthInfos] = useState<AuthInfoProps[]>([])
    const { user } = useAuth();

    useEffect(() => {
        const getAuthInfos = async () => {
            if (user?.uid) {
                const querySnapshot = await getDocs(collection(db, userCollection, user?.uid, authCollectionName));
                const postItems: AuthInfoProps[] = [];
                querySnapshot.forEach((doc) => {
                    const postData = doc.data() as Omit<AuthInfoProps, 'id'>;
                    postItems.push({ id: doc.id, ...postData });
                });
                setAuthInfos(postItems);
            } else {
                console.error("User is not authenticated");
            }
        };
        getAuthInfos();
    }, [user?.uid])


    const postAuthInfo = async (
        //Follow this order Strictly as it is
        // website
        // userName
        // email
        // password
        // otherInfo

        website: string,
        userName: string,
        email: string,
        password: string,
        otherInfo: string
    ): Promise<AuthInfoProps | null> => {
        if (user?.uid) {
            try {
                const docRef = await addDoc(collection(db, userCollection, user.uid, authCollectionName), {
                    username: userName,
                    email: email,
                    password: password,
                    website: website,
                    otherInfo: otherInfo
                });

                return {
                    id: docRef.id,
                    username: userName,
                    email: email,
                    password: password,
                    website: website,
                    otherInfo: otherInfo
                };
            } catch (error) {
                console.error("Error adding todo:", error);
                return null;
            }
        } else {
            console.error("User is not authenticated");
            return null;
        }
    };

    const deleteAuthInfo = async (id: string) => {
        if (user?.uid) {
            await deleteDoc(doc(db, userCollection, user.uid, authCollectionName, id));
            setAuthInfos(authInfos.filter(authInfo => authInfo.id !== id));
        } else {
            console.error("Cannot delete, user is not authenticated");
        }
    };

    return { authInfos, deleteAuthInfo, setAuthInfos, postAuthInfo };
}