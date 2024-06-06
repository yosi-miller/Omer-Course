import { useState } from "react";
import addData from "../firebase/addData";

export default function ItemInput({ onAddItem }) {
  const [nameItem, setNameItem] = useState("");
  const [priceItem, setPriceItem] = useState("");
  const [itemDescrption, setItemDescrption] = useState("");
  const [urlImgItem, setUrlImgItem] = useState("");

  return (
    <div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Item name"
          value={nameItem}
          onChange={(e) => setNameItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item price"
          value={priceItem}
          onChange={(e) => setPriceItem(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item descrption"
          value={itemDescrption}
          onChange={(e) => setItemDescrption(e.target.value)}
        />
        <input
          type="text"
          placeholder="url_Img"
          value={urlImgItem}
          onChange={(e) => setUrlImgItem(e.target.value)}
        />
        <button
          onClick={async () => {
            const newItem = await addData(
              nameItem,
              priceItem,
              urlImgItem,
              itemDescrption
            );
            onAddItem(newItem);
            setNameItem("");
            setPriceItem("");
            setItemDescrption("");
            setUrlImgItem("");
          }}
        >
          add data
        </button>
      </div>
    </div>
  );
}