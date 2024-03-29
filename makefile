.PHONY: build upload switch deploy serve

DATE=$(shell date +%Y-%m-%d)
GIT_HASH=$(shell git rev-parse --short HEAD)

COLOR_BOLD=\033[1m
COLOR_RESET=\033[0m

NAME=satisfactory
VERSION=release_$(DATE)_$(GIT_HASH)
VERSION_TAR=$(VERSION).tar.gz

LOCAL_SOURCES=dist/sod-satisfactory/browser
REMOTE_SOURCES=$(SOD_PATH_SOURCES)/$(NAME)
REMOTE_PUBLIC=$(SOD_PATH_PUBLIC)/soddi.de/$(NAME)

all: build

deploy: build upload switch

serve:
	yarn run serve

build:
	@echo "$(COLOR_BOLD)Stage: Building$(COLOR_RESET)"
	yarn run build

upload:
	@echo "$(COLOR_BOLD)Stage: Uploading$(COLOR_RESET)"
	tar -czf dist/$(VERSION_TAR) --cd $(LOCAL_SOURCES) .
	ssh $(SOD_SERVER) "rm -rf $(REMOTE_SOURCES)/$(VERSION) && mkdir -p $(REMOTE_SOURCES)/$(VERSION)"
	scp -r dist/$(VERSION_TAR) $(SOD_SERVER):$(REMOTE_SOURCES)
	ssh $(SOD_SERVER) "tar -xzf $(REMOTE_SOURCES)/$(VERSION_TAR) -C $(REMOTE_SOURCES)/$(VERSION) && rm $(REMOTE_SOURCES)/$(VERSION_TAR)"

switch:
	@echo "$(COLOR_BOLD)Stage: Switching$(COLOR_RESET)"
	ssh $(SOD_SERVER) "ln -snf $(REMOTE_SOURCES)/$(VERSION) $(REMOTE_PUBLIC)"
	@echo "$(COLOR_BOLD)Done$(COLOR_RESET)"
	@echo https://soddi.de/$(NAME)
