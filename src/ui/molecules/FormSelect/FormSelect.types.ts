export interface FormSelectProps {
  options: {label: string; value: string}[];
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  isRequired?: boolean;
  selectedValue?: string;
}
