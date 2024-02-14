/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

const SearchModal = forwardRef((_props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Use `useImperativeHandle` to expose specific functions to the parent component
  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
    closeModal: () => setIsOpen(false),
  }));

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
});

export default SearchModal;
