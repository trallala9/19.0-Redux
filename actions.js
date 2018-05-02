import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const INCREMENT_COMMENT = 'INCREMENT_COMMENT';
export const DECREMENT_COMMENT = 'DECREMENT_COMMENT';


const addComment = text => {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
}

const removeComment = id => {
    type: REMOVE_COMMENT,
    id
}

const editComment = (id, text) => {
    type: EDIT_COMMENT,
    id,
    text
}

const incrementComment = id => {
    type: INCREMENT_COMMENT,
    id
}

const decrementComment = id => {
    type: DECREMENT_COMMENT,
    id
}
