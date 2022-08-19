import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="img"><img src="images/newImg1.jpeg" className="rounded float-start" alt="..." /></div>
        <div className="mainText">
          <div className="text-center">
            Самое время быть уникальным!
            Смоделируй свою любимую пару носков!
          </div>
        </div>
        <div className="img">
          <img src="images/newImg2.webp" className="rounded float-end " alt="..." />
        </div>
        <div className="img">
          <img src="images/newImg3.jpeg" className="rounded float-end " alt="..." />
        </div>
        <div className="img">
          <img src="images/newImg4.webp" className="rounded float-end " alt="..." />
        </div>
      </div>
    </div>
  );
}
