import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { data } from '../../../data';

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    console.log(action);
    const { id } = action.payload;
    let newPeople = state.people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`No matching ${action.type} - action type`);
};
