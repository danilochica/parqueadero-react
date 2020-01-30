import React from 'react';

class Header extends React.Component{

    render(){
      return <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <a className="navbar-brand text-warning" href="/">Parqueadero</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/"> Ingreso de vehículo <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/"> Salida de vehículos <span className="sr-only">(current)</span></a>
              </li>
            </ul>                
          </div>
        </nav>
      </div>
    }

}

export default Header;

