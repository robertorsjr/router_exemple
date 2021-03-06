import React from 'react';
import { Container, Wrapper} from './styles';
import { Link } from 'react-router-dom'

function Head() {
  return (
      <Container>
        <Wrapper>
          <Link  to="/">Home</Link>
        </Wrapper>
        <Wrapper>
          <Link to="/newComics">New Comics</Link>
        </Wrapper>
        <Wrapper>
          <Link to="/movies">Movies</Link>
        </Wrapper>
      </Container>
  );
}

export default Head;