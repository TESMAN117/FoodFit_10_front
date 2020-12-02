import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Platillos() {

    useEffect(() => {
        fetchItems();
    });

    const [items, setItems] = useState([

    ]);

    const fetchItems = async () => {
        
        const data = await fetch('http://localhost/api/categorias');
        const items = await data.json();
        setItems(items)
    };

    return (
        <div className="card-deck"  >

            {items.map(data => (

                <div className="col-md-4" key={data.id} >

                    <div className="card">
                        <img src={'http://localhost/food_back/storage/app/categoria_upload/'+data.vch_Imagen} className="card-img-top cat_img" alt={'foodfit '+data.vch_Categoria} />
                        <div className="card-body">
                            <h5 className="card-title"> {data.vch_Categoria} </h5>
                            <p className="card-text">{data.vch_Descripcion}</p>
                        </div>
                        <div className="card-footer ">
                            <Link to={`/Platillos/${data.id}`} className="btn btn-primary btn-lg btn-block">Ver Categoria</Link>
                        </div>
                    </div>
                    <br></br>
                </div>
            ))}
        </div>

    );
}
export default Platillos;
