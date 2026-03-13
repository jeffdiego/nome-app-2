//documentacao antes e depois: https://dontpad.com/fs36-sul/react/hooks/useState

import { useState } from 'react';
import './App.css'
import Saudacao from './components/Saudacao';

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

      <button onClick={
         () => {
          console.log('Nome alterado!');
          setNome('Angelo Silva');
        }
      }>Alterar Nome com useState</button>

      <button onClick={() => {
        setNome(nome !== 'Angelo' ? 'Angelo' : 'Angelo Silva');
      }}>Voltar Original</button>
    </>
  )
}

export default App