import React from 'react';
import './button.scss';

type Props = {
  btntext: string;
  text: string;
};

const index = (props: Props) => {
  const { btntext, text } = props;
  return (
    <a href='#' className='btn'>
      {btntext}
    </a>
  );
};

export default index;
