import Footer from "../layout/admin/Footer/Footer";
import Error from "../pages/Error/Error";
import AdminRoot from "../pages/admin/AdminRoot";
import Products from "../pages/admin/Product/Products";
import Home from "../pages/site/Home/Home";
import Shop from "../pages/site/Shop/Shop";
import SiteRoot from "../pages/site/SiteRoot";
import AddProduct from './../pages/admin/AddProduct/AddProduct';

const Routes = [
  
    {path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    {
        path: '*',
        element: <Error/>
    }]},
      {
        path: "/admin",
        element: <AdminRoot />,
        children: [
          {
            path: "",
            element: <Products />,
          },
          
        { 
          path: "footer",
          element: <Footer/>
        },
        {
            path: "add",
            element: <AddProduct/>
        }
          
        
        ]}
      
      
    
 
];

export default Routes;
