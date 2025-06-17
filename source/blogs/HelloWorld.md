---
title: Hello, World!
created: 3 May 2025
date: 2025-05-03
layout: layouts/posts.njk
tags: blog
topics: intro, reference
---

# Headers

```md
# This is a heading 1
## This is a heading 2
### This is a heading 3 
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6
```

# This is a heading 1
## This is a heading 2
### This is a heading 3 
#### This is a heading 4
##### This is a heading 5
###### This is a heading 6

---

# Emphasis

```md
*This text will be italic*
_This will also be italic_
```

*This text will be italic*
_This will also be italic_

```md
**This text will be bold**
__This will also be bold__
```

**This text will be bold**
__This will also be bold__

```md
_You **can** combine them_
```

_You **can** combine them_

```md
text `Inline Code` text		
~~Mistaken text.~~	
<ins>Underline</ins>
```

text `Inline Code` text		
~~Mistaken text.~~	
<ins>Underline</ins>

```md
<center>This text is centered.</center>
<p style="text-align:center">Center this text</p>
<font color="red">This text is red!</font>
<p style="color:blue">Make this text blue.</p>
```

<center>This text is centered.</center>
<p style="text-align:center">Center this text</p>
<font color="red">This text is red!</font>
<p style="color:blue">Make this text blue.</p>

# Lists

```md
+ Item 1
+ Item 2
  + Item 2a
  - Item 2b
  - Item 2c

1. Item 1
2. Item 2
3. Item 3
   4. Item 3a
   5. Item 3b
```

+ Item 1
+ Item 2
  + Item 2a
  - Item 2b
  - Item 2c


1. Item 1
2. Item 2
3. Item 3
   1. Item 3a
   2. Item 3b

--- 

# Images

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

 With caption

```
<figure>
    <img src="https://www.markdownguide.org/assets/images/albuquerque.jpg"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>
```
<figure>
    <img src="https://www.markdownguide.org/assets/images/albuquerque.jpg"
         alt="Albuquerque, New Mexico">
    <figcaption>A single track trail outside of Albuquerque, New Mexico.</figcaption>
</figure>

---


# Links

 External links

Markdown style links can be used to refer to either external objects, such as web pages, or an internal page or image.

```md
http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)
```

http://obsidian.md - automatic!
[Obsidian](http://obsidian.md)

# Reference Links

```md
[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```


[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

# Blockquotes

```md
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961
```

> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society.

\- Doug Engelbart, 1961

---

# Inline code

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code. 

---

# Code blocks

<pre><code>```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</code></pre>

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
    
	
```md
    Text indented with a tab is formatted like this, and will also look like a code block in preview. 
```

    Text indented with a tab is formatted like this, and will also look like a code block in preview. 
    
---

# Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

```md
First Header | Second Header
------------ | ------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

First Header | Second Header
------------ | ------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

---

```md
Tables can be justified with a colon | Another example with a long title
:----------------|-------------:
because of the `:` | these will be justified

If you put links in tables, they will work, but if you use Piped Links, the pipe must be escaped with a `\` to prevent it being read as a table element.
```

Tables can be justified with a colon | Another example with a long title
:----------------|-------------:
because of the `:` | these will be justified

---
