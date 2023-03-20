import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import Services from "./Services";

 

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
&::-webkit-scrollbar{
  display: none;
}

`;

const Layout = () => {
  return (
    <div className="app">
    <Navbar/>
      <Outlet/>
    <Footer/>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/hero",
        element: <Hero/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contacts",
        element: <Contacts/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      
    ]
  },
  
]);


function App() {
  return (
    <Container>
     <RouterProvider router={router} />
    </Container>
  );
}

export default App;



