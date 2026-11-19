import React, { Component } from "react";
import Accordion from "./Accordion";
import "./Accordion.css";

interface MainAccordionState {
  selectedIndex: number;
}

export default class MainAccordion extends Component<{}, MainAccordionState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <Accordion
        className="accordion"
        id="accordionExample"
        selectedIndex={this.state.selectedIndex}
        onChange={(index, expanded, selectedIndex) =>
          console.log(
            `#${index} ${
              expanded ? "expanded" : "collapsed"
            } (selectedIndex: ${selectedIndex})`
          )
        }
      >
        <div data-header="01. Discussion" className="accordion-item sr-item">
          <p>
            First, we understand you need exactly by discussion then we collect
            all the information given by you and make a plan with our team.
          </p>
        </div>

        <div data-header="02. Research" className="accordion-item">
          <p>
            After gathering all your information and need, we research on it so
            that we can give you the best project.
          </p>
        </div>
        <div data-header="03. Execute" className="accordion-item">
          <p>
            When we have everything ready, we execute our plan and give you the
            perfect project after multi-time testing.
          </p>
        </div>
      </Accordion>
    );
  }
}
