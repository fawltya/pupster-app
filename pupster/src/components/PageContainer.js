// import React from "react";
import React, { Component } from "react";
import About from "./About";
import Discover from "./Discover";
import Search from "./Search";
import Home from "./Home";
import NavTabs from "./NavTabs";

class PageContainer extends Component {
  state = {
    currentPage: "Home",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    let pageComponent;
    switch (this.state.currentPage) {
      case "About":
        pageComponent = <About />;
        break;
      case "Blog":
        pageComponent = <Discover />;
        break;
      case "Contact":
        pageComponent = <Search />;
        break;
      default:
        pageComponent = <Home />;
    }
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {pageComponent}
      </div>
    );
  }
}

export default PageContainer;
