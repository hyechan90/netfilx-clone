import React from 'react';
import Banner from '../components/Banner';
import Preview from '../components/Preview';
import MovieContainer from '../components/MovieContainer';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginTop: '43%', overflowX: 'hidden' }}>
        <Banner />
        <Preview />
        <MovieContainer
          title="TV프로그램"
          movies={[
            { title: '신서유기7' },
            { title: '신서유기6' },
            { title: '신서유기5' },
            { title: '신서유기4' },
            { title: '신서유기3' },
            { title: '신서유기2' },
            { title: '신서유기1' }
          ]}
        />
        <MovieContainer
          title="드라마"
          movies={[
            { title: '동백꽃 필 무렵' },
            { title: '어쩌다 발견한 하루' },
            { title: '이번생은 처음이라' },
            { title: '뷰티 인사이드' },
            { title: '수상한 파트너' },
            { title: '자퇴하고 싶다' },
            { title: '집 가서 쉬고 싶다' }
          ]}
        />
      </div>
    );
  }
}

export default Main;
