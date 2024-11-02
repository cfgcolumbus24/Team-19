
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizApp from './components/quizApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/quiz' Component={QuizApp}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
