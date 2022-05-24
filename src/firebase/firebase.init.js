import { initializeApp} from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/storage";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;