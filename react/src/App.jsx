// /
// import React,{useState,useEffect} from 'react';
// function App() {
//   const [formData,setformData] = useState({
//     name:"",
//     email:"",
//     password:""
//   });
//   //useeffect
//   useEffect(()=>{
//     console.log("form updated",formData)
//   },[formData])
//   //form begins
//   formData.name = "John Doe";
//   formData.email = "
import React from 'react'

export const App = () => {
  import React, { useState, useEffect } from 'react';
  function App() {
    const [formData, setformData] = useState({
      name: "",
      email: "",
      password: ""
    });
    useeffect
    useEffect(() => {
      console.log("form updated", formData)
    }, [formData])
    return (
    <div>App</div>
    <form action="">
      <label htmlFor="">
        Name: <input type="text" name='name' />
      </label>
      <label htmlFor="">
        Email:<input type="email" name='email' />
      </label>
      <label htmlFor="">
        Password:<input type="password" name='password' />
      </label>
    </form>
  )
}
