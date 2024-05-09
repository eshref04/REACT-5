import React,{useContext} from 'react'
import Card from '../Card/Card'
import MainContext from '../../../context/Context'

const Cards = () => {
    const {data}=useContext(MainContext)
  return (
    <div>
      <Card items={data}/>
    </div>
  )
}

export default Cards
