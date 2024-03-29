import "./App.css";
import React from "react";

import {
  Route,
  // createBrowserRouter,
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./components/NavBar";
import MyAccountPage from "./components/MyAccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductPage from "./pages/ProductPage";

// codul pe care il facusem dar nu merge pe github
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route>
//         <Route element={<NavBar />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/produs" element={<ProductPage />} />
//           <Route element={<ProtectedRoute />}>
//             <Route path="/myaccount" element={<MyAccountPage />} />
//           </Route>
//           <Route path="*" element={<PageNotFound />} />
//         </Route>
//       </Route>
//     </>
//   )
// );

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/produs" element={<ProductPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/myaccount" element={<MyAccountPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
