import React from 'react'
import Cards from '../../../components/site/Cards/Cards'



const Home = () => {
  
  return (
    <React.Fragment>
      <main>
      
        <section className='hero__section bg-dark py-5'>
          <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-secondary ">With this shop hompeage template</p>
                </div>
            </div>
       
        </section>
 
         <section className='cards__section'>
           <Cards/>
         </section>
        
      </main>
    </React.Fragment>
  )
}

export default Home
