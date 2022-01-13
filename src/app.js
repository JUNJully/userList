import React from 'react'
import {useState} from "react";
import UserButton from "./userButton"
import List from "./list"


function App(){
    const [listState, setListState] = useState(null)
    const [buttonState, setButtonState] = useState(false)

    async function getUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setListState(data)
        setButtonState(true)
    }

    return ( <div className='container'>
            <UserButton click={getUsers} d={buttonState}/>
            <List users={listState}/>
            </div>
    )
}

export default App