import Dropdown from './components/Dropdown/Dropdown';
import { Selection } from './components/Dropdown/Dropdown.types';

import './App.css';

const exampleData: Selection[] = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: '5', label: 'Five' },
  { value: '6', label: 'Six' },
  { value: '7', label: 'Seven' },
  { value: '8', label: 'Eight' },
  { value: '9', label: 'Nine' },
  { value: '10', label: 'Ten' },
];

function App() {
  return (
    <div className='App'>
      <Dropdown label='Example Multi Select Dropdown' options={exampleData} multiSelect />

      <Dropdown label='Example Single Select Dropdown' options={exampleData} />
    </div>
  );
}

export default App;
