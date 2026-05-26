import './JogadorButton.css'
function JogadorButton({titulo='botão padrao',cor='blue',corDaLetra}){

return(
    <button 
    className="jogadorButton"
    style={{backgroundColor: cor, color:corDaLetra}}>
    {titulo}
    </button>
)

}

export default JogadorButton