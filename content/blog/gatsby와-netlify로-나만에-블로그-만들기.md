---
path: Gatsby와 Netlify로 나만에 블로그 만들기
date: 2022-10-09T16:20:39.173Z
title: Gatsby와 Netlify로 나만에 블로그 만들기
thumbnail: ../assets/gatsby-icon.png
description: Gatsby를 기반으로 Netlify로 CMS를 관리 하는 블로그 만드는 방법을 순서대로 가르쳐 드리겠습니다. 스타일은
  부분은 Tailwind를 통해서 만들었습니다.
category: javascript
tags:
  - Gatsby
  - Netlify
  - React
---
블로그를 한번 만들어서 시작을 하고 싶은데 아직은 크게 돈이 안드는 방법으로 블로그를 운영할 방법을 찾다 보니 Gatsby와 Netlify cms를 사용하게 되었습니다. 블로그를 만드는 방법 부터 만들다 배운 점 까지 다 한번에 알아 보도록 하겠습니다.

목차

* Gatsby는 무엇인가 ?
* Netlify는 무엇이고 왜 필요한가?
* 블로그 만드는데 필요한 NPM packages
* 마크다운 스타일 적용하기
* Editor Draft 적용하기
* Netlify 배포해보기
* Graphql 플레이 그라운드 배워보기
* 블로그에 코멘트 기능 추가하기

**Gatsby는 무엇인가?**

Gatsby는 static page generation을 도와주는 React 기반에 framework입니다. 모든 페이지를 static으로 미리 만들어지기 때문에 페이지 페이지 로딩 속도도 아주 빠릅니다. 데이터는 graphql 기반으로 페이지로 가져오게 됩니다. 많은 cms와 연결해서 사용 할 수 있습니다.

**Netlify는 무엇인가 ?**

개발팀에 워크플로우를 간편하게 만들어주는 플랫폼입니다. Netlify는 호스팅, 파이프라인, static page 프리뷰 등을 제공 합니다. 또한 netlify는 많은 호스팅 사트에서는 유료 서비스인 SSL certificates을 무료로 제공합니다.(Let's encrypt).

Gatsby와 Netlify를 선택한 이유?

Gatsby는 꽤 오랫동안 유지 보수되고 있는 프로젝트이고 많은 플러그 인들이 존재 하기 때문에 여러 기능들을 간편하게 설치가 가능하고 Netlify를 통해서 블로그를 관리하면 도메인 구매 비용 말고는 비용도 발 생하지 않기 때문. 또한 예전에 몇번 개인 프로젝트를 gatsby와 netlify를 사용해본 경험이 있기 때문에 Learning curve도 적을 것 같아서 선택하게 되었다.

프로젝트 셋업 및 사용하는 NPM pakcages 설명

먼저 [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms) 프로젝트 레포에 가서 Use this template을 클릭해서 가져 옵니다.



본인이 원하는 리포 이름을 적고 맨 아래 초록 버튼을 누르면 간단하게 리포가 복사 됩니다.



블로그 포스트 로컬에서 적어보기

마크다운 스타일 정하기

Netlify 배포해보기

이제 간단한 셋업을 마쳤으니 Netlify에 배포를 해보려고 한다.