import firebaseapp from "./config";
import { getStorage } from "firebase/storage";

const storage = getStorage(firebaseapp);

export default storage;