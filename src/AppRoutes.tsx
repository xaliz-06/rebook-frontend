import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import StorePage from "./pages/StorePage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import OrderPage from "./pages/OrderPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      ,
      <Route path="/auth-callback" element={<AuthCallbackPage />} />,
      <Route
        path="/search/:city"
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      ,
      <Route
        path="/detail/:storeId"
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      ,
      <Route element={<ProtectedRoute />}>
        <Route
          path="/order-status"
          element={
            <Layout>
              <OrderPage />
            </Layout>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-store"
          element={
            <Layout>
              <StorePage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
