import React, { Component } from "react";
import "./styles/customerDetails.css";
import formImg from "../img/photo-1554629947-334ff61d85dc.jpg";

export default class CustomerDetails extends Component {
  render() {
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
              <label for="first_name" className="required">
                Retailers First name <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" name="first_name" id="first_name" />
            </div>

            <div className="form-input">
              <label for="last_name" className="required">
                Retailers Last name <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" name="last_name" id="last_name" />
            </div>
            <div className="form-input">
              <label for="company" className="required">
                Shop name <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" name="company" id="company" />
            </div>
            <div className="form-input">
              <label for="Address" className="required">
                Address <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" name="Address" id="Address" />
            </div>
            <div className="form-input">
              <label for="phone_number" className="required">
                Phone number <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" name="phone_number" id="phone_number" />
            </div>
          </div>

          <div className="signup-form-2">
            <div class="form-select">
              <div class="label-flex">
                <label for="Shop">
                  Shop type <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div class="select-list">
                <select name="Shop" id="Shop">
                  <option value="Footwear">Footwear</option>
                  <option value="Provision">Provision</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Medical">Medical</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <div class="form-radio">
              <div class="label-flex">
                <label for="Gender" id="gender">
                  Gender <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div class="form-radio-group">
                <div class="form-radio-item">
                  <input type="radio" name="Gender" id="Male" checked />
                  <label for="Male">Male</label>
                  <span class="check"></span>
                </div>
                <div class="form-radio-item">
                  <input type="radio" name="Gender" id="Female" />
                  <label for="Female">Female</label>
                  <span class="check"></span>
                </div>
                <div class="form-radio-item">
                  <input type="radio" name="Gender" id="other" />
                  <label for="other">Other</label>
                  <span class="check"></span>
                </div>
              </div>

              <div class="form-input">
                <label for="Country">
                  Country <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" name="Country" id="Country" />
              </div>
              <div class="form-input">
                <label for="State">
                  State <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" name="State" id="State" />
              </div>
              <div class="form-input">
                <label for="Area">
                  Locality <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" name="Area" id="Area" />
              </div>
            </div>

            <div class="form-submit">
              <input
                type="submit"
                value="Submit"
                class="submit"
                id="submit"
                name="submit"
              />
              <input
                type="submit"
                value="Reset"
                class="submit"
                id="reset"
                name="reset"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
