import {NameSpace} from './root-reducer';

export const getActiveTab = (state) => state[NameSpace.VIEW].activeTab;
