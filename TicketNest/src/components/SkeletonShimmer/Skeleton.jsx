/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Skeleton.css';

function Skeleton(props) {
    const { width, height, borderRadius = 2 } = props;

    return (
      <div
        className="skeleton"
        style={{ width, height, borderRadius: `${borderRadius}px` }}
      />
    );
  }

export default Skeleton;

