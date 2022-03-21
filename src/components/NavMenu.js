import React from "react";
import NavItem from "./NavItem";

function NavMenu() {
  return (
    <div className="NavMenu d-none d-lg-flex">
      <NavItem icon="/images/home-icon.svg" text="HOME" />
      <NavItem icon="/images/search-icon.svg" text="SEARCH" />
      <NavItem icon="/images/watchlist-icon.svg" text="WHATCHLIST" />
      <NavItem icon="/images/original-icon.svg" text="ORIGINALS" />
      <NavItem icon="/images/movie-icon.svg" text="MOVIES" />
      <NavItem icon="/images/series-icon.svg" text="SERIES" />
    </div>
  );
}

export default NavMenu;
