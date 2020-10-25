(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{480:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Color schemes define the colors\nused to highlight source code in Sublime Text views\nand to style different elements\nfound in the editing area:\nbackground, foreground, selection, caret...")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This document describes\nthe old "),s("code",[t._v(".tmTheme")]),t._v(" color scheme (not theme!) format\ninherited from TextMate.")]),t._v(" "),s("p",[t._v("For the new "),s("code",[t._v(".sublime-color-scheme")]),t._v(" format\nadded in Sublime Text 3.1,\nrefer to the "),s("a",{attrs:{href:"https://www.sublimetext.com/docs/3/color_schemes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v('Sublime Text differentiates\nbetween "color schemes" defining colors in the editor area\nand "themes" defining the layout for the rest of the UI.\nRather confusingly,\nthe '),s("em",[t._v("color scheme")]),t._v(" format inherited from TextMate\nuses the "),s("code",[t._v(".tmTheme")]),t._v(" unchanged extension,\nbecause themes in TextMate themes\nare what color schemes are for Sublime Text.")]),t._v(" "),s("p",[t._v("It's important to remember\nthat UI themes and color schemes\nare two different customization mechanisms.\nGenerally speaking, it is far less complex\nto create a new color scheme\nthan it is to create a new UI theme.")])]),t._v(" "),s("h2",{attrs:{id:"file-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-format"}},[t._v("#")]),t._v(" File Format")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Format")])]),t._v(" "),s("td",[t._v("Property List")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Extension")])]),t._v(" "),s("td",[s("code",[t._v(".tmTheme")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Name")])]),t._v(" "),s("td",[t._v("Any")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Location")])]),t._v(" "),s("td",[t._v("Any under "),s("code",[t._v("Packages")])])])])]),t._v(" "),s("p",[t._v("The file format of color scheme files\nis inherited from Textmate.")]),t._v(" "),s("h2",{attrs:{id:"where-to-store-color-schemes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-to-store-color-schemes"}},[t._v("#")]),t._v(" Where to Store Color Schemes")]),t._v(" "),s("p",[t._v("By convention,\n"),s("RouterLink",{attrs:{to:"/guide/extensibility/packages.html"}},[t._v("packages")]),t._v(" primarily containing\na set of color scheme files\nhave the "),s("em",[t._v("Color Scheme -")]),t._v(" prefix.\nFor example: "),s("em",[t._v("Color Scheme - Default")]),t._v(".")],1),t._v(" "),s("p",[t._v("The file names of all available color schemes\nare displayed in the "),s("strong",[t._v("Preferences → Color Scheme")]),t._v(" menu,\ngrouped by the containing package.")]),t._v(" "),s("h2",{attrs:{id:"structure-of-a-color-scheme-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#structure-of-a-color-scheme-file"}},[t._v("#")]),t._v(" Structure of a Color Scheme File")]),t._v(" "),s("p",[t._v("All color scheme files share\nthe same topmost structure.")]),t._v(" "),s("p",[t._v("Colors can be expressed in the\nfollowing formats:\n"),s("code",[t._v("#RRGGBB")]),t._v(", "),s("code",[t._v("#RGB")]),t._v(", "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/X11_color_names",target:"_blank",rel:"noopener noreferrer"}},[t._v("X11 color names"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Most elements controlling colors\naccept an alpha channel value:\n"),s("code",[t._v("#RRGGBBAA")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"root-elements-in-color-schemes-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#root-elements-in-color-schemes-files"}},[t._v("#")]),t._v(" Root Elements in Color Schemes Files")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("plist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("PUBLIC")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-//Apple Computer//DTD PLIST 1.0//EN"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.apple.com/DTDs/PropertyList-1.0.dtd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("name"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Monokai"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- INSERT DICTIONARIES WITH COLOR SETTINGS HERE --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("uuid"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("D8D5E82E-3D5B-46B5-B38E-8C841C21347D"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("dl",[s("dt",[s("code",[t._v("name")])]),t._v(" "),s("dd",[s("p",[s("strong",[t._v("Optional.")]),t._v("\nName of the color scheme.\nIgnored by Sublime Text.")])]),t._v(" "),s("dt",[s("code",[t._v("settings")])]),t._v(" "),s("dd",[s("p",[s("strong",[t._v("Required.")]),t._v("\nContainer for further color scheme settings.\nSee "),s("a",{attrs:{href:"#sub-elements-of-settings"}},[t._v("Sub-elements of Settings")]),t._v(" for details.")])]),t._v(" "),s("dt",[s("code",[t._v("uuid")])]),t._v(" "),s("dd",[s("p",[s("strong",[t._v("Optional.")]),t._v("\nA unique identifier for the file.\nIgnored by Sublime Text.")])])]),t._v(" "),s("h2",{attrs:{id:"sub-elements-of-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sub-elements-of-settings"}},[t._v("#")]),t._v(" Sub-elements of Settings")]),t._v(" "),s("p",[t._v("Sublime Text supports\nthe following color scheme settings:")]),t._v(" "),s("h3",{attrs:{id:"global-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-settings"}},[t._v("#")]),t._v(" Global Settings")]),t._v(" "),s("p",[t._v("Not associated with any scope.\nThese settings affect global visual items\nin the editing area.")]),t._v(" "),s("p",[t._v("Global settings go inside a "),s("code",[t._v("<dict>")]),t._v(" element\nwithin the topmost "),s("code",[t._v("<array>")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("background"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("#272822"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("caret"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("#F8F8F0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         ...\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("foreground")])]),t._v(" "),s("dd",[s("p",[t._v('Default foreground color for the view.\nAffects file contents, the gutter, rulers and guides.\nThe alpha channel does not apply to file contents.\nBecause there is no override setting for rulers,\nthe only way to change the color of rulers\nis a "hack" further described '),s("a",{attrs:{href:"https://github.com/icylace/CursorRuler/wiki/Tips#ruler-colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("on CursorRuler's wiki"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("dt",[s("code",[t._v("background")])]),t._v(" "),s("dd",[s("p",[t._v("Default background color of the view (and gutter).")])]),t._v(" "),s("dt",[s("code",[t._v("invisibles")])]),t._v(" "),s("dd",[s("p",[t._v("Ignored.")])]),t._v(" "),s("dt",[s("code",[t._v("caret")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the caret.")])]),t._v(" "),s("dt",[s("code",[t._v("lineHighlight")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the line the caret is in.\nOnly used when the "),s("code",[t._v("higlight_line")]),t._v(" setting is set to "),s("code",[t._v("true")]),t._v(".")])])]),t._v(" "),s("h4",{attrs:{id:"brackets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brackets"}},[t._v("#")]),t._v(" Brackets")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("bracketContentsOptions")])]),t._v(" "),s("dd",[s("p",[t._v("Controls how brackets are highlighted\nwhen a caret is between a bracket pair.\nExpects a space-separated list of the available options.")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_brackets")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("underline")]),t._v(", "),s("code",[t._v("stippled_underline")]),t._v(", "),s("code",[t._v("squiggly_underline")]),t._v(",\n"),s("code",[t._v("foreground")])]),t._v(" "),s("p",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("underline")])])]),t._v(" "),s("dt",[s("code",[t._v("bracketContentsForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the highlighting(s)\nselected by "),s("code",[t._v("bracketContentsOptions")]),t._v(".")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_brackets")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")])]),t._v(" "),s("dt",[s("code",[t._v("bracketsOptions")])]),t._v(" "),s("dd",[s("p",[t._v("Controls how brackets are highlighted\nwhen a caret is next to a bracket.\nExpects a space-separated list of the available options.")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_brackets")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("underline")]),t._v(", "),s("code",[t._v("stippled_underline")]),t._v(", "),s("code",[t._v("squiggly_underline")]),t._v(",\n"),s("code",[t._v("foreground")])]),t._v(" "),s("p",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("underline")])])]),t._v(" "),s("dt",[s("code",[t._v("bracketsForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the highlighting(s)\nselected by "),s("code",[t._v("bracketOptions")]),t._v(".")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_brackets")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")])])]),t._v(" "),s("h4",{attrs:{id:"tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tags"}},[t._v("#")]),t._v(" Tags")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("tagsOptions")])]),t._v(" "),s("dd",[s("p",[t._v("Controls how tags are highlighted\nwhen a caret is inside a tag.\nExpects a space-separated list of the available options.")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_tags")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("underline")]),t._v(", "),s("code",[t._v("stippled_underline")]),t._v(", "),s("code",[t._v("squiggly_underline")]),t._v(",\n"),s("code",[t._v("foreground")])]),t._v(" "),s("p",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("stippled_underline")])])]),t._v(" "),s("dt",[s("code",[t._v("tagsForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the highlighting(s)\nselected by "),s("code",[t._v("tagsOptions")]),t._v(".")]),t._v(" "),s("p",[t._v("Only applied when the "),s("code",[t._v("match_tags")]),t._v(" setting\nis set to "),s("code",[t._v("true")]),t._v(".")])])]),t._v(" "),s("h4",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" Find")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("findHighlight")])]),t._v(" "),s("dd",[s("p",[t._v("Background color of regions matching the current search.")])]),t._v(" "),s("dt",[s("code",[t._v("findHighlightForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Foreground color of regions matching the current search.")])])]),t._v(" "),s("h4",{attrs:{id:"gutter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gutter"}},[t._v("#")]),t._v(" Gutter")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("gutter")])]),t._v(" "),s("dd",[s("p",[t._v("Background color of the gutter.")])]),t._v(" "),s("dt",[s("code",[t._v("gutterForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Foreground color of the gutter.")])])]),t._v(" "),s("h4",{attrs:{id:"selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selection"}},[t._v("#")]),t._v(" Selection")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("selection")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the selection regions.")])]),t._v(" "),s("dt",[s("code",[t._v("selectionBorder")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the selection regions' border.")])]),t._v(" "),s("dt",[s("code",[t._v("inactiveSelection")])]),t._v(" "),s("dd",[s("p",[t._v("Color of inactive selections (inactive view).")])])]),t._v(" "),s("h4",{attrs:{id:"guides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guides"}},[t._v("#")]),t._v(" Guides")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("guide")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the guides displayed to indicate nesting levels.")]),t._v(" "),s("p",[t._v("Only used if the "),s("code",[t._v("indent_guide_options")]),t._v(" setting\nincludes"),s("code",[t._v("draw_normal")]),t._v(".")])]),t._v(" "),s("dt",[s("code",[t._v("activeGuide")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the guide lined up with the caret.")]),t._v(" "),s("p",[t._v("Only applied if the "),s("code",[t._v("indent_guide_options")]),t._v(" setting\nincludes "),s("code",[t._v("draw_active")]),t._v(".")])]),t._v(" "),s("dt",[s("code",[t._v("stackGuide")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the current guide's parent guide levels.")]),t._v(" "),s("p",[t._v("Only used if the "),s("code",[t._v("indent_guide_options")]),t._v(" setting\nis set to "),s("code",[t._v("draw_active")]),t._v(".")])])]),t._v(" "),s("h4",{attrs:{id:"highlighted-regions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#highlighted-regions"}},[t._v("#")]),t._v(" Highlighted Regions")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("highlight")])]),t._v(" "),s("dd",[s("p",[t._v("Background color for regions added via "),s("code",[t._v("sublime.add_regions()")]),t._v("\nwith the "),s("code",[t._v("sublime.DRAW_OUTLINED")]),t._v(" flag added.")])]),t._v(" "),s("dt",[s("code",[t._v("highlightForeground")])]),t._v(" "),s("dd",[s("p",[t._v("Foreground color for regions added via "),s("code",[t._v("sublime.add_regions()")]),t._v("\nwith the "),s("code",[t._v("sublime.DRAW_OUTLINED")]),t._v(" flag added.")])])]),t._v(" "),s("h4",{attrs:{id:"shadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shadow"}},[t._v("#")]),t._v(" Shadow")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("shadow")])]),t._v(" "),s("dd",[s("p",[t._v("Color of the shadow effect when the buffer is scrolled.")])]),t._v(" "),s("dt",[s("code",[t._v("shadowWidth")])]),t._v(" "),s("dd",[s("p",[t._v("Width of the shadow effect when the buffer is scrolled.")]),t._v(" "),s("p",[t._v("Values greater than 32\ncause the shadow to be hidden.\nThe default is 8.")]),t._v(" "),s("p",[t._v("Note that, despite its nature,\nthis expects a "),s("strong",[t._v("string value")]),t._v(".")])])]),t._v(" "),s("h3",{attrs:{id:"scoped-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scoped-settings"}},[t._v("#")]),t._v(" Scoped Settings")]),t._v(" "),s("p",[t._v("Settings associated with a particular scope.")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("name"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Comment"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("scope"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("comment"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("foreground"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("#75715E"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("dl",[s("dt",[s("code",[t._v("name")])]),t._v(" "),s("dd",[s("p",[t._v("Descriptive name of the item.")])]),t._v(" "),s("dt",[s("code",[t._v("scope")])]),t._v(" "),s("dd",[s("p",[t._v("Target scope name.")])]),t._v(" "),s("dt",[s("code",[t._v("settings")])]),t._v(" "),s("dd",[s("p",[t._v("Container for settings.\nValid settings are:")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("fontStyle")])]),t._v(" "),s("dd",[s("p",[t._v("Space-separated list of\nstyles for the font.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("bold")]),t._v(", "),s("code",[t._v("italic")]),t._v(", nothing (resets fontStyle to normal)")])]),t._v(" "),s("dt",[s("code",[t._v("foreground")])]),t._v(" "),s("dd",[s("p",[t._v("Foreground color.")])]),t._v(" "),s("dt",[s("code",[t._v("background")])]),t._v(" "),s("dd",[s("p",[t._v("Background color.")])])])])]),t._v(" "),s("h2",{attrs:{id:"minimal-scope-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minimal-scope-coverage"}},[t._v("#")]),t._v(" Minimal Scope Coverage")]),t._v(" "),s("p",[t._v("Refer to the "),s("a",{attrs:{href:"http://www.sublimetext.com/docs/3/scope_naming.html#color_schemes",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Scope Naming guidelines"),s("OutboundLink")],1),t._v("\nin order to find out\nwhich scopes a color scheme should cover at minimum.")]),t._v(" "),s("h2",{attrs:{id:"sublime-text-settings-related-to-color-schemes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sublime-text-settings-related-to-color-schemes"}},[t._v("#")]),t._v(" Sublime Text Settings Related to Color Schemes")]),t._v(" "),s("h3",{attrs:{id:"view-settings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-settings"}},[t._v("#")]),t._v(" View Settings")]),t._v(" "),s("dl",[s("dt",[s("code",[t._v("color_scheme")])]),t._v(" "),s("dd",[s("p",[t._v("Path to a color scheme file\nrelative to the Data folder\n(example: "),s("code",[t._v("Packages/Color Scheme - Default/Monokai.tmTheme")]),t._v(").")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);