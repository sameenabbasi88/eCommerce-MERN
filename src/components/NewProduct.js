import React from 'react'
import { Link } from 'react-router-dom'

function NewProduct() {
  return (
    <div>
      <div style={{ background:'black',width: '50%', display: 'flex', color:'white', 
        justifyContent: 'center',  alignItems: 'center', borderRadius:'18px',
        height: '80vh', // ensures the container takes the full viewport height
        margin: '0 auto',padding:'20px' }}>
        <div className='mt-2'  >
            <h2 className='formula text-center'>Introducing our new formulations</h2>
            <h2 className=' text-center'>Try Our New FLAT IRON FREE Treatment</h2>
            <p>The latest addition to our product line is our FLAT IRON FREE treatment which provides the client with smoother, softer, more manageable hair that can be done in less than half the time of a traditional keratin treatment and lasts for month. It can be used on virtually any client who wants to reduce frizz and add luster and manageability but who does not want to lose much of their wave or curl. It’s a great choice for clients who have delicate or damaged hair since no flat iron is required.</p>
        </div>
        </div>
    </div>
  )
}

export default NewProduct
