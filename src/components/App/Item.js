import React from "react";

const Item = ({id, title, url}) => {
  return (
    <article className="article-wrapper">
      <img src={url} alt="" />
      <p>{title}</p>
    </article>
  );
};

export default Item;
