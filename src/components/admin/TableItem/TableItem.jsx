import React,{useContext} from 'react'
import MainContext from './../../../context/Context';
import axios from 'axios';

const TableItem = ({item}) => {
  const {data,setData} =useContext(MainContext)
  const deleteItem = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(res => {
      setData([...data.filter(x => x.id != res.data.id)])
    })
  }
  return (
    <tr>
   
    <td><img width={"40px"} height={"40px"} src={item.image} alt="" /></td>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td><button onClick={()=>{
      deleteItem(item.id)
    }} className='btn btn-danger'>Delete</button></td>
  </tr>
  )
}

export default TableItem
