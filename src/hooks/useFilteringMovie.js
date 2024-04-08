import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchFilteringMovie = () => {
  return api.get(`/discover/movie`);
};

export const useFilteringMovieQuery = () => {
  return useQuery({
    queryKey: ['filtering-movie'],
    queryFn: fetchFilteringMovie,
  });
};
