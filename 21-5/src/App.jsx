import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase-config";
import "./App.css";
import ItemInput from "./components/ItemInput";
import Item from "./components/Items";
import Registr from "./components/Registr";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getUsersData = async () => {
      const docRef = await getDocs(collection(db, "items"));
      setUsers(
        docRef.docs.map((docItem) => ({ ...docItem.data(), id: docItem.id }))
      );
    };
    getUsersData();
  }, []);

  const refreshData = (idItem) => {
    // remove the item from the users array state when the item is deleted
    setUsers((prev) => prev.filter((item) => item.id !== idItem));
    console.log("Document successfully deleted!");
  };

  const handleAddItem = (newItem) => {
    // add the new item to the users array state when the item is added
    setUsers((prevItems) => [...prevItems, newItem]);
  };

  const showData = users.map((item, i) => {
    return (
      <Item
        key={i}
        urlImg={item.urlImg}
        name={item.name}
        price={item.price}
        descrption={item.descrption}
        idItem={item.id}
        onDelete={refreshData}
      />
    );
  });

  return (
    <>
      <div className="container-input">
        <ItemInput onAddItem={handleAddItem} />
        <Registr/>
      </div>
      <div className="continer-items">{showData ? showData : "loading..."}</div>
    </>
  );
}