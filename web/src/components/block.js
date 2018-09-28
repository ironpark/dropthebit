import React from 'react';
import PropTypes from 'prop-types';

const Block = styled.div`
  background: blue;
  color: red;
`

class ColoredRect extends React.Component {
    state = {
        color: "green"
    };

    render() {
        return <div></div>
    }
}

Block.propTypes = {
    
};

export default Block;
