import "./Catalogo.css";
import CardItem from "./CardItem";

const Catalogo = (props) => {
    return (
            <div className="catalogo">
            <CardItem
                catalogo={props.catalogo[0]}
            />
            <CardItem
                catalogo={props.catalogo[1]}
            />
            <CardItem
                catalogo={props.catalogo[2]}
            />
            <CardItem
                catalogo={props.catalogo[3]}
            />
            <CardItem
                catalogo={props.catalogo[4]}
            />
            <CardItem
                catalogo={props.catalogo[5]}
            />
        </div>
        
    );
}

export default Catalogo;