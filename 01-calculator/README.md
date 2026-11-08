# 10주차 과제 (영화 관리 시스템) 22200619 임성열 

## 9개의 파일중에서 5번 영화 관리 프로그램 선택

## Project Information
### 선택 이유
- 해당 웹 페이지를 통해서 내가 관심있는 영화를 찾아보고 내가 좋아하는 영화를 즐겨찾기 해서 한번에 정리할 수 있다는 점에 흥미가 있어서 이 주제를 선정하게 됨.

### 주요 기능 3가지
1. 영화 목록 조회 및 검색
- 영화 목록을 조회하고 검색 가능

2. 영화 상세 정보 확인
- 영화 카드를 선택하면 간단 줄거리, 장르, 상영시간, 평점등을 확인 가능

3. 즐겨찾기
- 관심있는 영화를 즐겨찾기를 통해서 한 곳에 모아둘 수 있음
## Installation

1. git clone https://github.com/Dipesh-Katuwal/React-BeginnerProjects.git

2. cd React-BeginnerProjects/05-movie_search_engiene

3. npm install

4. npm run dev


## Source Code Exploration

### Project Structure: 주요 파일 2개의 역할
- main.jsx : App을 화면에 렌더링하고, FavouriteProvider로 감싸 앱 전체에서 즐겨찾기 상태를 공유할 수 있도록 한다.

- App.jsx : 영화 목록, 검색어, 로딩 상태를 관리한다. API를 호출해 영화 데이터를 가져오고, 홈·즐겨찾기·영화 상세 페이지의 경로를 설정한다.

### React Component: 주요 컴포넌트 1~2개의 역할
#### InputField — 검색어 입력

- src/components/InputField.jsx는 검색창과 검색 버튼을 표시한다. 사용자가 검색어를 입력하고 검색 버튼을 누르거나 Enter 키를 누르면, props로 전달받은 setSearch를 호출해 상위 컴포넌트의 검색어 상태를 변경한다.

#### MovieCard — 영화 카드 표시

- src/components/MovieCard.jsx는 props로 받은 movie 데이터를 이용해 영화의 포스터, 제목, 개봉일, 평점을 표시한다. 카드를 클릭하면 해당 영화의 상세 페이지로 이동하며, 카드에 포함된 즐겨찾기 버튼으로 관심 영화를 추가하거나 삭제할 수 있다.

### Code Analysis: 코드 1개(약 5~15줄)를 선택하여 동작 원리 설명

```
async function loadPopularMovies() {
  setLoading(true);
  try {
    const popularMovies = await getPopularMovies();
    setMovies(popularMovies);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}
```

1. setLoading(true)로 데이터를 불러오는 중임을 표시한다.
2. getPopularMovies()를 호출하고, await로 영화 데이터를 받아올 때까지 기다린다.
3. 받아온 데이터를 setMovies()로 저장한다. 상태가 바뀌면 React가 관련 화면을 다시 렌더링해 영화 목록을 보여준다.
4. 오류가 발생하면 catch에서 오류를 받아 상태에 저장한다.
5. finally에서는 성공 여부와 관계없이 setLoading(false)를 실행해 로딩을 종료한다.


## Customizing
1. Text: 서비스 이름과 검색창 한국어 적용
- NavBar.jsx: MovieS → 무비픽, Home → 홈, Favourites → 즐겨찾기

![기존화면(text)](05-movie_search_engiene/capture/text 기존 화면.png)
// 바뀐 사진 추가

2. Style — 상단 메뉴 색상 변경
- 수정 파일: src/components/NavBar.module.css
- 배경색: 어두운 반투명 배경 → 남색 #172554
- 서비스 이름 글자색: #f2f7f3 → 흰색 #FFFFFF
- 메뉴 기본 글자색: 회녹색 #a9beb9 → 검은색 black
- 메뉴 강조색: 민트색 #9de2c4 → 연보라색 #c4b5fd
- 메뉴에 마우스를 올리면 연보라색으로 표시되며, 홈 메뉴는 active 클래스가 있어 기본 상태에서도 연보라색으로 표시됨.

//기존 화면
//수정 화면

3. UI/Data: 현재 표시 중인 영화 개수 추가
- 수정 파일 : Home.jsx
- 변경 전: 검색창과 영화 목록만 표시.
- 변경 후: 검색창 아래에 현재 표시 중인 영화: N편 문구를 추가.

// 기존 화면
// 수정 화면 

## Deployment


## Weekly Review
