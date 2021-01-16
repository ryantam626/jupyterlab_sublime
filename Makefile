.ONESHELL:
.SHELLFLAGS = -ec
.PHONY: help dev-install
SHELL := /bin/bash
.DEFAULT_GOAL: help

help:
	@awk -F ':|##' '/^[^\t].+?:.*?##/ {\
	printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
	}' $(MAKEFILE_LIST)


conda-install:  ## Use conda to install dev dependencies using unpinned env specification
	conda env create -f environment.yml --force --name jupyterlab-sublime

conda-freeze:  ## Use conda to freeze the current env available
	conda env export | grep -v prefix: > environment-frozen.yml

conda-install-frozen:  ## Use conda to install dev dependencies using pinned env specification - subject to repodata.json changes
	conda env create -f environment-frozen.yml --force --name jupyterlab-sublime

dev-install:
	pip install -e .
	jupyter labextension develop . --overwrite
	jlpm run build

dev-watch-labextension:  ## Recompile labextension on changes
	cd $(LABEXTENSION_PATH)
	npm run watch

lint:  # Run linters
	cd $(LABEXTENSION_PATH)
	npm run lint

format:  # Run formatters
	cd $(LABEXTENSION_PATH)
	npm run format

publish:  # Publish
	bin/publish.sh
