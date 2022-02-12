import React, { FC } from 'react';
import './DonutMenuCard.css';
import { Donut } from '../../types';

interface DonutMenuCardProps {
  donut : Donut
}

const DonutMenuCard: FC<DonutMenuCardProps> = () => (
  <div className="DonutMenuCard">
    DonutMenuCard Component
  </div>
);

export default DonutMenuCard;
