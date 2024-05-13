import React from 'react';
import './card.scss';
import '../../index.css';
import Button from '../Button/index';

type Props = {
  imageSrc: string;
  text: string;
  paragraph: string;
};

function card(props: Props) {
  const { imageSrc, text, paragraph } = props;
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
          <Button btntext='Read More' text='' />
        </div>
      </section>
    </>
  );
}

export default card;
