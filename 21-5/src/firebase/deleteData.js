import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const deleteData = async (id) => {
  try {
    await deleteDoc(doc(db, "items", id));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export default deleteData;
