import logo from './logo.svg';
import alert from './alert.svg'
import git from './git.svg'
import './App.css';
import AlterList from './component'

function App() {
  return (
    <div className='container'>
        <div className='header nav-section'>
          <div className='container-main' style={{display:'flex',justifyContent:'space-between'}}>
                 <img src={alert} />
                 <img  src={git}/>
          </div>
       
          </div>
      <AlterList />
    </div>
  );
}

export default App;
