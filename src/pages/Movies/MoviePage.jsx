import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import MovieCardDetail from './components/MovieCardDetail/MovieCardDetail';
import ReactPaginate from 'react-paginate';
import SideBar from './components/SideBar/SideBar';

// 경로
// 1. nav바에서 클릭해서 온 경우 => popularMovie 보여줌
// 2. 키워드 입력해서 온 경우 => 키워드와 관련된 영화들을 보여줌
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const [sortValue, setSortValue] = useState('');
  const [data, setData] = useState(null);
  const [genreId, setGenreId] = useState([]);

  const {
    data: movieList,
    isLoading,
    isError,
    error,
  } = useSearchMovieQuery({
    keyword,
    page,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    setSortValue('');
    setGenreId([]);
  };

  const sortMovie = () => {
    let sortedData;
    switch (sortValue) {
      case 'Popularity(Asc)':
        sortedData = [...data.results].sort(
          (a, b) => a.popularity - b.popularity
        );
        setData({ ...data, results: sortedData });
        return;
      case 'Release Day(Desc)':
        sortedData = [...data.results].sort(
          (a, b) =>
            Number(b.release_date.split('-').join('')) -
            Number(a.release_date.split('-').join(''))
        );
        setData({ ...data, results: sortedData });
        return;
      case 'Release Day(Asc)':
        sortedData = [...data.results].sort(
          (a, b) =>
            Number(a.release_date.split('-').join('')) -
            Number(b.release_date.split('-').join(''))
        );
        setData({ ...data, results: sortedData });
        return;
      case 'Vote(Desc)':
        sortedData = [...data.results].sort(
          (a, b) => b.vote_average - a.vote_average
        );
        setData({ ...data, results: sortedData });
        return;
      case 'Vote(Asc)':
        sortedData = [...data.results].sort(
          (a, b) => a.vote_average - b.vote_average
        );
        setData({ ...data, results: sortedData });
        return;
      default:
        sortedData = [...data.results].sort(
          (a, b) => b.popularity - a.popularity
        );
        setData({ ...data, results: sortedData });
        return;
    }
  };

  const genreMovies = () => {
    let genreData = [...data.results].filter((item) =>
      genreId.some((i) => item.genre_ids.includes(i))
    );
    setData({ ...data, results: genreData });
    return;
  };

  useEffect(() => {
    if (sortValue !== '') {
      sortMovie();
    } else if (movieList) {
      setData(movieList);
    }
  }, [sortValue, movieList]);

  useEffect(() => {
    if (genreId.length > 0) {
      genreMovies();
    } else {
      setData(movieList);
    }
  }, [genreId]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={4} xs={12}>
          <SideBar
            title='Sort'
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
          <SideBar title='Filter' genreId={genreId} setGenreId={setGenreId} />
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={6} xs={12}>
                <MovieCardDetail movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel='>'
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages > 500 ? 500 : data?.total_pages}
            previousLabel='<'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination justify-content-center mb-5'
            activeClassName='active'
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
