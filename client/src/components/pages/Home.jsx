import React, { Component, Fragment } from "react";
import Jumbotron from "../Jumbotron";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <main>
          <Jumbotron
            title="KATRINA LANGLAND"
            subtitle="brand and lifestyle photography"
            class="jumbotron-full"
          />
          <div className="container py-5">
            <div className="row no-gutters home-about">
              <div className="col-sm-5 px-4">
                <div className="home-about__img w-100 h-100" />
              </div>

              <div className="col-sm-7">
                <h6>HI, I'M KATRINA...</h6>
                <hr />
                <div>
                  <h2 className="mb-4">
                    I am a lifestyle photographer, who helps capture timeless
                    imagery.
                  </h2>
                  <p>
                    I use a combination of film and digital along with a
                    non-intrusive approach to create authentic, thoughtful
                    images that captivate and tell your unique story. My
                    favorite days are spent planning and capturing beautiful
                    photos, catching up with friends over iced coffee, and
                    strolling through gardens alongside my husband and daughter.
                  </p>
                </div>
              </div>

              <div className="p-5 home-about__cta-card">
                <h6>My Favs:</h6>
                <h4 className="font-italic">
                  Garden Walks with Norah
                  <br />
                  Soft, Comfy Blankets
                  <br />
                  Avocado Toast and Iced Coffee
                </h4>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}
