import React, { Component } from "react";
import style from "../css/Head.module.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
export default class NavbarA extends Component {
  state = {
    id: 0,
  };

  Tool = () => {
    if (this.state.id === 0) {
      document.querySelector("#navb").style.display = "none";
    }
    if (document.querySelector("#navb").style.display === "none") {
      document.querySelector("#navb").style.display = "flex";
    } else {
      document.querySelector("#navb").style.display = "none";
    }
    this.setState({ id: 1 });
  };
  closeNav = () => {
    if (this.state.id === 1) {
      document.querySelector("#navb").style.display = "none";
    }
  };
  render() {
    return (
      <div>
        <div className={style.navbar}>
          <div className={style.tool} onClick={this.Tool}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={style.brand}>
            <NavLink
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              to="/"
            >
              <img src={logo} />
            </NavLink>
          </div>
          <div className={style.nav}>
            <ul id="navb">
              {/* <li onClick={this.closeNav}>
                    <NavLink className={style.lik} to="/">Bosh sahifa</NavLink>
                            </li> */}
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} to="/rahbariyat">
                  Rahbariyat
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} to="/yangiliklar">
                  Yangiliklar
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} to="/tumanlar">
                  Tumanlar
                </NavLink>
              </li>
              <li onClick={this.closeNav} className="fr">
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropD"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Hujjatlar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/talim">
                        Butun jahon etnosportga oid qonunlar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/farmon">
                        Etnosportga oid Prezident farmonlari, farmoyishlari va
                        qarorlari
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/oquvchi">
                        Sportchilar uchun qonunlar
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li onClick={this.closeNav} className="fr">
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropD"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Maktablar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/ishlanma">
                        Sportchilar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/kutubxona">
                        Etnosport haqida manbalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/loyihalar">
                        Musoboqalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/maktablar">
                        Xarita
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/talim">
                  Butun jahon etnosportga oid qonunlar
                </NavLink>
              </li>{" "}
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/farmon">
                  Etnosportga oid Prezident farmonlari, farmoyishlari va
                  qarorlari
                </NavLink>
              </li>{" "}
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/oquvchi">
                  Sportchilar uchun qonunlar
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/ishlanma">
                  Sportchilar
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/kutubxona">
                  Etnosport haqida manbalar
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/loyihalar">
                  Musoboqalar
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/maktablar">
                  Xarita
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <NavLink className={style.lik} to="/boglanish">
                  Bog'lanish
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
