import './App.css';
import Clock from '../src/components/Clock'
import StopWatch from './components/StopWatch';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
       <Clock />
       <StopWatch />
       <Carousel />
       <Pagination />
    </div>
  );
}

export default App;
