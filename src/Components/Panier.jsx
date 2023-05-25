import React, { useState } from "react";
import "../Components/style/Panier.scss";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    const updateItems = [...items];
    updateItems(updateItems);
  };

  const handleItemClick = (itemName) => {
    addItem(itemName);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div>
        <img
          src="chemin/vers/image1.jpg"
          alt="Image 1"
          onClick={() => handleItemClick("Image 1")}
        />
        <img
          src="chemin/vers/image2.jpg"
          alt="Image 2"
          onClick={() => handleItemClick("Image 2")}
        />
        <img
          src="chemin/vers/image3.jpg"
          alt="Image 3"
          onClick={() => handleItemClick("Image 3")}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;

// function Panier() {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => removeItem(index)}>Supprimer</button>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <img
//           src="chemin/vers/image1.jpg"
//           alt="Image 1"
//           onClick={() => handleItemClick('Image 1')}
//         />
//         <img
//           src="chemin/vers/image2.jpg"
//           alt="Image 2"
//           onClick={() => handleItemClick('Image 2')}
//         />
//         <img
//           src="chemin/vers/image3.jpg"
//           alt="Image 3"
//           onClick={() => handleItemClick('Image 3')}
//         />
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

//     <>
//       <div className="GlobalPage">
//         <div className="ContainerElement">
//           <div className="ElementPanier">
//             <h1 className="TitrePanier">Panier</h1>
//             <div className="ContainerPanier">
//               <div className="Panier">
//                 <p className="AjoutPanier">Ajouter element au panier</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Panier;
