import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import { GenreResponseProps, SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Content } from './components/Content';


// sidebar
/*interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}*/

//content
/*interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}*/

export function App() {
  //const [selectedGenreId, setSelectedGenreId] = useState(1); // sidebar

  //const [genres, setGenres] = useState<GenreResponseProps[]>([]); //sidebar
  
  //const [movies, setMovies] = useState<MovieProps[]>([]); // content
  //const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps); //sidebar

 /* useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);*/ //sidebar

 /* useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    });
  }, [selectedGenreId]); //content import sidebar
  */
  //sidbar
  /*function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }*/
  
  return (
    //content
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />

    </div>
);
  }