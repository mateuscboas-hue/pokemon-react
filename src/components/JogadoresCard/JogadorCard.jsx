function JogadorCard({nome,caminhoImagem,time,evoluirJogador}){
    return(
            <div 
            className='ListaJogadores' >
            <img src={caminhoImagem} width = {300} height = {300} />
            <h2>{nome}</h2>
            <p> time {time}</p>
            <button onClick={() => evoluirJogador(nome)}>Clique aqui!</button>
            </div> 
    )

}

export default JogadorCard