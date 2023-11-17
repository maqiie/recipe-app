import React, { Component } from "react";
import "./Home.css";
import { IoMdHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const APP_ID = "b2b0bbec";
const APP_KEY = "b664e2d371d0f19f906369740064ff38";
const url = " `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,"


class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <section>
            <nav>
              <div class="button-container">
                <button class="button">
                <IoMdHome />
                  
                </button>

                <button class="button">
                  <input
                    type="text"
                    name="text"
                    placeholder="Search 'Recipe'"
                    class="input"
                  ></input>
                </button>

                <button class="button">
                <FaHeart />

                </button>

                <button class="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    class="icon"
                  >
                    <circle r="1" cy="21" cx="9"></circle>
                    <circle r="1" cy="21" cx="20"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </nav>
          </section>

        </div>

      </div>
    );
  }
}

export default Home;
