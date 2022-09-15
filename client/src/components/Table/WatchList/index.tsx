import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useAuth } from '@context/auth';
import { client } from '@helpers/api';
import { useWatchList } from '@hooks/useWatchList';
import styled from 'styled-components';
import { storage } from '@helpers/storage';

const StyledStarIcon = styled.svg`
  width: 15px;
  &:hover {
    fill: #f6b87e;
  }
`;

function StarIcon({ fill }) {
  const stroke = fill !== 'none' ? fill : 'currentColor';

  return (
    <StyledStarIcon
      className="w-6 h-6"
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      ></path>
    </StyledStarIcon>
  );
}

const StyledWatchList = styled.div`
  display: flex;
  cursor: pointer;
`;

interface WatchListInterface {
  cell: any;
  selected: any;
  id: any;
  toggle: any;
}

export const WatchList = ({
  selected,
  id,
  toggle,
}: WatchListInterface): JSX.Element => {
  const [watchList, setWatchList] = useState(selected);
  const { user } = useAuth();

  const watchListItems = useWatchList();

  console.log('TOm items', watchListItems);

  const { mutate } = useMutation(({ cryptoId }: any) =>
    client(`watchlist`, { data: { cryptoId }, token: storage.getToken() })
  );

  const fillColor = watchList ? '#f6b87e' : 'none';

  const handleOnClick = (): void => {
    if (!user) {
      return toggle();
    }

    setWatchList(prev => !prev);
    mutate({ cryptoId: id.toLowerCase() });
  };

  return (
    <StyledWatchList>
      <div className="cursor-pointer" onClick={handleOnClick}>
        <StarIcon fill={fillColor} />
      </div>
    </StyledWatchList>
  );
};
