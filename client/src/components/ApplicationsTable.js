import React, { Component } from "react";

export default class ApplicationsTable extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        id: 1,
        companyName: "Apple",
        applicationDate: "10/21/2019",
        position: "software engineer",
        location: "Houston, TX",
        salary: 87000,
        status: "Pending",
        portalLink: "www.apple.com"
      },
      {
        id: 2,
        companyName: "Amazon",
        applicationDate: "08/06/2019",
        position: "software engineer",
        location: "Houston, TX",
        salary: 80000,
        status: "Pending",
        portalLink: "www.Amazon.com"
      },
      {
        id: 3,
        companyName: "Google",
        applicationDate: "07/17/2018",
        position: "software engineer",
        location: "Houston, TX",
        salary: 10000,
        status: "Accepted",
        portalLink: "www.Goodle.com"
      },
      {
        id: 4,
        companyName: "Netflix",
        applicationDate: "08/06/2019",
        position: "software engineer",
        location: "Houston, TX",
        salary: 90000,
        status: "Pending",
        portalLink: "www.Netflix.com"
      }
    ];
  }

  render() {
    return (
      <div>
        {this.state.map(app => (
          <h1>{app.companyName}</h1>
        ))}
      </div>
    );
  }
}
