import LoadingIcon from '../assets/loading.svg';
import styled from 'styled-components';

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;

export const StyledIcon = styled(LoadingIcon)`
  display: block;
`;

export const Loading = () => (
  <StyledLoading>
    LOADING
    <StyledIcon />
  </StyledLoading>
);
