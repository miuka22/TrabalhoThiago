import React from 'react'

export default function ComidaComponent(props) {
  console.log(props)
  return (
    <div>{props.comidaProdutos[0].nome}</div>
  )
}
