export type Worksheet = {
  id: string;
  name: string;
  questions: string[];
  solution?: string;
};

export type Worksheets = {
  [key: string]: Worksheet[];
};

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};
