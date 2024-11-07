import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { authCollectionName, categoryCollection, db, userCollection } from "../firebase/FirebaseApp";
import { useAuth } from "./useAuth";

export interface AuthInfoProps {
    id: string
    website: string
    category: string
    username: string
    email: string
    password: string
    otherInfo: string
}

export interface CategoryProps {
    id: string
    category: string
}

export const useDB = () => {
    const [authInfos, setAuthInfos] = useState<AuthInfoProps[]>([])
    const [category, setCategory] = useState<CategoryProps[]>([])
    const { user } = useAuth();


    // CURD FOR Auth Category
    useEffect(() => {
        const getCategory = async () => {
            if (user?.uid) {
                const querySnapshot = await getDocs(collection(db, categoryCollection));
                const postCategoryItem: CategoryProps[] = [];
                querySnapshot.forEach((doc) => {
                    const postCategoryData = doc.data() as Omit<CategoryProps, 'id'>;
                    postCategoryItem.push({ id: doc.id, ...postCategoryData })
                });
                setCategory(postCategoryItem)
            }
        };
        getCategory()
    }, [user?.uid])

    const postCategory = async (
        category: string
    ): Promise<CategoryProps | null> => {
        if (user?.uid) {
            try {
                const docRef = await addDoc(collection(db, categoryCollection), {
                    category: category
                });
                return {
                    id: docRef.id,
                    category: category
                };
            } catch (error) {
                console.error("Error adding Category:", error);
                return null;
            }
        } else {
            return null;
        }
    }

    const deleteCategory = async (id: string) => {
        if (user?.uid) {
            await deleteDoc(doc(db, categoryCollection, id));
            setCategory(authInfos.filter(category => category.id !== id));
        } else {
            console.error("Cannot delete, user is not authenticated");
        }
    };


    // CURD FOR Auth Info
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
        category: string,
        userName: string,
        email: string,
        password: string,
        otherInfo: string
    ): Promise<AuthInfoProps | null> => {
        if (user?.uid) {
            try {
                const docRef = await addDoc(collection(db, userCollection, user.uid, authCollectionName), {
                    username: userName,
                    category: category,
                    email: email,
                    password: password,
                    website: website,
                    otherInfo: otherInfo
                });

                return {
                    id: docRef.id,
                    username: userName,
                    category: category,
                    email: email,
                    password: password,
                    website: website,
                    otherInfo: otherInfo
                };
            } catch (error) {
                console.error("Error adding Auth Info:", error);
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

    return {
        setCategory,
        category,
        postCategory,
        deleteCategory,

        setAuthInfos,
        authInfos,
        deleteAuthInfo,
        postAuthInfo
    };
}