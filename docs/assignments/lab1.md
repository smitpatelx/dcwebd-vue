# LAB 1 - Basic XHTML Pages

## General

You are to create two HTML pages with a common look and feel. These two pages will be uploaded to the course webserver (opentech.durhamcollege.org) using WinSCP. The pages must be visible from the server with a Web browser before they can be marked. Pages that are stored only on the local workstation disk drive cannot be viewed from any other system, and therefore cannot be marked.

For this assignment you should try to find a web resource that has a list and explains each of the XHTML 1.0 supported tags. As an example, here is a link to the [W3Schools](http://www.w3schools.com/tags/default.asp) tag library (w3schools is an excellent website). Feel free to try and find your own.

The HTML pages must conform to the W3C XHTML 1.0 Transitional specification, as checked by the [W3C validator](http://validator.w3.org/).

You can create your own images, or simply "borrow" them from the Web or other sources (e.g. stock image CD, scan, framegrabber). If you use someone else's work, please acknowledge the source somewhere on the page (HINT: HTML comments would work well for this). Please avoid using images with the copyright symbol on them.

## Due Date and Marking

The due date for Lab 1 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/dates.php) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 1 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- Create two HTML pages, one which will act as your site's home page (this file should be named index.html) and the other will be named lab1.html. Each page is to incorporate a **"logo"** (the same image on both, but do not use the Durham College logo as your website's logo) in the top-left corner of the page.

- Be sure to include appropriate (i.e. relevant) `<title>`s and `<h1>` header tags on each page. Additionally, for each page you are to include HTML comments `(<!-- HTML Comments -->)` that minimally must state your name, the file name, the date the page was created and a brief description of the page's purpose.

- You must set the background-colour (i.e. `bgcolor` attribute) and text color (i.e. `text` attribute) on the `<body>` tag for each page. Set them to the same colour on both pages (this will give your pages a consistent look and feel, making them a site).

        <body style="background=#0000; color=#fff;">
            <!-- Page Content -->
        </body>

- Each page (i.e. **_index.html_** and **_lab1.html_**) should have a relative hypertext link to the other at the top of the page (it can be placed underneath the `<h1>` tag created above).

- Any images used on your pages must exist in an images sub-directory, relative to your working directory.

        .webd2201/
        ├─ index.html
        ├─ lab1.html
        ├─ images/
           └─ background.jpg

