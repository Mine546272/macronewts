// import React from 'react';

import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipe(){
// const AddRecipe = () =>{
  // const [title, setTitle] = useState('')
  // const [Kcal, setKcal] = useState('')
  // const [prepare, settime] = useState('')
  // const [error, setError] = useState(null)
  // // const [desc, setdesc] = useState('')
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const addresep = {title,Kcal,prepare}
  //   const response = await fetch('/api/resep',{
  //     method: 'POST',
  //     body: JSON.stringify(addresep),
  //     headers:{
  //       'Content-Type':'Application/json'
  //     }
  //   })
  //   const json = await response.json()
  //   if(!response.ok){
  //     setError(json.error)
  //   }
  //   if(response.ok){
  //     setTitle('')
  //     setKcal('')
  //     settime('')
  //     setError(null)
  //     console.log('new menu added',json)
  //   }
  // }
    return (
        <div className="modal-overlay">
        <div className="modal-content-recipe">
          <Link className="close-button" to ='/Recipes'>X</Link>
          <h2>Create a Recipe</h2>
          <form /*onSubmit={handleSubmit}*/>
            <div className="form-input-container">
              <label>Recipe Name</label>
              <input 
                className="post-input-recipe" 
                type="text" 
                name="title" 
                required 
                placeholder=". . ."
                // onChange={(e) => setTitle(e.target.value)}
                // value={title}
              />
            </div>
            <div className="form-input-container">
              <label>Preparation Time</label>
              <input 
                className="post-input-recipe" 
                type="number" 
                name="title" 
                required 
                placeholder=". . . Mins" 
                // onChange={(e) => settime(e.target.value)}
                // value={prepare}
              />
            </div>
            <div className="form-input-container">
              <label>Calories</label>
              <input 
                className="post-input-recipe" 
                type="number" 
                name="title" 
                required 
                placeholder=". . . Kcal"
                // onChange={(e) => setKcal(e.target.value)}
                // value={Kcal}
              />
            </div>
            
            <div className="form-input-container">
              <label>Step</label>
              <textarea 
                className="post-input-recipe" 
                name="content" 
                required 
                placeholder="Share your recipe..." 
              ></textarea>
            </div>
            <Link to='/Recipes' className="signup-text-link"><button className="post-button" type="submit">Post</button></Link>
            
          </form>
        </div>
      </div>
    );
}

export default AddRecipe