import { useContext } from 'react';
import { UIStore } from './../store/store';
import { StoreContext } from '../contexts/StoreContext';

export const useStores = (): typeof UIStore => useContext(StoreContext);
