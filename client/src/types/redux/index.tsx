export type CrudGetProps = {
  headers?: any;
  title?: string;
  successType?: string;
  errorType?: string;
  startReload?: (title: string) => void;
  finishedReload?: (title: string) => void;
  url: string;
  noReload?: boolean;
  successData?: any;
};

export type CrudPathProps = {
  headers?: any;
  title?: string;
  successType?: string;
  errorType?: string;
  startReload?: any;
  finishedReload?: any;
  url: string;
  noReload?: boolean;
  formData?: any;
  id?: string | number;
};
export type CrudDeleteProps = {
  headers?: any;
  title?: string;
  successType?: string;
  errorType?: string;
  startReload?: (title: string) => void;
  finishedReload?: (title: string) => void;
  url: string;
  noReload?: boolean;
  id?: string | number;
};
export type User = {
  first_name?: string;
  last_name?: string;
  email?: string;
  id?: string;
  _id?: string;
};
