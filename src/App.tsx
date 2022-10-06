import Dropdown, { Selection } from './components/Dropdown/Dropdown';

import './App.css';

const exampleData: Selection[] = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
];

function App() {
  return (
    <div className='App'>
      <Dropdown label='Example Dropdown' options={exampleData} multiSelect></Dropdown>
    </div>
  );
}

export default App;
