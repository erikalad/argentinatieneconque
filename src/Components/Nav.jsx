import React from 'react'
import logo from './../Imagenes/Perfil 1.jpg'
import youtube from './../Imagenes/Youtube_logo.png'
import './Nav.css'

export default function Nav() {
  return (
    <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                 <div class="container-fluid">
                <img class="logo" src={logo}/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 lista">
                    <li class="nav-item">
                    <a href='https://www.youtube.com/channel/UCqZfN80RcEttLEgPCle5G9w'><img class="logo-youtube" src={youtube}/></a>
                    </li>
                    
                </ul>
               
                </div>
            </div>
            </nav>
    </div>
  )
}
