import React from 'react';
import './SampleVisualisation.css';

function SampleVisualisation() {
  const img = require('./sample-1.jpg');
  return (
    <div className="sample-visualisation">
      <img className="sample-visualisation__image" src={img} alt="sample" />
    </div>
  );
}

export default SampleVisualisation;
