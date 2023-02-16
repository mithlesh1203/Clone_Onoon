import React, { createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CartIcon from '../../images/cartIcon.png'
import { UserContext } from '../../App'
import BottomHead from './BottomHead'
import onoonLogo from '../../images/onoonLogo.svg'



function TopHead() {
  const { state, dispatch } = createContext(UserContext)
  const RenderMenue = () => {
    if (state) {
      return (
        <>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/Home">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/LogOut">LogOut</a>
            </li>
            <div className="cartIconBox">
              <p id="cartIndicator">0</p>
              <a className="cartIcon" href="/cart">
                <img
                  alt=''
                  style={{
                    width: "31px",
                    height: "26px",
                  }}
                  src={CartIcon}
                />
              </a>
            </div>
          </ul>
        </>
      )
    } else {
      return (
        <>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/Home">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Signup">Registation</a>
            </li>
            <div className="cartIconBox">
              <p id="cartIndicator">0</p>
              <a className="cartIcon" href="/cart">
                <img
                  alt=''
                  style={{
                    width: "31px",
                    height: "26px",
                  }}
                  src={CartIcon}
                />
              </a>
            </div>
          </ul>
        </>
      )
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'yellow'}}>
        <img
          alt=''
          style={{
            width: "150px",
            height: "26px",
          }}
          src={onoonLogo}
        />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="navbar-nav ms-auto w-50">
            <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-sm-0" type="submit">Search</button>
          </form>
          <RenderMenue />
        </div>
      </nav>
      <BottomHead />
    </>
  )
}

export default TopHead;