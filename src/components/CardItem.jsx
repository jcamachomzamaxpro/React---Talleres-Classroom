import CardInfo from "./CardInfo";
import "./CardItem.css"

const CardItem = (props) => {

  return (
    <div className="tarjeta">
        <div>
            <img src={props.catalogo.imagen} alt={props.catalogo.juego} />
        </div>
        <CardInfo
          catalogo={props.catalogo}
        ></CardInfo>
    </div>
  );
};

export default CardItem;
