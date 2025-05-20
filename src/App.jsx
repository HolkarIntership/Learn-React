import { createContext, useCallback, useId, useMemo, useRef, useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contect from "./pages/Contect";
import Counter from "./pages/Counter";
import ProductList from "./pages/ProductList";
import NotFound from "./pages/NotFound";
import Navbar from "./Components/Layout/Navbar";
import ProductDetails from "./pages/ProductDetails";
import New from "./pages/New";
import Login from "./Components/Auth/Login";
import PrativeRoute from "./Components/PrativeRoute";
import Signup from "./Components/Auth/Signup";
import { useContext } from "react";
import { UserProvider } from "./UserDetails";


export const ThemeContext = createContext(null);

function App() {
  // const apidata = fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // console.log("apidata", apidata);

  const first = useRef();
  const first2 = useRef();

  function Reffun() {
    // first.current.focus();
    // first.current.value = "raju"

    console.log(first, "firssssst");
    console.log(first2, "firssssst");
  }

  // const callback = useCallback(() => {
  //   fetch("https://dummyjson.com/todos")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // }, []);

  // console.log("callback", callback());


  const [counter, setcounter] = useState(0);
  function callback() {
    setcounter((prev) => prev + 1);
    console.log("counter", counter);
  }

  const memo = useMemo(() => {
    console.log("Memo called, counter incremented to", counter + 1);

    return counter + 1;
  }, [counter]);

  const [auth, setAuth] = useState(false);

  const privateroute = [

    // {
    //   path: "/service",
    //   element: <Service />,
    // },
    {
      path: "/contact",
      element: <Contect />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/product",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails />,
    }
  ];

  const data = {
    name: "John",
    age: 30,
    phone: 234543
  }



  return (
    <>
      {/* <Home /> */}
      <ThemeContext.Provider value={data} >
        <UserProvider>



          <BrowserRouter>
            <Navbar setAuth={setAuth} />

            <Routes >
              <Route element={<PrativeRoute auth={auth} />}>
                {
                  privateroute.map((item, index) => {
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        element={item.element}
                      />
                    )
                  })
                }

                {/* <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} /> */}
              </Route>


              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              {/* <Route path="/ddddddd" element={<New />} /> */}

              <Route path="/*" element={<NotFound />} />

            </Routes>
            {/* <Home /> */}
          </BrowserRouter>
        </UserProvider >
      </ThemeContext.Provider>


    </>
  );


}



export default App;


