import './App.css';
import '../src/assets/style/style.css'
import Lamquen from './components/Lamquen';
import Danhvan from './components/Danhvan';
import Tapdoc from './components/Tapdoc';
import Timvan from './components/Timvan';
import Save from './components/Save';
import Save_2 from './components/Save_2';
function App() {
  return (
    <div className="App">
      <input title='text' placeholder='Nhập chương cần học: ' id='chuong'></input>
      <input title='text' placeholder='Nhập bài cần học: ' id='lesson'></input>
      <Lamquen/>
      <Danhvan/>
      <Tapdoc/>
      <Timvan/>
      <button onClick={()=>{
        Save_2("save")
      }}> Submit data to db</button>
    </div>
  );
}

export default App;
