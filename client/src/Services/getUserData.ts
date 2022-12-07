import { collection, doc, getDoc } from "firebase/firestore";
import db from "../FIrebase/firebase";

export default async function getUserData(uid: string) {
  return await getDoc(doc(db, "users", uid));
}
