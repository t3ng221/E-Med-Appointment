import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, SetUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const auth = getAuth();
  const gProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    return signInWithPopup(auth, gProvider);
  };

  const registerUser = (name, email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = () => {
    signOut(auth).then(() => {
      SetUser({});
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdm");
      localStorage.removeItem("isDoc");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      }
    });
  });
  useEffect(() => {
    fetch(`https://project-101-doctor.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setDoctor(data.doctor);
      });
  }, [user.email]);

  return {
    auth,
    user,
    admin,
    doctor,
    updateProfile,
    SetUser,
    registerUser,
    login,
    logout,
    signInGoogle,
  };
};

export default useFirebase;
