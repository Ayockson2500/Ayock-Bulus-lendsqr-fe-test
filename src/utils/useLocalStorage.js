const useLocalStorage = (key) => {
  return {
    getItem: () => JSON.parse(localStorage.getItem(key)),
    setItem: (itemData) => localStorage.setItem(key, JSON.stringify(itemData)),
    deleteItem: () => localStorage.removeItem(key),
  };
};

export default useLocalStorage;
