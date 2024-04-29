# 🎬 영화 정보 검색 사이트 (movie-info)

![movie-info](https://github.com/sjh709/movie-info/assets/42454759/7f3cf0a7-20e7-4d12-91e1-23143178783e)

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
- 상단의 배너를 통해 가장 인기 있는 영화를 확인할 수 있습니다.
- 인기 있는 영화, 평점 높은 영화, 개봉 예정 영화를 확인할 수 있습니다.
- 영화 카드에 마우스를 올리면 영화 정보를 볼 수 있습니다.
- 영화 카드를 클릭하면 영화 상세페이지로 이동합니다.

#### 🖥️ PC
|배너|영화 캐러셀|
|------|------|
|![배너-pc](https://github.com/sjh709/movie-info/assets/42454759/e39cc5f6-d9c5-43ed-bbd3-9d892e3b87c6)|![캐러셀-pc](https://github.com/sjh709/movie-info/assets/42454759/e5eaacff-952f-4e3a-8cce-f658e265a515)|

|카드 마우스오버|카드 클릭|
|------|------|
|![마우스오버-pc](https://github.com/sjh709/movie-info/assets/42454759/49a0ee9a-3bab-46ac-a3d8-445565f8ec4b)|![카드클릭-pc](https://github.com/sjh709/movie-info/assets/42454759/303bad2f-0b8d-44b5-a0cc-5f312782bb66)|

#### 📱 모바일
|배너|영화 캐러셀|
|------|------|
|![배너-모바일](https://github.com/sjh709/movie-info/assets/42454759/8e75ebe2-34cb-4820-a7c3-3ea12897a72b)|![캐러셀-모바일](https://github.com/sjh709/movie-info/assets/42454759/83b97f7d-7afb-4eb8-acfa-9dbe37a03fea)|

|카드 마우스오버|카드 클릭|
|------|------|
|![마우스오버-모바일](https://github.com/sjh709/movie-info/assets/42454759/904c0931-e4e4-402d-b44b-7129d440dccf)|![카드클릭-모바일](https://github.com/sjh709/movie-info/assets/42454759/a3898cdc-56d3-44a9-881f-ceb551c498fb)|

<br>

### [영화 페이지]
- 메뉴의 영화 탭을 클릭한 경우에는 인기 있는 영화 목록을 보여줍니다.
- 검색을 한 경우에는 검색 키워드와 관련된 영화 목록을 보여줍니다.
- 해당 영화들을 페이지 네이션을 통해 페이지별로 확인할 수 있습니다.
- Sort 메뉴를 통해 영화 목록을 정렬할 수 있습니다. (인기순, 개봉 일순, 평점순)
- Filter 메뉴를 통해 필터링 된 영화 목록을 볼 수 있습니다. (연도별, 장르별)
- 영화 카드를 클릭하면 영화 상세페이지로 이동합니다.

#### 🖥️ PC
|영화페이지|검색|페이지네이션|
|------|------|------|
|![영화페이지-pc](https://github.com/sjh709/movie-info/assets/42454759/a212f65e-1ea9-408f-86f0-8f2dfaed8d12)|![검색-pc](https://github.com/sjh709/movie-info/assets/42454759/f67ca5b8-8688-4e4a-9e86-90681c63abe5)|![페이지네이션-pc](https://github.com/sjh709/movie-info/assets/42454759/7e084d8e-41c0-4e60-8818-f3153ac7f45b)|

|정렬|필터|카드 클릭|
|------|------|------|
|![정렬-pc](https://github.com/sjh709/movie-info/assets/42454759/b945bb57-401e-443a-8d30-12c3d70e1331)|![필터-pc](https://github.com/sjh709/movie-info/assets/42454759/61c91f3b-db20-465c-9e63-7f53d6896ee6)|![카드클릭-pc](https://github.com/sjh709/movie-info/assets/42454759/b4f72772-3c5f-489d-91f1-aa796a93fdc3)|

#### 📱 모바일
|영화페이지|검색|페이지네이션|
|------|------|------|
|![영화페이지-모바일](https://github.com/sjh709/movie-info/assets/42454759/f3ea04e1-906a-4de3-9d51-4a7665f7578e)|![검색-모바일](https://github.com/sjh709/movie-info/assets/42454759/dca413ee-7be3-4665-a553-fe7a3de86829)|![페이지네이션-모바일](https://github.com/sjh709/movie-info/assets/42454759/8d950a76-3b37-4535-84c0-0726c74f31d4)|

|정렬|필터|카드 클릭|
|------|------|------|
|![정렬-모바일](https://github.com/sjh709/movie-info/assets/42454759/ac86d20b-4b55-48ca-863c-2b7efb3d190a)|![필터-모바일](https://github.com/sjh709/movie-info/assets/42454759/f0fc89fb-01ee-4b8e-8fdb-10c4bede79f3)|![카드클릭-모바일](https://github.com/sjh709/movie-info/assets/42454759/bd60cec5-4102-4387-b460-95ea80699dab)|

<br>

### [영화 상세 페이지]
- 영화의 상세 정보를 확인할 수 있습니다.
- Watch Trailer 버튼을 클릭하면 예고편을 볼 수 있습니다.
- 영화의 리뷰를 확인할 수 있습니다.
- 해당 영화와 관련된 영화 리스트를 볼 수 있습니다.
- 관련된 영화를 클릭하면 해당 영화의 상세페이지로 이동합니다.

#### 🖥️ PC
|영화상세페이지|예고편|
|------|------|
|![영화상세페이지-pc](https://github.com/sjh709/movie-info/assets/42454759/6c20f332-f3e2-481a-8e41-58f260fa7ac1)|![예고편-pc](https://github.com/sjh709/movie-info/assets/42454759/dd5f439f-823f-4d0f-a1f8-b1780be2bd55)|

|리뷰|관련영화|관련영화클릭|
|------|------|------|
|![리뷰-pc](https://github.com/sjh709/movie-info/assets/42454759/7dabff8a-a9a6-4a75-b245-0832fabd7ef1)|![관련영화-pc](https://github.com/sjh709/movie-info/assets/42454759/aab6f8f8-70e3-4ac9-b983-48a24c31532b)|![관련영화클릭-pc](https://github.com/sjh709/movie-info/assets/42454759/8c47f77b-37ac-4212-9cba-8d3e27eea239)|

#### 📱 모바일
|영화상세페이지|예고편|리뷰|
|------|------|------|
|![영화상세페이지-모바일](https://github.com/sjh709/movie-info/assets/42454759/7a8c785c-beea-4e2c-8766-a15df4cd4bb0)|![예고편-모바일](https://github.com/sjh709/movie-info/assets/42454759/95775eaa-ea53-406a-93d2-310e40ae02fa)|![리뷰-모바일](https://github.com/sjh709/movie-info/assets/42454759/c6dc75cf-5a51-4398-9594-06c61367ea1a)|

|관련영화|관련영화클릭|
|------|------|
|![관련영화-모바일](https://github.com/sjh709/movie-info/assets/42454759/8dde93d6-3b8a-468c-a417-d3ef70ac92e0)|![관련영화클릭-모바일](https://github.com/sjh709/movie-info/assets/42454759/99bb43cf-3331-4308-b1bf-0d800a368336)|

<br>
