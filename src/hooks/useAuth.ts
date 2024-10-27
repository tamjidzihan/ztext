import { onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/FirebaseApp";


export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authState = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => authState()
    }, [])

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            setUser(result.user); // Set the user after successful login
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Clear the user state on logout
            console.log("User signed out.");
        } catch (error) {
            console.error("Sign-out error:", error);
        }
    };

    return { user, loading, signInWithGoogle, logOut };

}

