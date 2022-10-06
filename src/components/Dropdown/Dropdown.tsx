import { useRef, useState, FocusEvent } from 'react';
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
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInput = useRef(null);
  const dropDownRef = useRef(null);
  const [selected, setSelected] = useState<Selection[]>([]);

  //   if (document.activeElement === searchInput.current) {
  //     // do something
  //     console.log('focused');
  //   }

  //   console.log(document.activeElement);

  const handleFocus = () => {
    setShowDropdown(true);
    console.log('focus');
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target !== dropDownRef.current) {
      // console.log(dropDownRef.current);
      // console.log(e.target);
      // console.log(document.activeElement);

      setShowDropdown(false);
      // console.log('blur');
    }
  };

  const handleSelection = (selection: Selection) => {
    console.log(selection);

    if (multiSelect) {
      if (selected.includes(selection)) {
        setSelected(selected.filter(item => item !== selection));
      } else {
        setSelected([...selected, selection]);
      }
    } else {
      setSelected([selection]);
      setShowDropdown(false);
    }
  };

  return (
    <div className='dropdown-wrapper'>
      <div className='label'>{label}</div>
      <input
        className='target'
        onFocus={handleFocus}
        onBlur={e => handleBlur(e)}
        type='text'
        ref={searchInput}
      />
      {showDropdown && (
        <div className='dropdown' ref={dropDownRef}>
          {options.map(option => (
            <div
              className='option'
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
