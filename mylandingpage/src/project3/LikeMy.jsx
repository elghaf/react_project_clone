import React, { useState } from 'react';
import Title from '../components/Title';
import { AiFillSmile, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function LikeMy() {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    // Use setLike to update the state
    setLike(!like);
  };

  return (
    <div className="container">
      <Title text="like this photos"></Title>
      <Title text="Likees" classes={"subtitle"}></Title>
      <div className="card card-dark m-auto" style={{ width: 300, cursor: 'pointer' }}>
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-10" />
          <small>DogyDogg</small>
        </div>
        <img src="" alt="img" style={{ height: 'fit-content' }} />
        <div className="card-footer fs-xl d-flex" style={{ justifyContent: 'space-between' }}>
          <AiOutlineHeart className="text-danger" onClick={toggleLike} />{' '}
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
