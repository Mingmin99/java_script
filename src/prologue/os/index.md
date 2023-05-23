---
layout: home
---

# 운영체제

여러사람들이 하드웨어를 공유하고 사용할 수 있는 운영체제의 등장. 공동으로 사용할 수 있는 컴퓨터 환경.  

하드웨어에 의존하지 않고 응용프로그램이 동작하게 만들기 위함.  
컴퓨터의 하드웨어와 소프트웨어를 제어하여 사용자가 컴퓨터를 쓸수 있게 만들어 주는 프로그램이다.  






## 운영체제란
운영체제(Operating System)는 컴퓨터 시스템에서 하드웨어와 소프트웨어 간의 `인터페이스` 역할을 수행하며, 컴퓨터 자원을 효율적으로 관리하는 시스템 소프트웨어입니다.  

![운영체제란 무엇인가?](./img/image.png)
> 출처: https://velog.io/@zerone015/introduction-to-operating-systems


운영체제는 컴퓨터의 `부팅`과 `종료`, `파일 시스템 관리`, `네트워크 연결` 관리, 보안 관리, `자원 할당 및 스케줄링`, `입출력 장치`와의 상호작용 등의 작업을 수행합니다. 이를 통해 사용자와 응용 프로그램이 하드웨어를 직접 제어할 필요 없이 운영체제를 통해 `간접적으로 컴퓨터 자원을 사용`할 수 있습니다.    



## 운영체제의 역할
운영체제(Operating System, OS)는 컴퓨터 시스템의 핵심적인 소프트웨어로, 하드웨어와 응용 프로그램 사이에서 인터페이스 역할을 수행합니다. 주요한 역할은 다음과 같습니다.

* 자원 관리: CPU, 주기억장차 입출력장치 등의 컴퓨터 자원관리를 한댜. 컴퓨터 자원(하드웨어, 메모리, 입출력 장치 등)을 효율적으로 관리하고 할당하는 역할을 수행합니다.

* 프로세스 관리: 프로그램의 실행을 제어한다. 작업의 순서를정하며 입출력 연산을제어한다.프로그램의 실행을 제어하고 관리하며, 프로세스 간의 자원 공유 및 협력을 지원합니다.

* 메모리 관리: 시스템 전체의 메모리를 관리하고 할당하여 프로세스가 안정적으로 실행되도록 지원합니다.

* 파일 시스템 관리: 데이터와파일의 저장을관리한다. 파일 및 디렉토리를 관리하고, 입출력과 관련된 파일 시스템의 동작을 제어합니다.

* 보안 관리: 시스템 보안을 유지하고, 사용자 및 프로그램의 권한을 관리하여 시스템의 안전성을 유지합니다.

* 네트워크 관리: 네트워크와 관련된 기능을 지원하며, 다양한 네트워크 프로토콜을 구현합니다.

이러한 역할을 수행하여, 운영체제는 하드웨어와 응용 프로그램 사이에서 중재자 역할을 수행하며, 컴퓨터 시스템의 안정성과 성능을 유지하고 개선하는 역할을 수행합니다.  




## 자원 관리
운영체제의 자원 관리(Resource Management)는 컴퓨터 시스템에서 사용되는 자원들을 효율적으로 관리하는 것을 말합니다. 이는 시스템의 `성능`과 `안정성`을 유지하며, 프로그램이 필요한 자원을 적절하게 `할당`받아 작업을 수행할 수 있도록 해줍니다.

자원 관리는 크게 다음과 같은 세 가지 영역으로 나눌 수 있습니다.

* 프로세서(CPU) 관리: CPU는 하나의 프로세스만 실행할 수 있으므로, 여러 개의 프로세스가 동시에 실행될 때 이를 조절해야 합니다. 이를 위해 운영체제는 프로세스 `스케줄링` 알고리즘을 이용하여 프로세스의 `우선순위`나 실행 가능 시간 등을 조절합니다.

* 메모리 관리: 프로그램이 실행될 때 필요한 `메모리를 할당`하고, 실행이 끝난 후에는 해당 메모리를 반환하여 다른 프로그램이 사용할 수 있도록 합니다. 이를 위해 운영체제는 `가상 메모리(Virtual Memory)`를 사용하여 실제 메모리보다 큰 메모리를 사용하도록 합니다.



### 입출력장치 관리: 

프로그램이 필요로 하는 `입출력장치(I/O Device)`를 할당하고, 여러 프로그램이 동시에 입출력을 요청할 때 이를 조절하여 충돌을 방지합니다. 이를 위해 운영체제는 I/O 스케줄링 알고리즘을 이용하여 여러 프로그램이 공평하게 입출력을 사용할 수 있도록 합니다.  



![img](./img/what-is-the-operating-system-2.png)

> 출처: https://imbf.github.io/computer-science%28cs%29/2020/08/21/What-is-The-Operating-System.html







## 운영체제의 보완관리
운영체제의 보안 관리(Security Management)는 컴퓨터 시스템의 `보호`와 관련된 기능을 제공하며, 시스템의 안전성을 유지하고 중요한 데이터와 리소스를 보호합니다.

보안 관리는 크게 다음과 같은 영역으로 나눌 수 있습니다.

* 접근 제어: 사용자가 시스템에 접근할 때 `인증` 절차를 거쳐 권한을 부여하고, 허가된 사용자만이 시스템 리소스에 접근할 수 있도록 합니다.

* 암호화: 중요한 데이터나 파일을 암호화하여 외부로부터의 침입을 방지합니다.

* 바이러스 및 악성 코드 방지: 악성 코드로부터 시스템을 보호하고, 바이러스와 같은 악성 코드가 시스템에 침투하는 것을 막습니다.

* 로깅 및 검사: 시스템의 모든 동작을 `기록`하고, 추적할 수 있도록 하여 시스템의 보안을 강화합니다.

* 네트워크 보안: 네트워크 상에서 정보를 안전하게 전송하고, 외부로부터의 침입을 방지하기 위해 다양한 보안 프로토콜을 지원합니다.




## 운영체제 네트워크 관리
운영체제는 네트워크 관리(Network Management) 기능을 제공하여 네트워크 상에서 컴퓨터들이 원활하게 `통신`할 수 있도록 지원합니다.

네트워크 관리는 크게 다음과 같은 영역으로 나눌 수 있습니다.

* 프로토콜 지원: 운영체제는 다양한 네트워크 프로토콜을 지원하여 컴퓨터들이 서로 통신할 수 있도록 합니다. 예를 들어, TCP/IP, HTTP, FTP 등의 프로토콜을 지원합니다.

* 네트워크 설정 및 구성: 운영체제는 네트워크 인터페이스 카드(NIC)와 같은 하드웨어를 자동으로 인식하고, IP 주소, 서브넷 마스크, 게이트웨이 등의 네트워크 설정을 수행합니다. 또한, DNS(Domain Name System)과 같은 네트워크 서비스를 구성합니다.

* 네트워크 보안: 운영체제는 네트워크 상에서 정보를 안전하게 전송하고, 외부로부터의 침입을 방지하기 위해 다양한 보안 프로토콜을 지원합니다. 예를 들어, SSL(Secure Socket Layer) 프로토콜을 이용하여 데이터를 암호화하고, VPN(Virtual Private Network)을 이용하여 안전한 통신을 지원합니다.

* 네트워크 모니터링: 운영체제는 네트워크 상태를 모니터링하고, 네트워크 장애가 발생할 경우 이를 신속하게 감지하고 처리합니다. 또한, 네트워크 상태를 통계적으로 분석하여 네트워크 성능을 최적화합니다.


