import * as React from 'react';

export interface AppContextInterface {
  title: any,
  desc: any,
  toDoListArr:any

}
const ctxt = React.createContext<AppContextInterface | null>(null);
export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;