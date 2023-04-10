var React = require('react');
import {Importaciones,NavBarHome} from './head'
import { Carrusel } from './carrusel';
import {Footer} from './footer'
function DefaultLayout(props) {
  return (
    <html>
      <Importaciones></Importaciones>
      <body>
        <div class="row">
        <NavBarHome></NavBarHome>
        </div>
      
      </body>
      <div>
      <section>
      <Carrusel></Carrusel>
      </section>
      </div>
      <div>
      <Footer></Footer>
      </div>
    </html>
  );
}

module.exports = DefaultLayout;