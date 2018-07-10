import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
} from 'react-bootstrap';
import { addCompanyInfo } from '../../action/companyAction';

class AdminTab extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmitValue = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.saveForm(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <Form horizontal onSubmit={this.onSubmitValue}>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={4}>
                            Company Name
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" name="companyname" placeholder="Name" onChange={this.onChangeValue} />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalyear">
                        <Col componentClass={ControlLabel} sm={4}>
                            Copyright Year
                        </Col>
                        <Col sm={5}>
                            <FormControl type="number" name="copyright" placeholder="coyyright year" onChange={this.onChangeValue} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalhome">
                        <Col componentClass={ControlLabel} sm={4}>
                            Home Page Content
                        </Col>
                        <Col sm={5}>
                            <FormControl componentClass="textarea" name="hometext" placeholder="home content" onChange={this.onChangeValue} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalaboutus">
                        <Col componentClass={ControlLabel} sm={4}>
                            About Us Page Content
                        </Col>
                        <Col sm={5}>
                            <FormControl componentClass="textarea" name="aboutustext" placeholder="aboutUs content" onChange={this.onChangeValue} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={8} sm={2}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>;
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        companyInfo: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveForm: (data) => dispatch(addCompanyInfo(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminTab);
