import styled from 'styled-components';

const CardContainer = styled.div`
  height: 275px;
  width: 200px;
  margin: 15px;
  padding: 15px;
  box-shadow: 1px 1px 10px 0px #6D7072;
  background-color: #C7D2D0;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const AlbumArt = styled.img` 
  width: 150px;
  height: 150px;
  margin: 10px;
  box-shadow: 0px 0px 5px #0B1114;
`;

const Text = styled.p`
  margin: 5px;
  font-size: 16px;
`;

const AlbumTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000000;
`;

export default function AlbumCard(props) {
  return (
    <CardContainer>
      <Link target="_blank" href={props.link}>
        <AlbumArt src={props.art} alt={`Album artwork for ${props.albumName}`}/>
        <AlbumTitle>{props.albumName}</AlbumTitle>
        <Text>{props.artistName} ({props.year})</Text>
      </Link>
    </CardContainer>
  );
}