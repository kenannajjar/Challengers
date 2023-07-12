import firebaseapp from "./config";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseapp);

export default db;







