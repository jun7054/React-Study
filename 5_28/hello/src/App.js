// 로고 불러옴
// import logo from './logo.svg';
// css 불러옴
// import './App.css';

import { Fragment} from 'react';
const name = '리액트';
// const number = 0;
// 0은 false가 아님

// const test = undefined;

const style = {
  backgroundcolor : 'black',
  color : 'aqua',
  fontSize : '40px',
  padding : 16
};

// javascript XML
function App() {
  return (
    // test || '값이 undefined입니다.'
    <div>
      <Fragment>
        {/* {name === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )} */}
        {/* and연산자 */}
        {/* {name === '리액트' ? <h1>리액트입니다.</h1> : null}; */}
        {/* {name === '리액트' && <h1>리액트입니다.</h1>}; */}
        {/* {number && <h1>리액트입니다.</h1>} */}

        {/* {test} */}

        <div style={style}>{name}</div>

      </Fragment>
    </div>
  );
}

export default App;
