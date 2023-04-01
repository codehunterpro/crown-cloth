import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc,collection, writeBatch,getDocs, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNh4JjfvvN-Ic2LmmCWj75hHE3IjI8xXY",
  authDomain: "crown-cloth-dm.firebaseapp.com",
  projectId: "crown-cloth-dm",
  storageBucket: "crown-cloth-dm.appspot.com",
  messagingSenderId: "375381795816",
  appId: "1:375381795816:web:650c79417a17837065fa5d",
};
// Initialize Firebase
 initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Setting uP DATABASE For Storing Data //START
const db = getFirestore();

// Add categories into firestore database
export const addCollectionAndDocuments = async (collectionKey, objectToWrite)=> {
  const collectionRef =  collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToWrite.forEach(object => {
   const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object)
    
  });
   await batch.commit();
}

// Get categories object from firestore database
export const getCategoriesAndDocuments = async ()=> {
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc,docSnapshot) => {
    const {title, items} = docSnapshot.data();
   
    acc[title.toLowerCase()] = items;
    return acc;
  },{});

  return categoryMap
  
}



export const createUserAuthDoc = async (user, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnapShotRef = await getDoc(userDocRef);

  if (!userSnapShotRef.exists()) {
    const { displayName, email } = user;
    const CreatedAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        CreatedAt,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Something went happend from you", err.message);
    }
  }
};
// Setting uP DATABASE For Storing Data //END
// ________________________________________________________

// create User Auth With Email & Password
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//Direct Log In With Email & Password

export const directLogInWithEmailandPassword = async (email, password) => {
  if (!email || !password) {
    alert("Please Sign Up for a Account");
  }
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw alert("INVALID EMAIL OR PASSWORD");
  }
};
// SIGN OUT METHOD BY Firebase Authentication
export const userSignOut = async ()=> await signOut(auth);


// OnAuthChange Listener Customly handle signIn & signOut Method

export const onAuthStateChangedListener = (callback)=> {
 onAuthStateChanged(auth, callback);
};