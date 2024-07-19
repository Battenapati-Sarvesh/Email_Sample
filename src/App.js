import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';
import {useUser} from 'react';



function App() {
const user = useUser();
const [email,setEmail] = useState("");

  return (

    <div className="EmailApp">
      Email:<input type="text" id="EmailInput" placeholder='Email' value={email}></input>
      <button type="button" onClick={()=>user.login(email)}>Login</button>
      <button type="button" onClick={()=>user.register(email)}>Register</button>
      
    </div>
  );
}

export default App;
