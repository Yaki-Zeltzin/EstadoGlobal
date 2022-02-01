import React from "react";
import "./components/styles/styles.scss";
import AppRoutes from "./AppRoutes";
import CartProvider from "./Context/Cart/CartProvider";
import CoursesProvider from "./components/Context/CoursesProvider";

const App = () => (
  <CoursesProvider>
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  </CoursesProvider>
);

export default App;
