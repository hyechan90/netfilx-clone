import React from 'react';
import Banner from '../components/Banner';
import Preview from '../components/Preview';
import MovieContainer from '../components/MovieContainer';
import { hidden } from 'ansi-colors';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Preview />
        <div style={{ marginTop: '45%', overflow: hidden, width: '100%' }}>
          <MovieContainer title="프로그램" movies={[]} />
        </div>
      </div>
    );
  }
}

export default Main;
