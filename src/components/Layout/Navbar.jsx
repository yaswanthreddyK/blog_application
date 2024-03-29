import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import InputBox from "../InputBox";
import Profile from "./Profile";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const inputRef = useRef(null);
  const profileRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [isSearchBarActive]);

  useEffect(()=>{
    window.addEventListener('click',()=>{
      profileRef.current.classList.remove("appear")
    })
  },[])

 function handleProfileClick(e){
  e.stopPropagation()
   profileRef.current.classList.toggle("appear")
 }

  return (
    <div className="nav-bar">
      <nav>
        <div className="flex-left">
          <div className="logo">
            <Link to="/">
              <div className="logo-icon">
                <img src="../../../Public/logo.png" alt="" />
              </div>
            </Link>
          </div>
          {isSearchBarActive ? (
            <InputBox
              id="nav-search-input"
              placeholder="Search"
              fontSize="1.2rem"
              inputRef={inputRef}
            />
          ) : (
            <ul className="nav-ul">
              <li
                className="categories-island"
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <a href="#">
                Categories
                </a>
                {isHovered && <Categories />}
              </li>
              <li>
                <Link to="#">
                  <div className="write-item">
                    <svg
                      className="feather feather-edit"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    <div>Write</div>
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="flex-right">
          <button
            className="search-btn"
            onClick={() => {
              setIsSearchBarActive((state) => !state);
            }}
          >
            {isSearchBarActive ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12Z" fill="#000000" />
          </svg>
            ) : (
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`.cls-1{fill:none;stroke:#121212;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}</style>
                </defs>
                <g data-name="21.search" id="_21.search" className="g">
                  <circle className="cls-1" cx="9" cy="9" r="8" />
                  <line className="cls-1" x1="15" x2="23" y1="15" y2="23" />
                </g>
              </svg>
            )}
          </button>
          <div className="profile">
            <button className="profile-btn" onClick={handleProfileClick}>
            <div className="profile-img-container">
              <img src="../../Public/profile_icon.png" alt="" />
            </div>
            </button>
            <Profile profileRef={profileRef}/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
