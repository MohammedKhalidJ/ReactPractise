import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render() {
        if (!this.props.companyInfo.companyInformation) {
            return null;
        }
        return (
            <React.Fragment>
                <h1>Home</h1>
                <h2>{this.props.companyInfo.companyInformation.hometext}</h2>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        companyInfo: state
    }
}


export default connect(mapStateToProps, null)(Home);