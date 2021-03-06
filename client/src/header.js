import styled from 'styled-components';

const StyledHeader = styled.div`
  min-height: 50px;
  margin-bottom: 30px;
  padding: 15px 15px 15px 60px;
  box-shadow: 0px 3px 16px #0B1114;
  background: linear-gradient(135deg, rgba(11,17,20,1) 0%, rgba(1,0,15,1) 100%);
  color: #C7D2D0;
  text-align: left;
  font-family: "Lato", Helvetica, sans-serif;
  font-size: 48px;
  font-weight: 700;
`;

export default function Header(props) {
  return (
    <StyledHeader>Discography of {props.mainArtistName}</StyledHeader>
  );
}