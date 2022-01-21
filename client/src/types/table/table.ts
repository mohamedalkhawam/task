export type Column = {
  title: string;
  accessor: string;
  isVisible: boolean;
  cell: (value: string | number) => string | number;
  toggle: () => void;
};
export type ObjectColumn = {
  title: string;
  accessor: string;
  cell?: (value: string | number) => any;
};
