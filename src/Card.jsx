import "./Card.css";

function Card( {id, nome, foto, tipo} ){
    return(
        <div className="pokemon">
            <div className="rounded-foto">
                <img className="foto-perfil" src={foto} alt={nome} />
            </div>
            <div className="info-pokemon">
                <p className="titulo">{id} {nome}</p>
                <p>{tipo}</p>	
            </div>
        </div>
    );
}

export default Card;