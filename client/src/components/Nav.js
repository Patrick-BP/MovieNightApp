function Nav() {
    return ( 
        <>
        <div className="menu-wrppr">
            <div className="menu-title">Menu</div>
            <ul>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-house-chimney css-vubbuv icon"></i><span>Home</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-magnifying-glass css-vubbuv icon"></i><span>Search</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-heart css-vubbuv icon" ></i><span>Favorite</span></a></li>
            </ul>
          </div>
          <div className="menu-wrppr">
            <div className="menu-title">Other</div>
            <ul>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-rectangle-list css-vubbuv icon"></i><span>PlayList</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-gear css-vubbuv icon"></i><span>Setting</span></a></li>
              <li><a href="#" className="sideitem"><i class="fa-solid fa-right-from-bracket css-vubbuv icon"></i><span>LogOut</span></a></li>
            </ul>
          </div>
        </>
     );
}

export default Nav;