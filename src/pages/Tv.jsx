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

class Tv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tv: [],
      week_tv: []
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/tv/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr'
      )
      .then(response => {
        console.log(response);
        this.setState({ tv: response.data.results });
      })
      .catch(err => {
        console.log('err!', err);
      });

    axios
      .get(
        'https://api.themoviedb.org/3/trending/tv/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr'
      )
      .then(response => {
        console.log(response);
        this.setState({ week_tv: response.data.results });
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
          <MovieContainer title="유명한 프로그램" movies={this.state.tv} />
          <MovieContainer title="이번주 프로그램" movies={this.state.week_tv} />
        </MovieContainerWrapper>
      </div>
    );
  }
}

export default withLayout(Tv);
