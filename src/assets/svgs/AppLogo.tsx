const AddLogoIcon = (props: IConProps) => {
  const { width = 28, height = 28, fill = 'currentColor', ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 7000 1024'
      className='header-logo'
      width={width}
      height={height}
      fill={fill}
      {...rest}
    >
      <path d='M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667' />
      <text
        x='1250'
        y='800'
        fontFamily='Binance PLEX'
        fontWeight={'900'}
        fontSize='850'
        fill={fill}
      >
        BINANCEKITS
      </text>
    </svg>
  );
};

export default AddLogoIcon;
