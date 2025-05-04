
import React from "react";
import './../styles/App.css';
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        {/* <ItemList/> */}
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/items/:id" element={<ItemDetail/>}/>
        
        </Routes>
    </div>
  )
}

export default App
