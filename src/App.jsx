import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movies';
import { Contact, contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getMoviesData } from './api/GetAPIData';
import { MovieDetails } from './components/UI/MovieDetails';
import { getMovieDetails } from './api/GetMovieDetails';
// import { NotFound } from './pages/NotFound';

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"/",
          element: <Home />,
        },
        {
          path:"/about",
          element: <About />,
        },
        {
          path:"/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path:"/movie/:movieID", 
          // : It define we are now using dynamic value
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path:"/contact",
          element: <Contact />,
          action: contactData,
        },

        // {
        //   path : "*",
        //   element: <NotFound />
        // }
      ]
    },
  ]);

  //? V76: createRoutesFromElements :- The createRoutesFromElements function is used with createBrowserRouter to define routes in a structured and readable way. This approach is useful when working with RouterProvider.
    //* How It Works?
      //* ✅ createRoutesFromElements converts <Route> elements into an internal route object structure.
      //* ✅ createBrowserRouter takes the result and creates a router.
      //* ✅ <RouterProvider> is used to apply the router to the app.

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element= {<Home />}/>
  //       <Route path="/about" element= {<About />}/>
  //       <Route path="/contact" element= {<Contact />}/>
  //       <Route path="/movie" element= {<Movie />}/>
  //     </Route>
  //   )
  // );
  
  return <RouterProvider router={router} />;
}

export default App;
