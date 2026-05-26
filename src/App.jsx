import { useState } from "react";
import "./App.css";
import jogadores from "./Data/jogadores";

import jogadorCard from "./components/JogadoresCard/JogadorCard";
import JogadorCard from "./components/JogadoresCard/JogadorCard";
import JogadorButton from "./components/JogadorButton/JogadorButton";
function App() {
  const [count, setCount] = useState(0);

  const [listaJogadores, setlistaJogadores] = useState([
    {
      nome: "Pedro",
      time: "Flamengo",
      caminhoImagem: jogadores["Pedro"].imagem,
    },
    {
      nome: "Arrascaeta",
      time: "Flamengo",
      caminhoImagem: jogadores["Arrascaeta"].imagem,
    },
    {
      nome: "Paqueta",
      time: "Flamengo",
      caminhoImagem: jogadores["Paqueta"].imagem,
    },
    {
      nome: "Neymar",
      time: "Santos",
      caminhoImagem: jogadores["Neymar"].imagem,
    },

    {nome: "Gabigol",
      time: "Santos",
      caminhoImagem: jogadores["Gabigol"].imagem,}

  
  ]);

  function evoluirJogador(nomeJogador) {
    console.log(nomeJogador);

    const novalista = listaJogadores.map((jogador) => {
      if (jogador.nome === nomeJogador) {
        const proximoPrime = jogadores[jogador.nome].prime;

        if (!proximoPrime) {
          return jogador;
        }

        return {
          nome: proximoPrime,
          time: jogador.time,
          caminhoImagem: jogadores[proximoPrime].imagem,
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
            key={index}
            nome={jogador.nome}
            caminhoImagem={jogador.caminhoImagem}
            time={jogador.time}
            index={index}
            evoluirJogador={() => evoluirJogador(jogador.nome)}
          />
        ))}

      
      </section>
    </>
  );
}

export default App;
