import React, { Component } from "react";
import "./styles/customerDetails.css";
import formImg from "../img/photo-1554629947-334ff61d85dc.jpg";
import axios from "../config";
import { Redirect } from "react-router-dom";

export default class CustomerDetails extends Component {
  constructor() {
    super();

    this.state = {
      name: null,
      shopName: null,
      address: null,
      phone: null,
      gender: "Male",
      shopType: "Footwear",
      country: null,
      state: null,
      locality: null,
      redirect: null,
    };
  }

  handleChange = (type, e) => {
    switch (type) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "shopname":
        this.setState({ shopName: e.target.value });
        break;
      case "address":
        this.setState({ address: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      case "gender":
        if (e.target.id == "Male") this.setState({ gender: e.target.id });

        if (e.target.id == "Female") this.setState({ gender: e.target.id });
        if (e.target.id == "Other") this.setState({ gender: e.target.id });

        break;
      case "shoptype":
        this.setState({ shopType: e.target.value });
        break;
      case "country":
        this.setState({ country: e.target.value });
        break;
      case "state":
        this.setState({ state: e.target.value });
        break;
      case "locality":
        this.setState({ locality: e.target.value });
        break;
    }
  };

  reset = () => {
    window.location.reload();
  };

  submit = async () => {
    const data = {
      email: localStorage.getItem("email"),
      name: this.state.name,
      shopName: this.state.shopName,
      address: this.state.address,
      phone: this.state.phone,
      gender: this.state.gender,
      shopType: this.state.shopType,
      country: this.state.country,
      state: this.state.state,
      locality: this.state.locality,
    };

    const postData = await axios.post("/userData", data);
    this.setState({ redirect: "/dashboard" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div className="main-div">
        <div className="form-side">
          <img src={formImg} id="form-img" />
          <div className="signup-img-content">
            <h2 id="rn">REGISTER NOW</h2>
            <p id="bisscom">BE A PART OF BISSCOM</p>
          </div>
        </div>

        <div className="sidebyside">
          <div className="signup-form">
            <div class="form-input">
              <label for="name" className="required">
                Retailers Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  this.handleChange("name", e);
                }}
              />
            </div>

            <div className="form-input">
              <label for="company" className="required">
                Shop name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="company"
                id="company"
                onChange={(e) => {
                  this.handleChange("shopname", e);
                }}
              />
            </div>
            <div className="form-input">
              <label for="Address" className="required">
                Address <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="Address"
                id="Address"
                onChange={(e) => {
                  this.handleChange("address", e);
                }}
              />
            </div>
            <div className="form-input">
              <label for="phone_number" className="required">
                Phone number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                onChange={(e) => {
                  this.handleChange("phone", e);
                }}
              />
            </div>

            <div className="label-flex">
              <label for="Gender" id="gender">
                Gender <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-radio-group">
              <div className="form-radio-item">
                <input
                  type="radio"
                  name="Gender"
                  id="Male"
                  checked
                  onChange={(e) => {
                    this.handleChange("gender", e);
                  }}
                />
                <label for="Male">Male</label>
                <span className="check"></span>
              </div>
              <div className="form-radio-item">
                <input
                  type="radio"
                  name="Gender"
                  id="Female"
                  onChange={(e) => {
                    this.handleChange("gender", e);
                  }}
                />
                <label for="Female">Female</label>
                <span className="check"></span>
              </div>
              <div className="form-radio-item">
                <input
                  type="radio"
                  name="Gender"
                  id="Other"
                  onChange={(e) => {
                    this.handleChange("gender", e);
                  }}
                />
                <label for="other">Other</label>
                <span className="check"></span>
              </div>
            </div>
          </div>

          <div className="signup-form-2">
            <div className="form-radio">
              <div className="label-flex">
                <label for="Shop">
                  Shop type <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="select-list">
                <select
                  name="Shop"
                  id="Shop"
                  onChange={(e) => {
                    this.handleChange("shoptype", e);
                  }}
                >
                  <option value="Footwear">Footwear</option>
                  <option value="Provision">Provision</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Medical">Medical</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="form-input">
              <label for="Country">
                Country <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="Country"
                id="Country"
                onChange={(e) => {
                  this.handleChange("country", e);
                }}
              />
            </div>
            <div className="form-input">
              <label for="State">
                State <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="State"
                id="State"
                onChange={(e) => {
                  this.handleChange("state", e);
                }}
              />
            </div>
            <div className="form-input">
              <label for="Area">
                Locality <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="locality"
                id="locality"
                onChange={(e) => {
                  this.handleChange("locality", e);
                }}
              />
            </div>

            <div className="form-submit">
              <input
                type="submit"
                value="Submit"
                className="submit"
                id="submit"
                name="submit"
                onClick={() => {
                  this.submit();
                }}
              />
              <input
                type="submit"
                value="Reset"
                className="submit"
                id="reset"
                name="reset"
                onClick={() => {
                  this.reset();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
