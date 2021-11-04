import React from "react";

const Item = ({ title, url, onCheckedClick }) => {
  return (
    <article className="article-wrapper" onClick={onCheckedClick} >
      <img className="article-img" src={url} alt="" />
      <p className="article-title">{title}</p>
    </article>
  );
};

export default Item;
