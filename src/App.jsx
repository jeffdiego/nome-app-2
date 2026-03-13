import { useState } from 'react';
import './App.css'
import Saudacao from './components/Saudacao';

//let nome = 'Angelo';
const logado = false;

function App() {
  // Criando um estado para nome usando o hook useState
  const [nome, setNome] = useState('Angelo');

  return (
    <>
      <h1>Meu App React</h1>
      <p className='paragrafo'>Utilizando o vite</p>

      <h3>Olá meu nome é {nome}</h3>

      <h2>Idade: {10 + 25}</h2>

      <Saudacao
        logado={logado}
      />

      {/* A variável nome inicia com 'Angelo' e é exibida no h3. Ao clicar no botão,  a função anônima é executada, alterando o valor de nome para 'Teste'. No entanto, como nome não é um estado do React, a alteração não causará uma re-renderização do componente, e o valor exibido no h3 permanecerá 'Angelo'. Para que a alteração seja refletida na interface, seria necessário utilizar o hook useState para criar um estado para nome. */}
      {/* <button onClick={function () {
        console.log('Nome alterado!');
        nome = 'Teste'
      }
      }>Alterar Nome</button>
 */}

      <button onClick={
         () => {
          console.log('Nome alterado!');
          setNome('Angelo Silva');
        }
      }>Alterar Nome com useState</button>

      <button onClick={}></button>
    </>
  )
}

export default App
