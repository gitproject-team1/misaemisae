# ☁ 미세먼지의 모든것, 미세미세 ☁

**대기질 공공 API를 활용한 React 미세먼지 웹앱 미세미세**

![image](https://user-images.githubusercontent.com/35508595/215952575-0515ac86-75d5-4041-9a71-549bc5c54368.png)

- 배포 링크 : [미세미세](https://misaemisae.netlify.app/)
<br/>

## 📅 개발 기간

- 2023/01/12 ~ 진행중

## ⚙ 사용기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

<br/>

## 🧑‍🤝‍🧑 팀원소개 and 역할

<table>
<thead>
<tr>
<th align="center">노준영</th>
<th align="center">임예지</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/ghgt1"><img src="https://avatars.githubusercontent.com/u/35508595?v=4" width="150" style="max-width: 100%;"></a></td>
<td align="center"><a target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/1myeji"><img src="https://avatars.githubusercontent.com/u/106291546?v=4" width="150" style="max-width: 100%;"></a></td>
</tr>
</tbody>
</table>


### 노준영

- 웰컴 페이지 구현
- 하단 Nav바 구현
- 미세먼지 순위 페이지 구현


### 임예지

- 메인 페이지 구현
- 즐겨찾기 기능, 페이지 구현

## 주요 구현 기능

- 현재 지역(default) 설정 가능. 이때 해당값을 `localstorage`에 저장하여 첫 설정이후로 메인화면에서 바로 해당 지역 정보를 보여주게 구현하였습니다.

<p align="center">

![image](https://user-images.githubusercontent.com/35508595/215954836-5302fff6-a98c-4f37-9d4c-13045ef36f54.png)
</p>

- 물론 정보 변경 기능을 통하여 해당 위치를 변경할수있습니다.
- 즐겨찾기 기능을 통하여 관심있는 지역들을 즐겨찾기에 추가하고, 하나의 페이지에서 모아볼수있습니다.

<p align="center">

![image](https://user-images.githubusercontent.com/35508595/215954911-750250ac-5d16-4be8-828a-0f2d9c32272c.png)
</p>

<p align="center">

![image](https://user-images.githubusercontent.com/35508595/215954930-bcbaa7b4-195b-4a32-9cbb-a0beb0239088.png)
</p>
- 미세먼지 순위 기능을 통하여 전국 주요 지역들의 미세먼지를 한눈에 볼수있으며, 좋은순 나쁜순으로 정렬이 가능합니다.

<p align="center">

![image](https://user-images.githubusercontent.com/35508595/215954976-4aa5d5d9-f8e1-4122-998c-1fa5252f9f2c.png)
</p>

### 현재 구현중(예정)인 기능들

- 현재의 데이터는 한시간단위로 발표되는값을 가져온다. 그러나 만약 미세먼지 조회중 시간대가 넘어가버리면(ex 07:59에는 07시 데이터, 08:00에는 08시 데이터를 보여줘야함) 최신의 데이터를 반영해야한다. 따라서 이러한 실시간단위의 정보업데이트를 반영하기 위해 React-query를 사용해보고자 한다.
- 메인페이지에서 다른 지역정보를 바로 확인가능하게 검색기능을 
