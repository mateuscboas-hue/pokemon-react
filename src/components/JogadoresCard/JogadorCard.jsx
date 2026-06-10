import { Link } from "react-router-dom"

function JogadorCard({id,nome,caminhoImagem,time,evoluirJogador}){
    return(
            <div 
            className='ListaJogadores' >
            <Link to={`/pokemon-react/${id}`}>
            <img src={caminhoImagem} width = {300} height = {300}/> 
            </Link>
            <h2>{nome}</h2>
            <p> Time: {time}</p>
            <button onClick={() => evoluirJogador(nome)}>Clique aqui!</button>
            </div> 
    )

}

export default JogadorCard