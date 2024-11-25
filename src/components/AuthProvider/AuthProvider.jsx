import { createContext, useEffect, useState } from "react";

export const authContext = createContext();
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/Firebase.config";


const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);

  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  // Log Out
  const handleLogOut = () => {
    signOut(auth);
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogOut,
    setUser,
    user
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
