const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let tempSwipes = state.stateSwipes.map((swipe) => {
      if (swipe.id === action.payload) {
        if (!swipe.added) {
          // return { ...swipe, added: true };
          return {
            ...swipe,
            added: true,
          };
        }

        return { ...swipe, added: false };
      }

      return swipe;
    });

    if (!state.ingredients.includes(action.title)) {
      return {
        ...state,
        stateSwipes: tempSwipes,
        ingredients: [...state.ingredients, action.title],
      };
    }

    let tempingredients = state.ingredients.filter((item) => {
      return action.title !== item;
    });
    if (state.ingredients.includes(action.title)) {
      return {
        ...state,
        stateSwipes: tempSwipes,
        ingredients: tempingredients,
      };
    }
    return {
      ...state,
      stateSwipes: tempSwipes,
    };
  }

  if (action.type === "FILTER_ITEMS") {
    const newItems = action.payload.filter(
      (item) => item.category === action.category
    );
    if (action.category === "all") {
      return { ...state, menuItems: action.payload };
    }
    return { ...state, menuItems: newItems };
  }

  if (action.type === "ORDER") {
    let tempMenuItems = state.menuItems.map((item) => {
      if (action.payload === item.id) {
        return { ...item, ordered: true };
      }
      return { ...item };
    });

    let tempOrders = state.menuItems.filter((item) => {
      return item.ordered === true;
    });

    return {
      ...state,
      menuItems: tempMenuItems,
      orders: tempOrders,
    };
  }

  return state;
};

export default reducer;
