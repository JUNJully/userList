import React from 'react'
import Title from './title'

function List({users}) {

            if (users) {
                let arr = users.filter(item=>item.username !== "Delphine")
                return (
                        <ul className='list'>
                            {arr.map(item=> <Title key={item.id}
                                                   id={item.id}
                                                   name={item.name}
                                                   email={item.email}
                                                   phone={item.phone}
                                                   username={item.username}
                            />)}

                        </ul>
                  )
        }
         return   (<ul className='list'>
             <li>Empty List</li>
             </ul>)
}

export default List