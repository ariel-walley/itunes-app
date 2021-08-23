import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: center;
`;

export default function Header(props) {
  return (
    <StyledHeader>{props.mainArtistName}</StyledHeader>
  );
}