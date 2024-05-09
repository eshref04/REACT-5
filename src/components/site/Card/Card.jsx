import React from 'react'
import CardItems from '../CardItems/CardItems'


const Card = ({items}) => {
  return (
    <div className='container d-flex flex-wrap gap-5 mt-5 mb-5'>
       {
        items.map((item,index)=>(
            <CardItems key={index} item={item}/>
        ))
      }
    </div>
  )
}

export default Card
