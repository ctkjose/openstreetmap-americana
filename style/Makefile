clean:
	rm -rf sprites build icons/us_* rebusurance.zip
	rm -rf build

rebusurance.zip:
	curl -s -L https://github.com/1ec5/rebusurance/releases/download/v1.0.0/rebusurance-v1.0.0.zip --output rebusurance.zip


build/rebusurance-v1.0.0: rebusurance.zip
	unzip -q rebusurance.zip "*/image2d/*.svg" -d build

sprites: build/rebusurance-v1.0.0
	scripts/import_rebusurance.sh
	mkdir -p sprites
	npx spritezero sprites/sprite@2x icons/ --retina
	npx spritezero sprites/sprite icons/

config.js:
	cp config.default.js config.js

code_format:
	npx prettier --write .

build/maplibre-js:
	mkdir -p build/maplibre-js
	git clone https://github.com/wipfli/maplibre-gl-js build/maplibre-js

build/maplibre-js/dist/maplibre-gl.js: build/maplibre-js
	cd build/maplibre-js; git checkout 270a47f473ba51375a7df4076ee271777cc04467; \
          npm ci && npm run build-prod-min;

js/maplibre-gl.js: build/maplibre-js/dist/maplibre-gl.js
	cp build/maplibre-js/dist/maplibre-gl.js js/maplibre-gl.js

run: sprites config.js js/maplibre-gl.js
	npx browser-sync -w --port 1776
