import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

const Content = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <Panel.Body>
                {props.name}
                <ul>
                    {props.list.map((v, i) => <li key={i.toString()}>{v}</li>)}
                </ul>
            </Panel.Body>
        </React.Fragment>
    );
}

Content.propTypes = {
    name: PropTypes.string,
    list: PropTypes.array
};

Content.defaultProps = {
    list: [1,2,3]
};

export default Content;