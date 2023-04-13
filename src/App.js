import { useState } from 'react';
import './App.css';
import CarrinhoComponent from './components/CarrinhoComponent';
import ProdutoComponent from './components/ProdutoComponent';
import ComidaComponent from './components/ComponenteComida/ComidaComponent';
import SapatoCompenent from './components/ComponentSapato/SapatoCompenent';
import BebidaComponent from './components/ComponentBebida/BebidaComponent'



function App() {

  const comidaProdutos=[
    {
      id:1,
      nome: 'batata-frita',
      preco: '4.00'
    },
    {
      id:2,
      nome:'sanduíche',
      preco: 40.00,
      
    },
    {
      id:3,
      nome: 'lasanha',
      preco: 50.00
    }
  ]
  const sapatoProdutos=[
    {
      id: 1,
      nome:'Nike Dank',
      preco: 120.00
    },
    {
      id: 2,
      nome: 'rasteirinha',
      preco: 60.00
    },
    {
      id: 3,
      nome: 'Air force',
      preco: 150.00
    },
  ]
    const bebidaProdutos=[
      {
        id: 1,
        nome: 'Red Label',
        preco: 120.00,
      },
      {
        id:2,
        nome:'Corote',
        preco: 3.50,

      },
      {
        id: 3,
        nome:'Pitu',
        preco: 7.00
      }
    ]
    const informaticaProdutos=[
      {
        id: 1,
        nome: 'RTX 4090 TI',
        preco: 14000.00
      },
      {
        id:2,
        nome:'Mac Book',
        preco: 15000.00
      },
      {
        id:3,
        nome:'Notebook positivo',
        preco: 3500.00
      },
    ]
    const brinquedosProduto=[
      {
        id:1,
        nome: 'quebra-cabeça',
        preco: 20.00
      },
      {
        id:2,
        nome: 'dominó',
        preco: 20.00
      },
      {
        id: 3,
        nome:'UNO',
        preco: 10.00
      }
    ]
    
  // produtos[0].filmes.id
  const [favoritos, setFavoritos] = useState([]);

  const addFavoritos = (produtoId) => {
    const novoFavoritos = [...favoritos]
    // const novo = produtos.find(p => p.id === produtoId);
    // if(novo)
      // setFavoritos([...novoFavoritos, novo])
  }

  return (
    <div className="App">
      
        <div className="box">
          <CarrinhoComponent favoritos={favoritos}/>
        </div>
        {/* <ProdutoComponent produtos={produtos} categoria="jardim" onAdd={addFavoritos}/> */}
        {/* <ProdutoComponent produtos={produtos} categoria="sapatos" onAdd={addFavoritos}/> */}
        <div className="box">
          <ComidaComponent comidaProdutos={comidaProdutos}/>
        </div>
        <div className="box">
          <SapatoCompenent sapatoProdutos={sapatoProdutos}/>
        </div>
        

        {/* <SapatosCompenent sapatoProdutos={sapatoProdutos}/> */}
    </div>
  );
}

export default App;
