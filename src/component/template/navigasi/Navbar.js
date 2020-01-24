import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import '../../../style/Navbar.css';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar className="bg-success" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <strong className="white-text"><MDBIcon className="brand" icon="home" /></strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Kategori</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default mt-3">

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="profile">
                      Pakaian
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="profile">
                      Sepatu
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="profile">
                      Laptop
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="profile">
                      Gadget
                    </MDBNavLink>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem id="search">
              <MDBNavLink to="#!">Search</MDBNavLink>
              <div className="search"><input className="form-control" type="text" placeholder="" aria-label="Search" /></div>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="favorite">
                <MDBIcon far icon="heart" />
                <div>Favorite</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="notifikasi">
                <MDBIcon far icon="bell" />
                <div>Notification</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light text-icon" to="mycart">
                <MDBIcon icon="shopping-basket" />
                <div>My Cart</div>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret id="menu-admin" className="ml-4">
                  <b className="mr-2 font-weight-bold label-admin">Admin</b> 
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="mt-4">

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="profile">
                      Profile
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="myproduk">
                      My Product
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="upload_produk">
                      Upload Product Baru
                    </MDBNavLink>
                  </MDBDropdownItem>

                  <MDBDropdownItem >
                    <MDBNavLink className="text-dark" to="logout">
                      Logout
                    </MDBNavLink>
                  </MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;