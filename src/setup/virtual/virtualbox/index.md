---
layout: home
---

# VirtualBox
VirtualBox는 무료로 사용 가능한 가상머신 소프트웨어 입니다.  

## VirtualBox란
오라클 VirtualBox는 무료 오픈 소스 가상화 소프트웨어로, 다양한 호스트 운영 체제에서 다양한 게스트 운영 체제를 실행할 수 있도록 지원합니다.

VirtualBox를 사용하면 단일 머신에서 여러 운영 체제를 실행할 수 있으며, 더 나은 성능 및 보안을 위해 가상화된 환경에서 소프트웨어를 실행할 수 있습니다. 또한, 호스트 운영 체제와 게스트 운영 체제 간에 파일을 공유하고 클립 보드를 공유하여 작업 효율성을 높일 수 있습니다.

VirtualBox는 Windows, macOS, Linux 및 Oracle Solaris와 같은 다양한 운영 체제에서 호스트로 실행될 수 있습니다. 게스트 운영 체제로는 Windows, Linux, macOS, Solaris, FreeBSD 등 다양한 운영 체제가 지원됩니다.  

![img](./img/Virtualbox_logo.png)

## 설치
---
VirtualBox 응용프로그램을 오라클 사이트에서 다운로드 받습니다. 호스트 운영체제에 설치를 진행하고, 새롭게 추가된 네트워크를 확인합니다.

* [다운로드](install)
* [설치](install)
* [네트워크](install)


## 가상머신 생성
---
새로운 가상머신을 생성하고, 리눅스를 설치합니다. 
* [VirtualBox 실행](create)
* 가상머신 생성
* 이미지 백업


## 리눅스 설치
리눅스를 설치하기 위해서는 먼저 배포본의 설치 iso 파일을 다운로드 받아야 합니다.

### [우분투 설치](ubuntu)
우분투 리눅스를 설치합니다.
> 참고영상: [이것이 우분투다 설치](https://youtu.be/2Bqp6hy_Wdg)

### Rocky 리눅스 설치
Rocky9 리눅스를 설치합니다.
> 참고영상: [이것이 리눅스다 설치](https://youtu.be/0NYyE-4_wMU)

### CentOS 설치
> 참고영상: [이것이 리눅스다 설치](https://youtu.be/bLlbCq2dRgk)

### Oracle리눅스 설치



## 가상머신 관리

### 스넵샷

VirtualBox의 스냅샷(Snapshot)은 가상 머신의 현재 상태를 저장하고 나중에 해당 상태로 복원할 수 있는 기능입니다. 스냅샷은 가상 머신이 실행되는 중에 언제든지 생성할 수 있으며, 생성된 스냅샷은 이름과 설명과 함께 관리됩니다.  



스냅샷을 생성하면 해당 스냅샷을 기준으로 가상 머신의 상태가 변경됩니다. 이후에 가상 머신의 상태가 변경되더라도 스냅샷에 저장된 상태로 언제든지 복원할 수 있습니다. 이 기능을 통해 가상 머신을 테스트하거나 시스템 구성을 변경하기 전에 안정성을 확인하는 등의 목적으로 사용할 수 있습니다.



### 복제

VirtualBox에서 Clone 기능을 사용하면 기존 가상 머신을 복제하여 새로운 가상 머신을 만들 수 있습니다. 새로운 가상 머신은 원본 가상 머신과 동일한 구성, 데이터 및 설정을 가지고 있으며, 원본 가상 머신의 변경 사항이나 문제가 새로운 가상 머신에 전달되지 않습니다.

Clone 기능을 사용하면 동일한 환경을 빠르게 설정하고, 테스트 및 디버깅 작업을 수행할 수 있습니다. 또한 여러 사용자가 동일한 환경에서 작업할 때 편리합니다.

가상 머신을 복제하려면 VirtualBox 메뉴에서 "머신"을 선택하고, "복제"를 클릭합니다. 그런 다음 새로운 가상 머신의 이름, 위치 및 구성 옵션을 지정합니다. "전체 복제" 옵션을 선택하면 새로운 가상 머신은 원본 가상 머신과 동일한 구성, 데이터 및 설정을 가집니다.



## 사용팁

* 우분트에서 VirtualBox와 클립보드 공유 되지 않을때
> https://eotrade.tistory.com/entry/%EC%9A%B0%EB%B6%84%ED%88%AC%EC%99%80-VirtualBox%EC%99%80-%ED%81%B4%EB%A6%BD%EB%B3%B4%EB%93%9C-%EA%B3%B5%EC%9C%A0-%EC%95%88%EB%90%A0-%EB%95%8C
