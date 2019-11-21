import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
const BtnSize = '45px';

const Wrapper = styled.div`
  margin-bottom: 5%;
  color: white;
  margin: 0 auto;
  width: calc(100% - (${BtnSize} + ${BtnSize}));
  .title {
    font-weight: bold;
  }
  .container {
    position: relative;
  }
  .slider {
    transform: ${props => `translateX(-${props.translate}px)`};
    transition: 0.3s;
    display: -webkit-box;
  }
`;
const BtnLeft = styled.button`
  width: ${BtnSize};
  height: 100%;
  position: absolute;
  right: 100%;
  z-index: 5;
  opacity: 0;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const BtnRight = styled(BtnLeft)`
  right: none;
  left: 100%;
`;

const MovieContainer = props => {
  const [page, setPage] = React.useState(1);
  const [sliderWidth, setSliderWidth] = React.useState(0);
  const slider = React.useRef(undefined);

  React.useEffect(() => {
    setSliderWidth(slider.current.offsetWidth);
  }, []);
  const onClickLeft = () => {
    if (page !== 1) {
      console.log(page);
      setPage(page - 1);
    }
    console.log(slider);
  };
  const onClickRight = () => {
    console.log(props.movie.lenth);
    if (page > props.movie.lenth % 5) {
    } else {
      setPage(page + 1);
    }
  };

  return (
    <Wrapper translate={(page - 1) * sliderWidth}>
      <div className="title">{props.title}</div>
      <div className="container">
        <BtnLeft onClick={onClickLeft}>{'<'}</BtnLeft>
        <BtnRight onClick={onClickRight}> {'>'}</BtnRight>
        <div className="slider" ref={slider}>
          {(props.movie || []).map((value, idx) => {
            return <MovieItem title={value} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default MovieContainer;
