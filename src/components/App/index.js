// == Import npm
import React, { useState } from 'react';
import Header from '../Header';
import Card from '../Card';

// == Import
import './styles.scss';
import data from '../../../data';
import SeeTagElement from '../SeeTagElement';

// == Composant
const App = () => {
  const [tagElt, setTagElt] = useState([]);
  const [newData, setNewData] = useState(data);

  console.log(newData);

  const allData = newData.map((elt) => (
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
      setTagElt={setTagElt}
      tagElt={tagElt}
      newData={newData}
      setNewData={setNewData}
    />
  ));

  return (
    <div className="app">
      <Header />

      <main>
        {tagElt.length >= 1 ? <SeeTagElement tagElt={tagElt} setTagElt={setTagElt} dataFromJobs={data} setNewData={setNewData} /> : '' }

        {allData}

      </main>

    </div>
  );
};

// == Export
export default App;
