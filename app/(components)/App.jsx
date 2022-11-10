'use client';

import withRedux from '../../hoc/withRedux';
import { ListStickyNotes } from './sticky-notes';
import NavBar from './NavBar';

function App({ children }) {
    return (
        <NavBar>
            <ListStickyNotes />
            {children}
        </NavBar>
    );
}

export default withRedux(App);
