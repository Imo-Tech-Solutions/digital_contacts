build-dev:
	ENV=development docker build -t imotechsl/dit-web:development -f Dockerfile.dev .


build-prod:
	ENV=production docker build \
	-t imotechsl/dit-web:production \
	--build-arg NGINXFILE=./nginx/default.conf \
	-f Dockerfile.prod .

run-dev:
	ENV=development docker compose -f docker-compose-dev.yml up

run-prod:
	ENV=production docker compose -f docker-compose-prod.yml up 


push-image:
	docker push imotechsl/dit-web:production