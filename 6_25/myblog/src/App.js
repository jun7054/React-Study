import './App.css';
import {useState} from 'react';

function App() {
  // let [a,b] : array에 있는 데이터를 변수로 저장하고 싶을때 사용
  let [글제목,b] = useState(['남자 코트 추천', '강남 우동 맛집', '알고리즘 독학']);
  let [따봉,따봉변경] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>6월 25일 작성</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>6월 25일 작성</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>6월 25일 작성</p>
      </div>
    </div>
  );
}

export default App;
