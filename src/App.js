import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import TopNavigation from './components/TopNavigation/TopNavigation';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import ApplicationForm from './components/Form/Form';
import { Section } from './components/Section';
import { Title } from './components/Title';
import Description from './components/Description/Description';
import TariffList from './components/Tariff/TariffList';

class App extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <BottomNavigation />
        <Section color="#333333">
          <Title name="Форма заявки" color="#fff" />
          <ApplicationForm />
        </Section>
        <Description />
        <Section color="#F5F7F9">
          <Title name="Тарифы" color="#000" />
          <TariffList />
        </Section>
      </>
    );
  }
}

export default App;
