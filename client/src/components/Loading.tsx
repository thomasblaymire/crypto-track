import React from 'react';
import { useFetch } from '../hooks/useFetch';
import SvgSmiley from '../assets/loading.svg';
import styled, { css } from 'styled-components';

interface LoadingProps {
  position: string;
  width?: string;
  height?: string;
}

const StyledLoading = styled.div<LoadingProps>`
  ${props =>
    props.position === 'center' &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  svg {
    color: white;
  }
`;

// export const StyledIcon = styled(LoadingIcon)`
//   display: block;
//   color: white;
//   width: 400px;
//   height: 300px;
// `;

export const Loading = ({
  position,
  width,
  height,
}: LoadingProps): JSX.Element => (
  <StyledLoading position={position}>
    <svg
      width="38"
      height="38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff"
    >
      <g
        transform="translate(1 1)"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      >
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </StyledLoading>
);
