import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../contexts/MyContext';


function Platillos_Pedido({ match }) {


    const { registerPedido } = useContext(MyContext);



    useEffect(() => {
        fetchItem();
    }, [
        match.params.id
    ]);

    const [item, setItem] = useState([

    ]);

    const fetchItem = async () => {

        const data = await fetch(
            `http://localhost/api/platillo_pedido/${match.params.id
            }`
        );

        const item = await data.json();
        setItem(item);
    };

    useEffect(() => {
        pasaid();
    }, [
        match.params.id

    ]);

    const pasaid = () => {
        setIdplatillo(match.params.id);
    };

    const [idplatillo, setIdplatillo] = useState();

    const [mensage, setMensage] = useState();




    const [cantidad, setCantidad] = useState(1);

    const handleCantidad = e => {
        if (e.target.value <= 0) {
        } else {
            setCantidad(e.target.value);
        }

    };


    const submitForm = async (event) => {
        event.preventDefault();
        const datos = { "cantidad": cantidad, "idplatillo": idplatillo };

        const data = await registerPedido(datos);
        if (data.success = 1) {
            setMensage(<div className='alert alert-dismissible alert-success'>
                <button type='button' className='close' data-dismiss='alert'>&times;</button>
                <strong>{data.message} </strong> . Esperre su Pedio ok ok.
</div>);
        } else {
            setMensage(<div className='alert alert-dismissible alert-success'>
                <button type='button' className='close' data-dismiss='alert'>&times;</button>
                <strong>{data.message}</strong> .
</div>);
        }
    }






    return (
        <div>
            {item.map(data => (
                <div className="container-flix" key={data.id}>


                    <h2 className="display-3">Platillo de la categoria {data.vch_Categoria} </h2>
                    <p className="lead">Food-Fit INC tiene una gran variedad de paltillos con los que sentiras a gusto.</p>
                    <hr className="my-4" />


                    {mensage}

                    <div className="lead">
                        <h3 className="text-center"> {data.vch_Nombre}</h3>
                        <br></br>
                        <div className="row">
                            <div className="col-sm ">
                                <center> <img src={'http://foodback.eduti.mx/storage/app/platillo_upload/' + data.vch_Imagen} className="img-fluid img_cat_des" alt={'foodfit ' + data.vch_Nombre} />
                                </center>
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <p><strong className="text-primary">Nombre:</strong> {data.vch_Nombre}</p>
                                </div>
                                <div className="form-group">
                                    <p><strong className="text-primary">Presentacion:</strong> {data.vch_Presentacion}</p>
                                </div>
                                <div className="form-group">
                                    <p><strong className="text-primary">Precio:</strong> {'$' + data.flt_Precio}</p>
                                </div>
                                <div className="form-group">
                                    <p><strong className="text-primary">Categoria:</strong> {data.vch_Categoria}</p>

                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="form-group">
                                    <h3>Detalle del pedido</h3>
                                    {data.id}
                                    <form onSubmit={submitForm}>
                                        <div className="form-group">
                                            <label htmlFor="cantidad">Cantidad a pedir</label>
                                            <input
                                                className="form-control"
                                                type="number" name="cantidad"
                                                value={cantidad}
                                                onChange={handleCantidad} />
                                        </div>
                                        <br />  <br />
                                        <div className="row">

                                            <div className="col">
                                                <button
                                                    className="btn btn-success"
                                                    type="button" >
                                                    <img className="img-fluid" width="20px" height="20px" src="https://img.icons8.com/ios/50/000000/add-shopping-cart--v1.png" />
                                                      Agregar al carrito
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button
                                                    className="btn btn-danger"
                                                    type="submit">
                                                    <img className="img-fluid" width="20px" height="20px" src="https://img.icons8.com/doodle/48/000000/money.png"

                                                    />
                                                     Comprar

                                                    </button>
                                            </div>

                                        </div>



                                    </form>

                                </div>
                            </div>
                        </div>


                        <br></br>
                    </div>

                </div>
            ))}
        </div>

    )
}
export default Platillos_Pedido;
