import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  #logo img {
    display: block;
    width: 10rem;
    height: 5rem;
    margin: 0;
    padding: 0;
    size: cover;
  }

  section {
    height: 100vh;
    width: 100%;
    background: #000;
    display: flex;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background: #fff;
      border-radius: 12px;
      padding: 12px;
      margin: 2rem 0 0 2rem;
    }
    .product-content img{
      margin: 0 auto;
    }
  }

  footer {
    text-align: center;
    width: 100%;
    background-color: #fff;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      color: initial;
    }

    p {
      font-family: Montserrat;
      margin: 1rem 0;
    }

    .extra a{
      color: #000;
      font-family: Montserrat;
      text-decoration: underline;
      text-shadow: none;
      margin-right: 2rem;
    }
  }
`