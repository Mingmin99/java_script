---
layout: home
---

# 리다이렉션
리눅스 시스템에서 리다이렉션(Redirection)은 표준 입력, 표준 출력 및 표준 오류 출력을 다른 위치로 이동시키는 프로세스입니다.

## 리다이렉션이란?
리눅스에서 리다이렉션(Redirection)은 프로그램의 출력(standard output)이나 입력(standard input)을 변경하는 것을 의미합니다.
일반적으로 명령행(shell)에서 사용됩니다. 
리다이렉션은 키보드나 마우스 외부에서의 데이터 흐름을 프로그램의 표준 입력으로 이동하거나, 프로그램이 생성한 출력을 모니터 등의 표준 출력 장치 대신 파일 등의 다른 출력 장치로 이동시킬 수 있습니다.



## 핸들이름 및 번호

| STDIN     | 0     | 표준 입력이 키보드에서 보내짐.                               |
| --------- | ----- | ------------------------------------------------------------ |
| STDOUT    | 1     | 표준 출력이 명령어 쉘 창으로 보내짐.                         |
| STDERR    | 2     | 표준 에러 출력이 명령어 쉘 창으로 보내짐.ex. netstat > koromoon.txt > 2 >& 1netstat 명령어 결과를 에러와 함께 koromoon.txt 파일에 보내짐. |
| UNDEFINED | 3 ~ 9 | 어플리케이션 지정 핸들                                       |

## 표준 입출력

![image-20230416170053637](./img/image-20230416170053637.png)

### `>` : 표준 출력을 파일로 저장할때

명령어 출력을 화면에 보이기보다는 지정된 파일이나 장치로 보냄.

파일이 존재하지 않는다면 새로운 파일을 만들고 이미 같은 이름의 파일이 존재한다면 덮어 쓰임.



예를 들어, `ls > file.txt` 명령은 `ls` 명령의 출력을 `file.txt` 파일에 덮어쓰기합니다. 



* `>>`

파일이 이미 존재하는 파일일 때 덮어쓰기보다는 지정된 파일에 명령어 결과를 추가함.

파일이 존재하지 않으면 지정된 이름으로 파일을 생성시킴.



### `<` : 표준 입력을 파일에서 가져오기

키보드보다는 지정된 파일에서 명령어를 위한 입력을 가져옴.



예를 들어, `grep pattern < file.txt` 명령은 file.txt 파일에서 입력을 읽어 pattern과 일치하는 라인을 찾습니다.    



## 오류출력
리다이렉션은 다음과 같은 기호를 사용합니다.

* `2>` : 표준 오류 출력을 지정한 파일에 덮어쓰기
* `2>>` : 표준 오류 출력을 지정한 파일에 추가하기

`command > file.txt 2>&1` 명령은 표준 출력과 표준 오류 출력을 file.txt 파일에 덮어쓰기합니다.