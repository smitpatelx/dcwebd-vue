# LAB 4 - PHP Chapter Files from Textbook

## General

For this assignment you will be required to access a textbook from the college's online book repository. You will be reading and working through example exercises, creating several files for this assignment.

For labs 4 and 5 in this course, lectures will reference online e-Books that you are encouraged to read through. To access the online resources through the Durham College library, follow the following steps:

- Go to [DC Library](https://durhamcollege.ca/student-life/campus-services/library) OR [E PDF](https://epdf.tips/php-5-fast-amp-easy-web-development.html)
- Search for "PHP 5 Fast Easy"
- Login using your college ID & windows password
- **BE SURE TO SELECT THE 3rd EDITION OF PHP 5, NOT PHP 6 OR THE 2nd EDITION.** NOTE: the author's name is Julie Meloni and the date of publication is 2004.
- If you are having problems getting to a copy of the textbook from the college library website, when you land on the Ebook Central page, click On "Try Another Source" dropdown below the " "Also available online from:" label, and select "SkillSoft Book ITPro Collection (Skillport Platform)". That should have a viewable copy.

::: danger
In order for the opentech server to recognize and resolve any of your PHP scripting you MUST utilize the **`<?php`** opening tags, not just **`<?`**. Though **`<?`** will work locally on your laptops running Apache and PHP, opentech will ignore your scripting, and you WILL lose marks.
:::

You are to read chapters 4 and 5 and work through all of the example exercises.

After doing the required reading, you are going to have to produce a link from your index.php page (in your navigation section) to your lab4.php. It should be clearly labeled as Lab 4.

## Due Date

The due date for Lab 4 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/importantdates) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 4 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- Your php files are to implement a hybrid of your existing cascading stylesheet from Lab 3, with the one provided in the CSS Layout example. NOTE: the only changes you need to make to the styles provided is to change the colour scheme from the black, grey and white of the stylesheet provided, to your own volour scheme. Marks will be taken off if you keep the colour scheme provided in the example file. NOTE: there is a background.png file in the images/styles folder, open it in paint and change the colour to something that works with your colour scheme. This is the background of the vertical nav bar on the left sde of your page.

- Open the provided **layout_using_css.html** file in a text editor. Copy everything above the line that states:

```html
<!-- CUT AND PASTE EVERYTHING ABOVE THIS LINE INTO A FILE NAMED header.php -->
```

and place it in a new text document. Save the document as `header.php` in your Apache's DocumentRoot `/htdocs` on your laptop.

- Find the line in the **layout_using_css.html** file that states:

```html
<!-- CUT AND PASTE EVERYTHING BELOW THIS LINE INTO A FILE NAMED footer.php -->
```

and copy the contents of the file below that line into a new text document. Save the text file as `footer.php` in your Apache's DocumentRoot `/htdocs` on your laptop.

- Your PHP pages must be XHTML valid. **FROM THIS POINT FORWARD YOUR PAGES MUST CONFORM TO THE XHTML STRICT STANDARD**. To achieve this replace "Transitional" and "transitional" with "Strict" and "strict" in the DOCTYPE line of your file (this will be incorporated as part of your header file). See the Important Notes section. NOTE: if you implement the header.php file set up above from the template correctly, it will already be setup for Strict.

- Include a clickable XHTML validation image on each and every page. NOTE: if you implement the footer.php file set up above correctly, this will already be included.

- To ease web site maintenance you are required pull the banner and nav bar off of your HTML pages (from previous assignments), and place them in a file called "header.php"

- You will pull any bottom of the page and/or right side nav bar and place it in a file name footer.php. This footer.php should include the XHTML and CSS validation images.

- You will replace the tops and bottoms of your standardized pages (i.e. all your existing pages) by including header.php and footer.php in the appropriate spots. E.g.:

```php
<?php include './header.php'; ?>
```

Be sure to change your file extension on your `index.html, lab1.html, lab2.html, lab3.html and termtest1.html` to **.php**. Otherwise the server will not know what to process the include statements in the files.

