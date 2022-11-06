import { nanoid } from 'nanoid'
import { createReducer } from '@reduxjs/toolkit';
import { ActionTypes, Colors } from '../constants';

const { defaultBgColor, defaultCardColor } = Colors;

const initialState = {
    defaultCardColor,
    defaultBgColor,
    stickyNotes: [],
};

const rootReducer = createReducer(initialState, {
    [ActionTypes.CHANGE_DEFAULT_BACKGROUND_COLOR]: (state, action) => {
        state.defaultBgColor = action.payload;
    },
    [ActionTypes.CHANGE_DEFAULT_CARD_COLOR]: (state, action) => {
        state.defaultCardColor = action.payload;
    },
    [ActionTypes.SET_STICKY_NOTES]: (state, action) => {
        state.stickyNotes = action.payload;
    },
    [ActionTypes.ADD_STICKY_NOTE]: (state, action) => {
        state.stickyNotes.push({
            id: nanoid(),
            ...action.payload,
        });
    },
    [ActionTypes.UPDATE_STICKY_NOTE]: (state, action) => {
        const index = state.stickyNotes.findIndex(note => note.id === action.payload.id);
        state.stickyNotes[index] = action.payload;
    },
    [ActionTypes.DELETE_STICKY_NOTE]: (state, action) => {
        state.stickyNotes = state.stickyNotes.filter(note => note.id !== action.payload.id);
    },
});

export default rootReducer;
