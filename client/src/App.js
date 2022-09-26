
import "./App.css";
import Movie from "./components/Movie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
import LoginPage from "./pages/LoginPage";
import HomeAdmin from './pages/HomeAdmin'
import { useContext } from "react";
import { Context } from "./components/context";
import AddMovie from "./components/admin/AddMovie";
import ShowmovieTable from "./components/admin/ShowmovieTable"
function App() {
  const { user} = useContext(Context)

  return (
    <BrowserRouter>
    <Routes>
    
      <Route extact path="/" element={user? <HomeAdmin></HomeAdmin> : <LoginPage />}>
      <Route path="show" element={< ShowmovieTable />}></Route>
        <Route path="add" element={<AddMovie />}></Route>

      </Route>
    

      {/* <Route path="movie/:movieId" element={user?<MovieDetailsPage /> :  <LoginPage />}></Route> */}

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


