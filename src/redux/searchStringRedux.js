import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({cards}) => cards.length;

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const ADD_SEARCH = createActionName('ADD_SEARCH');

// action creators
export const createActionAddSearch = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_SEARCH });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

