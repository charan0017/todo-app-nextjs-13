import { ActionTypes } from '../constants';

export const changeDefaultBackgroundColor = (color) => ({
    type: ActionTypes.CHANGE_DEFAULT_BACKGROUND_COLOR,
    payload: color
});

export const changeDefaultCardColor = (color) => ({
    type: ActionTypes.CHANGE_DEFAULT_CARD_COLOR,
    payload: color,
});

export const setStickyNotes = (notes) => ({
    type: ActionTypes.SET_STICKY_NOTES,
    payload: notes,
});

export const addStickyNote = (note) => ({
    type: ActionTypes.ADD_STICKY_NOTE,
    payload: note,
});

export const updateStickyNote = (note) => ({
    type: ActionTypes.UPDATE_STICKY_NOTE,
    payload: note,
});

export const deleteStickyNote = (note) => ({
    type: ActionTypes.DELETE_STICKY_NOTE,
    payload: note,
});
