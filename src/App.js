import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import Button from './components/Button/Button';
function App() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <Button
        onClick={() => {
          console.log('Hi!');
        }}
      />
    </>
  );
}

export default App;
