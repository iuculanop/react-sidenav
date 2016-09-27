import React, { PropTypes } from 'react';

export const Counter = (props) => {
    const { tooltip, tocount } = props;

    return <span title={tooltip} className="counter">{tocount}</span>;
};

Counter.propTypes = {
    tooltip: PropTypes.string,
    tocount: PropTypes.number,
};
