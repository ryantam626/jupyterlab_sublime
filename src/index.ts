import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { INotebookTracker } from '@jupyterlab/notebook';

import { CodeMirrorEditor } from '@jupyterlab/codemirror';

import '../style/index.css';

class JupyterLabSublime {
  private tracker: INotebookTracker;
  private app: JupyterFrontEnd;

  constructor(app: JupyterFrontEnd, tracker: INotebookTracker) {
    this.app = app;
    this.tracker = tracker;
    this.addCommands();
    this.onActiveCellChanged();
    this.tracker.activeCellChanged.connect(this.onActiveCellChanged, this);
  }

  private addCommands() {
    const { commands } = this.app;
    // tslint:disable-next-line
    const self = this;
    function editorExec(id: string) {
      (self.tracker.activeCell.editor as CodeMirrorEditor).editor.execCommand(
        id
      );
    }
    // Manage Escape collision
    // TODO: Check if use has Escape set for command mode
    commands.addCommand('sublime:exit-editor', {
      execute: () => {
        editorExec('singleSelectionTop');
        commands.execute('notebook:enter-command-mode');
      },
      label: 'Exit Editor'
    });
    commands.addKeyBinding({
      command: 'sublime:exit-editor',
      keys: ['Escape'],
      selector: '.CodeMirror-focused'
    });

    // Manage Ctrl-/ collision
    commands.addCommand('sublime:toggle-comment-indented', {
      execute: () => {
        editorExec('toggleCommentIndented');
      },
      label: 'Split selection by line'
    });
    commands.addKeyBinding({
      command: 'sublime:toggle-comment-indented',
      keys: ['Accel /'],
      selector: '.CodeMirror-focused'
    });

    // Manage Shift-Tab collision
    commands.addCommand('sublime:indent-less-slash-tooltip', {
      execute: () => {
        if (
          !this.tracker.activeCell.editor.host.classList.contains(
            'jp-mod-completer-enabled'
          )
        ) {
          editorExec('indentLess');
        } else {
          commands.execute('tooltip:launch-notebook');
        }
      },
      label: 'Indent less or tooltip'
    });
    commands.addKeyBinding({
      command: 'sublime:indent-less-slash-tooltip',
      keys: ['Shift Tab'],
      selector: '.CodeMirror-focused'
    });

    // Manage Shift-Ctr-L collision
    commands.addCommand('sublime:split-selection-by-lLine', {
      execute: () => {
        editorExec('splitSelectionByLine');
      },
      label: 'Split selection by line'
    });
    commands.addKeyBinding({
      command: 'sublime:split-selection-by-lLine',
      keys: ['Accel Shift L'],
      selector: '.CodeMirror-focused'
    });

    // Manage Ctrl-M collision
    commands.addCommand('sublime:go-to-bracket', {
      execute: () => {
        editorExec('goToBracket');
      },
      label: 'Go to bracket'
    });
    commands.addKeyBinding({
      command: 'sublime:go-to-bracket',
      keys: ['Ctrl M'],
      selector: '.CodeMirror-focused'
    });

    // Manage Shift-Ctrl-D collision
    commands.addCommand('sublime:duplicate-line', {
      execute: () => {
        editorExec('duplicateLine');
      },
      label: 'Duplicate line'
    });
    commands.addKeyBinding({
      command: 'sublime:duplicate-line',
      keys: ['Accel Shift D'],
      selector: '.CodeMirror-focused'
    });

    // Repurpose Ctrl-Up
    commands.addCommand('sublime:add-cursor-to-prev-line', {
      execute: () => {
        editorExec('addCursorToPrevLine');
      },
      label: 'Add cursor to previous line'
    });
    commands.addKeyBinding({
      command: 'sublime:add-cursor-to-prev-line',
      keys: ['Ctrl ArrowUp'],
      selector: '.CodeMirror-focused'
    });

    // Repurpose Ctrl-Down
    commands.addCommand('sublime:add-cursor-to-next-line', {
      execute: () => {
        editorExec('addCursorToNextLine');
      },
      label: 'Add cursor to next line'
    });
    commands.addKeyBinding({
      command: 'sublime:add-cursor-to-next-line',
      keys: ['Ctrl ArrowDown'],
      selector: '.CodeMirror-focused'
    });

    commands.addCommand('sublime:subword-backward-deletion', {
      execute: () => {
        const cEditor = (this.tracker.activeCell.editor as CodeMirrorEditor)
          .editor;
        const doc = cEditor.getDoc();
        const starts = doc.listSelections();
        // NOTE: This is non-trivial to deal with, results are often ugly, let's ignore this.
        if (starts.some(pos => pos.head.ch !== pos.anchor.ch)) {
          // tslint:disable-next-line:no-console
          console.log('Ignored attempt to delete subword!');
          return;
        }
        // CAV: To make sure when we undo this operation, we have carets showing in
        //      their rightful positions.
        cEditor.execCommand('goSubwordLeft');
        const ends = doc.listSelections();
        doc.setSelections(starts);
        if (starts.length !== ends.length) {
          // NOTE: Edge case where select are part of the same subword, need more thoughts on this.)
          // tslint:disable-next-line:no-console
          console.log(
            'Inogred attempt to delete subword, because some selection is part of the same subword'
          );
          return;
        }
        cEditor.operation(() => {
          for (let i = 0; i < starts.length; i++) {
            doc.replaceRange('', starts[i].head, ends[i].head, '+delete');
          }
        });
      },
      label: 'Subward backward deletion'
    });
    commands.addKeyBinding({
      command: 'sublime:subword-backward-deletion',
      keys: ['Alt Backspace'],
      selector: '.CodeMirror-focused'
    });

    commands.addCommand('sublime:subword-forward-deletion', {
      execute: () => {
        const cEditor = (this.tracker.activeCell.editor as CodeMirrorEditor)
          .editor;
        const doc = cEditor.getDoc();
        const starts = doc.listSelections();
        // NOTE: This is non-trivial to deal with, results are often ugly, let's ignore this.
        if (starts.some(pos => pos.head.ch !== pos.anchor.ch)) {
          // tslint:disable-next-line:no-console
          console.log('Ignored attempt to delete subword!');
          return;
        }
        // CAV: To make sure when we undo this operation, we have carets showing in
        //      their rightful positions.
        cEditor.execCommand('goSubwordRight');
        const ends = doc.listSelections();
        doc.setSelections(starts);
        if (starts.length !== ends.length) {
          // NOTE: Edge case where select are part of the same subword, need more thoughts on this.)
          // tslint:disable-next-line:no-console
          console.log(
            'Inogred attempt to delete subword, because some selection is part of the same subword'
          );
          return;
        }
        cEditor.operation(() => {
          for (let i = 0; i < starts.length; i++) {
            doc.replaceRange('', starts[i].head, ends[i].head, '+delete');
          }
        });
      },
      label: 'Subward forward deletion'
    });
    commands.addKeyBinding({
      command: 'sublime:subword-forward-deletion',
      keys: ['Alt Delete'],
      selector: '.CodeMirror-focused'
    });
  }

  private onActiveCellChanged(): void {
    const activeCell = this.tracker.activeCell;
    if (activeCell !== null) {
      (activeCell.editor as CodeMirrorEditor).setOption('keyMap', 'sublime');
    }
  }
}

/**
 * Initialization data for the jupyterlab_sublime extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  activate: (app: JupyterFrontEnd, tracker: INotebookTracker) => {
    // tslint:disable-next-line:no-unused-expression
    new JupyterLabSublime(app, tracker);
    // tslint:disable-next-line:no-console
    console.log('JupyterLab extension jupyterlab_sublime is activated!');
  },
  autoStart: true,
  id: 'jupyterlab_sublime',
  requires: [INotebookTracker]
};

export default extension;
