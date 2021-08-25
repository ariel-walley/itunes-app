import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import axios from 'axios';
import Header from './header';
import AlbumCard from './albumCard';

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

function App() {
  const [loading, setStatus] = useState(true);
  const [artist, setArtist] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {   // Get data from iTunes
    axios.get('http://localhost:4000/')
    .then((res) => {
      if (res.data.results[0].wrapperType === 'artist') {
        setArtist(res.data.results[0].artistName);
        res.data.results.splice(0, 1)
        setAlbums(res.data.results);
        setStatus(false);
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  const generateCards = () => {
    const cards = albums.map((album) => 
      (<AlbumCard key={album.collectionId}
        link={album.collectionViewUrl}
        artistName={album.artistName}
        albumName={album.collectionName}
        year={album.releaseDate.slice(0, 4)}
        art={album.artworkUrl100.replace("100x100bb", "300x300bb")}
      />) 
    )
    return cards;
  }

  const loadingPage = () => {
    if (loading) {
      return <Loader>Loading...</Loader>
    } else {
      return (
      <div>
        <Header mainArtistName={artist}/>
        <Container>
         {generateCards()}
        </Container>
      </div>)
    }
  }

  return (
    <div>
      <GlobalStyle />
      {loadingPage()}
    </div>
  );
}

export default App;