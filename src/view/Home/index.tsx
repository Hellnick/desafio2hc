import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

import omega from './assets/images/omega.png';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
};

const Home: React.FC = () => {
  const [ data, setData ] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  });

  const handleCart = ( index: number ) => {

    const productStore = JSON.stringify(data[index]);
    
    localStorage.setItem(`@Produto-${index}`, productStore);
  }

  return (
    <Container>
      <div className="logo" id="logo">
        <img src={omega} alt="Logotipo" />
      </div>

      <section>
        {data.map( (prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="iPhone" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>Preço: R${prod.price}</h6>
            <button onClick={ () => handleCart(index)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2021 MARCO APOLINÁRIO, All Rights Reserved</p>
        <div className="extra">
          <a href="#">Language</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </Container>
  );
}

export default Home;