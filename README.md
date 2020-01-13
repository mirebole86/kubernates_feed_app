# kubernates_feed_app

Application contains 4 parts.
1. User service used to manage user action such as  login and registration
2. Feed service used to manage user feeds, such as feed creation, list feeds etc. 
3. Frontend service is ionic app
4. Reverseproxy contains scripts for docker container and kubernate.


TO  build all containers run command in the reverseproxy:
docker-compose -f docker-compose-build.yaml build --parallel


To start container locally run command in the reverseproxy:
docker-compose up


after eksctl and kubectl commands are set, 
create cluster in AWS:

eksctl create cluster -f cluster.yaml

afterwards run apply all scripts in reverseproxy/k8s scritps with following command:
kubectl apply -f file.yaml

