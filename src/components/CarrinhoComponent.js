import React from 'react'

export default function CarrinhoComponent({favoritos}) {

  return (
    <div className='box-carrinho'>
      <ul>
      { favoritos.map(f => 
          <li key={f.id}>{f.nome} - {f.valor}</li>
      )}
      </ul>
    </div>
  )
}
