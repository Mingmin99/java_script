---
layout: home
---

# 스크립트

## 스크립트란?
---
스크립트와 프로그램의 차이점은 무엇일까요?  

셀에서의 스크립트는 하나의 파일 안에 명령어들을 적어두고, 이를 순차적으로 해석하면서 실행하는 것을 말합니다. 리눅스에서 대표적인 스크립트로는 `셀 스크립트`, `perl 스크립트`등이 있습니다.  

반대로 프로그램은 소스코드를 컴파일하여, 실행파일로 만들어서 구동하는 방법을 말합니다.

* 셀 스크립트 : 단순한 명령들의 집합
* 셀 프로그램 : 변수, 조건, 루프등의 제어기능을 추가하여 프로그램 처럼 동작하는 스크립트



## 서브 셀
---
현재 로그인된 사용자의 셀을 로그인 셀이라고 합니다. 하나의 셀은 또 다른 셀을 실행하여 동작을 할 수 있습니다. 
이때 이를 서브 셀이라고 합니다.

### 서브셀 진입
```bash
hojin@hojin3:~$ /bin/bash
hojin@hojin3:~$
```

현재 로그인 셀(`bash`)에서 또 다른 `bash` 셀을 실행하여, 서브셀 상태가 되었습니다. 

### 서브셀 종료하기
```bash
hojin@hojin3:~$ exit
exit
```

### 해쉬뱅
---
스크립트에서 `#`는 주석을 의미합니다. 하지만, 스크립트 도입부에 다음과 같이 작성한 라인은 Bash Shell에서 특별히 의미가 정해진 것으로 합니다. 이를 셔뱅, 해시뱅 등으로 불리웁니다.
```bash
#!/bin/bash
```


## 셀 스크립트 작성
---
셀 스크립트를 작성하는 방법을 알아 봅니다.

### 쉘 스크립트란
리눅스 명령들을 뫃아 놓은 하나의 파일을 말합니다.

* 별도로 컴파일하지 않고 텍스트 파일 형태로 셸에서 바로 실행
* 셸 스크립트는 주로 vi 에디터나 gedit로 작성

### 쉘 스크립트의 실행
쉘 스크립트를 실행하기 위해서는 파일에 실행 권환을 부여해 주어야만 합니다. 

```bash
chmod +x 스크립트
```
스크립트는 기본적으로 첫줄부터 순차적으로 해석하면서 실행이 됩니다.


실행하기 위해서는 스크립트 파일이 위치하는 동일한 위치에서만 가능합니다.
이때는 실행할때는 스크립트 명만 입력하면 됩니다.
```bash
스크립트
```

만일 다른 경로에 스크립트가 있다면, 그 위치의 실행 경로까지 모두 적어 주어야 합니다.
하지만, 이러한 입력들을 불편합니다. 이를 보다 쉽게 하기 위하여 환경변수 `PATH`를 응용하면 좋습니다.

path는 스크립트나 명령을 실행할때 현재의 위치에 없으면, path에 기록된 경로들을 모두 탐색하여 실행을 해주게 됩니다.

실습:
사용자 디렉터리에 bin 폴더를 하나 생성합니다. 그리고 이곳에 스크립트 파일들을 작성합니다. 생성한 bin 디렉터리를 path에 등록합니다.

```bash
PATH=$PATH:~/bin
```


## 실습 Hello World

```bash
hojin@hojin3:~$ cd bin
hojin@hojin3:~/bin$ vi hello.sh
hojin@hojin3:~/bin$ ls
hello.sh
hojin@hojin3:~/bin$ chmod +x hello.sh
hojin@hojin3:~/bin$
```

bin 디렉터리에서 실행해 봅니다.
```bash
hojin@hojin3:~/bin$ hello.sh
hello world!
```

이번에는 다른 디렉터리에서도 실행해 봅니다.
```bash
hojin@hojin3:~/bin$ cd ..
hojin@hojin3:~$ hello.sh
hello world!
```


## 실습2
스크립트를 작성할때는 `vi`에디터 또는 `gedit`와 같은 편집기를 사용합니다.

name.sh
```
#!/bin/sh
echo "사용자 이름: " $USER
echo "홈 디렉터리: " $HOME
exit 0
```
* 1행: 첫 행에 반드시 써야 하며, 특별한 형태의 주석(#!)으로 배시셸을 사용하겠다는 의미
* 2행: echo는 화면에 출력하는 명령어. 먼저 ‘사용자 이름 :’이라는 글자를 출력하고 옆에 $USER라는 환경 변수의 내용을 출력
* 4행: 종료 코드를 반환. 0은 성공을 의미

```bash
hojin@hojin3:~/bin$ name.sh
사용자 이름:  hojin
홈 디렉터리:  /home/hojin
```

