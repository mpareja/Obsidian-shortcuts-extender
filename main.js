'use strict';

var obsidian = require('obsidian');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var shortcutsExtender = /** @class */ (function (_super) {
    __extends(shortcutsExtender, _super);
    function shortcutsExtender() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    shortcutsExtender.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(this.app);
                this.addCommand({
                    id: "shortcut-exclamation-mark",
                    name: "Shortcut for ! symbol",
                    callback: function () { return _this.shortcutExclamationMark(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "1",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-At",
                    name: "Shortcut for @ symbol",
                    callback: function () { return _this.shortcutAt(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "2",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-hash",
                    name: "Shortcut for # symbol",
                    callback: function () { return _this.shortcutHash(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "3",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-dollar",
                    name: "Shortcut for $ symbol",
                    callback: function () { return _this.shortcutDollar(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "4",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-percent",
                    name: "Shortcut for % symbol",
                    callback: function () { return _this.shortcutPercent(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "5",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-circumflex",
                    name: "Shortcut for ^ symbol",
                    callback: function () { return _this.shortcutCircumflex(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "6",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-ampersand",
                    name: "Shortcut for & symbol",
                    callback: function () { return _this.shortcutAmpersand(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "7",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-less-than",
                    name: "Shortcut for < symbol",
                    callback: function () { return _this.shortcutLessThan(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "б",
                        },
                        {
                            modifiers: ["Alt"],
                            key: ",",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-greater-than",
                    name: "Shortcut for > symbol",
                    callback: function () { return _this.shortcutGreaterThan(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "ю",
                        },
                        {
                            modifiers: ["Alt"],
                            key: ".",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-left-square-bracket",
                    name: "Shortcut for [ symbol",
                    callback: function () { return _this.shortcutLeftSquareBracket(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "х",
                        },
                        {
                            modifiers: ["Alt"],
                            key: "[",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-right-square-bracket",
                    name: "Shortcut for ] symbol",
                    callback: function () { return _this.shortcutRightSquareBracket(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "ъ",
                        },
                        {
                            modifiers: ["Alt"],
                            key: "]",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-python-code",
                    name: "Shortcut for .py code fences",
                    callback: function () { return _this.shortcutPyCode(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "ё",
                        },
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "~",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-code",
                    name: "Shortcut for code fences (`)",
                    callback: function () { return _this.shortcutCodeFences(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt"],
                            key: "ё",
                        },
                        {
                            modifiers: ["Alt"],
                            key: "`",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-code-block",
                    name: "Shortcut for toggling a code block",
                    callback: function () { return _this.shortcutToggleCodeBlock(); },
                    hotkeys: [
                        {
                            modifiers: ["Ctrl"],
                            key: "`",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-left-curly-bracket",
                    name: "Shortcut for { symbol",
                    callback: function () { return _this.shortcutLeftCurlyBracket(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "х",
                        },
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "{",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-right-curly-bracket",
                    name: "Shortcut for } symbol",
                    callback: function () { return _this.shortcutRightCurlyBracket(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "ъ",
                        },
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "}",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-Vertical-Line",
                    name: "Shortcut for | symbol",
                    callback: function () { return _this.shortcutVerticalLine(); },
                    hotkeys: [
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "|",
                        },
                        {
                            modifiers: ["Alt", "Shift"],
                            key: "\/",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-numbered-items",
                    name: "Creating numbered item from text",
                    callback: function () { return _this.shortcutNumberedItems(); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "7",
                        },
                    ],
                });
                this.addCommand({
                    id: "shortcut-list-items",
                    name: "Creating list item from text",
                    callback: function () { return _this.shortcutListItems(); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "8",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-1",
                    name: "line into level 1 heading",
                    callback: function () { return _this.shortcutHeaderN(1); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "1",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-2",
                    name: "line into level 2 heading",
                    callback: function () { return _this.shortcutHeaderN(2); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "2",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-3",
                    name: "line into level 3 heading",
                    callback: function () { return _this.shortcutHeaderN(3); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "3",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-4",
                    name: "line into level 4 heading",
                    callback: function () { return _this.shortcutHeaderN(4); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "4",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-5",
                    name: "line into level 5 heading",
                    callback: function () { return _this.shortcutHeaderN(5); },
                    hotkeys: [
                        {
                            modifiers: ["Ctrl"],
                            key: "5",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-6",
                    name: "line into level 6 heading",
                    callback: function () { return _this.shortcutHeaderN(6); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "6",
                        },
                    ],
                });
                this.addCommand({
                    id: "heading-0",
                    name: "clearing of text formatting",
                    callback: function () { return _this.shortcutHeaderN(0); },
                    hotkeys: [
                        {
                            modifiers: ["Shift", "Ctrl"],
                            key: "0",
                        },
                    ],
                });
                return [2 /*return*/];
            });
        });
    };
    shortcutsExtender.prototype.getSelectedText = function (editor) {
        //thanks to user "Argentina Ortega Sáinz" from the Obsidian community for this feature
        //For a long time I tried to do without such an approach, which resulted in several bugs and the impossibility of fixing them with non-crutches
        if (editor.somethingSelected()) {
            var cursorStart = editor.getCursor('from');
            var cursorEnd = editor.getCursor('to');
            var content = editor.getRange({ line: cursorStart.line, ch: 0 }, { line: cursorEnd.line, ch: editor.getLine(cursorEnd.line).length });
            return {
                start: { line: cursorStart.line, ch: 0 },
                end: {
                    line: cursorEnd.line,
                    ch: editor.getLine(cursorEnd.line).length,
                },
                content: content,
            };
        }
        else {
            // Toggle the todo in the line
            var lineNr = editor.getCursor().line;
            var contents = editor.getDoc().getLine(lineNr);
            var cursorStart = {
                line: lineNr,
                ch: 0,
            };
            var cursorEnd = {
                line: lineNr,
                ch: contents.length,
            };
            var content = editor.getRange(cursorStart, cursorEnd);
            return { start: cursorStart, end: cursorEnd, content: content };
        }
    };
    shortcutsExtender.prototype.shortcutExclamationMark = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("!");
    };
    shortcutsExtender.prototype.shortcutAt = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("@");
    };
    shortcutsExtender.prototype.shortcutHash = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("#");
    };
    shortcutsExtender.prototype.shortcutDollar = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("$");
    };
    shortcutsExtender.prototype.shortcutPercent = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("%");
    };
    shortcutsExtender.prototype.shortcutCircumflex = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("^");
    };
    shortcutsExtender.prototype.shortcutAmpersand = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("&");
    };
    shortcutsExtender.prototype.shortcutLessThan = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("<".concat(selectedText, ">"));
        }
        else
            editor.replaceSelection("<");
    };
    shortcutsExtender.prototype.shortcutGreaterThan = function () {
        var activeLeaf = this.app.workspace.activeLeaf;
        var editor = activeLeaf.view.sourceMode.cmEditor;
        var selectedText = this.getSelectedText(editor);
        var resultText = "> " + selectedText.content.split('\n').join("\n> ");
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutLeftSquareBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("[[".concat(selectedText, "]]"));
        }
        else
            editor.replaceSelection("[");
    };
    shortcutsExtender.prototype.shortcutRightSquareBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("]");
    };
    shortcutsExtender.prototype.shortcutPyCode = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("```py\n".concat(selectedText, "\n```"));
        }
        else
            editor.replaceSelection("`");
    };
    shortcutsExtender.prototype.shortcutCodeFences = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("`".concat(selectedText, "`"));
        }
        else
            editor.replaceSelection("`");
    };
    shortcutsExtender.prototype.shortcutToggleCodeBlock = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected() ? editor.getSelection() : "";
        var startCursor = editor.getCursor('from');
        var firstLine = editor.getLine(startCursor.line);
        var endCursor = editor.getCursor('to');
        var lastLine = editor.getLine(endCursor.line);
        // If the selections starts with ```, then we should remove the code block.
        var isCodeBlock = firstLine.startsWith("```") && lastLine.endsWith("```")
            && selectedText.length >= 6;
        if (isCodeBlock) {
            // Position of first non-whitespace
            var textStartPos = selectedText.search("\\s\\S") + 1;
            if (textStartPos < 0) {
                textStartPos = 3;
            }
            // Remove the code block formatting.
            var endPos = selectedText.length - 3;
            var innerText = selectedText.substring(textStartPos, endPos);
            editor.replaceSelection(innerText);
        }
        else {
            editor.replaceSelection("```\n".concat(selectedText, "\n```"));
            startCursor.ch = 3; // Move cursor after ```
            editor.setCursor(startCursor);
        }
    };
    shortcutsExtender.prototype.shortcutRightCurlyBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("}");
    };
    shortcutsExtender.prototype.shortcutLeftCurlyBracket = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = editor.somethingSelected()
            ? editor.getSelection()
            : false;
        if (selectedText) {
            editor.replaceSelection("{".concat(selectedText, "}"));
        }
        else
            editor.replaceSelection("{");
    };
    shortcutsExtender.prototype.shortcutVerticalLine = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        editor.somethingSelected()
            ? editor.getSelection()
            : false;
        editor.replaceSelection("|");
    };
    shortcutsExtender.prototype.shortcutNumberedItems = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var content = selectedText.content;
        var outputBuilder = new Array(content.length + 3);
        var level = 1;
        for (var i = 0; i < content.length; i++) {
            var char = content[i];
            if (char === '\r' && content[i + 1] === '\n') {
                outputBuilder.push('\r\n' + level + '. ');
                i++;
                level++;
            }
            else if (char === '\n') {
                outputBuilder.push('\n' + level + '. ');
                level++;
            }
            else if (i === 0) {
                outputBuilder.push(level + '. ');
                outputBuilder.push(char);
                level++;
            }
            else {
                outputBuilder.push(char);
            }
        }
        var resultText = outputBuilder.join('');
        editor.replaceRange(resultText, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.shortcutListItems = function () {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        var selectedText = this.getSelectedText(editor);
        var resultText = "- " + selectedText.content.split('\n').join("\n- ");
        var resultTextCheck = resultText;
        while (resultTextCheck.search("- - ") >= 0) {
            resultTextCheck = resultTextCheck.replace("- - ", "	- ");
        }
        while (resultTextCheck.search("- 		") >= 0) {
            resultTextCheck = resultTextCheck.replace("- 		", "	- 	");
        }
        while (resultTextCheck.search("- 	- ") >= 0) {
            resultTextCheck = resultTextCheck.replace("- 	- ", "		- ");
        }
        editor.replaceRange(resultTextCheck, selectedText.start, selectedText.end);
    };
    shortcutsExtender.prototype.removeFormatSymbolsFromStr = function (line) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Remove symbols we don't want at the beginning of the line.
        while (line.substring(0, 2) == "##") {
            line = line.replace("##", "#");
        }
        while (line.substring(0, 2) == "# ") {
            line = line.substr(2);
        }
        while (line.substring(0, 2) == "> ") {
            line = line.substr(2);
        }
        while (line.substring(0, 2) == "		") {
            line = line.replace("		", "	");
        }
        while (line.substring(0, 3) == "	- ") {
            line = line.substr(3);
        }
        while (line.substring(0, 2) == "- ") {
            line = line.substr(2);
        }
        var re_digits = /^\d\.\s/;
        line = line.replace(re_digits, "");
        return line;
    };
    shortcutsExtender.prototype.addHeadingToStr = function (line, headingLevel) {
        var space = " ";
        if (headingLevel == 0) {
            space = "";
        }
        return "#".repeat(headingLevel) + space + line;
    };
    shortcutsExtender.prototype.shortcutHeaderN = function (headingLevel) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Apply heading level to each line.
        var selections = editor.listSelections();
        for (var i = 0; i < selections.length; i++) {
            this.shortcutHeaderNSingleSelection(headingLevel, selections[i]);
        }
        // setSelections is called to preserve the location of each cursor relative
        // to the end of the line.
        editor.setSelections(selections);
    };
    // shortcutHeaderNSingleSelection sets all lines in the selection to the 
    // desired heading level. selection is also updated to maintain the cursor
    // position relative to the end of the line.
    shortcutsExtender.prototype.shortcutHeaderNSingleSelection = function (headingLevel, selection) {
        var _a;
        var editor = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.editor;
        if (editor == null) {
            return;
        }
        // Save anchor/head distance from end.
        var anchorDistFromEnd = editor.getLine(selection.anchor.line).length - selection.anchor.ch;
        var headDistFromEnd = editor.getLine(selection.head.line).length - selection.head.ch;
        // Get from and to line numbers.
        var fromLine = selection.anchor.line;
        var toLine = selection.head.line;
        var increment = fromLine <= toLine ? 1 : -1;
        // For each line in the selection, set the heading level.
        var lineNum = fromLine;
        while (true) {
            // Update the current line.
            var line = editor.getLine(lineNum);
            line = this.removeFormatSymbolsFromStr(line);
            line = this.addHeadingToStr(line, headingLevel);
            editor.setLine(lineNum, line);
            // Move to next line if not done.
            if (lineNum == toLine) {
                break;
            }
            lineNum += increment;
        }
        // Preserve anchor/head locations relative to line end.
        selection.anchor.ch = editor.getLine(selection.anchor.line).length - anchorDistFromEnd;
        selection.head.ch = editor.getLine(selection.head.line).length - headDistFromEnd;
    };
    return shortcutsExtender;
}(obsidian.Plugin));

module.exports = shortcutsExtender;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IE1hcmtkb3duVmlldywgUGx1Z2luLCBFZGl0b3JTZWxlY3Rpb24sIEVkaXRvciB9IGZyb20gXCJvYnNpZGlhblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzaG9ydGN1dHNFeHRlbmRlciBleHRlbmRzIFBsdWdpbiB7XG4gIGFzeW5jIG9ubG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFwcCk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtZXhjbGFtYXRpb24tbWFya1wiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgISBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0RXhjbGFtYXRpb25NYXJrKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiMVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1BdFwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgQCBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0QXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIyXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWhhc2hcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICMgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhhc2goKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWRvbGxhclwiLFxuICAgICAgbmFtZTogXCJTaG9ydGN1dCBmb3IgJCBzeW1ib2xcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0RG9sbGFyKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1wZXJjZW50XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciAlIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRQZXJjZW50KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1jaXJjdW1mbGV4XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBeIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRDaXJjdW1mbGV4KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1hbXBlcnNhbmRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yICYgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEFtcGVyc2FuZCgpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcIjdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtbGVzcy10aGFuXCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciA8IHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRMZXNzVGhhbigpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcItCxXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwiLFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1ncmVhdGVyLXRoYW5cIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yID4gc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEdyZWF0ZXJUaGFuKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0Y5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCIuXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWxlZnQtc3F1YXJlLWJyYWNrZXRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIFsgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dExlZnRTcXVhcmVCcmFja2V0KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0YVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCJbXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LXJpZ2h0LXNxdWFyZS1icmFja2V0XCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciBdIHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRSaWdodFNxdWFyZUJyYWNrZXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCLRilwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIl0sXG4gICAgICAgICAga2V5OiBcIl1cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtcHl0aG9uLWNvZGVcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIC5weSBjb2RlIGZlbmNlc1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRQeUNvZGUoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcItGRXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCJ+XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWNvZGVcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIGNvZGUgZmVuY2VzIChgKVwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRDb2RlRmVuY2VzKCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiXSxcbiAgICAgICAgICBrZXk6IFwi0ZFcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCJdLFxuICAgICAgICAgIGtleTogXCJgXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWNvZGUtYmxvY2tcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIHRvZ2dsaW5nIGEgY29kZSBibG9ja1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRUb2dnbGVDb2RlQmxvY2soKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQ3RybFwiXSxcbiAgICAgICAgICBrZXk6IFwiYFwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1sZWZ0LWN1cmx5LWJyYWNrZXRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIHsgc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dExlZnRDdXJseUJyYWNrZXQoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcItGFXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCJ7XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LXJpZ2h0LWN1cmx5LWJyYWNrZXRcIixcbiAgICAgIG5hbWU6IFwiU2hvcnRjdXQgZm9yIH0gc3ltYm9sXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dFJpZ2h0Q3VybHlCcmFja2V0KCksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkFsdFwiLCBcIlNoaWZ0XCJdLFxuICAgICAgICAgIGtleTogXCLRilwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJBbHRcIiwgXCJTaGlmdFwiXSxcbiAgICAgICAgICBrZXk6IFwifVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJzaG9ydGN1dC1WZXJ0aWNhbC1MaW5lXCIsXG4gICAgICBuYW1lOiBcIlNob3J0Y3V0IGZvciB8IHN5bWJvbFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRWZXJ0aWNhbExpbmUoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcInxcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiQWx0XCIsIFwiU2hpZnRcIl0sXG4gICAgICAgICAga2V5OiBcIlxcL1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwic2hvcnRjdXQtbnVtYmVyZWQtaXRlbXNcIixcbiAgICAgIG5hbWU6IFwiQ3JlYXRpbmcgbnVtYmVyZWQgaXRlbSBmcm9tIHRleHRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0TnVtYmVyZWRJdGVtcygpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJTaGlmdFwiLCBcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjdcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInNob3J0Y3V0LWxpc3QtaXRlbXNcIixcbiAgICAgIG5hbWU6IFwiQ3JlYXRpbmcgbGlzdCBpdGVtIGZyb20gdGV4dFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRMaXN0SXRlbXMoKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiU2hpZnRcIiwgXCJDdHJsXCJdLFxuICAgICAgICAgIGtleTogXCI4XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJoZWFkaW5nLTFcIixcbiAgICAgIG5hbWU6IFwibGluZSBpbnRvIGxldmVsIDEgaGVhZGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDEpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJTaGlmdFwiLCBcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjFcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImhlYWRpbmctMlwiLFxuICAgICAgbmFtZTogXCJsaW5lIGludG8gbGV2ZWwgMiBoZWFkaW5nXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlck4oMiksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIlNoaWZ0XCIsIFwiQ3RybFwiXSxcbiAgICAgICAgICBrZXk6IFwiMlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiaGVhZGluZy0zXCIsXG4gICAgICBuYW1lOiBcImxpbmUgaW50byBsZXZlbCAzIGhlYWRpbmdcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3J0Y3V0SGVhZGVyTigzKSxcbiAgICAgIGhvdGtleXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1vZGlmaWVyczogW1wiU2hpZnRcIiwgXCJDdHJsXCJdLFxuICAgICAgICAgIGtleTogXCIzXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJoZWFkaW5nLTRcIixcbiAgICAgIG5hbWU6IFwibGluZSBpbnRvIGxldmVsIDQgaGVhZGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDQpLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJTaGlmdFwiLCBcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjRcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImhlYWRpbmctNVwiLFxuICAgICAgbmFtZTogXCJsaW5lIGludG8gbGV2ZWwgNSBoZWFkaW5nXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlck4oNSksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImhlYWRpbmctNlwiLFxuICAgICAgbmFtZTogXCJsaW5lIGludG8gbGV2ZWwgNiBoZWFkaW5nXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG9ydGN1dEhlYWRlck4oNiksXG4gICAgICBob3RrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RpZmllcnM6IFtcIlNoaWZ0XCIsIFwiQ3RybFwiXSxcbiAgICAgICAgICBrZXk6IFwiNlwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiaGVhZGluZy0wXCIsXG4gICAgICBuYW1lOiBcImNsZWFyaW5nIG9mIHRleHQgZm9ybWF0dGluZ1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvcnRjdXRIZWFkZXJOKDApLFxuICAgICAgaG90a2V5czogW1xuICAgICAgICB7XG4gICAgICAgICAgbW9kaWZpZXJzOiBbXCJTaGlmdFwiLCBcIkN0cmxcIl0sXG4gICAgICAgICAga2V5OiBcIjBcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZFRleHQoZWRpdG9yOiBFZGl0b3IpIHtcbiAgLy90aGFua3MgdG8gdXNlciBcIkFyZ2VudGluYSBPcnRlZ2EgU8OhaW56XCIgZnJvbSB0aGUgT2JzaWRpYW4gY29tbXVuaXR5IGZvciB0aGlzIGZlYXR1cmVcbiAgLy9Gb3IgYSBsb25nIHRpbWUgSSB0cmllZCB0byBkbyB3aXRob3V0IHN1Y2ggYW4gYXBwcm9hY2gsIHdoaWNoIHJlc3VsdGVkIGluIHNldmVyYWwgYnVncyBhbmQgdGhlIGltcG9zc2liaWxpdHkgb2YgZml4aW5nIHRoZW0gd2l0aCBub24tY3J1dGNoZXNcbiAgICBpZiAoZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKCkpIHtcbiAgICAgIGxldCBjdXJzb3JTdGFydCA9IGVkaXRvci5nZXRDdXJzb3IoJ2Zyb20nKTtcbiAgICAgIGxldCBjdXJzb3JFbmQgPSBlZGl0b3IuZ2V0Q3Vyc29yKCd0bycpO1xuICAgICAgbGV0IGNvbnRlbnQgPSBlZGl0b3IuZ2V0UmFuZ2UoXG4gICAgICAgIHsgbGluZTogY3Vyc29yU3RhcnQubGluZSwgY2g6IDAgfSxcbiAgICAgICAgeyBsaW5lOiBjdXJzb3JFbmQubGluZSwgY2g6IGVkaXRvci5nZXRMaW5lKGN1cnNvckVuZC5saW5lKS5sZW5ndGggfVxuICAgICAgKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiB7IGxpbmU6IGN1cnNvclN0YXJ0LmxpbmUsIGNoOiAwIH0sXG4gICAgICAgIGVuZDoge1xuICAgICAgICAgIGxpbmU6IGN1cnNvckVuZC5saW5lLFxuICAgICAgICAgIGNoOiBlZGl0b3IuZ2V0TGluZShjdXJzb3JFbmQubGluZSkubGVuZ3RoLFxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVG9nZ2xlIHRoZSB0b2RvIGluIHRoZSBsaW5lXG4gICAgICB2YXIgbGluZU5yID0gZWRpdG9yLmdldEN1cnNvcigpLmxpbmU7XG4gICAgICB2YXIgY29udGVudHMgPSBlZGl0b3IuZ2V0RG9jKCkuZ2V0TGluZShsaW5lTnIpO1xuICAgICAgbGV0IGN1cnNvclN0YXJ0ID0ge1xuICAgICAgICBsaW5lOiBsaW5lTnIsXG4gICAgICAgIGNoOiAwLFxuICAgICAgfTtcbiAgICAgIGxldCBjdXJzb3JFbmQgPSB7XG4gICAgICAgIGxpbmU6IGxpbmVOcixcbiAgICAgICAgY2g6IGNvbnRlbnRzLmxlbmd0aCxcbiAgICAgIH07XG4gICAgICBsZXQgY29udGVudCA9IGVkaXRvci5nZXRSYW5nZShjdXJzb3JTdGFydCwgY3Vyc29yRW5kKTtcbiAgICAgIHJldHVybiB7IHN0YXJ0OiBjdXJzb3JTdGFydCwgZW5kOiBjdXJzb3JFbmQsIGNvbnRlbnQ6IGNvbnRlbnQgfTtcbiAgICB9XG4gIH1cblxuICBzaG9ydGN1dEV4Y2xhbWF0aW9uTWFyaygpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXCFgKTtcbiAgfVxuXG4gIHNob3J0Y3V0QXQoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgQGApO1xuICB9XG5cbiAgc2hvcnRjdXRIYXNoKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYCNgKTtcbiAgfVxuXG4gIHNob3J0Y3V0RG9sbGFyKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYCRgKTtcbiAgfVxuXG4gIHNob3J0Y3V0UGVyY2VudCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXCVgKTtcbiAgfVxuXG4gIHNob3J0Y3V0Q2lyY3VtZmxleCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXF5gKTtcbiAgfVxuXG4gIHNob3J0Y3V0QW1wZXJzYW5kKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcJmApO1xuICB9XG5cbiAgc2hvcnRjdXRMZXNzVGhhbigpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGlmIChzZWxlY3RlZFRleHQpIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGA8JHtzZWxlY3RlZFRleHR9PmApO1xuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgPGApO1xuICB9XG5cbiAgc2hvcnRjdXRHcmVhdGVyVGhhbigpOiB2b2lkIHtcblx0XHRsZXQgYWN0aXZlTGVhZjogYW55ID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XG4gICAgbGV0IGVkaXRvciA9IGFjdGl2ZUxlYWYudmlldy5zb3VyY2VNb2RlLmNtRWRpdG9yO1xuICAgIGxldCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dChlZGl0b3IpO1xuXG4gICAgbGV0IHJlc3VsdFRleHQgPSBcIj4gXCIgKyBzZWxlY3RlZFRleHQuY29udGVudC5zcGxpdCgnXFxuJykuam9pbihcIlxcbj4gXCIpO1xuXHRcdGVkaXRvci5yZXBsYWNlUmFuZ2UocmVzdWx0VGV4dCwgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcbiAgfVxuXG4gIHNob3J0Y3V0TGVmdFNxdWFyZUJyYWNrZXQoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0KSB7XG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgW1ske3NlbGVjdGVkVGV4dH1dXWApO1xuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgW2ApO1xuICB9XG5cbiAgc2hvcnRjdXRSaWdodFNxdWFyZUJyYWNrZXQoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXWApO1xuICB9XG5cbiAgc2hvcnRjdXRQeUNvZGUoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBpZiAoc2VsZWN0ZWRUZXh0KSB7XG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgXFxgXFxgcHlcXG4ke3NlbGVjdGVkVGV4dH1cXG5cXGBcXGBcXGBgKTtcbiAgICB9IGVsc2UgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcYGApO1xuICB9XG5cbiAgc2hvcnRjdXRDb2RlRmVuY2VzKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgaWYgKHNlbGVjdGVkVGV4dCkge1xuICAgICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxcYCR7c2VsZWN0ZWRUZXh0fVxcYGApO1xuICAgIH0gZWxzZSBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgXFxgYCk7XG4gIH1cblxuICBzaG9ydGN1dFRvZ2dsZUNvZGVCbG9jaygpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKCkgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKCkgOiBcIlwiO1xuICAgIGxldCBzdGFydEN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoJ2Zyb20nKTtcbiAgICBsZXQgZmlyc3RMaW5lID0gZWRpdG9yLmdldExpbmUoc3RhcnRDdXJzb3IubGluZSk7XG4gICAgbGV0IGVuZEN1cnNvciA9IGVkaXRvci5nZXRDdXJzb3IoJ3RvJyk7XG4gICAgbGV0IGxhc3RMaW5lID0gZWRpdG9yLmdldExpbmUoZW5kQ3Vyc29yLmxpbmUpO1xuXG4gICAgLy8gSWYgdGhlIHNlbGVjdGlvbnMgc3RhcnRzIHdpdGggYGBgLCB0aGVuIHdlIHNob3VsZCByZW1vdmUgdGhlIGNvZGUgYmxvY2suXG4gICAgbGV0IGlzQ29kZUJsb2NrID0gZmlyc3RMaW5lLnN0YXJ0c1dpdGgoXCJgYGBcIikgJiYgbGFzdExpbmUuZW5kc1dpdGgoXCJgYGBcIikgXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiBzZWxlY3RlZFRleHQubGVuZ3RoID49IDY7XG4gICAgaWYgKGlzQ29kZUJsb2NrKSB7XG4gICAgICAvLyBQb3NpdGlvbiBvZiBmaXJzdCBub24td2hpdGVzcGFjZVxuICAgICAgbGV0IHRleHRTdGFydFBvcyA9IHNlbGVjdGVkVGV4dC5zZWFyY2goXCJcXFxcc1xcXFxTXCIpICsgMTtcbiAgICAgIGlmICh0ZXh0U3RhcnRQb3MgPCAwKSB7XG4gICAgICAgIHRleHRTdGFydFBvcyA9IDM7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgY29kZSBibG9jayBmb3JtYXR0aW5nLlxuICAgICAgbGV0IGVuZFBvcyA9IHNlbGVjdGVkVGV4dC5sZW5ndGggLSAzO1xuICAgICAgbGV0IGlubmVyVGV4dCA9IHNlbGVjdGVkVGV4dC5zdWJzdHJpbmcodGV4dFN0YXJ0UG9zLCBlbmRQb3MpXG4gICAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihpbm5lclRleHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXGBcXGBcXGBcXG4ke3NlbGVjdGVkVGV4dH1cXG5cXGBcXGBcXGBgKTtcbiAgICAgIHN0YXJ0Q3Vyc29yLmNoID0gMzsgLy8gTW92ZSBjdXJzb3IgYWZ0ZXIgYGBgXG4gICAgICBlZGl0b3Iuc2V0Q3Vyc29yKHN0YXJ0Q3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICBzaG9ydGN1dFJpZ2h0Q3VybHlCcmFja2V0KCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZFRleHQgPSBlZGl0b3Iuc29tZXRoaW5nU2VsZWN0ZWQoKVxuICAgICAgPyBlZGl0b3IuZ2V0U2VsZWN0aW9uKClcbiAgICAgIDogZmFsc2U7XG4gICAgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYH1gKTtcbiAgfVxuXG4gIHNob3J0Y3V0TGVmdEN1cmx5QnJhY2tldCgpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gZWRpdG9yLnNvbWV0aGluZ1NlbGVjdGVkKClcbiAgICAgID8gZWRpdG9yLmdldFNlbGVjdGlvbigpXG4gICAgICA6IGZhbHNlO1xuICAgIGlmIChzZWxlY3RlZFRleHQpIHtcbiAgICAgIGVkaXRvci5yZXBsYWNlU2VsZWN0aW9uKGBcXHske3NlbGVjdGVkVGV4dH1cXH1gKTtcbiAgICB9IGVsc2UgZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oYFxce2ApO1xuICB9XG5cbiAgc2hvcnRjdXRWZXJ0aWNhbExpbmUoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpXG4gICAgICA/IGVkaXRvci5nZXRTZWxlY3Rpb24oKVxuICAgICAgOiBmYWxzZTtcbiAgICBlZGl0b3IucmVwbGFjZVNlbGVjdGlvbihgfGApO1xuICB9XG5cbiAgc2hvcnRjdXROdW1iZXJlZEl0ZW1zKCk6IHZvaWQge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoZWRpdG9yKTtcblx0Y29uc3QgY29udGVudCA9IHNlbGVjdGVkVGV4dC5jb250ZW50O1xuICAgIGxldCBvdXRwdXRCdWlsZGVyID0gbmV3IEFycmF5KGNvbnRlbnQubGVuZ3RoICsgMylcbiAgICBsZXQgbGV2ZWwgPSAxXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBjb250ZW50W2ldXG4gICAgICBpZiAoY2hhciA9PT0gJ1xccicgJiYgY29udGVudFtpICsgMV0gPT09ICdcXG4nKSB7XG4gICAgICAgIG91dHB1dEJ1aWxkZXIucHVzaCgnXFxyXFxuJyArIGxldmVsICsgJy4gJylcbiAgICAgICAgaSsrO1xuICAgICAgICBsZXZlbCsrO1xuICAgICAgfSBlbHNlIGlmIChjaGFyID09PSAnXFxuJykge1xuICAgICAgICBvdXRwdXRCdWlsZGVyLnB1c2goJ1xcbicgKyBsZXZlbCArICcuICcpXG4gICAgICAgIGxldmVsKys7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDApIHtcbiAgICAgICAgb3V0cHV0QnVpbGRlci5wdXNoKGxldmVsICsgJy4gJylcbiAgICAgICAgb3V0cHV0QnVpbGRlci5wdXNoKGNoYXIpXG4gICAgICAgIGxldmVsKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXRCdWlsZGVyLnB1c2goY2hhcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRUZXh0ID0gb3V0cHV0QnVpbGRlci5qb2luKCcnKVxuXG4gICAgZWRpdG9yLnJlcGxhY2VSYW5nZShyZXN1bHRUZXh0LCBzZWxlY3RlZFRleHQuc3RhcnQsIHNlbGVjdGVkVGV4dC5lbmQpO1xuICB9XG5cbiAgc2hvcnRjdXRMaXN0SXRlbXMoKTogdm9pZCB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KGVkaXRvcik7XG5cbiAgICBsZXQgcmVzdWx0VGV4dCA9IFwiLSBcIiArIHNlbGVjdGVkVGV4dC5jb250ZW50LnNwbGl0KCdcXG4nKS5qb2luKFwiXFxuLSBcIik7XG5cbiAgICBsZXQgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dDtcbiAgICB3aGlsZSAocmVzdWx0VGV4dENoZWNrLnNlYXJjaChcIi0gLSBcIikgPj0gMCkge1xuICAgICAgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dENoZWNrLnJlcGxhY2UoXCItIC0gXCIsIFwiXHQtIFwiKTtcbiAgICB9XG4gICAgd2hpbGUgKHJlc3VsdFRleHRDaGVjay5zZWFyY2goXCItIFx0XHRcIikgPj0gMCkge1xuICAgICAgcmVzdWx0VGV4dENoZWNrID0gcmVzdWx0VGV4dENoZWNrLnJlcGxhY2UoXCItIFx0XHRcIiwgXCJcdC0gXHRcIik7XG4gICAgfVxuICAgIHdoaWxlIChyZXN1bHRUZXh0Q2hlY2suc2VhcmNoKFwiLSBcdC0gXCIpID49IDApIHtcbiAgICAgIHJlc3VsdFRleHRDaGVjayA9IHJlc3VsdFRleHRDaGVjay5yZXBsYWNlKFwiLSBcdC0gXCIsIFwiXHRcdC0gXCIpO1xuICAgIH1cbiAgICBlZGl0b3IucmVwbGFjZVJhbmdlKHJlc3VsdFRleHRDaGVjaywgc2VsZWN0ZWRUZXh0LnN0YXJ0LCBzZWxlY3RlZFRleHQuZW5kKTtcbiAgfVxuXG4gIHJlbW92ZUZvcm1hdFN5bWJvbHNGcm9tU3RyKGxpbmU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGVkaXRvciA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVWaWV3T2ZUeXBlKE1hcmtkb3duVmlldyk/LmVkaXRvcjtcbiAgICBpZiAoZWRpdG9yID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgc3ltYm9scyB3ZSBkb24ndCB3YW50IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUuXG4gICAgd2hpbGUgKGxpbmUuc3Vic3RyaW5nKDAsMikgPT0gXCIjI1wiKSB7XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKFwiIyNcIiwgXCIjXCIpO1xuICAgIH1cbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwyKSA9PSBcIiMgXCIpIHtcbiAgICAgIGxpbmUgPSBsaW5lLnN1YnN0cigyKTtcbiAgICB9XG4gICAgd2hpbGUgKGxpbmUuc3Vic3RyaW5nKDAsMikgPT0gXCI+IFwiKSB7XG4gICAgICBsaW5lID0gbGluZS5zdWJzdHIoMik7XG4gICAgfVxuICAgIHdoaWxlIChsaW5lLnN1YnN0cmluZygwLDIpID09IFwiXHRcdFwiKSB7XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKFwiXHRcdFwiLCBcIlx0XCIpO1xuICAgIH1cbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwzKSA9PSBcIlx0LSBcIikge1xuICAgICAgbGluZSA9IGxpbmUuc3Vic3RyKDMpO1xuICAgIH1cbiAgICB3aGlsZSAobGluZS5zdWJzdHJpbmcoMCwyKSA9PSBcIi0gXCIpIHtcbiAgICAgIGxpbmUgPSBsaW5lLnN1YnN0cigyKTtcbiAgICB9XG4gICAgdmFyIHJlX2RpZ2l0cyA9IC9eXFxkXFwuXFxzLztcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKHJlX2RpZ2l0cywgXCJcIik7XG5cbiAgICByZXR1cm4gbGluZTtcbiAgfVxuXG4gIGFkZEhlYWRpbmdUb1N0cihsaW5lOiBzdHJpbmcsIGhlYWRpbmdMZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBsZXQgc3BhY2UgPSBcIiBcIjtcbiAgICBpZiAoaGVhZGluZ0xldmVsID09IDApIHtcbiAgICAgIHNwYWNlID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCIjXCIucmVwZWF0KGhlYWRpbmdMZXZlbCkgKyBzcGFjZSArIGxpbmU7XG4gIH1cblxuICBzaG9ydGN1dEhlYWRlck4oaGVhZGluZ0xldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZWRpdG9yID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KT8uZWRpdG9yO1xuICAgIGlmIChlZGl0b3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGhlYWRpbmcgbGV2ZWwgdG8gZWFjaCBsaW5lLlxuICAgIGxldCBzZWxlY3Rpb25zID0gZWRpdG9yLmxpc3RTZWxlY3Rpb25zKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNob3J0Y3V0SGVhZGVyTlNpbmdsZVNlbGVjdGlvbihoZWFkaW5nTGV2ZWwsIHNlbGVjdGlvbnNbaV0pXG4gICAgfVxuXG4gICAgLy8gc2V0U2VsZWN0aW9ucyBpcyBjYWxsZWQgdG8gcHJlc2VydmUgdGhlIGxvY2F0aW9uIG9mIGVhY2ggY3Vyc29yIHJlbGF0aXZlXG4gICAgLy8gdG8gdGhlIGVuZCBvZiB0aGUgbGluZS5cbiAgICBlZGl0b3Iuc2V0U2VsZWN0aW9ucyhzZWxlY3Rpb25zKTtcbiAgfVxuXG4gIC8vIHNob3J0Y3V0SGVhZGVyTlNpbmdsZVNlbGVjdGlvbiBzZXRzIGFsbCBsaW5lcyBpbiB0aGUgc2VsZWN0aW9uIHRvIHRoZSBcbiAgLy8gZGVzaXJlZCBoZWFkaW5nIGxldmVsLiBzZWxlY3Rpb24gaXMgYWxzbyB1cGRhdGVkIHRvIG1haW50YWluIHRoZSBjdXJzb3JcbiAgLy8gcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGVuZCBvZiB0aGUgbGluZS5cbiAgc2hvcnRjdXRIZWFkZXJOU2luZ2xlU2VsZWN0aW9uKGhlYWRpbmdMZXZlbDogbnVtYmVyLCBzZWxlY3Rpb246IEVkaXRvclNlbGVjdGlvbikge1xuICAgIGxldCBlZGl0b3IgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpPy5lZGl0b3I7XG4gICAgaWYgKGVkaXRvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2F2ZSBhbmNob3IvaGVhZCBkaXN0YW5jZSBmcm9tIGVuZC5cbiAgICBsZXQgYW5jaG9yRGlzdEZyb21FbmQgPSBlZGl0b3IuZ2V0TGluZShzZWxlY3Rpb24uYW5jaG9yLmxpbmUpLmxlbmd0aCAtIHNlbGVjdGlvbi5hbmNob3IuY2hcbiAgICBsZXQgaGVhZERpc3RGcm9tRW5kID0gZWRpdG9yLmdldExpbmUoc2VsZWN0aW9uLmhlYWQubGluZSkubGVuZ3RoIC0gc2VsZWN0aW9uLmhlYWQuY2hcblxuICAgIC8vIEdldCBmcm9tIGFuZCB0byBsaW5lIG51bWJlcnMuXG4gICAgbGV0IGZyb21MaW5lID0gc2VsZWN0aW9uLmFuY2hvci5saW5lO1xuICAgIGxldCB0b0xpbmUgPSBzZWxlY3Rpb24uaGVhZC5saW5lO1xuICAgIGxldCBpbmNyZW1lbnQgPSBmcm9tTGluZSA8PSB0b0xpbmUgPyAxIDogLTE7XG4gICAgLy8gRm9yIGVhY2ggbGluZSBpbiB0aGUgc2VsZWN0aW9uLCBzZXQgdGhlIGhlYWRpbmcgbGV2ZWwuXG4gICAgbGV0IGxpbmVOdW0gPSBmcm9tTGluZTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICBsZXQgbGluZSA9IGVkaXRvci5nZXRMaW5lKGxpbmVOdW0pO1xuICAgICAgbGluZSA9IHRoaXMucmVtb3ZlRm9ybWF0U3ltYm9sc0Zyb21TdHIobGluZSk7XG4gICAgICBsaW5lID0gdGhpcy5hZGRIZWFkaW5nVG9TdHIobGluZSwgaGVhZGluZ0xldmVsKTtcbiAgICAgIGVkaXRvci5zZXRMaW5lKGxpbmVOdW0sIGxpbmUpO1xuICAgICAgXG4gICAgICAvLyBNb3ZlIHRvIG5leHQgbGluZSBpZiBub3QgZG9uZS5cbiAgICAgIGlmIChsaW5lTnVtID09IHRvTGluZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGxpbmVOdW0gKz0gaW5jcmVtZW50O1xuICAgIH1cblxuICAgIC8vIFByZXNlcnZlIGFuY2hvci9oZWFkIGxvY2F0aW9ucyByZWxhdGl2ZSB0byBsaW5lIGVuZC5cbiAgICBzZWxlY3Rpb24uYW5jaG9yLmNoID0gZWRpdG9yLmdldExpbmUoc2VsZWN0aW9uLmFuY2hvci5saW5lKS5sZW5ndGggLSBhbmNob3JEaXN0RnJvbUVuZDtcbiAgICBzZWxlY3Rpb24uaGVhZC5jaCA9IGVkaXRvci5nZXRMaW5lKHNlbGVjdGlvbi5oZWFkLmxpbmUpLmxlbmd0aCAtIGhlYWREaXN0RnJvbUVuZDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hcmtkb3duVmlldyIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUM7QUFDRjtBQUNPLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxDQUFDLEtBQUssSUFBSTtBQUM3QyxRQUFRLE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDLENBQUM7QUFDbEcsSUFBSSxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLElBQUksU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBdUNEO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztBQUNqRSxnQkFBZ0I7QUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7QUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFD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
