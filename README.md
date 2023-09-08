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

### 1. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
### 🤔 디바운싱 vs 쓰로틀링
**디바운싱 (Debouncing):**

디바운싱은 연속적인 이벤트 중 마지막 이벤트 발생 이후 일정 시간(대기 시간)이 지나야 작업이 실행되도록 하는 기술. 예를 들어 검색창에 입력이 있을 때, 디바운싱을 사용하면 사용자가 입력을 완료하기 전까지 API 호출을 지연시킬 수 있다.

👍 장점:

> 1. 사용자 입력을 기다리는 동안 불필요한 API 호출을 방지하므로 네트워크 및 서버 부하를 줄일 수 있다.
> 2. 사용자가 입력을 지속적으로 수정하는 경우에도 마지막 입력 이후에만 API를 호출하므로 효율적이다.
> 3. 입력을 완료하기 전까지 기다리지 않고 중간 결과를 제공할 수 있어서 사용자 경험을 향상시킬 수 있다.

👎 단점:

> 1. 일정 시간 동안 API 호출이 지연되기 때문에 실시간 업데이트가 필요한 경우에는 적합하지 않을 수 있다.
> 2. 대기 시간 설정이 중요한데, 만약 너무 길게 설정하면 사용자 경험이 저하될 수 있다.

**쓰로틀링 (Throttling):**

쓰로틀링은 연속적인 이벤트에 대해 일정 시간 간격으로 작업을 실행하도록 하는 기술. 지속적으로 발생하는 이벤트에 대한 작업을 제어할 때 유용하다.

👍 장점:

> 1. 지속적으로 발생하는 이벤트를 일정한 간격으로 제한하여 불필요한 작업을 방지한다.
> 2. API 호출 빈도를 제어하므로 서버 및 클라이언트 부하를 줄일 수 있다.
> 3. 빠른 실시간 업데이트가 필요한 경우에도 정기적인 간격으로 작업을 실행할 수 있다.

👎 단점:

> 1. 사용자 입력이 빠르게 발생할 경우에도 일정한 간격으로 작업이 실행되므로 사용자 경험에 영향을 미칠 수 있다.
> 2. 일정한 간격으로 작업을 실행하기 때문에 디바운싱보다는 더 빈번한 작업이 실행된다.

### 😎 결과

요약하자면, 저희 팀원들은 상황에 따라 적절한 방법을 쓰는 것의 효율성을 고려하여 **사용자 입력을 기다려야하는 지금과 같은 경우에는 디바운싱을 사용하는 것이 불필요한 API 호출을 방지**하는 면에서 더 적절하다고 판단했습니다.

아래 사진은 저희 팀원들의 구현 방법입니다.

![image](https://github.com/preOnBorading-Idle/pre-onboarding-12th-3-18/assets/122953242/ab1a4273-613b-405b-89af-e2516290c07e)

팀원들과 논의 한 결과, setTimeout을 사용해서 구현한 디바운싱 로직을 useDebounce 훅으로 분리하여 적용하는 방법을 best practice로 채택하였습니다.

```ts
function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [value, delay]);

	return debouncedValue;
}
```

---


## 📁 디렉토리 구조
```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂loadingSpinner
 ┃ ┗ 📂SearchResults
 ┣ 📂constants
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂MainPage
 ┃ ┗ 📂NotFoundPage
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
