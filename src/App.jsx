import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Cookies from "js-cookie";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import CartPage from "./pages/Cart";
import ProductDetails from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import WishListPage from "./pages/WishlistPage";
import DeliveryAddress from "./pages/DeliveryAddress";
import AllCategoryProducts from "./pages/AllCategoryProductsPage";
import AllProductsPage from "./pages/AllProductsPage";
import OrderSummary from "./pages/OrderSummaryPage";
import AccountSettings from "./pages/AccountSettings";
import MainLayout from "./components/MainLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import TrendingProductsPage from "./pages/TrendingProducts";
import BestSellingProductsPage from "./pages/BestSellingProducts";
import MostSellingProducts from "./pages/MostSellingProducts";
import MostPopularProducts from "./pages/MostPopular";
import RecentViewProducts from "./pages/RecentViewProducts";
import About from "./pages/AboutPage";
import ArticlesGrid from "./pages/blogPage";
import ArticleDetails from "./pages/ArticleDetails";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import Refund_policy from "./pages/Refund_policy";

// Create a ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("loginToken");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {

  console.log('asd')

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);



  return (
    <>
    <AppProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/top-rated" element={<TopRated />} />
              <Route path="/trending" element={<TrendingProductsPage />} />
              <Route path="/most-selling" element={<MostSellingProducts />} />
              <Route path="/most-popular" element={<MostPopularProducts />} />
              <Route path="/recent-view" element={<RecentViewProducts />} />
              <Route
                path="/best-selling"
                element={<BestSellingProductsPage />}
              />

              {/* Protected Routes */}
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <WishListPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/delivery-address"
                element={
                  <ProtectedRoute>
                    <DeliveryAddress />
                  </ProtectedRoute>
                }
              />
            
            
              <Route path="/product-details/:id" element={<ProductDetails />} />
              <Route
                path="/all-category/:type"
                element={<AllCategoryProducts />}
              />
              <Route path="/all-products" element={<AllProductsPage />} />
            </Route>
            <Route path="/" element={<MainLayout showSearchBar={false} />}>
            <Route path="/order-summary" element={ <ProtectedRoute> <OrderSummary /></ProtectedRoute> } />
            <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <AccountSettings />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<ArticlesGrid />} />
              <Route path="/blog/:id" element={<ArticleDetails />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms&conditon" element={<TermsAndConditions />} />
              <Route path="/refund_policy" element={<Refund_policy />} />
            </Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </AppProvider>
    </>
  );
};

export default App;
