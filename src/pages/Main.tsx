import Chess from '../components/Chess';

import styled from 'styled-components';

export default function MainPage () {
  return (
    <Main>
      <Chess />
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  min-height: 95vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;