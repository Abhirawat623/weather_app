import { createContext, useContext, useState } from "react";
const initialValue = {
  isSignUpModalOpen: false,
};
const ModalContext = createContext(initialValue);
const ModalProvider = ({ children }) => {
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  
  return (
    <ModalContext.Provider
      value={{
        isLocationModalOpen,
        setIsLocationModalOpen
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };