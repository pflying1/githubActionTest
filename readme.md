nas > docker
ci/cd 파이프라인 구축(main 브랜치) 
github action 테스트 입니다. 

# 실행순서 :
 main 브랜치 변경 확인 -> node:20 사용 -> 의존성 설치 -> production build  -> build docker image -> dockerhub login -> docker image push -> deply(ssh연결) -> script 실행 -> git pull 최신사항(하는 이유 nas에 저장해서 쓰고 싶어서) -> dockerhub에서 최신 이미지 받기 -> 기존 컨테이너 멈추고 삭제 -> 새로운 컨테이너 생성 및 실행

# 바꿔도 될거 같은 부분
-> 도커 로그인 및 도커 이미지 build 부분과 도커허브에 push 하는 부분을 위의 내용 git pull 하는 부분 다음 script 부분에 적용해도 될거 같음 
-> github action 에서 테스트를 해주지만 nas의 git 레포에 문제가 생길경우 바로 올라갈 가능성이 있음 위의 방식이 좀더 나은듯 함

# 작성한 순서
.github/workflows/ 경로에 docker-compose.yml 추가
github action repository secret 추가

# Dockerfile 안의 내용 관련 정리
Dockerfile 작성 -> 도커 이미지를 만들기 위한 파일
CMD [ "npm", "start" ] 위 명령어 때문에 도커를 시작하면 서버가 자동으로 올라감
entrypoint.sh 설정인거 같음


# 막힌 부분
1번 문제 : ssh 연결까지는 잘 되었으나 nas 환경이 ubuntu랑 다른거 같음 좀더 찾아 보고 알아볼 것
2번 문제 : nas에 직접 들어가서 docker hub의 이미지를 받아서 하는것은 잘됨

synology nas가 특이한듯함 
aws의 ec2에서는 그냥 docker 명령어 써도 잘되는거 같음
수정 docker $PATH가 필요함 추가 하니까 ssh 연결후 docker 명령어 가능 

