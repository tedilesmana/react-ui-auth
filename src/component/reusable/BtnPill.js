import React from 'react';
import Icon from '@material-ui/core/Icon';
import '../../style/BtnPill.css';

const BtnPill = (props) => {
  return (
      <div id="btn-pill">
        <span className="bg-icon">
          <Icon className={props.icon} id="icon"></Icon>
        </span>
        <span className="label">{props.label}</span>
      </div>
  )
}

export default BtnPill;