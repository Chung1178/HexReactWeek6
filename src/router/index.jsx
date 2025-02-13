import { createHashRouter } from "react-router";
import FrontLayout from "../layout/FrontLayout";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage";


const router = createHashRouter([
    {
        path: '/',
        element: <FrontLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'products/:id',
                element: <ProductDetailPage />
            },
            {
                path: 'cart',
                element: <CartPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);

export default router;