getElementById() : id 하나의 값을 반환

getElementsByClassName() : 클래스 네임, array에 할당

getElementsByTagName() : array에 할당

그리고 querySelector()
 : CSS 셀렉터처럼 쓸 수 있기 때문에 매우 간편하고 유용하다

 class, id 모두 사용 가능. 해당 클래스/id 특정 태그들 검색 가능
하지만, 동일한 class가 있다면 전부를 가져오는 것이 아니라 가장 첫번째의 element만 가져온다.

같은 조건의 것을 모두 가져오고 싶다면, querySelectorAll() 를 사용
단, array의 상태로 할당!


const title = document.querySelector(".hello h1");
title.innerText = "hello";
