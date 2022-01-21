export type Column = {
  title: string;
  accesor: string;
  isVisible: boolean;
  cell: (value: string | number) => string | number;
  toggle: () => void;
};
export type ObjectColumn = {
  title: string;
  accesor: string;
  cell?: (value: string | number) => any;
};
