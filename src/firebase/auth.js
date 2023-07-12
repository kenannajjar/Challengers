import firebaseApp from './config';
import { getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default auth;