import React, { useEffect, useState } from "react";
import CardsGrid from "./containers/CardsGrid";
import "./App.css";
import logo from "./img/logops4.png";
function App() {
  const [cards, SetCards] = useState([]);
  const [search, setSearch] = useState("");
  const ConectarApi = async () => {
    const resp = await fetch(
      "https://rest-artistas-indieec.herokuapp.com/api/users"
    );
    const data = await resp.json();
    SetCards(data.usuarios);
  };
  useEffect(() => ConectarApi(), []);
  return (
    <div className="App">
      <header>
        <div className="navcontainer">
        <div id="nav">
          <nav
            className="navbar navbar-light"
            style={{ backgroundColor: "#243b44" }}
          >
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="https://indieec.github.io/"
                style={{ marginLeft: "15px", color: "white"}}
              >
                <img
                  src={logo}
                  style={{ height: "50px",width:'80px',imageResolution: 100,marginRight:"15px" }}
                  className="img-fluid"
                  alt=""
                />
                Home
              </a>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <button className="btn btn-success" type="submit" onClick={(e) => e.preventDefault()}>
                  Buscar
                </button>
              </form>
            </div>
          </nav>
        </div>
        </div>
      </header>
      <CardsGrid artistas={cards} search={search} />
    </div>
  );
}

export default App;
