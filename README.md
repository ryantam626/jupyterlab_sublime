# jupyterlab_sublime

A slightly opinionated Sublime notebook cell binding for JupyterLab.

## Notes

Most of the keybindings implemented by CodeMirror just work out of the box after switching the key map, there were a little pesky keys that collide either with my system level shortcuts, broswer shortcuts or jupyterlab shortcuts. I have adapted a few keybindings I find the most useful, more to follow soon. Consult the [checklist](sublimeKeyChecklist.md) for more details.

## Why opinionated?

There are some keybindings I simply don't feel useful, so I have repurposed them, again see the [checklist](sublimeKeyChecklist.md).


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install jupyterlab_sublime
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