* **_In addition to the title, logo image, header and link, your index.html page must satisfy the following:_**

  1. Include a detailed paragraph explaining what the purpose of the site is (i.e. it was created as course requirement for webd2201). The course code should be a link to the course web server [http://opentech.durhamcollege.org/pufferd/webd2201](http://opentech.durhamcollege.org/pufferd/webd2201). NOTE: EACH and EVERY web page you create in this course will REQUIRE a description paragraph.

  2. Additionally, in the paragraph mention "Durham College", these words should become a link to the Durham College website (Durham College).

  3. Finally, you are to incorporate the Durham College logo as an image on your index.html page, this image should also act as a link to the Durham College website (this can be achieved by placing `<a>` tags around an `<img>` element on your page).

* In addition to the title, your logo image, header and link, your lab1.html page must satisfy the following:

  - Implement all the HTML elements that will create the page output displayed below.
    N.B. Each section should have an HTML header (`<h3>` tags) as a title to the section, and paragraph (`<p>` tags) explaining which tags and/or special characters were used.

  - **Additional link to html [special characters](https://www.whatsmyip.org/html-characters/)**

---

[LAB 1 Output](/assets/lab1output.png)

> <h1>
>     Einsteine's Relativity
> </h1>
> <p>
>     For Einstein's Relativity formula you have to use the superscript (&lt;sup&gt;...&lt;/sup&gt;)
>     and italic (&lt;i&gt;...&lt;/i&gt;) tags.
>     It is wrapped in heading 2(&lt;h2&gt;...&lt;/h2&gt;)ags to make it larger and bolder.
>     <b>
>         NOTE: be careful with proper nesting to ensure the page passes the XHTML validatior. The line is bolded using > the bold
>         (&lt;b&gt;...&lt;/b&gt;) tags.
>     </b>
> </p>
> <h2>
>     <i>E = mc<sup>2</sup></i>
> </h2>
> <hr/>
> <h1>
>     Currency Conversion (use of  special characters)
> </h1>
> <p>
>     DESCRIPTION HEADING
> </p>
> <h2>
> $ 1.00CDN = $ 0.703USD = &pound;0.487 = &euro;0.651 = &yen;82.77
> </h2>
> <hr/>
> <h1>
>     Code Snippet
> </h1>
> <p>
>     DESCRIPTION HEADING
> </p>
> <p>
>     #include &lt;iostream.h&gt;
> <br/><br/>
> int main()
> <br/>
> &#123;
> <br/>
>     &emsp;&emsp;cout &lt;&lt; "Hello World!" &lt;&lt; endl; <br/>
>     &emsp;&emsp;return 0;
> <br/>
> &#125;
> </p>
> <hr/>
> <h1>
>     Chemistry Equation
> </h1>
> <p>
>     DESCRIPTION HEADING
> </p>
> <h2>
>     2H<sub>2</sub> + O<sub>2</sub> =&gt; 2H<sub>2</sub>O + heat
> </h2>
> <hr/>
> <h1>
>     List Example (order important)
> </h1>
> <h2>
>     How to start a car
> </h2>
> <p>
>     DESCRIPTION HEADING
> </p>
> <ol>
>         <li>Place key in the ignition</li> <!--li tag defines list items-->
>         <li>Depress the brake pedal</li>
>         <li>Turn the ignition key</li>
> </ol>
> <hr/>
> <h1>
>     List Example (order unimportant)
> </h1>
> <h2>
>     Things to do before my trip
> </h2>
> <ul>
>     <li>Re-new passport</li>
>     <li>Convert currency</li>
>     <li>Print out reservations &amp; itineraries</li>
>     <li>Verify vaccinations are up-to-date</li>
> </ul>

- As Linux is a UNIX-like operating system, and therefore case-sensitive. Students are recommended to make ALL file names and extensions LOWER-CASE. This makes debugging/development easier.

* The pages must pass the [W3C validator](http://validator.w3.org/) with a doctype of XHTML 1.0 Transitional. Submit your page for validation and keep editing the HTML source until you get _"No errors found"_. **BE SURE TO ADD THE XHTML VALIDATION IMAGE AT THE BOTTOM (but still in the `<body>` section) OF EACH PAGE**

* You are encouraged to navigate through your site clicking on all links and looking at all images to make sure that there is nothing broken. Marks are deducted for each incident in which an image or link is broken on your pages)

## Rubric

<table style="border:2px solid #41b07e;width:100%;">
<tr>
    <th style="font-weight:bold;text-align:center;">Topic</th>
    <th style="font-weight:bold;text-align:center;">Description</th>
    <th style="font-weight:bold;text-align:center;">Weighting</th>
</tr>
<tr>					
<td colspan = "3" style="text-align:center;">Submission</td>
</tr>
<tr>
<td><b>Submission</b></td>
<td><br/>-2 files not published into your <span class="em">/var/www/html/webd2201/userid</span> main folder (instead in <span class="em">/home/userid</span> folder).<br/><br/>
-2 no clickable link/URL submitted in DC Connect <span class="em">Lab 1</span> assignment drop box<br/><br/>
-1 link in DC Connect <span class="em">Lab 1</span> assignment drop box not clickable<br/><br/>
-1 link in DC Connect <span class="em">Lab 1</span> assignment drop box does not go to your website<br/><br/></td>
<td style="text-align:center;"><b>/2</b></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Deliverable Specific Outcomes</td>
</tr>
<tr>
<td><b>Comments/Description paragraphs</b></td>
<td>Each page is to have 
<code>&lt;!-- HTML Comments --&gt;</code>
giving your name, the file name, the date the file was created and a brief description of the page's purpose.<br/>
Example:<br/>

```

<!--
    Name: Bill Smith
    File: lab1.html
    Date: 23 May 2019
    This is the Lab 1 page for
    Web Development - Fundamentals (WEBD2201)
-->

```

</pre>
<br/><br/>Additionally, each page is to have a description paragraph, giving a <b>detailed</b> description of what the page is doing (i.e. what concepts it implements and/or functionality it demonstrates).<br/><br/>
-4 no HTML comments or description paragraphs on any pages<br/><br/>
-1 per page missing HTML comment or top level description paragraph on each page.<br/><br/>
-0.5 per paragraph that was missing/light for EACH example/demonstration on the <em>lab1.html</em> page.<br/><br/>
-1 per incident where the description paragraph is light on content.<br/><br/></td>

<td style="text-align:center;"><b>/4</b></td>
</tr>
<tr>
<td><b>Links/Images</b></td>
<td>-1 images not placed in an <em>images</em> sub-directory relative to your <em>lastnamefirstinitial</em> folder<br/><br/>
-1 no clickable Durham logo<br/><br/>
-0.5 the Durham College logo is not a clickable link<br/><br/>
-0.5 per image or link that is broken (not relative address, case-sensitivity issues, files not published onto the server).<br/><br/>
-1 no link from <em>lab1.html</em> to <em>index.html</em><br/><br/>
-1 no link from <em>index.html</em> to <em>lab1.html</em><br/><br/>
-1 the words "WEBD2201" were not included in the index.html paragraph<br/><br/>
-0.5 the word "WEBD2201" is not a link to <em>http://opentech.durhamcollege.org/pufferd/webd2201</em> in the index.html paragraph<br/><br/>
-1 the words "Durham College" were not included in the <em>index.html</em> paragraph<br/><br/>
-0.5 the words "Durham College" are not a link to college website in paragraph on <em>index.html</em><br/><br/>

</td>
                
<td style="text-align:center;"><b>/6</b></td>
</tr>
<tr>
                
<td><b><span class="em">lab1.html</span> Examples</b></td>
                
<td>You must replicate/use all of the red highlighted tags and special characters (as shown in <em>Specific Requirements</em> section).  This is in addition to the description paragraphs described above.<br/><br/>
Pay attention to detail, and do not miss any of the tags. <br/><br/>-0.5 per tag/special character that is missing.<br/><br/></td>
                
<td style="text-align:center;"><b>-7</b><br/><p style='font-size:0.8em'>(-0.5 per incident, maximum 14 incidents)</p></td>
</tr>
<tr>
                
<td><b>General Page Requirements</b></td>
                
<td><br/>-1 <code>bgcolor</code> and <code>text</code> attributes not set on &lt;body&gt; tag(s)<br/><br/></td>
                
<td style="text-align:center;"><b>/1</b></td>
</tr>
<tr>
                
<td colspan = "3" style="text-align:center;">Other Penalties</td>
                
</tr>
<tr>
                
<td><b>XHTML Valid</b></td>
                
<td><br/>-1 no clickable XHTML image provided on <span class="em">lab1.html</span> page.
<br/><br/>-2 <span class="code">&lt;!DOCTYPE&gt;</span> in <span class="em">index.html</span> was not <span class="code">Transitional</span> (used <span class="code">HTML 4.01</span> instead)
<br/><br/>-1 exactly one XHTML error on <span class="em">index.html</span> page.
<br/><br/>-1 exactly one XHTML error on <span class="em">lab1.html</span> page.
<br/><br/>-2 more than one XHTML error on average on  <span class="em">index.html</span> and <span class="em">lab1.html</span> pages.<br/><br/>
(NOTE: maximum 2 mark penalty for this lab ref. XHTML validation)</td>
                
<td style="text-align:center;"><b>/2</b></td>
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

1. [W3schools](http://www.w3schools.com/) - is an excellent website that covers how to create websites. There are tutorials and reference libraries for several web technologies, but for this course stufdents should utilize the HTML, CSS and PHP sections extensively.

2. [TutorialsPoint](https://www.tutorialspoint.com/html_online_training/index.asp) - very similar to w3schools, it also includes tutorials and reference libraries for several web technologies. Feel free to check both out and choose the website developments resources that works best for you.

3. [Browser Supported Colours](http://www.w3schools.com/tags/ref_colornames.asp) - provides the list of 140 colour names that are supported by all of the major browsers.

4. [W3C XHTML Validator](http://validator.w3.org/) - is the World Wide Web Consortium's (w3c) official HTML/XHTML validator tool. All assignment pages throughout the course will need to be validated to the XHTML Transitional or Strict standard (depending on the assignment). Students will have to use this tool to satisfy the requirement.

### XHTML Validation

Please include the following lines at the VERY TOP of your `.html` files, this is what is required by the w3c validator to know which standard you are validating your pages to:

```
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
	    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>
    <body>
        <!-- Page Content -->
    </body>
    </html>
```
