import React, { useState } from 'react';
import { Loading } from '@components/UI/Loading';
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

      <div>
        {news.articles.map(article => (
          <>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </>
        ))}
      </div>

      {isLoading ? <Loading position="center" /> : null}
    </>
  );
};
