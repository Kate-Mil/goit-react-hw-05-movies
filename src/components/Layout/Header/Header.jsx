import { Container } from 'components/Section.styled';
import {
  HeaderWrapper,
  Item,
  List,
  Navigation,
  StyledLink,
} from './Header.styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <List>
            <Item>
              <StyledLink to="/">Home</StyledLink>
            </Item>
            <Item>
              <StyledLink to="/movies">Movies</StyledLink>
            </Item>
          </List>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
}
