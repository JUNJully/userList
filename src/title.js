import React from 'react'
import Like from './likeButton'

function Title({id,name,username,email,phone}) {
    async function clickSend(){
        let user = {id,name,username,email,phone,likeTime:new Date()}
        try {
            let response = await fetch('http://localhost:8080/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            });
            console.log(response)
        }
        catch (e) {
            throw(e)
        }

    }
    return <li className='list-item'>
         ID:{id}. {name}.  {email} {phone}
        <Like click={clickSend}/>
    </li>
}

export default Title