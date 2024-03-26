import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMoviebyIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movieResult = await fetcher.get<MovieDBMovie>(`/${movieId}`)
    const movieMapper = MovieMapper.fromMovieDBToEntity(movieResult);
    return movieMapper;
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
