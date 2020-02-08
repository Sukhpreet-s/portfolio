import React, { Component } from "react";

import myPdf from "./resume.pdf";

export default class Resume extends Component {
  render() {
    return (
      <>
        <h3>Resume here!</h3>
        <iframe src={myPdf} title="resume" width="100%" height="90%"></iframe>
      </>
    );
  }
}
