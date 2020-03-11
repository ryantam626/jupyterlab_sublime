#!/usr/bin/env bash

source bin/pre-publish-check.sh
cd $LABEXTENSION_PATH
npm publish --access public
git tag -a "${PUBLISH_VERSION}" -m "${PUBLISH_VERSION}"
git push origin --tags
