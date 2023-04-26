import React from 'react'
import { Link } from 'react-router-dom'
import ProductPage from './ProductPage'

function HomePage() {
  return (
    <div>
        <h1 className='text-3xl font-bold underline'>What do you wanna buy?</h1>
        <Link to='/panjabi/arong'><button className="btn m-2">Panjabi</button></Link>
        
        <button className="btn m-2">Pajama</button>
        <button className="btn m-2">Sharee</button>
        <button className="btn btn-warning m-2">Error</button>
        
    </div>
  )
}

export default HomePage