import React from "react";
import { ArticleWrapper } from "./Item.styled";

const Item = ({ title, url, handleChoice, className }) => {
  return (
    <ArticleWrapper className={className} onClick={handleChoice}>
      <img className="article-img" src={url} alt="" />
      <p className="article-title">{title}</p>
    </ArticleWrapper>
  );
};

export default Item;
