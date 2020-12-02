import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function View_Orden({ match }) {


  useEffect(() => {
    fetchItem();
  }, [
    match.params.id
  ]);

  const [item, setItem] = useState([

  ]);

  const fetchItem = async () => {

    const data = await fetch(
      `http://localhost/api/orden/${match.params.id
      }`
    );

    const item = await data.json();

    setItem(item);



  };

  return (

    <div>

      <div className="jumbotron">
        <h1 className="display-4">Mi Orden de Pedidos</h1>
        <p className="lead">Aqui puedes ver tus platillos para realizar el pedido</p>
        <hr className="my-4" />

        <div className="card-deck"  >
          {item.map(data => (

            <div className="col-md-4" key={data.id}>
              <div className="card">
                <h5 className="card-title text-left"><span className="badge badge-info">ID Pedido: {data.id} </span> </h5>
                <div className="card-body">

                  <h5 className="card-title text-center"><span className="badge badge-dark">Pedido n'#' {data.vch_Num_Venta} </span> </h5>
                  <p className="card-text">pedido del usuario {data.vch_Nick}</p>
                  <p className="card-text">precio : {data.flt_Total}</p>
                  <p className="card-text">Fecha : {data.date_Fecha_Pedido} </p>
                  {data.vch_Estado == 'En proceso' ?
                    <p className="card-text">Estado : <span className="badge badge-info">{data.vch_Estado} </span> </p> :
                    <p className="card-text">Estado : <span className="badge badge-success">{data.vch_Estado} </span> </p>}
                </div>
                <div className="card-footer ">
                 
                </div>
              </div>
              <br></br>
            </div>
          ))}
        </div>

      </div>

    </div>

  );
}

export default View_Orden;
