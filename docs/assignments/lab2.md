# LAB 2 - Working with HTML Tables

## General

You are going to re-visit your existing two HTML files index.html and lab1.html from Lab 1 so that they implement an intuitive and consistent layout.

Additionally, you are going to produce a new lab2.html file, that will incorporate tables of data (in addition to the page layout.

Important: as was mentioned in lecture, be sure to make a paper sketch of what your layout will look like before you start coding (if you don't know where you're going, you will have a miserable time getting there).

## Due Date and Marking

The due date for Lab 1 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/dates.php) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 1 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- You are to create a new web page that is to be called **lab2.html**. This page is to implements the same colouring scheme chosen for the first assignment (i.e same  
  background and foreground colours as **index.html** and **lab1.html**, the background colour is **NOT** to be white), and incorporate the same layout as described below.

- Each page on your website will have a layout that is based entirely on a table. In other words, the first tag after the starts `<body>` tag should be a `<table border="0" ... >` tag, and the last tag before the closing `</body>` tag should be the closing `</table>` tag

- Additionally, each page is to have `<!-- HTML Comments -->` giving your name, the file name, the date the file was created and a brief description of the page's purpose. Example:


        <!--
            Name: Bill Smith
            File: lab2.html
            Date: 22 May 2019
            This is the Lab 2 page for Web Development - Fundamentals (WEBD2201)
        -->

- The layout on your pages should include at the top of your pages a table row with at least two cells: a cell that places your logo in the top-left hand
  corner of the page, and a cell with a banner (`<h1>` tag element) in the cell beside it.

* Underneath the first row you should include another. On the left-hand side of this row (in a table cell) there should be a navigation bar, with links to all of your existing web pages (including the page that you are on). This will give your pages a consistent look and feel as you navigate around your site. Be sure to vertically align your nav bar cell (using the valign attrbute) to the top of the cell it is in, so that it is always visible when the page loads (no matter how large the page becomes). **_NOTE: all of the links between all of your pages are to be relative, not absolute)._**

