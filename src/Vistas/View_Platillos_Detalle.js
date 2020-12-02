import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Platillos_Detalle({ match }) {


    useEffect(() => {
        fetchItem();
    }, [
        match.params.id
    ]);

    const [item, setItem] = useState([

    ]);

    const fetchItem = async () => {

        const data = await fetch(
            `http://localhost/api/platillo_cat/${match.params.id
            }`
        );
        const item = await data.json();
        setItem(item);
    };


    return (
        <div className="container-flix">
            <h2 className="display-3">Platillos por categoria</h2>
            <p className="lead">Food-Fit INC tiene una gran variedad de paltillos con los que sentiras a gusto.</p>
            <hr className="my-4" />
            <div className="lead">

                <div className="card-deck"  >
                    {item.map(data => (

                        <div className="col-md-4" key={data.id} >
                            <div className="card">
                                <img src={'http://foodback.eduti.mx/storage/app/platillo_upload/' + data.vch_Imagen} className="card-img-top img_cat_des" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{data.vch_Nombre} </h5>
                                    <p className="card-text">{data.vch_Presentacion}</p>
                                </div>
                                <div className="card-footer ">
                                    <Link to={`/Platillo/${data.id}`} className="btn btn-primary btn-lg btn-block">Ver Platillo</Link>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Platillos_Detalle;
