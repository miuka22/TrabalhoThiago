import React from 'react'

function ProdutoComponent({produtos, categoria, onAdd}) {

  const produtosFiltrado = produtos.filter(p => p.categoria === categoria);

  const handleAddProduto = (p) => {
    if(p?.id){
      onAdd(p.id);
    }
  }

  return (
    <div className='box-produto'>
      {
        produtosFiltrado.map(p => 
          <li key={p.id}>
            {p.nome}:::{p.valor}
            <button onClick={() => handleAddProduto(p)}>Adicionar</button>
          </li>
        )
      }
    </div>
    
  )
}

export default ProdutoComponent