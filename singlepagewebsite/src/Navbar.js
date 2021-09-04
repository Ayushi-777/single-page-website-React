import React,{useState} from 'react'

const Navbar = () => {
   const [show, setShow] = useState(false)
    return (
        <>
        <section className="navar-bg">
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <a className="navbar-brand" >CodeWithAyushi</a>
    <button className="navbar-toggler"
     type="button" 
     data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
        aria-expanded="false" 
        aria-label="Toggle navigation"
        onClick={()=>setShow(!show)}
        >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ?"show":""}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " >about</a>
        </li>
         <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      
       
      </ul>
      <form className="d-flex"> 
      <button className="btn  btn-style" type="submit">Signup</button>
        <button className="btn  btn-style btn-style-border" type="submit">LogIn</button>
      </form>
    </div>
  </div>
</nav>
</section>
        </>
    )
}

export default Navbar
