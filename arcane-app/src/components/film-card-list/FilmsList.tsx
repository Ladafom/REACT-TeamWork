import React from 'react'
import FilmCard from '../film-card/FilmCard';
import './style.css'

type FilmsListProps = {
  films: any // @todo: type of FilmsList props
  clickOnFavoriteBtn: ()=> void
}

const FilmsList = ({films, clickOnFavoriteBtn}:FilmsListProps) => {

  return (
    <div className='FilmsList'>
      {
        films?.data?.results?.map((film:any)=>( // @todo: type of film
            <FilmCard
              key={film?.id}
              name={film?.titleText.text}
              image={film?.primaryImage?.url || '/public/image_not_found.jpg'}
              id={film?.id}
              clickOnFavoriteBtn={clickOnFavoriteBtn}
            />
        ))
      }
      {
        !films?.data?.results?.length &&
        <h1>Нет совпадений</h1>
      }
    </div>
  );
};

export default FilmsList;