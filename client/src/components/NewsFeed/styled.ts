import styled from 'styled-components';

export const StyledArticleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const StyledArticle = styled.div`
  padding: 1rem;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: rgb(150 155 187 / 20%) 0px 60px 120px;
  transition: transform 0.2s ease-in-out 0s;
  margin-bottom: 1rem;
  cursor: pointer;
  width: 350px;
  min-height: 500px;
`;

export const StyledArticleImage = styled.img`
  width: 100%;
  border-radius: 12px 12px 0px 0px;
  max-height: 200px;
`;
