import './Dropdown.css';

export type Selection = {
  value: string;
  label: string;
};

export type DropdownProps = {
  label: string;
  options: Selection[];
  onSelectedChange: (selected: string) => void;
  multiSelect?: boolean;
};

const Dropdown = ({ label, options, onSelectedChange, multiSelect }: DropdownProps) => {
  return <div className='dropdown-wrapper'>Dropdown</div>;
};

export default Dropdown;
