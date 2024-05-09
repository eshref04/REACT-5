import React from 'react'

const CardItems = ({item}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img height={"240px"} src={item.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text">{item.price}$</p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
  </div>
  )
}

export default CardItems
