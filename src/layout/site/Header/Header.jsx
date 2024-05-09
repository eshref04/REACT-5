import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"


const Header = () => {
  return (
    <React.Fragment>
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container">
    <div className="container-fluid d-flex">
    <Link className="navbar-brand ma" to="/">Start Bootstrap</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/admin">Admin</Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div  className='navbar__btn'>
    <button style={{width:'120px'}} className="d-flex justify-content-center align-items-center gap-2 p-2 border-1 bg-light rounded-2">
    <i style={{fontSize:"14px"}} className="fa-solid fa-cart-shopping"></i>Cart <span style={{borderRadius:"50%",width:"20px",height:"20px",fontSize:"14px"}} className="d-flex justify-content-center align-items-center p-1 bg-dark text-light">0</span>
    </button>
  </div>
    </div>
  
</nav>
    </header>
      
    </React.Fragment>
  )
}

export default Header
