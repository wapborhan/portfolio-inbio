import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import AboutMore from "./router/pages/about/AboutMore";
import RoutePortfolio from "./router/pages/portfolio/RoutePortfolio";
import RouterServices from "./router/pages/services/RouterServices";
import RouterWhyMe from "./router/pages/whyme/RouterWhyMe";
import axios from "axios";

const baseURL = "https://srdreamlab-e981b-default-rtdb.firebaseio.com";

export default class MainComponent extends Component {
  state = {
    react: [],
    javascript: [],
    landingpage: [],
    apps: [],
  };
  componentDidMount() {
    axios(baseURL + "/react.json").then(({ data }) =>
      this.setState({ react: data })
    );
    axios(baseURL + "/javascript.json").then(({ data }) =>
      this.setState({ javascript: data })
    );
    axios(baseURL + "/landingpage.json").then(({ data }) =>
      this.setState({ landingpage: data })
    );
    axios(baseURL + "/apps.json").then(({ data }) =>
      this.setState({ apps: data })
    );
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage project={this.state.react} />} />
        <Route path="/about" element={<AboutMore />} />
        <Route
          path="/portfolio"
          element={<RoutePortfolio project={this.state} />}
        />
        <Route path="/services" element={<RouterServices />} />
        <Route path="/whyme" element={<RouterWhyMe />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
  }
}
