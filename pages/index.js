import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import styles from '../styles/Home.module.css';

export default function Home() {

  const cookies = new Cookies();

  const [form, setForm] = useState({
    title: "",
    body: "",
    autor: "",
    createdAt: ""
  });

  const handleChange = e => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value
    });

  }

  const addPost = () => {
    if(form.title && form.body && form.autor){
      
      form.createdAt = new Date;

      setForm({...form});
      
      console.log(form);
    }else{
      alert("Completar los campos obligatorios!")
    }
  }

  const formatDate = (postDate) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(postDate);

    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  }

  

  return (
    <div className={styles.container}>
        <h2>The Blog</h2>
        <div className={styles.container}>
            
          <input type="text" name="title" placeholder="Title" className={styles.formControl} onChange={handleChange} /><br />

          <textarea name="body" cols="30" rows="10" placeholder="Write something..." className={styles.formControl} onChange={handleChange}></textarea><br />

          <input type="text" name="autor" placeholder="Autor" className={styles.formControl} onChange={handleChange} /><br />

          <button className={styles.btn} onClick={addPost}>Add Post</button>
        </div>
    </div>
  )
}
