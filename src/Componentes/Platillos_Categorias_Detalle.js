import React, { useState, useEffect } from 'react';


function Detalle({match}) {

    useEffect(() => {
        fetchItem();
       
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const items = await data.json();
        setItems(items);
    }
    
    console.log(items.data.name);
    return (

        < div className="card-deck" >


            < div className="col-md-4" >
                <div className="card">
                    <img src="" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> sd {items.name} </h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer ">
                        <a href="/#" className="btn btn-primary btn-lg btn-block">Ver Categoria</a>
                    </div>
                </div>
                <br></br>
            </div >
        </div >

    );
}
export default Detalle;