- At the top of EACH AND EVERY page (`index.php, lab1.php, lab2.php, lab3.php, termtest1.php, lab4.php` and all (ten 10) lab4\*.php textbook example files) you are to create string variables named $title, $date, $filename, $banner and $description that contain the title for the page, the date the file was created, the name of the file implementing the header, the main cell content beside your logo image, and a brief description of what the page is doing. These should be declared above the include 'header.php'; line, inside the header.php file. You are to echo these variables (the $title inside `<title>` tags, and the $file, $date and \$description as part of your `<!--HTML comments-->`.
  For example, in **lab4.php**:

```php
//--> lab4.php :
<?php
	$title = "Lab 4";
	$file = "lab4.php";
	$description = "Lab 4 page for my WEBD2201 Website";
	$date = "May 23, 2019";
	$banner = "Lab 4 - Intro to PHP";
	include("./header.php");
?>
```

```php
//--> header.php :
<title>WEBD2201 - <?php echo $title; ?></title>
<!--
    Name: Bill Smith
    File: <?php echo $file . "\n"; ?>
    Date: <?php echo $date . "\n"; ?>
    Description: <?php echo $description . "\n"; ?>
-->
```

Would be parsed in the client's browser as:

```html
<title>WEBD2201 - Lab 4</title>
<!--
    Name: Bill Smith
    File: lab4.php
    Date: May 23, 2019
    Description: Lab 4 page for my WEBD2201 Website
-->
```

**NOTE:** the \$banner variable should be echoed somewhere prominient in the `<body>` of each of your web pages (it should be the large banner at the top of your page).

- Each file produced below for this assignment should include a set of **_C-style PHP comments_** that state your name, and the course code (WEBD2201) and the date you created the `*.php` file. Example, in every `*.php` file have:

```php
/*
	Bill Smith
	WEBD2201
	May 23, 2019
*/
```

- Each `lab4*.php` textbook example file produced should also include a set of header tags (in the body of page) that states title of the textbook section, and `<p>` tags giving a description of what the file is doing/demonstrating.

- Each PHP file produced should also include a clearly labelled link back to the **lab4.php** (in addition to the nav bar included as part of the **header.php** file). page

::: tip
There should only place one (1) link to your lab4.php in the vertical nav bar on the left side of the page, not one for each **lab4\*.php** textbook example file. This would just clutter your nav bar.
:::

- Your **lab4.php** file should have a clearly labelled link to each of the php files created below (be sure that your a:link and a:visited css selectors work, for ease of marking).

- Access the Durham College library e-Rources by following the steps on the **General** section.

- Produce one appropriately named php file (with a lab4 prefix), including implementing your `header.php` and `footer.php` files, for each of the following program examples in the textbook titled:

  1. PHP Start and End Tags (Chapter 4) E.g. this file could be named lab4tags.php
  2. (Click to see an example of what the instructor is looking for).
  3. Code Cohabitation (Chapter 4)
  4. Escaping Your Code (Chapter 4)
  5. Commenting Your Code (Chapter 4)
  6. PHP Variable and Value Types (Chapter 5)
  7. Using Constants (Chapter 5)
  8. Using Constants 2 (Chapter 5) untitled section in Using Constants section, refers to constants2.php
  9. Assignment Operators (Chapter 5)
  10. Arithmetic Operators (Chapter 5)
  11. Comparison Operators (Chapter 5)
  12. Logical Operators (Chapter 5)

- **Your pages ALL need to be XHTML valid, therefore do not use the UPPERCASE letters on you HMTL tags as shown in the textbook examples. Remember this is a PHP textbook, NOT an HTML textbook.**

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
-2 no link submitted in DC Connect <span class="em">Lab 4</span> drop box<br/><br/>
-1 link in DC Connect <span class="em">Lab 4</span> drop box not clickable<br/><br/>
-1 link in DC Connect <span class="em">Lab 4</span> drop box does not go to your website<br/><br/></td>
<td style="text-align:center;"><b>-2</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 2 incidents)</p></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Deliverable Specific Outcomes</td>
</tr>
<tr>
<td><b>Comments/Description paragraphs</b></td>
<td><br/>-3 <span class="code">&lt;!-- HTML Comments --&gt;</span> are not dynamic (i.e. hard-coded once and/or do not <span class="code">echo</span> declared variables (<span class="code">$file, $date, $desc, $title, $banner</span>) in the <span class="em">header.php</span> file.<br/><br/>
-2 dynamic <span class="code">&lt;!-- HTML Comments --&gt;</span> not <span class="code">echo</span>'ed in the <span class="em">header.php</span> file (implemented incorrectly)<br/><br/>
-2 missing /&#42; c-style &#42;/ comments on most/all of your <br/>.php pages.<br/><br/>
-2 missing detailed description paragraph on lab4.php<br/><br/>
-1 description paragraph on lab4.php light on content<br/><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 PHP Tags textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Code Cohabitation textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Escaping Your Code textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Commenting Your Code textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 PHP Variable and Value Types textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Using Constants textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Using Constants 2 textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Arithmetic Operators textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Assignment Operators textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Comparison Operators textbook example</span><br/>
-0.5 <span style="font-size: 80%;">missing description paragraph on Lab 4 Logical Operators textbook example</span><br/></td>
<td style="text-align:center;"><b>-5</b><br/><p style='font-size:0.8em'>(-0.5 per incident, maximum 10 incidents)</p></td>
</tr>
<tr>
<td><b><span class="em">header.php</span> and <span>footer.php</span> File Implementation</b></td>
<td><span style="font-size: 80%;">
<br/>-1 <em>index.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab1.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab2.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab3.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4phptags.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4firstscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4errorscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4errorscript2.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4comments.php.</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4printvarscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4constants.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4constants2.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4assignscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4arithmeticscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4comparisonscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
-1 <em>lab4logicalscript.php</em> does not implement the new page layout/modified <em>&#42;.css</em><br/>
</span>
</td>
<td style="text-align:center;"><b>-5</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 5 incidents)</p></td>
</tr>
<tr>
<td><b><span class="em">lab4&#42;.php</span> Files</b></td>
<td><span style="font-size: 80%;"><br/>-3 no file named <em>lab4.php</em> that is included in the nav bar in the <em>header.php</em> file that has a description paragraph explaining PHP (what it is, what is does, how it is used, etc. ) and also has links to the <em>lab4&#42;.php</em> files from the referenced PHP textbook on Durham College Library's online resources.<br/><br/>
-1 file not named <span class="em">lab4.php</span> exactly<br/><br/>
-3 textbook example files do not have the <em>lab4</em> prefix in its filename.<br/><br/>
-1 <em>lab4phptags.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4firstscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4errorscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4errorscript2.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4comments.php.</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4printvarscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4constants.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4constants2.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4assignscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4arithmeticscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4comparisonscript.php</em> not created/completed/does not work.<br/><br/>
-1 <em>lab4logicalscript.php</em> not created/completed/does not work.<br/><br/>
</span></td>
<td style="text-align:center;"><b>-12</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 12 incidents)</p></td>
</tr>
<tr>
<td colspan = "3" style="text-align:center;">Other Penalties</td>
</tr>
<tr>
<td><b>XHTML Valid</b></td>
<td><br/>-1 no clickable XHTML image provided on <span class="em">lab4&#42;.php</span> pages.
<br/><br/>-2 <span class="code">&lt;!DOCTYPE&gt;</span> in <span class="em">header.php</span> was not <span class="code">Strict</span> (used <span class="code">Transitional</span> or <span class="code">HTML 4.01</span> instead)
<br/><br/>-2 more than one XHTML error per page on average in <span class="em">lab4&#42;.php</span> pages.
<br/><br/>-1 one or less XHTML error per page on average in <span class="em">lab4&#42;.php</span> pages.</td>
<td style="text-align:center;"><b>-3</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 3 incidents)</p></td>
</tr>
<tr>
<td><b>Late Submission</b></td>
<td><br/>-0 lab submitted on time<br/><br/>
-5 lab submitted late but within 72 hours of due date<br/><br/>
-20 lab not submitted within 72 hours of due date<br/><br/></td>
<td style="text-align:center;"><b>/5</b></td>
</tr>
<tr>
<td><b><span class="em">header.php</span> and <span class="em">footer.php</span> Implementation</b></td>
<td><br/>-1 no link added to <span class="em">header.php</span> to <span class="em">lab4.php</span> page to make it part of the overalll website
<br/><br/>-1 per <span class="em">lab4&#42;.php</span> page that does not implement <span class="em">header.php</span> 
<br/><br/>-1 <span class="em">lab4&#42;.php</span> page that does not implement <span class="em">footer.php</span> files.<br/><br/>
</td>
<td style="text-align:center;"><b>-5</b><br/><p style='font-size:0.8em'>(-1.0 per incident, maximum 5 incidents)</p></td>
</tr>
</table>

