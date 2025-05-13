import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceRangeSlider = ({ min = 10, max = 100, onChange }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (newRange) => {
    setRange(newRange);
    if (onChange) onChange(newRange);
  };

  return (
    <div className="range-slider clearfix">
      <Slider
        range
        min={min}
        max={max}
        value={range}
        onChange={handleChange}
      />
    <div className="price-range">
        <p>Price:</p>
        <span>${range[0]}</span>
        <span>-</span>
        <span>${range[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;