import "./CardInfo.css";

const CardInfo = (props) => {
    console.log(props.catalogo);
    return (
        <div className="tarjeta-info">
            <p className="juego">{props.catalogo.juego}</p>
            <p className="genero">{props.catalogo.genero}</p>
            <p className="precio">$ {props.catalogo.precio}</p>
            <button>Comprar</button>
        </div>
    );
}

export default CardInfo;