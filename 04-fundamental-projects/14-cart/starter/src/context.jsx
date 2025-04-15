import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from './actions';
import cartItems from './data';
import { getTotals } from './utils';

const AppContext = createContext();

// const cartArray = cartItems.map((item) => [item.id, item]);
// const initialState = { loading: false, cart: new Map(cartArray) };
const initialState = { loading: false, cart: new Map() };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  const fetchData = async () => {
    dispatch({ type: LOADING, payload: { loading: true } });
    try {
      const response = await fetch('https://www.course-api.com/react-useReducer-cart-project');
      const cart = await response.json();
      console.log(cart);
      dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem, increase, decrease, totalAmount, totalCost }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
