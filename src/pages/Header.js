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
    category: null,
    regions:null
  };
  componentDidMount() {
    axios.get(`${url}/categorydocs/`).then((res) => {
      this.setState({ category: res.data });
    });
    axios.get(`${url}/regions/`).then((res) => {
      this.setState({ regions: res.data });
    });
   
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
                        to="/loyihahaqida"
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
                    {this.state.category !== null
                      ? this.state.category.map((item) => {
                          return (
                            <Dropdown.Item>
                              <NavLink
                                exact
                                style={({ isActive }) =>
                                  isActive ? { color: "orangered" } : undefined
                                }
                                className={style.lik}
                                to={`/qonunlar/${item.name}/${item.pk}`}
                              >
                                {item.name}
                              </NavLink>
                            </Dropdown.Item>
                          );
                        })
                      : ""}
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
                    Tadbirlar
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {this.state.regions!==null?
                    this.state.regions.map(item=>{
                      return(
<Dropdown.Item>
                      <NavLink
                        exact
                        style={({ isActive }) =>
                          isActive ? { color: "orangered" } : undefined
                        }
                        className={style.lik}
                        to={`/tadbirlar/${item.id}/${item.name}`}
                      >
                        {item.name}
                      </NavLink>
                    </Dropdown.Item>
                      )
                    }):''}
                    
                   
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
             
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
