---
path: 깃허브에-ssh-key-등록하기
date: 2022-11-11T14:09:51.814Z
title: 깃허브에 ssh key 등록하는 법
thumbnail: ../assets/screen-shot-2022-10-15-at-5.27.19-pm.png
description: 맥북을 새로 사고 깃허브에 내 ssh-key를 등록하는 방법을 알아 보겠습니다.
category: Github
---
깃허브에서 클론을 하거나 코드를 push 하기 위해서는 github에 내가 사용하고 있는 기기에 ssh가 github에 등록되어 있어야 합니다. 먼저 맥북을 새로 받았을 때 ssh-key가 존재 하지 않기 때문에 먼저 ssh-key를 만드는 법을 알아보고 다음에 github에 추가 해보도록 하겠습니다. 

SSH와 ssh-key에 대해서 간단하게 설명 하고 넘어 가겠습니다.

SSH는 Secure Shell Protocal에 약자로 깃허브가 사용자를 쉽게 인증하고 알수 있기 때문에 

우리가 만들 ssh-key github에 등록하면서 사용자를 인증 하는 것 입니다. 그리고 커밋을 하면 출처도 기록으로 남기 때문에 필요 합니다.



먼저 터미널을 열어 봅시다. 저 같은 경우는 iterm2를 사용하고 있습니다.

먼저 ~/.ssh 디렉토리로 가겠습니다.

\`\``

cd ~/.ssh

ssh-keygen -t ed25519 -C "이메일주소@example.com"

\`\``

다음으로는 파일 이름을 정할 수 있습니다.

\`Enter file in which to save the key (/Users/fiddlest/.ssh/id_rsa): intel_rsa\`

아무 것도 입력하지 않으면 id_rsa로 저장됩니다. 하지만 ssh-key가 여러게가 필해서 이름을 변경하고 싶다면 위와 같이 원하는 이름을 입력하면 됩니다.

그리고 다음으로는 passphrase를 입력하면 됩니다. (비밀 번호 라고 생각 하면 됩니다.)

이제 \`ls\`를 입력하면 내 id_rsa 파일이 있는 것을 확인 할 수 있습니다.

이제 ssh-key를 github에 등록해야 합니다.



## Gihub-Cli 설치하기