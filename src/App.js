import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Description from './components/Description/Description';
function App() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <Description />
    </>
  );
}

export default App;
