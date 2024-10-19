import logo from './logo.svg';
import alert from './alert.svg'
import git from './git.svg'
import './App.css';
import AlterList from './component'

function App() {
  return (
    <div className='container'>
        <div className='header'>
          <div className='container-main nav-section'>
                 <img src={alert} />
                 <img  src={git}/>
          </div>
       
          </div>
      <AlterList />
    </div>
  );
}

export default App;
