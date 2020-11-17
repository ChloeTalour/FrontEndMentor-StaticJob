// == Import npm
import React from 'react';
import Header from '../Header';
import Card from '../Card';

// == Import
import './styles.scss';
import data from '../../../data.js';

// == Composant
const App = () => {
  console.log(data);
  const allData = data.map((elt) => (
    <Card
      key={elt.id}
      company={elt.company}
      img={elt.logo}
      newOrNot={elt.new}
      featured={elt.featured}
      position={elt.position}
      postedAt={elt.postedAt}
      contract={elt.contract}
      location={elt.location}
      role={elt.role}
      level={elt.level}
      languages={elt.languages}
      tools={elt.tools}
    />
  ));
  return (
    <div className="app">
      <Header />
      <main>
        {allData}

      </main>

    </div>
  );
};

// == Export
export default App;
