# Lab 7 - Database Intro

## General

This is the first of the WEBD2201 database assignments. It is important that you complete this assignment, as all subsequent assignments are based on the concepts introduced here.

You will be required to make minor modifications to two (2) provided files (i.e. **`lab7_bond_info.php`** and **`lab7_bond_movies.sql`**) found in the [lab7_example.zip](https://dcapi.netdevv.com/downloads/lab7_example.zip), and create three (3) more files for this assignment: a **`lab7.php`** landing file; a **`lab7_auto_info.php`** (which will show some of your favourite automobiles); and, **`lab7_auto_records.sql`** (which will create and populate an automobiles database table your `userid_db` database on the opentech server.

Your **`lab7*.php`** web pages must conform to the W3C XHTML 1.0 Strict specification, as checked by the W3C validator.

Download the files found in the [lab7_example.zip](https://dcapi.netdevv.com/downloads/lab7_example.zip) This is a working example of the James Bond films discussed in the lecture period. You must run the sql script (if you have not done so already) provided in order to ensure that the database table exists. Work through the comments found in the **`lab7_bond_info.php`** page. If your page works you should see something very similiar to this page.

NOTE: when you run your **`.sql`** files using the psql command in PuTTy the first time. Change directory into your sqlfolder:

```bat
cd /var/www/html/webd2201/smithb/sql

psql -d smithb_db -f lab7_bond_movies.sql
```

The default database password on the server is your student number (it is not necessarily the same as your opentech server password). You are encouraged to change your password from your student number default for your PostGreSQL user, log into your database:

```sql
psql -d smithb_db
```

Enter your default password to enter your database and then run the SQL command :

```sql
ALTER USER smithb WITH ENCRYPTED PASSWORD 'modifiedpassword';
```

## Due Date

The due date for Lab 6 is found on the [Important Dates](http://opentech.durhamcollege.org/pufferd/webd2201/importantdates) page and in DC Connect. This means that you must have published your website into your development folder on the opentech server and have submitted a clickable HTML link to your website on the opentech server in the Lab 6 assessment dropbox comment section in DC Connect (see "Submission" section).

You will be given a mark out of twenty (20). You will be told of the reasons for any loss of marks, these points are to be used as constructive criticism (i.e. fix the problems as a practice for the term tests).

## Specific Requirements

- All **`lab7*.php`** files you are to create for this assignment should include your **`header.php`** (which will automatically incorporate your **`webd2201.css`** stylesheet) and **`footer.php`**. This will assure the new files conforms to your existing page layout. Be sure to include a link to the new **`lab7.php`** page in your **`header.php`** file, and a detailed paragraph describing what EACH page does (i.e. each page needs a detailed description paragraph).
- All **`lab7*.php`** pages must be validated to the XHTML Strict standard.
- Similar to previous assignments, include PHP (i.e. `/* c-style */`) comments with your name and course code in the **`lab7.php`** file created for this assignment. Additionally, add dynamic HTML comments to all your **`lab7.php`** page (this should occur if you implement your **`header.php`** file correctly).

```php
/*
    your_name
    assignment_date
    WEBD2201
*/
```
