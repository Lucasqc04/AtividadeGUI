import React, { useState } from 'react';
import {  Form } from 'react-bootstrap';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './styles.css';

const App = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyB6Jj6lkw8gDKUMf9T9R2ItKcZNEzQnrgQ",
  authDomain: "atividadegui.firebaseapp.com",
  projectId: "atividadegui",
  storageBucket: "atividadegui.appspot.com",
  messagingSenderId: "291526629141",
  appId: "1:291526629141:web:a7256644dc20c54f343b1c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); 

  const [name, setName] = useState("");
  const [ra, setRa] = useState("");
 

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "alunos"), {
        name: name,
        ra: ra
      });
      console.log("Documento escrito com ID: ", docRef.id);
    
      setName("");
      setRa("");
    } catch (error) {
      console.error("Erro ao adicionar: ", error);
    }
  };


  const handleGetName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
    setName(e.target.value)
    
  }
  const handleGetRa = (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault();
   
    setRa(e.target.value)
  }

 
  return (
    <div className="container">  
      <div className="card">
        <div className="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
          </svg>
          <h1 className="form_heading">Sign in</h1>
        </div>
        <Form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <input className="input" name="username" type="text" placeholder="Username" id="username" value={name} onChange={handleGetName} />
          </div>
          <div className="field">
            <label htmlFor="RA">RA</label>
            <input className="input" name="user_RA" type="text" placeholder="RA" id="" value={ra} onChange={handleGetRa} />
          </div>
          <div className="field">
            <button className="button">Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default App;