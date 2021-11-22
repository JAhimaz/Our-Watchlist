import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


let config = {
    apiKey: "AIzaSyAZmWp1t5mgqzRad49AgFvskB4g_Z6Z4Ow",
    authDomain: "our-watchlist.firebaseapp.com",
    databaseURL: "https://our-watchlist-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "our-watchlist",
    storageBucket: "our-watchlist.appspot.com",
    messagingSenderId: "914555467224",
    appId: "1:914555467224:web:06d645da2a8036487d2ead",
    measurementId: "G-7F1E4TF4JB"
}

firebase.initializeApp(config);

export default firebase.database();

// export default firebase.database();