#!/usr/bin/env bash

source bin/pre-publish-check.sh
cd $LABEXTENSION_PATH
npm publish --access public
python setup.py sdist
twine upload dist/jupyterlab_sublime-"${PUBLISH_VERSION/v/}".tar.gz
python setup.py bdist_wheel
twine upload dist/jupyterlab_sublime-"${PUBLISH_VERSION/v/}"-py3-none-any.whl
git tag -a "${PUBLISH_VERSION}" -m "${PUBLISH_VERSION}"
git push origin --tags
