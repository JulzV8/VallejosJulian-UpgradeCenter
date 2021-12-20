import firebase from 'firebase/app';
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcFtFMiIZoWlAMdO-DZINJNi0uAoZeavA",
  authDomain: "upgrade-center-6345c.firebaseapp.com",
  projectId: "upgrade-center-6345c",
  storageBucket: "upgrade-center-6345c.appspot.com",
  messagingSenderId: "279054101137",
  appId: "1:279054101137:web:3fca03327d5a41b15eed30"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app);
}