## Resources

Below are some links to the PHP manual that explain the PHP provided functions/concepts that are part of this assignment:

- [PHP tags](http://www.php.net/manual/en/language.basic-syntax.phptags.php) describes the various tags that can delimit PHP code segments.
- [echo()](http://us2.php.net/manual/en/function.echo.php) the language construct that outputs one or more strings to a page.
- [PHP Comments](http://us2.php.net/manual/en/language.basic-syntax.comments.php) PHP supports 'C', 'C++' and Unix shell-style (Perl style) comments.
- [PHP variables](http://us2.php.net/manual/en/language.variables.basics.php) are the same as variables in other languages, but they are all pre-fixed with a dollar sign '\$'
- [Data types](http://us2.php.net/manual/en/language.types.intro.php) PHP supports 8 different primitve data types, inclduing the four (4) scalar types: boolean; integers; floats; and, strings.
- [Pre-defined variables](http://us2.php.net/manual/en/reserved.variables.php) PHP comes with a large number of predefined variables to all scripts. The variables represent everything from external variables to built-in environment variables, last error messages to last retrieved headers.
- [Constants](http://us2.php.net/manual/en/language.constants.php) A constant is an identifier (name) for a simple value. As the name suggests, that value cannot change during the execution of the script. A constant is case-sensitive by default. By convention, constant identifiers are always uppercase.
- [Magic constants](http://us2.php.net/manual/en/language.constants.predefined.php) PHP provides a large number of predefined constants to any script which it runs.
- [Operators](http://us2.php.net/manual/en/language.operators.php) An operator is something that takes one or more values (or expressions, in programming jargon) and yields another value (so that the construction itself becomes an expression).
- [Arithmetic operators](http://us2.php.net/manual/en/language.operators.arithmetic.php) support basic arithmetic
- [Assignment operator](http://us2.php.net/manual/en/language.operators.assignment.php) The basic assignment operator is "=". Your first inclination might be to think of this as "equal to". Don't. It really means that the left operand gets set to the value of the expression on the right (that is, "gets set to").
- [Comparisio operators](http://us2.php.net/manual/en/language.operators.comparison.php) Comparison operators, as their name implies, allow you to compare two values.
- [Logical operators](http://us2.php.net/manual/en/language.operators.logical.php) compare Boolean (true/false) expressions and return a Boolean result

## Submission

Publish your pages on the opentech server and submit the URL of your index page as a clickable link in the comment section of the "**Assignment 4**" drop box in DC Connect. If you do not submit something into DC Connect, your professor will assume you did not complete the assignment, and the late penalties will apply (including 0/20 if the link was not submitted within the **72 hours** late period). The onus is on you to ensure your lab instructor knows that you have work to be assessed.

::: warning
Do not mail or attach your files themselves into DC Connect. They must be published onto the opentech server.
:::

## Important Notes

- You must use the XHTML 1.0 Doctype string, as given on the main course page on all your pages. You can copy the doctype tag from this page: just use (`View > Page Source` OR `Ctrl + U`) to view the HTML source and copy & paste the doctype tag into your own page.

- You also need to specify the character set used on your page. English doesn't use any accented characters like è and ü but many languages do. The character set specification tells the browser which alphabet to use.

- Place these lines at the top of your php file:

```php
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<head>
```

- Where you can expect problems going from XHTML Transitional to Strict are:
  - `<font>` tags are NOT valid (remove them all together).
  - Any align="center" attributes on a `<table>` tag, must be replaced with `style="margin-left:auto; margin-right:auto;`"
  - Any width="YOUR_VALUE" attributes on a `<td>` tag, must be replaced with style="width:YOUR_VALUE;"
  - Any `<u>` (i.e. underline) tags, must be replaced with an inline style (e.g. replace `<u>` with a `<span class="text-decoration:underline;" >` OR alternately, you can create a class named **.underline** that can be called on any tag)
