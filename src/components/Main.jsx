import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Main(authState, setAuthState) {
  const navigate = useNavigate();
  const Enter = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/enter');
    }
  };
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
