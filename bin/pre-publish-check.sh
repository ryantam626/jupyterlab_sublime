#!/usr/bin/env bash

LABEXTENSION_VERSION=$(cat ${LABEXTENSION_PATH}/package.json | jq -r '.version')
LABEXTENSION_LOCKED_VERSION=$(cat ${LABEXTENSION_PATH}/package-lock.json | jq -r '.version')

versions=( $LABEXTENSION_LOCKED_VERSION $LABEXTENSION_VERSION )
unique_versions_count=$(echo ${versions[@]} | tr ' ' '\n' | uniq | wc -l)
if [ "${unique_versions_count}" = 1 ] \
  && [ ! -z "${LABEXTENSION_LOCKED_VERSION}" ] \
  && [ ! -z "${LABEXTENSION_VERSION}" ]
then
   echo "Versions seem fine."
   export PUBLISH_VERSION="v${LABEXTENSION_VERSION}"
else
   echo "Versions don't match."
   echo "Lab extension version:    ${LABEXTENSION_VERSION}"
   echo "Lab extension lock version:    ${LABEXTENSION_LOCKED_VERSION}"
   exit 1
fi
