import React, { useState } from 'react';
import { Loading } from '@components/UI/Loading';
import { StyledArticleRow, StyledArticle, StyledArticleImage } from './styled';
import { useNews } from '@hooks/index';

export const NewsFeed = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState(1);

  const { news, isLoading, isSuccess, isError, error } = useNews(
    pageNumber,
    'cryptocurrencies'
  );

  console.log('debug -', news);

  return (
    <>
      {isError ? (
        <div>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}

      <StyledArticleRow>
        {news.articles.map(article => (
          <StyledArticle>
            <StyledArticleImage src={article.media} alt={article.title} />
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </StyledArticle>
        ))}
      </StyledArticleRow>

      {isLoading ? <Loading position="center" /> : null}
    </>
  );
};
