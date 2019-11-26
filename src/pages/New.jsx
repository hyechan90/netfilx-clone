import React from 'react';
import Banner from '../components/Banner';
import Preview from '../components/Preview';
import styled from 'styled-components';
import MovieContainer from '../components/MovieContainer';
import axios from 'axios';
import withLayout from '../components/withLayout';

const MovieContainerWrapper = styled.div`
  & > * {
    margin-bottom: 46px;
  }
`;

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: []
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr'
      )
      .then(response => {
        console.log(response);
        const vote_count = response.data.results.filter(
          a => a.vote_count > 1000
        );
        this.setState({ vote: vote_count });
      })
      .catch(err => {
        console.log('err!', err);
      });
  }

  render() {
    return (
      <div style={{ marginTop: '43%', overflowX: 'hidden' }}>
        <Banner />
        <Preview />
        <MovieContainerWrapper>
          <MovieContainer title="최신 등록 콘텐츠" movies={this.state.vote} />
        </MovieContainerWrapper>
      </div>
    );
  }
}

export default withLayout(New);
