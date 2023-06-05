import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDr9GychjUuE5PPWlD_L1uWile-NTcQzL8",
	authDomain: "ebba-388206.firebaseapp.com",
	projectId: "ebba-388206",
	storageBucket: "ebba-388206.appspot.com",
	messagingSenderId: "201595003820",
	appId: "1:201595003820:web:56dea39f696132ffaed009",
	measurementId: "G-L4CGBEZTN6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { app as default, auth, db, storage };
