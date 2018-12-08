import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

const AboutUs = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Panel.Body>
        {props.name || null}
        <ul>
          {props.list.map((v, i) => (
            <li key={i.toString()}>{v}</li>
          ))}
        </ul>
      </Panel.Body>
    </React.Fragment>
  );
};

AboutUs.propTypes = {
  name: PropTypes.string,
  list: PropTypes.array
};

AboutUs.defaultProps = {
  list: [1, 2, 3]
};

export default AboutUs;
