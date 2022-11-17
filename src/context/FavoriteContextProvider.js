import React, { createContext, useReducer } from "react";

export const favoriteContext = createContext();

function getCountProductsFavorite() {
  let favorite = JSON.parse(localStorage.getItem("favorite"));
  return favorite ? favorite.products.length : 0;
}

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
  favoriteCount: getCountProductsFavorite(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_FAVORITE":
      return { ...prevState, favorite: action.payload };
    case "CHANGE_FAVORITE_COUNT":
      return { ...prevState, favoriteCount: action.payload };
    default:
      return prevState;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToFavorite(productObj) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite === null) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: productObj,
      count: 1,
      subPrice: productObj.price,
    };

    // Хранение дубликатов
    let filterfavorite = favorite.products.filter(elem => {
      return elem.item.id === productObj.id;
    });

    if (filterfavorite.length > 0) {
      favorite.products = favorite.products.filter(elem => {
        return elem.item.id !== productObj.id;
      });
    } else {
      favorite.products.push(newProduct);
    }
    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    dispatch({
      type: "CHANGE_FAVORITE_COUNT",
      payload: favorite.products.length,
    });
  }

  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  }

  function changeProductCount(id, count) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  function calcTotalPrice(products) {
    let total = 0;
    products.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  //   delete products in favorite

  function deleteFavoriteProduct(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.filter(elem => {
      return elem.item.id !== id;
    });
    favorite.totalPrice = calcTotalPrice(favorite.products);
    dispatch({
      type: "CHANGE_FAVORITE_COUNT",
      payload: favorite.products.length,
    });
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }

  const cloud = {
    addProductToFavorite,
    getFavorite,
    changeProductCount,
    deleteFavoriteProduct,
    productsInFavorite: state.favorite,
    favoriteCount: state.favoriteCount,
  };
  return (
    <favoriteContext.Provider value={cloud}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
