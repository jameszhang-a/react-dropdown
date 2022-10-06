export type Selection = {
  value: string;
  label: string;
};

export type DropdownProps = {
  label: string;
  options: Selection[];
  multiSelect?: boolean;
};
