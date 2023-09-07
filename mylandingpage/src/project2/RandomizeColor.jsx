import React, { useState } from 'react';
import Title from '../components/Title';

export default function RandomizeColor() {
  const getRandomColor = () => {
    let letters = '0123456789ABCDRF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [buttonColor, setButtonColor] = useState('#ffffff'); // Initial button color

  const handleClick = () => {
    const newButtonColor = getRandomColor();
    const newBackgroundColor = getRandomColor();

    let body = document.querySelector('body');
    body.style.background = newBackgroundColor;

    setButtonColor(newButtonColor); // Update the button color
  };

  return (
    <div className="container">
      <Title text={'Randomize color'} classes={'mb-4'} />
      <button
        className="btn"
        style={{ backgroundColor: buttonColor }}
        onClick={() => handleClick()}
      >
        Click me
      </button>
    </div>
  );
}
