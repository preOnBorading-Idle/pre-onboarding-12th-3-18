# 원티드 프리온보딩 프론트엔드 12차 3주차 과제 - 18팀

## 📚 과제

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 3주차 과제의 Best Pratice를 만들고 제출해주세요.

> Best Practice란 팀원들이 각자의 구현 방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것

## 🚀 실행 방법 및 프리뷰

```bash
$ npm install
$ npm start
```
### 구현 기능
- [x] 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
  - [x] 검색어가 없을 시 “검색어 없음” 표출
- [x] API 호출별로 로컬 캐싱 구현
    - [x] 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - [x] expire time을 구현
- [x] 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- [x] API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
- [x] 키보드만으로 추천 검색어들로 이동 가능하도록 구현
  
### 배포 링크

✌️ 개인의 서버에 올린 작업물로 2023년 10월부터는 접속이 불가 할 수 있는 점 양해바랍니다.

🔗 [배포 링크](배포주소-수정)

### 구현 영상

|            (구현 영상제목 - 수정)     |       (구현 영상제목 - 수정)      |
| :-------------------------: | :-----------------------------------------------: |
| <img width="400" alt="issueList_gif" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/4b3e2e9f-51a7-4e84-9ed6-eee60723b67a" /> | <img width="400" alt="issueDetail_gif" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/4696107f-d5ed-4bce-8fcd-6c452deeb740" />|


|                   (구현 영상제목 - 수정)            |     (구현 영상제목 - 수정)   |
| :----------------------------: | :-----------------------------------: |
| <img width="400" alt="404" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/ffa83a92-6ca6-4535-a36b-de036de37951"> | <img width="400" alt="notopen" src="https://github.com/wanted-pre-onboarding-12th-11/pre-onboarding-12th-2-11/assets/124250465/14d37aff-5be1-426e-9c61-16d9a92c2f3a"> |

## ✨ Best Practice 논의

### 논의 내용
#### 

## 📁 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂IssueDetail
 ┃ ┗ 📂IssueList
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┃ ┣ 📂controllers
 ┣ 📂pages
 ┣ 📂stores
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```

## ✅ 팀 컨벤션
### 브랜치 형식
    ```jsx
    main
    |_develop
    	|_feature/a
    	|_feature/b
    	|_feature/c
    ```
### 커밋 메세지
- 수정
    
    | 종류  | 의미 |
    | --- | --- |
    | feat | 새로운 기능을 추가할 경우 |
    | fix | 버그를 고친 경우 |
    | docs | 문서를 수정한 경우 |
    | style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
    | refactor | 프로덕션 코드 리팩토링 |
    | chore | 기타 변경사항 |
    | test | test 관련한 코드의 추가, 수정한 경우 |
    | design | CSS 등 사용자 UI 디자인 변경 |
    | comment | 필요한 주석 추가 및 변경 |
    | rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
    | remove | 파일을 삭제하는 작업만 수행한 경우 |
    | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |

## 기술스택 

### Environment

<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visual Studio code-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white"> 

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library
<img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Communication

<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

### Deploy

<img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">

## 팀원 소개
|          [@richcollector](https://github.com/richcollector)           |          [@jungkyuYang](https://github.com/jungkyuYang)          |          [@lyeejj](https://github.com/lyeejj)         |          [@junhui324](https://github.com/junhui324)            |         [@heowan](https://github.com/heowan)           |
| :------------------------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------: |
| ![richcollector의 프로필 사진](https://github.com/richcollector.png) | ![jungkyuYang 프로필 사진](https://github.com/jungkyuYang.png) | ![lyeejj의 프로필 사진](https://github.com/lyeejj.png) | ![junhui324의 프로필 사진](https://github.com/junhui324.png) | ![heowan의 프로필 사진](https://github.com/heowan.png) |


<!--- [김태완](https://github.com/richcollector)     |  [양정규](https://github.com/jungkyuYang)    |   [이윤주](https://github.com/lyeejj)            |  [장준희](https://github.com/junhui324)             |[허완](https://github.com/heowan)|
| :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/richcollector" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/jungkyuYang" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/lyeejj" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/junhui324" width="130" height="130"> | <img src="https://avatars.githubusercontent.com/heowan" width="130" height="130"> | --->
