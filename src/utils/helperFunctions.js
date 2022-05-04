export const saveToSessionStorage = (name, data) => {
    sessionStorage.setItem(name, JSON.stringify(data));
  };