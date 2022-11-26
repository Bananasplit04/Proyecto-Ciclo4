import './App.css'
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Register from './components/Register';
import IndexApp from './components/indexApp';
import {BrowserRouter as router, RouteProps, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<IndexApp/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </Router>
      {/*<ForgotPassword/>*/}
      {/*<Login/>*/}
      
    </div>
    
  )
}

export default App;
