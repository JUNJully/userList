import React from 'react'

function UserButton({click,d}){
  return (
      <button className='btn' disabled={d} onClick={click}>Get Users</button>
  )
}

export default UserButton