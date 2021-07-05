import React from 'react';
import ReactDOM from 'react-dom';
import App, {deleteByID} from './App';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Delete by ID works", () => {
  expect(deleteByID([{
      name: "alan",
      id: 42
    }, {
      name: "bob",
      id: 100
    }
  ], 100)).toEqual([{
      name: "alan",
      id: 42
    }
  ])
});
