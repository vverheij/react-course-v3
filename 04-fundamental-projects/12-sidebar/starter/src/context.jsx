import { useState, useContext, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    console.log('opening sidebar');
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    console.log('closing sidebar');
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    console.log('opening model');
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log('closing model');
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider value={{ isModalOpen, isSidebarOpen, openModal, closeModal, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
