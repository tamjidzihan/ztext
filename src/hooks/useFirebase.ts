import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { authCollectionName, categoryCollectionName, db, userCollectionName } from "../firebase/FirebaseApp";
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
    //GET Category
    useEffect(() => {
        const getCategory = async () => {
            if (user?.uid) {
                const querySnapshot = await getDocs(collection(db, userCollectionName, user?.uid, categoryCollectionName));
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

    //POST Category
    const postCategory = async (
        category: string
    ): Promise<CategoryProps | null> => {
        if (user?.uid) {
            try {
                const docRef = await addDoc(collection(db, userCollectionName, user?.uid, categoryCollectionName), {
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

    //DELETE Category
    const deleteCategory = async (id: string) => {
        if (user?.uid) {
            await deleteDoc(doc(db, userCollectionName, user?.uid, categoryCollectionName, id));
            setCategory(authInfos.filter(category => category.id !== id));
        } else {
            console.error("Cannot delete, user is not authenticated");
        }
    };


    // CURD FOR Auth Info
    //GET AUTH INFO
    useEffect(() => {
        const getAuthInfos = async () => {
            if (user?.uid) {
                const querySnapshot = await getDocs(collection(db, userCollectionName, user?.uid, authCollectionName));
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



    const fetchAuthInfo = async (id: string): Promise<AuthInfoProps | null> => {
        if (user?.uid) {
            try {
                const docRef = doc(db, userCollectionName, user.uid, authCollectionName, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    return { id: docSnap.id, ...docSnap.data() } as AuthInfoProps;
                } else {
                    console.error("No such document!");
                    return null;
                }
            } catch (error) {
                console.error("Error fetching Auth Info:", error);
                return null;
            }
        } else {
            console.error("User is not authenticated");
            return null;
        }
    };


    // UPDATE AUTH INFO
    const updateAuthInfo = async (
        id: string,
        updatedData: Partial<AuthInfoProps>
    ): Promise<AuthInfoProps | null> => {
        if (user?.uid) {
            try {
                const docRef = doc(db, userCollectionName, user.uid, authCollectionName, id);
                await updateDoc(docRef, updatedData);

                // Update local state
                setAuthInfos((prev) =>
                    prev.map((authInfo) =>
                        authInfo.id === id ? { ...authInfo, ...updatedData } : authInfo
                    )
                );
                return { id, ...updatedData } as AuthInfoProps;
            } catch (error) {
                console.error("Error updating Auth Info:", error);
                return null;
            }
        } else {
            console.error("User is not authenticated");
            return null;
        }
    };

    //POST AUTH INFO
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
                const docRef = await addDoc(collection(db, userCollectionName, user.uid, authCollectionName), {
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

    //DELETE AUTH INFO
    const deleteAuthInfo = async (id: string) => {
        if (user?.uid) {
            await deleteDoc(doc(db, userCollectionName, user.uid, authCollectionName, id));
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

        authInfos,
        setAuthInfos,
        fetchAuthInfo,
        updateAuthInfo,
        deleteAuthInfo,
        postAuthInfo
    };
}