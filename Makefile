run:
	@docker-compose up --build
node.install:
	@docker-compose run --rm web npm install

node.update:
	@docker-compose run --rm web npm update
