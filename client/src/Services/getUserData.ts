import { collection, doc, getDoc } from "firebase/firestore";
import db from "../Auth/firebase";

export default async function getUserData(uid: string) {
  return await getDoc(doc(db, "users", uid));
}
