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
              <li onClick={this.closeNav}>
                    <NavLink className={style.lik} to="/">Bosh sahifa</NavLink>
                            </li>
                         
                            <li onClick={this.closeNav} className="fr">
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropD"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Etnosport
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                 
                  <Dropdown.Item>
                  <NavLink className={style.lik} to="/yangiliklar">
                  Yangiliklar
                </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/musoboqalar">
                        Musoboqalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/ishlanma">
                        Videolavhalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/gallery">
                        Fotolavhalar
                      </NavLink>
                    </Dropdown.Item>
                 
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/">
                        Sportchilar
                      </NavLink>
                    </Dropdown.Item>
                    
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/">
                        Loyiha haqida
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
              <li onClick={this.closeNav}>
              <NavLink className={style.lik1} to="/kutubxona">
                        O'quv qo'llanmalar
                      </NavLink>
              </li>
              <li onClick={this.closeNav}>
              <Dropdown>
                  <Dropdown.Toggle
                    className="dropD"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Mahallalar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/">
                        Mahallalar reytengi
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/">
                       Tadbirlar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/">
                        Tanlovlar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink className={style.lik} to="/mahallalar">
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
                  Etnosport turlari
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/kutubxona">
                  Elektron kutubxona
                </NavLink>
              </li>
              <li className="grt" onClick={this.closeNav}>
                <NavLink className={style.lik} to="/musoboqalar">
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
