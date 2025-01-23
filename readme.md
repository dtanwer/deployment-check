
Start minikube with the following command:

```
minikube start
```


kubectl apply -f filename.yaml  -> to create a resource from a file 
kubectl get pods -> to get all the pods

kubectl get pods -o wide -> to get all the pods with more details


kubectl get svc -> to get all the services

kubectl get secrets -> to get all the secrets

kubectl get configmaps -> to get all the configmaps

kubectl get deployments -> to get all the deployments

kubectl get rs -> to get all the replica sets

kubectl get nodes -> to get all the nodes

kubectl get pv -> to get all the persistent volumes

kubectl logs podname -> to get the logs of a pod

kubectl describe pod podname -> to get the details of a pod


minikube service servicename -> to open the service in the browser




docker tag demo-image ghcr.io/dtanwer/deployment-check:beta-> to tag an image

docker push ghcr.io/dtanwer/deployment-check:beta -> to push an image to github container registry