# 🎬 영화 정보 검색 사이트 (movie-info)

- 배포 URL : https://s2-movie-app.netlify.app/

<br>

## 🔍 프로젝트 소개

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
### [홈페이지]
- 상단의 배너를 통해 가장 인기있는 영화를 확인할 수 있습니다.
- 인기있는 영화, 평점이 높은 영화, 개봉 예정 영화를 확인할 수 있습니다.
- 영화 카드에 마우스를 올리면 영화 정보를 볼 수 있습니다.
- 영화 카드를 클릭하면 영화 상세페이지로 이동합니다.

#### 🖥️ PC
|배너|영화 캐러셀|
|------|------|
|이미지|이미지|

|카드 마우스오버|카드 클릭|
|------|------|
|이미지|이미지|

#### 📱 모바일
|배너|영화 캐러셀|
|------|------|
|이미지|이미지|

|카드 마우스오버|카드 클릭|
|------|------|
|이미지|이미지|

<br>

### [영화 페이지]
- 메뉴의 영화 탭을 클릭한 경우에는 인기있는 영화 목록을 보여줍니다.
- 검색을 한 경우에는 검색 키워드와 관련된 영화 목록을 보여줍니다.
- 해당 영화들을 페이지네이션을 통해 페이지별로 확인할 수 있습니다.
- Sort 메뉴를 통해 영화 목록을 정렬할 수 있습니다. (인기순,개봉일순,평점순)
- Filter 메뉴를 통해 필터링된 영화 목록을 볼 수 있습니다. (연도별,장르별)
- 영화 카드를 클릭하면 영화 상세페이지로 이동합니다.

#### 🖥️ PC
|영화페이지|검색|페이지네이션|
|------|------|------|
|이미지|이미지|이미지|

|정렬|필터|카드 클릭|
|------|------|------|
|이미지|이미지|이미지|

#### 📱 모바일
|영화페이지|검색|페이지네이션|
|------|------|------|
|이미지|이미지|이미지|

|정렬|필터|카드 클릭|
|------|------|------|
|이미지|이미지|이미지|

<br>

### [영화 상세 페이지]
- 영화의 상세 정보를 확인할 수 있습니다.
- Watch Trailer 버튼을 클릭하면 예고편을 볼 수 있습니다.
- 영화의 리뷰를 확인할 수 있습니다.
- 해당 영화와 관련된 영화 리스트를 볼 수 있습니다.
- 관련된 영화를 클릭하면 해당 영화의 상세페이지로 이동합니다.

#### 🖥️ PC
|영화상세페이지|예고편|리뷰|
|------|------|------|
|이미지|이미지|이미지|

|관련영화|관련영화클릭|
|------|------|
|이미지|이미지|

#### 📱 모바일
|영화상세페이지|예고편|리뷰|
|------|------|------|
|이미지|이미지|이미지|

|관련영화|관련영화클릭|
|------|------|
|이미지|이미지|

<br>
