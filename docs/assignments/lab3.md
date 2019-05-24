# Lab 3 - Formatting and Layout with Styles

## General

Produce a style sheet to be used by your web site. The style sheet you are to produce should be called **`webd2201.css`** and reside in a css subdirectory relative to where your web pages reside (i.e. your working directory). For this assignment your need to go through your html files for the first two assignments (i.e. **`index.html, lab1.html,`** and your **`lab2.html`**) and remove any colour attributes (i.e. text, bgcolor, link, vlink or alink) defined in the `<body>` tags on the page, an instead refer to the external stylesheet.

In addition to updating the three (3) files listed above, you are to produce a file named lab3.html that shows each of the ten tags you defined in your **`webd2201.css`** cascading style sheet file.

## Due Date

The due date for Lab 3 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/importantdates) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 3 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- NOTE:All the HTML pages submitted for this lab must pass the [W3C HTML validator](http://validator.w3.org/) XHTML 1.0 Transitional specification. Specify the DOCTYPE and charset as implemented in the first two labs. BE SURE TO INCLUDE THE XHTML VALIDATION IMAGE ON THE BOTTOM OF EACH PAGE.

- Create a new external CSS file (i.e. a new text file) and name it webd2201.css. This file should be published/located in a css sub-directory, relative to your working directory (i.e. in a `/var/www/html/webd2201/userid/css folder`).

::: tip
For those who are using xampp, make a directory `webd2201` in `c/xampp/htdocs`. Then you will get access to that folder on [http://localhost/webd2201](http://localhost/webd2201)
:::

- Include CSS comments in your new webd2201.css file (using the multi-line **/_ c-style comments _/** syntax) that includes your name, the date the file was create, the filename and the purpose of the file.

* Your CSS must be validated on each of your pages using the [CSS validator](http://jigsaw.w3.org/css-validator/). **BE SURE TO INCLUDE THE CSS VALIDATION IMAGE ON THE BOTTOM OF EACH PAGE.**

* In the webd2201.css file, create style selectors for ten (10) different html elements (or classes of elements). NOTES: Three (3) of your selectors must be for the: body element; th element; and, four (4) pseudo-classes of the a elements.

* Create a style selector for the `<body>`element (i.e set up a body selector), this should define styles (as a minimum) **`font-family`** (something other than "TimesNewRoman"), background-color and color. Remove the bgcolor and text attributes from the `<body>` tags on each of your existing pages.

* Create a style selector for the **`<th>`** (table heading) element(s) (i.e set up a th selector)). It should be styled to be emphasis to the heading of any table that has a **`<tr>`** table row of **`<th>`**elements.

* Create a style selectors for the `<a>` style pseudo-elements (i.e. the different states four (4) different states of an anchor/link:`a:link; a:visited; a:active;` and, `a:hover`), as presented in class). Ensure each unique state is noticeably different from the others. Remove the link, vlink, and alink from the attributes on your `<body>` tags on the existing pages (if you had them).

* NOTE: These four (4) pseudo-elements count as only one selector of the ten (10) required for the lab (i.e. the style for the `<a>` tag

* Produce a new lab3.html page that has a `<title>` tag that reflects the lab number and `<!-- HTML Comments -->`giving your name, the file name, the date the file was created and a brief description of the page's purpose.
  E.g.

```html
<!--
	Name: Bill Smith
	File: lab3.html
	Date: 24 May 2019
	This is the Lab 3 page for Web Development - Fundamentals (WEBD2201)
-->
```

- Implement the created external style sheet on all existing pages (i.e. **`index.html, lab1.html, lab2.html,`** and **`lab3.html`**) by including a `<link>` in the `<head>` of each page to the webd2201.css file.

```html
<head>
  <link rel="stylesheet" type="text/css" href="./css/webd2201.css" />
</head>
```

- The new **`lab3.html`** page should have an detailed description paragraph, explaining the purpose of the page PLUS have one paragraph per selector created in the file describing and demo'ing each of the ten (10) selectors created for the lab (i.e. have eleven (11) paragraphs total)

* Produce a clearly labelled link on all of your existing pages (i.e. `index.html`, `lab1.html`, and `lab2.html`) that will take you to your new `lab3.html` page (i.e. make the new `lab3.html` page part of your overall website).

* The new `lab3.html` is to implement the same table your existing `index.html, lab1.html`, and `lab2.html` pages to give your site a consistent look and feel.

* Re-visit your index.html and lab1.html and lab2.html files, and remove any attributes for tags that have been defined in the above described file. One of the tags defined should be the `<body>` tag, for the background and text colours.

* Be sure to turn off your stylesheets (just change your href attribute on the `<link>` tag to an incorrect filename, then save the file and refresh the page) and see that your page still looks acceptable if your external CSS file becomes deleted or corrupted.

## Rubric

<table style="border:2px solid #41b07e;width:100%;">
<tr>
<td style="font-weight:bold;text-align: center;">Topic</td>
<td style="font-weight:bold;text-align: center;">Description</td>
<td style="font-weight:bold;text-align: center;">Weighting</td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Submission</td>
</tr>
<tr>
<td><b>Submission</b></td>
<td><br/>-2 files not published into your <span class="em">/var/www/html/webd2201/userid</span> main folder (instead in <span class="em">/home/userid</span> folder).<br/><br/>
-2 no link submitted in DC Connect <span class="em">Lab 3</span> assignment drop box<br/><br/>
-1 link in DC Connect <span class="em">Lab 3</span> assignment drop box not clickable<br/><br/>
-1 link in DC Connect <span class="em">Lab 3</span> assignment drop box does not go to your website<br/><br/></td>
<td style="text-align:center;"><b>-2</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 2 incidents)</p></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Deliverable Specific Outcomes</td>
</tr>
<tr>
<td><b>Comments/Description paragraphs</b></td>
<td><br/>-1 no <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab3.html</span><br/><br/>
-0.5 incorrect or incomplete <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab3.html</span> (comments to include your name, the filename, the date the file was created and a brief description of the page's purpose)<br/><br/>
-1 <span class="em">webd2201.css</span> css file missing <span class="code">/* c-style comments */</span> including your name, the file name, and the date the file was created<br/><br/> 
-1 <span class="em">lab3.html</span> missing description paragraph referencing it is a CSS assignment.<br/><br/>
-0.5 <span class="em">lab3.html</span> description paragraph is light on content.<br/><br/>
-0.5 &times; number of selectors that do not have a description paragraph/demonstrate the style implemented in the external stylesheet (each selector should get their own paragraph)<br/><br/></td>
<td style="text-align:center;"><b>-4</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 4 incidents)</p></td>
</tr>
<tr>
<td><b>CSS Setup</b></td>
<td>-1 CSS file not named <span class="em">webd2201.css</span> exactly<br/><br/>
-1 <span class="em">webd2201.css</span> not published into a <span class="em">css</span> subdirectory relative to working directory<br/><br/>
-0.5 css subdirectory not named <span class="em">css</span> EXACTLY<br/><br/>
-1 <span class="code">th{ ... }</span> selector not created<br/><br/>
-2 <span class="code">body{ ... }</span> selector not created<br/><br/>
-0.5 <span class="code">body</span> selector does not include a <span class="code">background-color</span> style<br/><br/>
-0.5 <span class="code">body</span> selector does not include a <span class="code">color</span> style<br/><br/>
-0.5 <span class="code">body</span> selector does not include a <span class="code">font-family</span> style<br/><br/>
-0.5 <span class="code">body</span> selector's <span class="code">font-family</span> style not to be <span class="em">"TimesNewRoman"</span><br/><br/>
-2 no <span class="code">a { ... }</span> link/anchor selectors created at all in <span class="em">webd2201.css</span><br/><br/>
-0.5 &times; number of the 4 pseudo-elements of the a selector (<span class="code">link</span>, <span class="code">visited</span>, <span class="code">hover</span> and <span class="code">active</span>) that was not defined or was NOT unique (NOTE: copying/pasting and then changing the pseudo-class name is not good enough for full marks</span>)<br/><br/>
-0.5 &times; number of selectors missing from the required ten (10) in <span class="em">webd2201.css</span> file<br/><br/></td>
<td style="text-align:center;"><b>-8</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 8 incidents)</p></td>
</tr>
<tr>
<td><b>CSS Implementation</b></td>
<td><br/>-1 <span class="code">&lt;link&gt;</span> on <span class="em">index.html</span> to the <span class="em">webd2201.css</span> external css file missing/incorrect<br/><br/>
-1 <span class="code">&lt;link&gt;</span> on <span class="code">lab1.html</span> to the <span class="em">webd2201.css</span> external css file missing/incorrect<br/><br/>
-1 <span class="code">&lt;link&gt;</span> on <span class="em">lab2.html</span> to the <span class="em">webd2201.css</span> external css file missing/incorrect<br/><br/>
-1 <span class="code">&lt;link&gt;</span> on <span class="em">lab3.html</span> to the <span class="em">webd2201.css</span> external css file missing/incorrect<br/><br/>
-1 <span class="em">index.html</span> page missing a link in nav bar to the new <span class="em">lab3.html</span> page<br/><br/>
-1 <span class="em">lab1.html</span> page missing a link in nav bar to the new <span class="em">lab3.html</span> page<br/><br/>
-1 <span class="em">lab2.html</span> page missing a link in nav bar to the new <span class="em">lab3.html</span> page<br/><br/>
-0.5 <span class="code">bgcolor</span> and/or <span class="code">text</span> and/or <span class="code">link</span> and/or <span class="code">vlink</span> and/or <span class="code">alink</span> attribute(s) not removed from <span class="code">&lt;body&gt;</span> tag on <span class="em">index.html</span> page<br/><br/>
-0.5 <span class="code">bgcolor</span> and/or <span class="code">text</span> and/or <span class="code">link</span> and/or <span class="code">vlink</span> and/or <span class="code">alink</span> attribute(s) not removed from <span class="code">&lt;body&gt;</span> tag on <span class="em">lab1.html</span> page<br/><br/>
-0.5 <span class="code">bgcolor</span> and/or <span class="code">text</span> and/or <span class="code">link</span> and/or <span class="code">vlink</span> and/or <span class="code">alink</span> attribute(s) not removed from <span class="code">&lt;body&gt;</span> tag on <span class="em">lab2.html</span> page<br/><br/>
-2 no CSS clickable validation image provide at the bottom of each <span class="em">&#42;.html</span> page<br/><br/>
-1 CSS not valid <span class="em">index.html</span> page<br/><br/>
-1 CSS not valid <span class="em">lab1.html</span> page<br/><br/>
-1 CSS not valid <span class="em">lab2.html</span> page<br/><br/>
-1 CSS not valid <span class="em">lab3.html</span> page<br/><br/></td>
<td style="text-align:center;"><b>-6</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 6 incidents)</p></td>
</tr>
<tr>
<td><b><span class="em">lab3.html</span> Requirements</b></td>
<td><br/>-1 new HTML file (that implements/demonstrates the CSS file) not named <span class="em">lab3.html</span> exactly<br/><br/>
-1 <span class="code">&lt;title&gt;</span> not changed to reflect Lab 3<br/><br/>
-2 <span class="em">lab3.html</span> did not implement a table layout (created as part of lab 2)<br/><br/>
-1 <span class="em">lab3.html</span> did not implement the same table layout as the one created in  lab 2 (pages do not look the same)<br/><br/></td>
<td style="text-align:center;"><b>/2</b></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Other Penalties</td>
</tr>
<tr>
<td><b>XHTML Valid</b></td>
<td><br/>-1 no clickable XHTML image provided on <span class="em">lab3.html</span> page.
<br/><br/>-2 <span class="code">&lt;!DOCTYPE&gt;</span> in <span class="em">lab3.html</span> was not <span class="code">Transitional</span> (used <span class="code">HTML 4.01</span> instead)
<br/><br/>-1 exactly one XHTML error on <span class="em">lab3.html</span> page.
<br/><br/>-2 more than one XHTML error on <span class="em">lab3.html</span> page.<br/><br/></td>
<td style="text-align:center;"><b>-2</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 2 incidents)</p></td>
</tr>
<tr>
<td><b>Late Submission</b></td>
<td><br/>-0 lab submitted on time<br/><br/>
-5 lab submitted late but within 72 hours of due date<br/><br/>
-20 lab not submitted within 72 hours of due date<br/><br/></td>
<td style="text-align:center;"><b>/5</b></td>
</tr>
</table>

## Resources

[Paletton](http://paletton.com/) : It is hard to pick a proper colour scheme. In the real world there would normally be designers to point you in the right direction. In lieu of that, here is a nice tool you can use to ensure you do not blind your users. Pick a scheme you like, and hit the 'Tables / Export' button in the bottom right to find the exact colour codes to type into your CSS files.

## Submission

Publish your pages on the opentech server and submit the URL of your index page as a clickable link in the comment section of the "**Assignment 3**" drop box in DC Connect. If you do not submit something into DC Connect, your professor will assume you did not complete the assignment, and the late penalties will apply (including 0/20 if the link was not submitted within the **72 hours** late period). The onus is on you to ensure your lab instructor knows that you have work to be assessed.

::: warning
Do not mail or attach your files themselves into DC Connect. They must be published onto the opentech server.
:::

## Important Notes

To relatively link an HTML file to an external Cascading Style Sheet (on the same server) the syntax is:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="./relative_file_location/file_name.css"
/>
```

To reference a file named webd2201.css that exists in a css sub-directory (relative to the file linking to the stylesheet, the syntax is:

```html
<link rel="stylesheet" type="text/css" href="./css/webd2201.css" />
```
