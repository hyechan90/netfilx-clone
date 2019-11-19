import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 40px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 70px;
  margin-right: 23px;
`;

const NavText = styled.ul`
  list-style: none;
  display: flex;
  color: white;
  height: 100%;
  flex: 1;
  align-items: center;
  margin: 8px 0;
  font-size: 10px;
`;

const NavTextItem = styled.li`
  margin-left: 14px;
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
  padding: 10px;
  & > img {
    height: 16px;
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
          style={num === 0 ? { color: '#000fff', fontWeight: 'bold' } : {}}
        >
          홈
        </NavTextItem>
        <NavTextItem
          onClick={e => change(1)}
          style={num === 1 ? { color: '#000fff', fontWeight: 'bold' } : {}}
        >
          TV프로그램
        </NavTextItem>
        <NavTextItem
          onClick={e => change(2)}
          style={num === 2 ? { color: '#000fff', fontWeight: 'bold' } : {}}
        >
          영화
        </NavTextItem>
        <NavTextItem
          onClick={e => change(3)}
          style={num === 3 ? { color: '#000fff', fontWeight: 'bold' } : {}}
        >
          최신 등록 콘텐츠
        </NavTextItem>
        <NavTextItem
          onClick={e => change(4)}
          style={num === 4 ? { color: '#000fff', fontWeight: 'bold' } : {}}
        >
          내가 찜한 콘텐츠
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
