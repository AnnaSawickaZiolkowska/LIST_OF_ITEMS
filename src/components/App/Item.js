import React from "react";

const Item = ({ title, url, handleChoice }) => {

  return (
    <article className="article-wrapper" onClick={handleChoice}>
      <img className="article-img" src={url} alt="" />
      <p className="article-title">{title}</p>
    </article>
  );
};

export default Item;
