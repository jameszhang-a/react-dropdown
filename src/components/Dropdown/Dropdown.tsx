import { useRef, useState, FocusEvent } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import './Dropdown.css';

export type Selection = {
  value: string;
  label: string;
};

export type DropdownProps = {
  label: string;
  options: Selection[];
  multiSelect?: boolean;
};

const Dropdown = ({ label, options, multiSelect }: DropdownProps) => {
  const [selected, setSelected] = useState<Selection[]>([]);
  const wrapperRef = useRef(null);

  const showDropdown = useClickOutside(wrapperRef);

  const handleSelection = (selection: Selection) => {
    if (multiSelect) {
      if (selected.includes(selection)) {
        setSelected(selected.filter(item => item !== selection));
      } else {
        setSelected([...selected, selection]);
      }
    } else {
      setSelected([selection]);
    }
  };

  return (
    <div className='dropdown-wrapper' ref={wrapperRef}>
      <div className='label'>{label}</div>
      <input
        className='target'
        type='text'
        value={selected.map(item => item.label).join(', ')}
        readOnly
      />
      {showDropdown && (
        <div className='dropdown'>
          {options.map(option => (
            <div
              className={`option ${selected.includes(option) ? 'selected' : ''}`}
              key={option.value}
              onClick={() => handleSelection(option)}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
