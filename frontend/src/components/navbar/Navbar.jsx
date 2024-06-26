import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">Sign UP</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">Sign In</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active btn-nav" aria-current="page" href="#">Log Out</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active" aria-current="page" href="#">Profile</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
