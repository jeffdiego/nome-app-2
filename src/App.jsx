
import './App.css'
import Saudacao from './components/Saudacao'

const nome = 'Angelo'
const logado = false

function App() {
  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo'>Utilizando o Vite!</p>

      <h3>Olá meu nome é {nome}</h3>
      <h2>Idade: {10+35}</h2>
      

      <Saudacao 
      logado ={logado}/>


    </>
  )
}

export default App
