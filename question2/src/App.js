import React from 'react';
import Table from './components/Table';
import data from './data.json';

const App = () => {

  return (
    <main>
      <header>
        <h1>StarRez: Question 2</h1>
      </header>

      <article>
        <p>Render the contents of the data.JSON file</p>
        <Table data={data} />
      </article>
    </main>
  );
}

export default App;
