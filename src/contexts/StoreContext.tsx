import React, { FC, createContext, ReactNode, ReactElement } from 'react';
import { UIStoreModel } from '../store/store';

export const StoreContext = createContext<UIStoreModel>({} as UIStoreModel);

export type StoreComponent = FC<{
	store: UIStoreModel;
	children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({
	children,
	store,
}): ReactElement => {
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	);
};
