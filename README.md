#### build Dockerfile
```
docker build -t test:dev .  
```

#### build run docker
```
docker run -v ~/code/test:/test  -p 3001:3000 --rm test:dev  
```

####  access container
```
docker exec -it containerId /bin/sh
```

####  remove images and containers
```
docker stop $(docker ps -aq)    
docker rm $(docker ps -aq)    
docker rmi $(docker images -q)
```


#### reference
https://mherman.org/blog/dockerizing-a-react-app/
