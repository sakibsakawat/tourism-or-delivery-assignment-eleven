import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
 const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
            
            
     return signInWithPopup(auth, googleProvider)
        
    }

       const gitHubProvider = new GithubAuthProvider();

    const signInUsingGithub = () => {

        
      
       




   return signInWithPopup(auth, gitHubProvider)
       
    }


   
   
   
   
   
   
   
   
   
   
   
    useEffect( () => {
      const unsubscribed =  onAuthStateChanged(auth,user => {
            if(user) {
                setUser(user);
            
            } else{
                setUser( {} );
            }
        })
        return () => unsubscribed;
    }, [])


  const logOut =() =>{
        signOut(auth)
        .then( () => {});
  }

   return {
       user,
       signInUsingGoogle,
       signInUsingGithub,
       logOut
   }

}

export default useFirebase;