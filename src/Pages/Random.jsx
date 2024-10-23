import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Random = () => {
    const [user,setUserData] = useState(null);
    const url = 'https://randomuser.me/api/?results=1';
    function fetchAPI(){
        axios.get(url)
        .then(response => setUserData(response.data.results[0]))
        .catch(error => console.log(error));
    }
    console.log(user);
        useEffect(() => {
                    fetchAPI();
        }, [] );
            
        
  return (
     <div>
               
                       { user ? (
                                    <div>
                                                        <p>{user.name.first}</p>
                                                                        <p>{user.name.last}</p>
                                                                                    </div>
                       ) : (
                                    <div>
                                                        <p>Loading.... user data</p>
                                                                    </div>
                       )}
                           </div>
                       )
                       }

export default Random