* There should be a third row, this one has only one cell (that should be right-aligned, it should span the whole page and include the XHTML validation image, and a copyright symbol (©) with the current year beside it.

* Your lab2.html page, in addition to implementing the table layout, should have a paragraph explaining the purpose of the page, and will incorporate three (3) tables of data:

  1. A table (ironically) of the five (5) different table related html tags `(i.e. the <table>, <tr>, <th>, <t>, and <caption> tags)`, and what each tag does. NOTE: you will have six (6) rows, as you are to incorporate a header row.

  2. A table of your three (3) favourite books, this table should have headings/cells (using `<th>` tags) for the following pieces of information: Title, Author, Year of Publication, and Description. NOTE: you will have four (4) rows total (one for the header, and three for the books). NOTE: you are to write your own brief descriptions for your favourite books, do not plagiarise.

  3. For the third table you are to create your academic schedule for this semester. This table is to have the days of the week across the top row (using `<th>` tags), and rows for each hour from 8am until 6pm. You should use the rowspan attribute for any class that is longer than one hour, and you MUST incorporate at least one (1) instance of a colspan somewhere on your schedule (HINT: you could show your preferred lunch hour, or the time of day you go to the gym, or meet with friends etc.). This table should also implement the align and valign so that your cells line up as shown on the output page. Additionally, for your contact hours (i.e. class time) and lunch/meeting times set a bgcolor attribute so that they stand out.

* All of your pages must pass the W3C [validator](http://validator.w3.org/) with a doctype of XHTML 1.0 Transitional. Submit your page for validation and keep editing the HTML source until you get "No errors found". Use the same lines at the top of your page to ensure the validator works. You are to include the image provided by the site in the footer of your page.

* All local images (i.e. the ones found on all of your pages) must be placed in a images sub-directory relative to your working directory. This will require that you put relative paths in your image src attributes. NOTE: this does not apply to the XHTML Validation image (that is not a local image).

> ##### BE SURE TO INCLUDE A HTML COMMENTS ON EACH OF YOUR PAGES GIVING YOUR NAME, THE FILE NAME, THE DATE THE FILES WERE CREATED AND A BRIEF DESCRIPTION OF THE PURPOSE OF EACH PAGE.

- To see an example of how your lab2.html page should look, see the image of the [output](http://opentech.durhamcollege.org/pufferd/webd2201/lab2output.php). You should use the align and valign attributes to achieve the same alignment as displayed.

## Rubric

<table style="border:2px solid #41b07e;width:100%;">
<tr>
<th style="font-weight:bold;text-align: center;">Topic</th>
<th style="font-weight:bold;text-align: center;">Description</th>
<th style="font-weight:bold;text-align: center;">Weighting</th>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Submission</td>
</tr>
<tr>
<td><b>Submission</b></td>
<td><br/>-2 files not published into your <em>/var/www/html/webd2201/userid</em> main folder (instead in <span class="em">/home/userid</span> folder).<br/><br/>
-2 no link submitted in DC Connect <span class="em">Lab 2</span> assignment drop box<br/><br/>
-1 link in DC Connect <span class="em">Lab 2</span> assignment drop box not clickable<br/><br/>
-1 link in DC Connect <span class="em">Lab 2</span> assignment drop box does not go to your website<br/><br/></td>

<td style="text-align:center;"><b>-2</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 2 incidents)</p></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Deliverableific 
Outcomes</td>
</tr>
<tr>
<td><b>Comments/Description paragraphs</b></td>
<td><br/>-1 no <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">index.html</span><br/><br/>
-1 no <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab1.html</span><br/><br/>
-1 no <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab2.html</span><br/><br/>
-0.5 incorrect or incomplete <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">index.html</span><br/><br/>
-0.5 incorrect or incomplete <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab1.html</span><br/><br/>
-0.5 incorrect or incomplete <span class="code">&lt;!-- HTML Comments --&gt;</span> on <span class="em">lab2.html</span><br/><br/>
-1 <span class="em">index.html</span> missing description paragraph.<br/><br/>
-1 <span class="em">lab2.html</span> missing description paragraph.<br/><br/>
-0.5 <span class="em">index.html</span> description paragraph is light on content.<br/><br/>
-0.5 <span class="em">lab1.html</span> description paragraph is light on content.<br/><br/></td>
<td style="text-align:center;"><b>-4</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 4 incidents)</p></td>
</tr>
<tr>
<td><b>Links</b></td>
<td><br/>-1 all links between all pages were absolute, NOT relative (i.e. <span class="code">href="http://opentech.durhamcollege.org/webd2201/smithb/index.html"</span> instead of <span class="code">href="./index.html"</span> <br/><br/>
-1 no link on <span class="em">index.html</span> to <span class="em">lab1.html</span><br/><br/>
-1 no link on <span class="em">index.html</span> to <span class="em">lab2.html</span><br/><br/>
-1 no link on <span class="em">lab1.html</span> to <span class="em">index.html</span><br/><br/>
-1 no link on <span class="em">lab1.html</span> to <span class="em">lab2.html</span><br/><br/>
-1 no link on <span class="em">lab2.html</span> to <span class="em">index.html</span><br/><br/>
-1 no link on <span class="em">lab2.html</span> to <span class="em">lab1.html</span><br/><br/>

-0.5 link from <span class="em">index.html</span> to <span class="em">lab1.html</span> incorrect/broken<br/><br/>
-0.5 link from <span class="em">index.html</span> to <span class="em">lab2.html</span> incorrect/broken<br/><br/>
-0.5 link from <span class="em">lab1.html</span> to <span class="em">index.html</span> incorrect/broken<br/><br/>
-0.5 link from <span class="em">lab1.html</span> to <span class="em">lab2.html</span> incorrect/broken<br/><br/>
-0.5 link from <span class="em">lab2.html</span> to <span class="em">index.html</span> incorrect/broken<br/><br/>
-0.5 link from <span class="em">lab2.html</span> to <span class="em">lab1.html</span> incorrect/broken<br/><br/>

</td>
<td style="text-align:center;"><b>-4</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 4 incidents)</p></td>
</tr>
<tr>
<td><b>Table Layouts for Page</b></td>
<td><br/>-2 <span class="em">index.html</span> is not laid out using an HTML <span class="code">&lt;table&gt;</span><br/><br/>
-2 <span class="em">lab1.html</span> is not laid out using an HTML <span class="code">&lt;table&gt;</span><br/><br/>
-2 <span class="em">lab2.html</span> is not laid out using an HTML <span class="code">&lt;table&gt;</span><br/><br/>
-1 nav bar(s) not vertically aligned to the top of its cell, setting the <span class="code">valign="top"</span> attribute on the nav bar's <span class="code">&lt;td&gt;</span> cell (as per output image)<br/><br/>
-1 copyright symbol(s)/year(s) not aligned to the right of its cell, setting the <span class="code">style="text-align:center;"</span> attribute on the copyright/year <span class="code">&lt;td&gt;</span> cell (as per output image)<br/><br/>
-1 page(s) do not include the copyright symbol<br/><br/></td>
<td style="text-align:center;"><b>-6</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 6 incidents)</p></td>
</tr>
<tr>
<td><b><span class="em">lab2.html</span> Requirements</b></td>
<td><br/>-1 file not named <span class="em">lab2.html</span> exactly
<br/><br/>-2 missing HTML table of HTML <span class="code">&lt;table&gt;</span> tags<br/><br/>
-1 did not use <span class="code">&lt;th&gt;</span> on HTML table of HTML <span class="code">&lt;table&gt;</span> tags<br/><br/>
-1 missing <span class="code">&lt;caption&gt;</span> on HTML table of HTML <span class="code">&lt;table&gt;</span> tags<br/><br/>
-2 missing favourite books table<br/><br/>
-1 did not display your own favourite books (just replicated the the example)<br/><br/>
-1 description of favourite books missing and/or light on content<br/><br/>
-1 did not use <span class="code">&lt;th&gt;</span> on table with favourite books<br/><br/>
-3 did not create a class schedule table<br/><br/>
-1 did not use <span class="code">&lt;th&gt;</span> on first row of the class schedule table<br/><br/>
-1 in schedule background colours not changed for class time<br/><br/>
-1 no example of <span class="code">colspan</span> in schedule table (for "Lunch Hour" or "Gym")<br/><br/>
-1 no example of <span class="code">rowspan</span> in schedule table for multiple hour course(s)<br/><br/></td>
<td style="text-align:center;"><b>-6</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 6 incidents)</p></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Otherlties</td>
</tr>
<tr>
<td><b>XHTML Valid</b></td>
<td><br/>-1 no clickable XHTML image provided on <span class="em">lab2.html</span> page.
<br/><br/>-2 <span class="code">&lt;!DOCTYPE&gt;</span> in <span class="em">lab2.html</span> was not <span class="code">Transitional</span> (used <span class="code">HTML 4.01</span> instead)
<br/><br/>-1 exactly one XHTML error on <span class="em">lab2.html</span> page.
<br/><br/>-2 more than one XHTML error on <span class="em">lab2.html</span> page.<br/><br/></td>
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
