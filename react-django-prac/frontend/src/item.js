import React from 'react';

const Item = ({ title, content,id, handleClick }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => handleClick(id)}>삭제</button>
    </div>
  );
};

export default Item;