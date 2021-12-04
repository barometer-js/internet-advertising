import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ServiceCard from './components/ServiceCard/ServiceCard';
function App() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <ServiceCard />
    </>
  );
}

export default App;
