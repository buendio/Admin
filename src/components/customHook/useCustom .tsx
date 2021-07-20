import { useState, useEffect } from 'react';

let listeners: any = [];
let state: any = {
    name: 'Profile',
    isTrue: false,
    nameProfile: 'Profile',
    isSiteModalOpen: false

};

const setState = (newState: any) => {
  state = { ...state, ...newState };
  listeners.forEach((listener: any) => {
    listener(state);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, []);
  return [state, setState];
};

export default useCustom;