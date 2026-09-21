NPM_TOKEN=ghp_n6714iWz1sWvjW7D9wM9F6G6J4T1C6J4O2L2

#build
build:
	npm run build

#pack na npm
pack: build
	npm pack

#publicar na npm
publish: build
	npm publish --access public

#configurar token npm
config: build
	npm config set //registry.npmjs.org/:_authToken {NPM_TOKEN}