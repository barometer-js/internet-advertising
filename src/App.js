import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ApplicationForm from './components/Form/Form';
import Description from './components/Description/Description';
import TariffList from './components/Tariff/TariffList';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <BottomNavigation />
        <ApplicationForm />
        <Description />
        <TariffList />
        <Button
          onClick={() => {
            console.log('Hi!');
          }}
        />
      </>
    );
  }
}
export default App;
