import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavoriteContextProvider from "./context/FavoriteContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <FavoriteContextProvider>
            <CommentContextProvider>
              <Navbar />
              <MainRoutes />
              <Footer />
            </CommentContextProvider>
          </FavoriteContextProvider>
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
