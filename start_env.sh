conda activate jupyterlab-sublime
export LABEXTENSION_PATH=$PWD
export PATH=$LABEXTENSION_PATH/node_modules/.bin/:$LABEXTENSION_TESTS_PATH/node_modules/.bin/:$PATH
