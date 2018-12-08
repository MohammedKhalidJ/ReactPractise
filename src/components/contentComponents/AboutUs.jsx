import React from "react";
import { connect } from "react-redux";

class AboutUs extends React.Component {
  render() {
    if (!this.props.companyInfo.companyInformation) {
      return null;
    }
    return (
      <React.Fragment>
        <h1>About Us</h1>
        <h2>{this.props.companyInfo.companyInformation.aboutustext}</h2>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    companyInfo: state
  };
};

export default connect(
  mapStateToProps,
  null
)(AboutUs);
