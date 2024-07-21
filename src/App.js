import React, { useState } from 'react';

import { databases } from './lib/appwrite';
import { ID } from 'appwrite';

function App() {

  const [success,setSuccess] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  
  const submitUser = async () => {
    try {
      
      await databases.createDocument("669a6299000fb18aa727", "669d0ee2002f3b8f0f6d",//database, collection
      ID.unique(),
       {
        Name:name,
        Email: email
        
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <div className="EmailApp">


      Name:<input type = "text" placeholder='Enter your name here' id='NameInput' value = {name} 
      onChange={val => setName(val.target.value)} ></input>
     

      Email:<input type="email" id="EmailInput" placeholder='Email' value={email} 
      onChange={val => setEmail(val.target.value)}></input>



      <button type="button" onClick={submitUser}>Register</button>
      <div>
        {success && <div>Successfully submitted user.</div>}
      </div>
    </div>
  );
}
export default App;