import { useParams } from "react-router-dom";
import jogadores from "../Data/jogadores"
import { Link } from "react-router-dom";


function Jogador(){
    const {jogadorId}= useParams()
    
    const jogador = jogadores.find((jogador) => jogador.id ===Number(jogadorId))

    return (
        <>
            
            <h1>{jogador.nome}</h1>
            <p>Próximo prime: {jogador.prime}</p>
            <div>
                <img
                    src={jogador.imagem}
                    width={400}
                    height={400}
                    alt={jogador.nome}
                />
            </div>
                
                <Link to="/pokemon-react">
               <button>Voltar</button> 
                </Link>
          
            
        </>
    )
}

export default Jogador