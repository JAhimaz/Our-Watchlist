import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup,  signOut, GoogleAuthProvider } from "firebase/auth";


import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAZmWp1t5mgqzRad49AgFvskB4g_Z6Z4Ow",
  authDomain: "our-watchlist.firebaseapp.com",
  projectId: "our-watchlist",
  storageBucket: "our-watchlist.appspot.com",
  messagingSenderId: "914555467224",
  appId: "1:914555467224:web:06d645da2a8036487d2ead",
  measurementId: "G-7F1E4TF4JB"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

function App() {

  const [movieList, setMovieList] = useState([]);

  const [user] = useAuthState(auth);

  useEffect(() => {
    getMovieList();
  }, [])

  const getMovieList = async (db) => {
    const movieCollection = collection(db, 'movies');
    const movieSnapshot = await getDocs(movieCollection);
    setMovieList(movieSnapshot.docs.map(doc => doc.data()));
  }

  return (
    <div className="App">
      <header className="App-header">
        {user ? <InputList /> : <SignIn />}
      </header>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then(() => {
      // Successfully Signed in
    }).catch((error) => {
      // Error Signing Out
    });
  }

  return (
    <button onClick={signInWithGoogle}>Google Sign In</button>
  )
}

function InputList(){
  return (
    <SignOut />
  )
}

function SignOut() {

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Successfully Signed Out
    }).catch((error) => {
      // Error Signing Out
    });
  }

  return auth.currentUser && (
    <button onClick={() => signOutUser()}>Sign Out</button>
  )
}

export default App;
