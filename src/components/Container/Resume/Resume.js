import React, { Component } from "react";

import myPdf from "./v2_resume.pdf";

export default class Resume extends Component {
  render() {
    return (
      <>
        <iframe src={myPdf} title="resume" width="100%" height="98%"></iframe>
      </>
    );
  }
}
