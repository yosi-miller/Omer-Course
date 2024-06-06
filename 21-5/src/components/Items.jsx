import deleteData from "../firebase/deleteData";

export default function Item({urlImg, name, price, descrption, idItem, onDelete}) {
  
  function handleDeleteItem(id) {
    deleteData(id);
    onDelete(id);
  }
  
  return (
    <div className="item">
        <img src={urlImg} ></img>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{descrption}</p>
        <button onClick={() => handleDeleteItem(idItem)}>delete</button>
    </div>
  )
}
