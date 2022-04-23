import React, { useEffect, useState, useRef } from 'react';
import { StyledButton } from './styled';
import { Loader } from './Loader';

export type ButtonProps = {
  onClick?: any;
  children?: any;
  color?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset';
  isLoading?: boolean;
  className?: string;
};

// Custom button that captures button side in order to limit width/height changes.
export const Button = ({
  onClick,
  children,
  color = 'primary',
  type,
  disabled,
  isLoading,
  className,
}: ButtonProps): JSX.Element => {
  const [showLoader, setShowLoader] = useState(false);
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  React.useEffect(() => {
    if (isLoading) {
      return setShowLoader(true);
    }

    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      color={color}
      disabled={disabled}
      className={className}
      ref={ref}
      style={
        width && height
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
    >
      {showLoader ? <Loader /> : children}
    </StyledButton>
  );
};
