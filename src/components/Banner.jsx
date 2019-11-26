import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 62px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 97px;
  margin-right: 25px;
`;

const NavText = styled.ul`
  list-style: none;
  display: flex;
  color: #e5e5e5;
  height: 100%;
  flex: 1;
  align-items: center;
  margin: 16px 0;
  font-size: 14px;
`;

const NavTextItem = styled.li`
  margin-left: 20px;
  &:hover {
    color: #b3b3b3;
    font-weight: normal;
  }
`;

const NavIcon = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  margin: 16px 0;
`;

const NavIconItem = styled.li`
  width: fit-content;
  padding: 16px;
  & > img {
    height: 24px;
  }
`;

const Banner = () => {
  const [num, setNum] = React.useState(0);

  const change = e => {
    setNum(e);
  };

  return (
    <Wrapper>
      <Logo src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png" />
      <NavText>
        <NavTextItem
          onClick={e => change(0)}
          style={num === 0 ? { color: '#fff', fontWeight: 'bold' } : {}}
        >
          <Link to="/">홈</Link>
        </NavTextItem>
        <NavTextItem
          onClick={e => change(1)}
          style={num === 1 ? { color: '#fff', fontWeight: 'bold' } : {}}
        >
          <Link to="/tv">TV 프로그램</Link>
        </NavTextItem>
        <NavTextItem
          onClick={e => change(2)}
          style={num === 2 ? { color: '#fff', fontWeight: 'bold' } : {}}
        >
          영화
        </NavTextItem>
        <NavTextItem
          onClick={e => change(3)}
          style={num === 3 ? { color: '#fff', fontWeight: 'bold' } : {}}
        >
          <Link to="/new">최신 등록 콘텐츠</Link>
        </NavTextItem>
        <NavTextItem
          onClick={e => change(4)}
          style={num === 4 ? { color: '#fff', fontWeight: 'bold' } : {}}
        >
          <Link to="/favorite">내가 찜한 콘텐츠</Link>
        </NavTextItem>
      </NavText>
      <NavIcon>
        <NavIconItem>
          <img src="/search.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/gift.svg" alt="" />
        </NavIconItem>
        <NavIconItem>
          <img src="/bell.svg" alt="" />
        </NavIconItem>
      </NavIcon>
    </Wrapper>
  );
};

export default Banner;
