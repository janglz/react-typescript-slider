import { makeAutoObservable } from 'mobx';
import { TABS } from '../constants';

export class UIStoreModel {
	selectedTab = TABS.LIVE;

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}

	setTab(tab: string) {
		this.selectedTab = tab;
	}
}

export const UIStore = new UIStoreModel();
