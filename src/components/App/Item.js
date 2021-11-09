import React from "react";
import { useSelector } from "react-redux";
import { ArticleWrapper } from "./Item.styled";

const Item = ({ id, title, url, handleChoice, className }) => {
  const userChoice = useSelector((state) => state.choice.value);

  return (
    <ArticleWrapper className={className} onClick={handleChoice}>
      <img className="article-img" src={url} alt="" />
      <p className="article-title">{title}</p>
    </ArticleWrapper>
  );
};

export default Item;
