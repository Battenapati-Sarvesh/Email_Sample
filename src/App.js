import React, { useState } from 'react';
import { databases } from './lib/appwrite';
import { ID } from 'appwrite';

function App() {
  const [success,setSuccess] = useState(false);
  const [email,setEmail] = useState("");
  const submitUser = async () => {
    try {
      await databases.createDocument("need to fill this chimtu <database_id>", "need to fill this chimtu < collection_id>",
      ID.unique(),
       {
        email: email
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="EmailApp">
      Email:<input type="text" id="EmailInput" placeholder='Email' value={email} 
      onChange={val => setEmail(val.target.value)}></input>
      <button type="button" onClick={submitUser}>Register</button>
      <div>
        {success && <div>Successfully submitted user.</div>}
      </div>
    </div>
  );
}

export default App;
