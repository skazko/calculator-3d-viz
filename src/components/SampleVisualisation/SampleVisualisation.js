import React from 'react';
import './SampleVisualisation.css';

function SampleVisualisation({ sampleState }) {
  const img = require(`./${sampleState}.jpg`);
  return (
    <div className="sample-visualisation">
      <img className="sample-visualisation__image" src={img} alt="sample" />
    </div>
  );
}

export default SampleVisualisation;
