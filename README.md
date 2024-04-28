# 🎬 영화 정보 검색 사이트 (movie-info)

- 배포 URL : https://s2-movie-app.netlify.app/

<br>

## 🖥️ 프로젝트 소개

- 인기 있는 영화, 평점 높은 영화, 개봉 예정 영화들을 확인할 수 있습니다.
- 검색을 통해 찾고 싶은 영화의 정보를 볼 수 있습니다.
- 영화의 줄거리, 예고편, 리뷰 등 상세 정보를 확인할 수 있습니다.

<br>

## ⏰ 개발 기간
24.04.02 ~ 24.04.13 (12일)

<br>

## ⚙️ 개발 환경

- Front-end : HTML, CSS, JavaScript, React, React Router, React Bootstrap, Axios, React Query
- Back-end : TMDB api 활용
- 버전 관리 : Github
- 서비스 배포 환경 : Netlify

<br>

## 📂 프로젝트 구조

```
src
├── App.css
├── App.js
├── App.test.js
├── common
│   ├── LoadingSpinner
│   │   ├── LoadingSpinner.jsx
│   │   └── LoadingSpinner.style.css
│   ├── MovieCard
│   │   ├── MovieCard.jsx
│   │   └── MovieCard.style.css
│   ├── MovieSlider
│   │   ├── MovieSlider.jsx
│   │   └── MovieSlider.style.css
│   └── MovieSocial
│       ├── MovieSocial.jsx
│       └── MovieSocial.style.css
├── constants
│   └── responsive.js
├── hooks
│   ├── useMovieDetail.js
│   ├── useMovieDetailCredits.js
│   ├── useMovieGenre.js
│   ├── useMovieReview.js
│   ├── useMovieTrailer.js
│   ├── usePopularMovies.js
│   ├── useRelatedMovies.js
│   ├── useSearchMovie.js
│   ├── useTopRatedMovies.js
│   └── useUpcomingMovies.js
├── index.css
├── index.js
├── layout
│   └── AppLayout.jsx
├── logo.svg
├── pages
│   ├── Homepage
│   │   ├── Homepage.jsx
│   │   └── components
│   │       ├── Banner
│   │       │   ├── Banner.jsx
│   │       │   └── Banner.style.css
│   │       ├── PopularMovieSlide
│   │       │   └── PopularMovieSlide.jsx
│   │       ├── TopRatedMovieSlide
│   │       │   └── TopRatedMovieSlide.jsx
│   │       └── UpcomingMovieSlide
│   │           └── UpcomingMovieSlide.jsx
│   ├── MovieDetail
│   │   ├── MovieDetailPage.jsx
│   │   ├── MovieDetailPage.style.css
│   │   └── components
│   │       ├── CreditsCard
│   │       │   ├── CreditsCard.jsx
│   │       │   └── CreditsCard.style.css
│   │       ├── Line
│   │       │   ├── Line.jsx
│   │       │   └── Line.style.css
│   │       ├── MovieDetailCredits
│   │       │   ├── MovieDetailCredits.jsx
│   │       │   └── MovieDetailCredits.style.css
│   │       ├── MovieDetailInfo
│   │       │   ├── MovieDetailInfo.jsx
│   │       │   └── MovieDetailInfo.style.css
│   │       ├── MovieDetailMoreInfo
│   │       │   ├── MovieDetailMoreInfo.jsx
│   │       │   └── MovieDetailMoreInfo.style.css
│   │       ├── RelatedMoviesBox
│   │       │   ├── RelatedMoviesBox.jsx
│   │       │   └── RelatedMoviesBox.style.css
│   │       ├── Review
│   │       │   ├── Review.jsx
│   │       │   └── Review.style.css
│   │       └── ReviewBox
│   │           ├── ReviewBox.jsx
│   │           └── ReviewBox.style.css
│   ├── Movies
│   │   ├── MoviePage.jsx
│   │   └── components
│   │       ├── FilterSection
│   │       │   ├── FilterSection.jsx
│   │       │   └── FilterSection.style.css
│   │       ├── GenreFilter
│   │       │   ├── GenreFilter.jsx
│   │       │   └── GenreFilter.style.css
│   │       ├── MovieCardDetail
│   │       │   ├── MovieCardDetail.jsx
│   │       │   └── MovieCardDetail.style.css
│   │       ├── SideBar
│   │       │   ├── SideBar.jsx
│   │       │   └── SideBar.style.css
│   │       ├── SortSection
│   │       │   ├── SortSection.jsx
│   │       │   └── SortSection.style.css
│   │       └── YearFilter
│   │           ├── YearFilter.jsx
│   │           └── YearFilter.style.css
│   └── NotFoundpage
│       ├── NotFoundPage.jsx
│       └── NotFoundPage.style.css
├── reportWebVitals.js
├── setupTests.js
└── utils
    └── api.js
```

<br>

## 📌 페이지별 기능

<br>
