import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import UserStore from "./store/UserStore.js";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import PointStore from "./store/PointStore.js";

export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            points:new PointStore(),
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);