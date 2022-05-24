
import { getStorage } from "firebase/storage";
import initializeAuthentication from "./firebase.init";
const storage = getStorage(initializeAuthentication());
export default storage;


