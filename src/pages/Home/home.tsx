import React from 'react';
import './style.scss';
import '../../index.css';
import Card from 'components/Card/card';
import imageSrc from '../../assets/images/card-Img.png';
import otherSrc from '../../assets/images/graph.png';
import lastSrc from '../../assets/images/bar.png';

function home() {
  return (
    <section className='hero'>
      <div className='hero_title'>
        <h1>The digital resume for&nbsp;</h1>
        <h1 aria-label='podcasters'>
          <span className='typewriter'></span>
        </h1>
      </div>
      <p>
        Elevate your brand with our all-in-one management system for creators, including
        customizable mediakits with transparent data and adaptive social links, tailored to fit your
        brand's identity
      </p>
      <div className='parentCard'>
        <Card
          imageSrc={imageSrc}
          text='mediakits'
          paragraph='Mediakits is expanding to include new functionality and additional features you can’t get anywhere else!'
        />
        <Card
          imageSrc={otherSrc}
          text='LINKITS'
          paragraph='Showcase multiple links on your social, customize to fit your brand, and embed videos to stand out!'
        />
        <Card
          imageSrc={lastSrc}
          text='NEW APP COMING SOON'
          paragraph='Coming Soon! An all-in-one management system just for creators like you!'
        />
      </div>
    </section>
  );
}

export default home;
