import React, { useEffect, useCallback } from 'react'
import { getRandomFilmsData, getFilsmByFilter, setParamsQuery, setParamsYear, setParamsGenre, initUrlParams } from '../app/store/films/slice';
import { getGenresData } from '../app/store/genres/slice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';
import PageLayout from '../components/page-layout/PageLayout';
import FilmsList from '../components/film-card-list/FilmsList';
import FilterSearch from '../components/filter-search/FilterSearch';
import FilterGenre from '../components/filter-genre/FilterGenre';
import FilterYear from '../components/filter-year/FilterYear';

const MainPage: React.FC = () => {

    const dispatch = useAppDispatch()

    const films = useAppSelector(state=>state.films)
    const genres = useAppSelector(state=>state.genres.data)

    const isParams = Boolean(films.params.genre || films.params.query || films.params.year)

    useEffect(()=>{
        if(isParams) {
            dispatch(initUrlParams())
            if (!genres.length) {
                Promise.all([dispatch(getFilsmByFilter()),dispatch(getGenresData())])
            } else {
                dispatch(getFilsmByFilter())
            }
        } else {
            Promise.all([dispatch(getRandomFilmsData()),dispatch(getGenresData())])
        }
    },[films.params])

    const callbacks = {
        addToFavorite: useCallback((): void => {
            console.log('clicked on favorite btn')
        }, [films]),
        onSearch: useCallback((query:string):void=> {
            dispatch(setParamsQuery(query))
        },[films.params]),
        onYear: useCallback((year:string):void=> {
            dispatch(setParamsYear(year))
        },[films.params]),
        onGenre: useCallback((genre:string):void=> {
            dispatch(setParamsGenre(genre))
        },[films.params]),
    }

    return (
        <PageLayout>
            <div className='Filter'>
                <FilterSearch onSearch={callbacks.onSearch} value={films?.params?.query || ''}/>
                <FilterGenre genresList={genres} onGenre={callbacks.onGenre} value={films.params.genre || ''}/>
                <FilterYear onYear={callbacks.onYear} value={films.params.year || ''}/>
            </div>
            {
                films.status === 'loading' ?
                <h1>Загрузка</h1>
                :
                <FilmsList films={films} clickOnFavoriteBtn={callbacks.addToFavorite}/>
            }
        </PageLayout>
    );
};

export default MainPage;