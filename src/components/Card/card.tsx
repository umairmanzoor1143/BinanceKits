import React from 'react';
import './card.scss';
import '../../index.css';
import Button from '../Button/index';

type Props = {
  imageSrc: string;
  text: string;
  paragraph: string;
  btndata: string;
};

const Card = (props: Props) => {
  const { imageSrc, text, paragraph, btndata } = props;
  return (
    <>
      <section className='Card'>
        <div className='card_avatar'>
          <div className='icon'>
            <img src={imageSrc} alt='Card Logo' />
          </div>
          <span className='card_title'>{text}</span>
        </div>
        <div className='card_desc'>
          <p>{paragraph}</p>
          <Button>{btndata}</Button>
        </div>
      </section>
    </>
  );
};

export default Card;
