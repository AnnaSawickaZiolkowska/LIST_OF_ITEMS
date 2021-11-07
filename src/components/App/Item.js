import React from "react";

const Item = ({ title, url, handleChoice, className }) => {
  return (
    <article
      className={className}
      onClick={handleChoice}
    >
      <img className="article-img" src={url} alt="" />
      <p className="article-title">{title}</p>
    </article>
  );
};

export default Item;
