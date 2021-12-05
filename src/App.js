import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Description from './components/Description/Description';
function App() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <ServiceCard />
      <Description />
    </>
  );
}

export default App;
