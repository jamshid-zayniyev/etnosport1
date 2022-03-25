import React, { Component } from "react";
import style from "../css/Head.module.css";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { url } from "../host/Host";
export default class NavbarA extends Component {
  state = {
    id: 0,
  };
componentDidMount(){
  axios.get(`${url}/`)
}
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
              exact
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
                <NavLink
                  exact
                  style={({ isActive }) =>
                    isActive ? { color: "orangered" } : undefined
                  }
                  className={style.lik}
                  to="/"
                >
                  Bosh sahifa
                </NavLink>
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
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/yangiliklar"
                      >
                        Yangiliklar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/musoboqalar"
                      >
                        Musoboqalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/ishlanma"
                      >
                        Videolavhalar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/gallery"
                      >
                        Fotolavhalar
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/sportchilar"
                      >
                        Sportchilar
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/"
                      >
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
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/talim"
                      >
                        Sport oid qonunlar
                      </NavLink>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/prezidentfq"
                      >
                        Prezident farmonlari, farmoyishlari va qarorlari
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/vazirlarmq"
                      >
                        Vazirlik mahkamasi qarorlari
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/sportvmh"
                      >
                        Sport vazirligining meyoriy hujjatlari
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/sportgaonqh"
                      >
                        Sport oid normativ-qonuniy hujjatlar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/vazirlikixsh"
                      >
                        Vazirlik ishtirokidagi xalqaro shartnomalar
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              {/* <li onClick={this.closeNav}>
                <NavLink exact  style={({ isActive }) =>
              isActive ? {color:'orangered'} : undefined
            } className={style.lik1} to="/kutubxona">
                  O'quv qo'llanmalar
                </NavLink>
              </li> */}
              <li onClick={this.closeNav}>
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropD"
                    variant="light"
                    id="dropdown-basic"
                  >
                    Viloyatlar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Toshkent shahar
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Toshkent viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Samarqand viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Buxoro viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Andijon viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Namangan viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Farg'ona viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Qashqadaryo viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Surxondaryo viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Xorazm viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Navoiy viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Sirdaryo viloyati
                      </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to="/viloyatlar"
                      >
                        Qoraqalpog'iston Respublikasi
                      </NavLink>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li onClick={this.closeNav}>
                <NavLink
                  exact
                  style={({ isActive }) =>
                    isActive ? { color: "orangered" } : undefined
                  }
                  className={style.lik}
                  to="/boglanish"
                >
                  Bog'lanish
                </NavLink>
              </li>
              <li onClick={this.closeNav}>
                <NavLink
                  exact
                  style={({ isActive }) =>
                    isActive ? { color: "orangered" } : undefined
                  }
                  className={style.lik}
                  to="/"
                >
                  Kirish
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
