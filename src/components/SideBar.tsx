import { useEffect, useState } from 'react';
import { api } from '../services/api';
//import '../styles/sidebar.scss';

import { Button } from './Button';
import {GenreResponseProps} from '../App'
//import '../styles/global.scss';

interface Props {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: any;
}


export function SideBar(props: Props) {

  return (
    <>
      
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
               
      </nav>
    </>
  )
};

  
     


  