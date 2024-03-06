import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound } from "../Pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "709d1276-6928-4a87-b8e6-8426bb1ebadf"
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result.cartItems));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
