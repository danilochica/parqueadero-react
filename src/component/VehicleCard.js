import React from 'react';

class VehicleCard extends React.Component{


    render(){
        
        return <div className="col-3 card text-center">
            <div className="card">
                <h5 className="card-header">Tipo de vehículo</h5>
                <div className="card-body">
                    <h3 className="card-title p-3 mb-2 bg-warning text-dark font-weight-bold">PLA123</h3>
                    <p className="card-text">Ingreso: </p>
                    <a href="/" className="btn btn-info">Terminar parqueo</a>
                </div>
            </div>
        </div>
    }

}

export default VehicleCard;

