'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../redux/store';

export default function withRedux(Component) {
    return function ReduxWrapper(props) {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...props} />
                </PersistGate>
            </Provider>
        );
    };
}
