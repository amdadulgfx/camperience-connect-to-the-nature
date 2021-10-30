import initializeAuth from "../Pages/Firebase/firebase.init";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {

        setIsloading(true)
        return signInWithPopup(auth, googleProvider)

    }
    //special observer 
    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user)
                }
                else {
                    setUser({})
                }
                setIsloading(false)
            })

        return () => unsubscribed;
    }, [])

    //handle log out
    const logOut = () => {
        signOut(auth).then(() => {

            setUser({})
        }).finally(() => setIsloading(false));
    }


    return {
        user,
        googleSignIn,
        isLoading,
        setIsloading,
        setUser,
        logOut
    }
}
export default useFirebase;