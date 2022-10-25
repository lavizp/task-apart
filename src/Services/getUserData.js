import { collection, doc, getDoc } from "firebase/firestore";
import { database } from "./config";

export default function getUserData(uid) {
  return getDoc(doc(database, "users", uid));
}
