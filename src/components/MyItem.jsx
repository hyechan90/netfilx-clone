import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(20% - 8px);
  padding-bottom: 10%;
  height: 0;
  position: relative;
  margin-right: 10px;
  & > div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #aaa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(1.2);
    transition: 0.3s;
  }
`;

const MyItem = props => {
  return (
    <Wrapper>
      <img src={'https' + props.backdrop_path} alt="" />
    </Wrapper>
  );
};

export default MyItem;
