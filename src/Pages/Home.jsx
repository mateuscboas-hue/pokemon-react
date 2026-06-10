
import { useState } from "react";
import jogadores from "../Data/jogadores";

import jogadorCard from "../components/JogadoresCard/JogadorCard";
import JogadorCard from "../components/JogadoresCard/JogadorCard";
import JogadorButton from "../components/JogadorButton/JogadorButton";
function Home(){
    const [count, setCount] = useState(0);

    const jogadoresEstagioInicial= jogadores.filter((jogador) => jogador.estagio===1)

  const [listaJogadores, setlistaJogadores] = useState(jogadoresEstagioInicial);

  function evoluirJogador(nomeJogador) {
    console.log(nomeJogador);

    const novalista = listaJogadores.map((jogador) => {
      if (jogador.nome === nomeJogador) {

        const jogadorBanco = jogadores.find((j) => j.nome===jogador.nome)
        console.log ('jogadorBanco', jogadorBanco)
        const proximoPrime = jogadorBanco.prime
        // const proximoPrime = jogadores[jogador.nome].prime;

        if (!proximoPrime) {
          return jogador;
        }

        const jogadorEvoluido = jogadores.find((j) => j.nome===proximoPrime )
        console.log( 'jogadorEvoluido', jogadorEvoluido)

        return {
          id: jogadorEvoluido.id,
          nome: jogadorEvoluido.nome,
          time: jogadorEvoluido.time,
          imagem: jogadorEvoluido.imagem
        };

      
      }
      return jogador
    });
    setlistaJogadores(novalista)
  }

  return (
    <>
      

      <h1>CRAQUES DO BRASILEIRÃO</h1>
      <h2>NUMERO DE JOGADORES: {listaJogadores.length} </h2>

      <section id="center">
        {listaJogadores.map((jogador, index) => (
          // <div
          // className='ListaJogadores' key={index}>
          //   <img src={jogador.caminhoImagem} width = {300} height = {300} />
          //   <h2>{jogador.nome}</h2>
          //   <p> Time: {jogador.time}</p>
          //    <button onClick={() => console.log(`Clicou no ${jogador.nome}`)}>Clique aqui!</button>
          // </div>
          <JogadorCard
            id={jogador.id}
            key={index}
            nome={jogador.nome}
            caminhoImagem={jogador.imagem}
            time={jogador.time}
            index={index}
            evoluirJogador={() => evoluirJogador(jogador.nome)}
            
            
          />
        ))}

      
      </section>
    </>
  );
       
     
}
export default Home