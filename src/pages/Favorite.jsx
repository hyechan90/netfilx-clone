import React from 'react';
import Banner from '../components/Banner';
import Preview from '../components/Preview';
import styled from 'styled-components';
import withLayout from '../components/withLayout';
import MyContainer from '../components/MyContainer';

const MovieContainerWrapper = styled.div`
  & > * {
    margin-bottom: 46px;
  }
`;

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: ['://bit.ly/34gYWh8', '://bit.ly/2rmeEJt', '://bit.ly/2XL1eCK']
    };
  }

  render() {
    return (
      <div style={{ marginTop: '43%', overflowX: 'hidden' }}>
        <Banner />
        <Preview />
        <MovieContainerWrapper>
          <MyContainer movies={this.state.favorite} title="내가 찜한 콘텐츠" />
        </MovieContainerWrapper>
      </div>
    );
  }
}

export default withLayout(Favorite);
