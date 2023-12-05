// Start of JSX file
// Header that displays my name and navigation links for Navigation.
export default function Header({ links }) {
    return (
      <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <h1 className="mg-4 me-auto">Allie Stewart</h1>
            <ul className="navtitle navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
      </header>
    );
  }
// Developer's name, navigation for About Me (Default), Portfolio, Contact, Resume
// End of JSX file