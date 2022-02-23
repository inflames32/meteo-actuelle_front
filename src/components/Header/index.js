/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";

const Header = () => {
  return (
    <div
      className="
    flex h-20 
    justify-center items-center 
    bg-gray-400 
    w-full 
    shadow-md z-100
    fixed top-0 left-0
    "
    >
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Header);
