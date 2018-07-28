# jupyterlab_sublime

[![npm version](https://badge.fury.io/js/%40ryantam626%2Fjupyterlab_sublime.svg)](https://badge.fury.io/js/%40ryantam626%2Fjupyterlab_sublime)
[![npm downloads](https://img.shields.io/npm/dw/%40ryantam626%2Fjupyterlab_sublime.svg)](https://badge.fury.io/js/%40ryantam626%2Fjupyterlab_sublime)

A slightly opinionated Sublime notebook cell binding for JupyterLab.

## Notes

Most of the keybindings implemented by CodeMirror just work out of the box after switching the key map, there were a little pesky keys that collide either with my system level shortcuts, broswer shortcuts or jupyterlab shortcuts. I have adapted a few keybindings I find the most useful, more to follow soon. Consult the [checklist](sublimeKeyChecklist.md) for more details.

## Why opinionated?

There are some keybindings I simply don't feel useful, so I have repurposed them, again see the [checklist](https://github.com/ryantam626/jupyterlab_sublime/blob/master/sublimeKeyChecklist.md).

Also I have implemented some extra commands which might collide with other user's shortcuts, see [my list](https://github.com/ryantam626/jupyterlab_sublime/blob/master/myKeys.md).

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @ryantam626/jupyterlab_sublime
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

