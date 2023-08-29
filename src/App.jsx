import catalogo from "./productData";
import Catalogo from "./components/Catalogo.jsx";

const App = () => {
    return (
        <div>
            <h1>E-Commerce in React and SnipCart</h1>
            <Catalogo
                catalogo={catalogo}
            ></Catalogo>
            
        </div>
    );
}

export default App;