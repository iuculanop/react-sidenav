import React, { PropTypes } from 'react';
import { Counter } from './Counters';

export const IconLeft = (props) => {
    const { icon, text, id } = props;

    return <div>
        <span key={id + '-icn'} style={{paddingRight: 10}}
            className={icon}></span>
        <span key={props.id + '-txt'}>{text}</span>
    </div>;
};

export const IconRight = (props) => {
    const { icon, text, id, tocount } = props;

    if (typeof tocount !== 'undefined' && tocount.arr.length > 0) {
        console.log('cosa mi ha passato:', tocount);
        const tooltip = tocount.tooltip;
        const length = tocount.arr.length;
        return <div>
          <span>{text}</span>
          <div style={{ float: 'right', display: 'inline-block', paddingRight: 2} }>
            <span key={id + '-icn'} style={{ paddingRight: 10 }}
               className={icon}></span>
        <Counter tooltip={tooltip} tocount={length} />
          </div>
        </div>;
    }
    return <div>
      <span>{text}</span>
      <div style={{ float: 'right', display: 'inline-block', paddingRight: 2} }>
        <span key={id + '-icn'} style={{ paddingRight: 10 }}
            className={icon}></span>
      </div>
    </div>;
};

const propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    tocount: PropTypes.object,
};

IconLeft.propTypes = propTypes;
IconRight.propTypes = propTypes;
