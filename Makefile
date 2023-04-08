JEKYLL_VERSION := 3.8

.PHONY: serve
serve:
	sudo docker run --rm \
	-p 4001:4001 \
	-p 4000:4000 \
	--volume="$(PWD):/srv/jekyll:Z" \
	-it jekyll/jekyll:$(JEKYLL_VERSION) \
	jekyll serve --livereload --livereload_port 4001
.PHONY: build
build:
	sudo docker run --rm \
  	--volume="$(PWD):/srv/jekyll:Z" \
  	-it jekyll/jekyll:$(JEKYLL_VERSION) \
  	jekyll build

.PHONY: clean
clean:
	rm -rf _site/