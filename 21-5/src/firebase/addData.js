import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export default async function addData(
  nameItem,
  priceItem,
  urlImgItem,
  itemDescrption
) {
  try {
    const docRef = await addDoc(collection(db, "items"), {
      name: nameItem,
      price: priceItem,
      descrption: itemDescrption,
      urlImg: urlImgItem,
    });
    console.log("Document written with ID: ", docRef.id);
    // return the data to use it in the ItemInput component beacuse to render the new item
    return {
      name: nameItem,
      price: priceItem,
      descrption: itemDescrption,
      urlImg: urlImgItem,
      id: docRef.id,
    };
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
