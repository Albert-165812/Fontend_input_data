import './App.css';
import '../src/assets/style/style.css'
import Lamquen from './components/Lamquen';
import Danhvan from './components/Danhvan';
import Tapdoc from './components/Tapdoc';
import Timvan from './components/Timvan';
import Cauhoi from './components/Cauhoi';
import Save from './components/Save';
function App() {
  return (
    <div className="App">
      <input title='text' placeholder='Nhập bài cần học: ' id='lesson'></input>
      <Lamquen/>
      <Danhvan/>
      <Tapdoc/>
      <Timvan/>
      <Cauhoi/>
      <button onClick={()=>{
        Save("save")
      }}> Submit data to db</button>
    </div>
  );
}

export default App;
