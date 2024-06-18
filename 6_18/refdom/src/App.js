import ValidationSample from './validationSample';

function App() {
  return (
    <div className="App">
      <h1>비밀번호를 맞추세요 (4자리 숫자)</h1>
      <h3>힌트 - F12</h3>
      {/* 비밀번호는 000 */}
      <ValidationSample/>
    </div>
  );
}

export default App;