import styled from "styled-components";

export const ArticleWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  grid-gap: 20px;
  margin-bottom: 15px;
  text-align: left;
  border: 1px solid white;

  &.checked {
    border: 1px solid turquoise;
  }
  &:hover {
    border: 1px solid teal;
  }

  .article-title {
    width: 340px;
  }
`;