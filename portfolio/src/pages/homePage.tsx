import Hero from "../components/hero";
import Usp from "../components/usp";
import ProjectList from "../components/projectList";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const HomePage = async () => {
	const docRef = doc(db, "home page");
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log("Document data:", docSnap.data());
	} else {
		// docSnap.data() will be undefined in this case
		console.log("No such document!");
	}
	return (
		<>
			<Hero />
			<Usp />
			<ProjectList />
		</>
	);
};

export default HomePage;
