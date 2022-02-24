import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import xalq from "../img/xalq.png";
import style from "../css/Head.module.css";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div className={style.headnavbar}>
        <Navbar collapseOnSelect expand="lg" className={style.navabrs}>
          <Container className={style.conta}>
            <Navbar.Brand className={style.brandnavbar}>
              <img src={xalq} className={style.xalqrasm} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" className={style.navbarlar}>
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/"
                >
                  Bosh sahifa
                </NavLink>
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/yangiliklar"
                >
                  Yangiliklar
                </NavLink>

                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/sportchilar"
                >
                  Sportchilar
                </NavLink>
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/tadbirlar"
                >
                  Tadbirlar
                </NavLink>
              
                  <Dropdown>
                    <Dropdown.Toggle
                      className="navbar"
                      variant="success"
                      id="dropdown-basic"
                    >
                      Hujjatlar
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="navbar">
                        <NavLink
                          className="navbar"
                          activeStyle={{ color: "orangered" }}
                          to="/talim"
                        >
                          Ta'limga oid qonunlar
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="navbar">
                        <NavLink
                          className="navbar"
                          activeStyle={{ color: "orangered" }}
                          to="/farmon"
                        >
                          Prezident farmonlari, farmoyishlari va qarorlari
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="navbar">
                        <NavLink
                          className="navbar"
                          activeStyle={{ color: "orangered" }}
                          to="/oquvchi"
                        >
                          O`quvchilar uchun qonunlar
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                
               
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/videolavhalar"
                >
                  Videolar
                </NavLink>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
