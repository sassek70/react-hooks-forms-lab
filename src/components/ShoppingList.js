import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearcheditem] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
     return true;
    } else {    
    return item.category === selectedCategory;
    }
  });
  
 const searchResults = itemsToDisplay.filter((item) => {
    return item.name.toLowerCase().includes(searchedItem.toLowerCase())
 })

  function handleSearchChange(event) {
    setSearcheditem(event.target.value)
  }
  console.log(searchedItem)

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter value={searchedItem} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
