
import './App.css'

const nome = 'Angelo'
const logado = true

function App() {
  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo'>Utilizando o Vite!</p>

      <h3>Olá meu nome é {nome}</h3>
      <h2>Idade: {10+35}</h2>
      {logado ?  <p>Usuário Logado</p> : <p>Faça login para acessar o conteúdo</p> }


    </>
  )
}

export default App
