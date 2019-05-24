# Lab 5 - Basic PHP Scripting

## General

N.B. the formula to convert celsius to fahrenheit is: `9.0/5.0*celsius + 32`

All the of the files you are to create for this assignment should include your header.php and footer.php files created as part of the last assignment (including creating Lab 5 specific `$file, $date, $description, $title,` and `$banner` variables that are echoed in the header.php file). This will entail you actually making the files of type _.php (instead of _.html that the book asks for). You are also expected to place a header `<h1>` element (this could be your `$banner` variable) and a paragraph `<h1>` description on each of the the lab5\*.php pages you create for this assignment.

**NOTE: All pages must validate to the XHTML strict standard**

Read Chapter 6: Using PHP Variables in the Julie Meloni text from DC Library eResources(see the steps in [Lab 4 General](/assignments/lab4.html#general) tab, and the the first two pages of Appendix C: Writing Your Own Functions and Objects out of the course text book (skip the section on Objects). Take note that in Appendix C the include function is explained.

**NOTE: If the link above does not allow you to access the textbook, re-visit the steps on the General tab from Lab 4 to access Durham Vollege e-Resources.**

After completing the readings, work through all the php examples in Chapter 6 - Using PHP Variables.

::: danger
Be sure to place single-quotes around the terms val1, val2 and calc in your array element names in the calculate example. i.e. instead of ~~`$_POST[val1]`~~ you should type `$_POST['val1']` (it will cause an warning in PHP if you do not).
:::

## Due Date

The due date for Lab 5 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/importantdates) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 5 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- **If you incorporated all of the `lab4*.php` files into your vertical nav bar as part of the last assignment, remove them and place them into the lab4.php file. (You cannot have every page on your site included in the vertical nav bar, it will become too long and ugly).**

* Be sure that all your pages are visually appealing with a consistent look and feel. To acheive this, you are to incorporate your webd2201.css stylesheet and your header.php and footer.php for all files created as part of this assignment.

* Similar to the last assignment, include **C-style PHP comments**:

```php
/*
    your_name
    assignment_date
    WEBD2201
*/
```

with your name, the date and the course code at the top of any/all lab5\*.php PHP files (in a `<?php ... ?>` section so they do not show up on the page) created for this assignment. Additionally, add `<!-- HTML Comments -->` to all your pages that give your name, the file name, the date the file was created and a brief description of what the page does. NOTE: this should be achieved by declaring appropriately name PHP variables before calling the include("**header.php**"); and then echoing the variables (`$file, $date and $desc`) in their appropriate locations.

- Additionally, your pages' `<title>` and `<h1>` banner should be set dynamically by echoing the `$title` and `$banner` PHP variables into the **header.php** file.

- You are to create a **`lab5.php`** file that will act as the main navigation page for all files created for this assignment. In addition to having a link to this page in your site's main nav bar, you are to incorporate a clearly labeled link on each page created as part of this assignment back to the **`lab5.php`** page. Like all your pages, you should have a header and paragraph explaining on each page the page's purpose.

* Chapter 6 in the text has you create the files: calculate_form.php; calculate.php; phpinfo.php; remoteaddress.php; and, useragent.php. You do **Not** have to incorporate the phpinfo.php as part of your website (though working through the example is still worthwhile). **All** of the files created should have a `*.php` file extension (so they can include your header and footer). As well, each of your filenames should be pre-fixed with lab5 (i.e. **`remoteaddress.php`** should be called **`lab5_remoteaddress.php`** or **`lab5remoteaddress.php`**).

- In addition to the text examples, you are to create two (2) temperature conversion pages (one to be named lab5_simple_temp_convert.php and another called **`lab5_function_temp_convert.php`**. These two conversion pages will utilize a for loop that starts at a celsius temperature of `-40°` and loops to a temperature of `100°` inclusive by increments of `10°`, converting each celsius temperature to its equivalent fahrenheit temperature. To see what the instructor is looking for link to an example temperature conversion page. To include the degree sign you must include &deg; beside the number in the output. Reminder: be sure you give access to all these lab 5 pages from the file **`lab5.php`**.

* The first temperature conversion page should perform the calculation of the conversion directly in the for loop, the second page (whose table will look indentical to the first) instead should do the calculation in an appropriately named function.

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
-2 no link submitted in DC Connect <span class="em">Lab 5</span> assignment drop box<br/><br/>
-1 link in DC Connect <span class="em">Lab 5</span> assignment drop box not clickable<br/><br/>
-1 link in DC Connect <span class="em">Lab 5</span> assignment drop box does not go to your website<br/><br/></td>
<td style="text-align:center;"><b>/2</b></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Deliverable Specific Outcomes</td>
</tr>
<tr>
<td><b>Comments/Description paragraphs</b></td>
<td><br/>-3 <span class="code">&lt;!-- HTML Comments --&gt;</span> are not dynamic (i.e. hard-coded once and/or do not <span class="code">echo</span> declared variables (<span class="code">$file, $date, $desc, $title, $banner</span>) in the <span class="em">header.php</span> file.<br/><br/>
-2 dynamic <span class="code">&lt;!-- HTML Comments --&gt;</span> not <span class="code">echo</span>'ed in the <span class="em">header.php</span> file (implemented incorrectly)
-2 missing <code>/&#42; c-style &#42;/</code> comments on most/all of your <em>lab&#42;.php</em> pages.<br/><br/>
-2 missing detailed description paragraph on <em>lab.php</em><br/><br/>
-1 description paragraph on <em>lab.php</em> light on content<br/><br/>
-1 <em>lab_remoteaddress.php</em> missing description paragraph<br/><br/>
-1 <em>lab_useragent.php</em> missing description paragraph<br/><br/>
-1 <em>lab_calculate_form.php</em> missing description paragraph<br/><br/>
-1 <em>lab_calculate.php</em> missing description paragraph<br/><br/>
-1 <em>lab_simple_temp_convert.php</em> missing description paragraph<br/><br/>
-1 <em>lab_function_temp_convert.php</em> missing description paragraph<br/><br/>
-0.5 <em>lab_remoteaddress.php</em> description paragraph light on content/not descriptive<br/><br/>
-0.5 <em>lab_useragent.php</em> description paragraph light on content/not descriptive<br/><br/>
-0.5 <em>lab_calculate_form.php</em> description paragraph light on content/not descriptive<br/><br/>
-0.5 <em>lab_calculate.php</em> description paragraph light on content/not descriptive<br/><br/>
-0.5 <em>lab_simple_temp_convert.php</em> description paragraph light on content/not descriptive<br/><br/>
-0.5 <em>lab_function_temp_convert.php</em> description paragraph light on content/not descriptive<br/></span></td>
<td style="text-align:center;"><b>/5</b></td>
</tr>
<tr>
<td><b><span class="em">lab5.php</span> Page</b></td>
<td><br/>-4 no <span class="em">lab5.php</span> created.<br/><br/>
-1 link to <span class="em">lab5_remoteaddress.php</span> is broken<br/><br/>
-1 link to <span class="em">lab5_useragent.php</span> is broken<br/><br/>
-1 link to <span class="em">lab5_calculate_form.php</span> is broken<br/><br/>
-1 link to <span class="em">lab5_calculate.php</span> is broken<br/><br/>
-1 link to <span class="em">lab5_simple_temperature_conversion.php</span> is broken<br/><br/>
-1 link to <span class="em">lab5_function_temperature_conversion.php</span> is broken<br/><br/>
</td>
<td style="text-align:center;"><b>/4</b></td>
</tr>
<tr>
<td><b><em>lab5_&#42;.php</em> Pages from Textbook</b></td>
<td><br/>-3 textbook example files do not have the <span class="em">lab5</span> prefix in their filenames.<br/><br/>
-1 <span class="em">lab5_remoteaddress.php</span> not created<br/><br/>
-1 <span class="em">lab5_useragent.php</span> not created<br/><br/>
-1 <span class="em">lab5_calculate_form.php</span> not created<br/><br/>
-1 <span class="em">lab5_calculate.php</span> not created<br/><br/>
-0.5 <span class="em">lab5_calculate.php</span> does not work<br/><br/>
-0.5 <span class="em">lab5_remoteaddress.php</span> does not work<br/><br/>
-0.5 <span class="em">lab5_useragent.php</span> not does not work<br/><br/>
-0.5 <span class="em">lab5_calculate_form.php</span> does not work/ has incorrect URL for action attribute<br/><br/>
-0.5 <span class="em">lab5_calculate.php</span> not completed (did not code the PHP snippet)<br/><br/>
-0.5 <span class="em">lab5_remoteaddress.php</span> not completed (did not code the PHP snippet)<br/><br/>
-0.5 <span class="em">lab5_useragent.php</span> not completed (did not code the PHP snippet)<br/><br/>
-0.5 <span class="em">lab5_calculate_form.php</span> not completed (did not code the PHP snippet)<br/><br/>
-0.5 <span class="em">lab5_calculate.php</span> not completed (did not code the PHP snippet)<br/><br/></td>
<td style="text-align:center;"><b>/5</b></td>
</tr>
<tr>
<td><b>Simple Temperature Conversion</b></td>
<td><br/>-1 file not named correctly (i.e. <em>lab5_simple_temp_convert.php</em>)
<br/><br/>-2 the temperature conversion was not created by a loop performing the calculation (i.e. table of data is hard-coded
<br/><br/>-1 loop does not start at -40&deg; celsius and/or does not stop at 100&deg; celsius and/or does not increment by 10&deg; each time.
<br/><br/>-1 does not perform the correct calcuation in the <code>for</code> loop: <code>9.0/5.0&#42;celsius + 32</code><br/><br/></td>
<td style="text-align:center;"><b>/2</b></td>
</tr>
<tr>
<td><b>FunctionTemperature Conversion</b></td>
<td><br/>-1 file not named correctly (i.e. <em>lab5_function_temp_convert.php</em>)
<br/><br/>-3 the temperature conversion was not created by a loop performing the calculation (i.e. table of data is hard-coded
<br/><br/>-1 loop does not start at -40&deg; celsius and/or does not stop at 100&deg; celsius and/or does not increment by 10&deg; each time.<br/><br/>
-1 <code>for</code> loop does not call an appropriately named <code>function</code> that performs and returns the temperature conversion.<br/><br/>
-2 no <code>function</code> created for the temperature conversion.<br/><br/>
-1 <code>function</code> created for the temperature conversion, but does not work.<br/><br/></td>
<td style="text-align:center;"><b>/3</b></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Other Penalties</td>
</tr>
<tr>
<td><b>XHTML Valid</b></td>
<td><br/>-1 no clickable XHTML image provided on <span class="em">lab5&#42;.php</span> pages.
<br/><br/>-2 <span class="code">&lt;!DOCTYPE&gt;</span> in <span class="em">header.php</span> was not <span class="code">Strict</span> (used <span class="code">Transitional</span> or <span class="code">HTML 4.01</span> instead)
<br/><br/>-2 more than one XHTML error per page on average in <span class="em">lab5&#42;.php</span> pages.
<br/><br/>-1 one or less XHTML error per page on average in <span class="em">lab5&#42;.php</span> pages.</td>
<td style="text-align:center;"><b>-2</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 2 incidents)</p></td>
</tr>
<tr>
<td><b>Late Submission</b></td>
<td><br/>-0 lab submitted on time<br/><br/>
5 lab submitted late but within 72 hours of due date<br/><br/>
-20 lab not submitted within 72 hours of due date<br/><br/></td>
<td style="text-align:center;"><b>/5</b></td>
</tr>
<tr>
<td><b><em>header.php</em> and <em>footer.php</em> Implementation</b></td>
<td><br/>-1 no link added to <span class="em">header.php</span> to <span class="em">lab5.php</span> page to make it part of the overall website<br/><br/>
-1 per <span class="em">lab5&#42;.php</span> page that does not implement <span class="em">header.php</span> <br/><br/>
-1 <span class="em">lab5&#42;.php</span> page that does not implement <span class="em">footer.php</span> files.<br/><br/>
</td>
<td style="text-align:center;"><b>-4</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 4 incidents)</p></td>
</tr>
</table>

## Submission

Publish your pages on the opentech server and submit the URL of your index page as a clickable link in the comment section of the "**Assignment 5**" drop box in DC Connect. If you do not submit something into DC Connect, your professor will assume you did not complete the assignment, and the late penalties will apply (including 0/20 if the link was not submitted within the **72 hours** late period). The onus is on you to ensure your lab instructor knows that you have work to be assessed.

::: warning
Do not mail or attach your files themselves into DC Connect. They must be published onto the opentech server.
:::
