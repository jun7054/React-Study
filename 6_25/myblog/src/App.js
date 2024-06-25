import './App.css';
import {useState} from 'react';

function App() {
  // let [a,b] : array에 있는 데이터를 변수로 저장하고 싶을때 사용
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '알고리즘 독학']);
  let [따봉,따봉변경] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        
        <div>개발 blog</div>
      </div>

      <button onClick={() => {
        // ...을 붙히면 화살표가 달라짐
        let cp = [...글제목];
        cp[0] = '여자 코트 추천';
        글제목변경(cp);
      }}>글 수정</button>

      <button onClick={() => {
        let cp = [...글제목];
        cp.sort();  
        글제목변경(cp)
      }}>정렬 버튼</button>

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
      <Modal/>
    </div>
  );
}
// 컴포넌트로 만들면 좋은 것들 
// 1. 반복적인 HTML 축약할때
// 2. 큰 페이지
// 3. 자주 변경되는 것들
function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
export default App;
