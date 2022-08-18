import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  const Enter = async (e) => {
    // const response = await fetch('/api/auth/logout');
    // if (response.ok) {
    //   setAuthState(null);
    navigate('/enter');
    // }
  };
  return (
    <div>
      <p className="text-center fs-3 fw-bold">
        Самое время быть уникальным!
      </p>
      <p className="text-center fs-3 fw-bold">
        Смоделируй свою любимую пару носков!
      </p>
      <div>
        <button onClick={Enter} type="button" className="btn btn-dark position-absolute top-50 start-50 translate-middle">Войти</button>
      </div>

    </div>
  );
}
