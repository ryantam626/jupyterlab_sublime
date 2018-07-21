import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_sublime extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_sublime',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_sublime is activated!');
  }
};

export default extension;
