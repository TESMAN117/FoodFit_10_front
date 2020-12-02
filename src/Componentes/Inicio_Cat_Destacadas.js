import React from 'react';

function Inicio_Cat_Destacadas() {

    return (
        <div className="card-deck">
            <div className="col-md-4">
                <div className="card">
                    <img src="https://static.misionesonline.news/wp-content/uploads/2017/02/comidas-saludables-y-rapidas-1fn8ra55t6k8.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Platillo</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer ">
                        <div className="row">
                            <div className="col-md-4">
                                <button type="button" className="btn btn-outline-success">Ver Platillos</button>
                            </div>
                            <div className="col-md-4 offset-md-3">
                                <button type="button" className="btn btn-secondary">Pedir ;V</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Inicio_Cat_Destacadas;