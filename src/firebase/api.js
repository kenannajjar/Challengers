import db from "./database";
import { doc, getDoc } from "firebase/firestore";


// Function to get all the data from a user
export const getUserData = async (userID) => {
    const userDocRef = doc(db, "users", userID); // Construct a reference to the document with the user ID
    const userDocSnapshot = await getDoc(userDocRef); // Retrieve the document snapshot

    if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data(); // Access the data of the document
        return userData;
    } else {
        return null;
    }

}
