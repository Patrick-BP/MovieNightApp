
import "./App.css";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home'
import { useContext } from "react";
import { Context } from "./components/context";
function App() {
  const { user} = useContext(Context)

  return (
    <BrowserRouter>
    <Routes>
      <Route extact path="/" element={user? <Home /> : <LoginPage />}></Route>
     <Route path="home" element={user? <Home /> : <LoginPage />}></Route> 
      <Route path="movie/:movieId" element={user?<MovieDetailsPage /> :  <LoginPage />}></Route>

      <Route
        
        path="*"
        element={
          <>
            <div className="container fs-1 text-center">PAGE NOT FOUND </div>
            <Link to="/users">
              <p className="container fs-5 text-center">Home</p>
            </Link>
          </>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
