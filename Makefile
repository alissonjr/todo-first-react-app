node.install:
	docker-compose run --rm web npm install

node.update:
	docker-compose run --rm web npm update

react.start:
	docker-compose run --rm web npm start
