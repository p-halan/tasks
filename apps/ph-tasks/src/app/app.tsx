import React from 'react';

import './app.scss';

import {TaskList} from '@ph/ui';

export const App = () => {
  return (
    <div className="ph-tasks">
      {/*TODO to Menu*/}
      <header className="flex">
        <h1>PH Tasks</h1>
        <h3>Here will be menu soon</h3>
      </header>
      <main>
        <h3>List of tasks:</h3>
        <TaskList></TaskList>
      </main>

      {/*TODO to Footer*/}
      <footer>
        <h3 style={{position: 'fixed', bottom: 0}}>Here will be footer soon.</h3>
      </footer>

    </div>
  );
};

export default App;
