import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ApplicationForm from './components/Form/Form';

function App() {
  return (
    <>
      <TopNavigation />
      <BottomNavigation />
      <ApplicationForm
      // onSubmit={this.addApplication}
      />
    </>
  );
}

export default App;
