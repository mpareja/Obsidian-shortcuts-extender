#!/bin/bash

npm run build && \
  cp main.js ~/Dropbox/notebook/tiddlers/.obsidian/plugins/shortcuts-extender/ && \
  cp manifest.json ~/Dropbox/notebook/tiddlers/.obsidian/plugins/shortcuts-extender/
