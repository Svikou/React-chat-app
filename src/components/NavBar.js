import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // Utilisez googleSignIn dans un gestionnaire d'événements, par exemple :
  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Chat App</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Deconnecté
        </button>
      ) : (
        <p></p>
      )}
      <button onClick={handleGoogleSignIn}>Se connecter avec Google</button>
    </nav>
  );
};

export default NavBar;
