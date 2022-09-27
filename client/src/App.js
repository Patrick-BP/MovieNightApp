
import "./App.css";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
import LoginPage from "./pages/LoginPage";
import HomeAdmin from './pages/HomeAdmin'
import Home from './pages/Home'
import { useContext } from "react";
import { Context } from "./components/context";
import AddMovie from "./components/admin/AddMovie";
import ShowmovieTable from "./components/admin/ShowmovieTable"
import MovieDetailsPage from "./pages/MovieDetailsPage";
function App() {
  const { user} = useContext(Context)

  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={user == null ? <LoginPage /> :
    user && user.data.others.role === "user"? <Home/> : <HomeAdmin />}>
        <Route path="login" element={user == null && <LoginPage />}></Route>

      </Route>
      <Route  path="home" element={user  && user.data.others.role == "user"? <Home/> : <LoginPage />}>
      </Route>

      <Route  path="/" element={user &&  user.data.others.role === "admin"? <HomeAdmin/> : <LoginPage />}>
      <Route path="show" element={< ShowmovieTable />}></Route>
      <Route path="add" element={<AddMovie />}></Route>
      </Route>


    <Route path="movie/:id" element={<MovieDetailsPage/>}></Route>
    
    
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


