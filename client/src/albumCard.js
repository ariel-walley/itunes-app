import styled from 'styled-components';

const CardContainer = styled.div`
  width: 15%;
  margin: 15px;
  padding: 15px;
  background-color: #c7d2d0;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const AlbumArt = styled.img` 
  width: 100px;
  height: 100px;
  margin: 3px;
`;

const Text = styled.p`
  margin: 3px;
`;

export default function AlbumCard(props) {
  return (
    <CardContainer>
      <AlbumArt src={props.art} alt={`Album artwork for ${props.albumName}`}/>
      <Text>{props.albumName}</Text>
      <Text>by {props.artistName}</Text>
      <Text>{props.year}</Text>
    </CardContainer>
  );
}