import React, { useContext } from 'react'
import MainContext from '../../../context/Context'
import Loading from '../../Loading/Loading'
import Table from '../../../components/admin/Table/Table';

const Products = () => {
  const {data,loading} =useContext(MainContext)
  return (

    <div> 
      {loading ? <Loading/> : <Table items={data} />}
    </div>
    
  )
}

export default Products
