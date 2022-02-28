import React, { FC } from 'react';
import './Home.css';
import LogoImage from '../../assets/logo.jpg'
interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home">
    <img src={LogoImage} width="300px" />
    <div/>
    404: Eat a donut
  </div>
);

export default Home;
