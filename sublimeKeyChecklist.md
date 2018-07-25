| Key                   | Sublime Function       | Notes                                              | Migrated | Extra Notes                                        |
|-----------------------|------------------------|----------------------------------------------------|----------|----------------------------------------------------|
| Shift-Tab             | indentLess             | Collide with `tooltip:launch-console`              | Yes      | Preserved when completer is on                     |
| Shift-Ctrl-K          | deleteLine             | Works                                              | N/A      |                                                    |
| Alt-Q                 | wrapLines              | What is this?                                      | ?        |                                                    |
| Ctrl-T                | transposeChars         | What is this? Also collide with browser shortcuts. | ?        |                                                    |
| Alt-Left              | goSubwordLeft          | Works                                              | N/A      |                                                    |
| Alt-Right             | goSubwordRight         | Works                                              | N/A      |                                                    |
| Ctrl-Up               | scrollLineUp           | Don’t need this, repurpose to add caret above.     | Yes      | Completely personal preference                     |
| Ctrl-Down             | scrollLineDown         | Don’t need this, repurpose to add caret below.     | Yes      | Completely personal preference                     |
| Ctrl-L                | selectLine             | Works                                              | N/A      |                                                    |
| Shift-Ctrl-L          | splitSelectionByLine   | Collide with `filebrowser:create-main-launcher`    | Yes      | Overriden under editor mode                        |
| Esc                   | singleSelectionTop     | Collide with `notebook:enter-command-mode-1`       | Yes      | Execute and propgate                               |
| Ctrl-Enter            | insertLineAfter        | Collide with `notebook:run-cell-1`                 | Never    | This is too important a keybind to override for me |
| Shift-Ctrl-Enter      | insertLineBefore       | Works                                              | N/A      |                                                    |
| Ctrl-D                | selectNextOccurrence   | Works                                              | N/A      |                                                    |
| Shift-Ctrl-Space      | selectScope            | Works                                              | N/A      |                                                    |
| Shift-Ctrl-M          | selectBetweenBrackets  | Works                                              | N/A      |                                                    |
| Ctrl-M                | goToBracket            | Collide with `notebook:enter-command-mode-2`       | Yes      | Overriden completely                               |
| Shift-Ctrl-Up         | swapLineUp             | Works                                              | N/A      |                                                    |
| Shift-Ctrl-Down       | swapLineDown           | Works                                              | N/A      |                                                    |
| Ctrl-/                | toggleCommentIndented  | Works                                              | N/A      |                                                    |
| Ctrl-J                | joinLines              | Works                                              | N/A      |                                                    |
| Shift-Ctrl-D          | duplicateLine          | Collide with `application:toggle-mode`             | Yes      | Overriden under editor mode                        |
| F9                    | sortLines              | Works                                              | N/A      |                                                    |
| Ctrl-F9               | sortLinesInsensitive   | Works (seemingly)                                  | ?        |                                                    |
| F2                    | nextBookmark           | Works, need improved visual cue.                   | Meh      |                                                    |
| Shift-F2              | prevBookmark           | Works, need improved visual cue.                   | Meh      |                                                    |
| Ctrl-F2               | toggleBookmark         | Works, need improved visual cue.                   | Meh      |                                                    |
| Shift-Ctrl-F2         | clearBookmarks         | Works, need improved visual cue.                   | Meh      |                                                    |
| Alt-F2                | selectBookmarks        | Can’t test because of my system shortcut.          | ?        |                                                    |
| Backspace             | smartBackspace         | Works (seemingly – can’t tell if it’s smart)       | ?        |                                                    |
| Ctrl-K Ctrl-K         | delLineRight           | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-U         | upcaseAtCursor         | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-L         | downcaseAtCursor       | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-Space     | setSublimeMark         | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-A         | selectToSublimeMark    | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-W         | deleteToSublimeMark    | Collide with broswer shortcut                      | No       |                                                    |
| Ctrl-K Ctrl-X         | swapWithSublimeMark    | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-Y         | sublimeYank            | Can’t test because I can’t delete.                 | ?        |                                                    |
| Ctrl-K Ctrl-C         | showInCenter           | What is this?                                      | ?        |                                                    |
| Ctrl-K Ctrl-G         | clearBookmarks         | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-Backspace | delLineLeft            | Works                                              | N/A      |                                                    |
| Ctrl-K Ctrl-0         | unfoldAll              | What is this?                                      | ?        |                                                    |
| Ctrl-K Ctrl-J         | unfoldAll              | What is this?                                      | ?        |                                                    |
| Ctrl-Alt-Up           | addCursorToPrevLine    | Can’t test because of my system shortcut.          | ?        |                                                    |
| Ctrl-Alt-Down         | addCursorToNextLine    | Can’t test because of my system shortcut.          | ?        |                                                    |
| Ctrl-F3               | findUnder              | Works                                              | N/A      |                                                    |
| Shift-Ctrl-F3         | findUnderPrevious      | Works                                              | N/A      |                                                    |
| Alt-F3                | findAllUnder           | Can’t test because of my system shortcut.          | ?        |                                                    |
| Shift-Ctrl-[          | fold                   | Collide with `application:activate-previous-tab`   | No       |                                                    |
| Shift-Ctrl-]          | unfold                 | Collide with `application:activate-next-tab`       | No       |                                                    |
| Ctrl-I                | findIncremental        | Collide with `inspector:open`                      | No       |                                                    |
| Shift-Ctrl-I          | findIncrementalReverse | Collide with broswer shortcut                      | No       |                                                    |
| Ctrl-H                | replace                | Works                                              | N/A      |                                                    |
| F3                    | findNext               | Works                                              | N/A      |                                                    |
| Shift-F3              | findPrev               | Works                                              | N/A      |                                                    |
