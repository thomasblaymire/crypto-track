import React from 'react';

function ErrorMessage({ error, variant = 'stacked', ...props }) {
  return (
    <div role="alert" {...props}>
      <span>There was an error: </span>
      <pre>{error.message}</pre>
    </div>
  );
}
export { ErrorMessage };
