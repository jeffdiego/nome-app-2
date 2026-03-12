import React from 'react'

export default function Saudacao(props) {
  return (
    <div>
        {
            props.logado 
            ?  <p>Usuário Logado</p> 
            : <p>Faça login para acessar o conteúdo</p> }
    </div>
  )
}
