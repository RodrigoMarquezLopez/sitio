import React from 'react'

export function Importaciones(){
    return(
        <head>
          <meta charset="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="/index.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
          
    </head>
    );
}

export function NavBarHome(){
    return(
        <nav class="nav-tamanio">
                <div class="nav-wrapper white">
                    <a href="" class="brand-logo left">
                        <div class="container center-align">
                            <div class="row">
                            <img class="center-align nav-img-margen" src="/assets/aurobics.png" alt="" />
                            </div>
                        </div>
                    </a>
                   
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href=""class="black-text">Instalaciones</a></li>
                    <li><a href=""class="black-text">Paquetes</a></li>
                    <li><a href=""class="black-text">Iniciar Sesion</a></li>
                    </ul>
                </div>
        </nav>
        
    );

    
}
export function SeccionHome(){
        
}