import React, { FC } from 'react';
import './Home.css';
import LogoImage from '../../logo.jpg';
interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="Home">
    <img src={LogoImage} alt={'WOW SUCH BEAUTY'} width="300px" />
    404: Eat a donut
  </div>
);

export default Home;
