import { Routes, Route } from "react-router-dom";
import Home from "./Router/home/home.component";
import Navigation from "./Router/navigation/navigation.component";
import Authentication from "./Router/authentication/authentication.component";
import Shop from "./Router/products/products.component";
import CheckOut from "./Router/checkout/checkout.component";

// YOUR APP STARTS FROM HERE ==> GO!

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
     
    </Routes>
  );
};

export default App;
