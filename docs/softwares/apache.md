# Apache Installation

## Download Links

The HTTP web server used for the WEBD2201 course. Download the correct executable and run on your laptop.

- Windows (64 BIT): [Apache 2.4.23](https://home.apache.org/~steffenal/VC15/binaries/httpd-2.4.39-win64-VC15.zip)
- Windows (32 BIT): [Apache 2.4.23](https://home.apache.org/~steffenal/VC15/binaries/httpd-2.4.39-win32-VC15.zip)

::: tip Not Recomended
Download New Version From [https://www.apachelounge.com/download/](https://www.apachelounge.com/download/)
:::

## Config Procedure

::: tip Pre-amble
If you build the server into your **`C:` drive** (i.e. set up outside of default location) means you will back up the entire HTTP server (not just your webpages) when you back up/archive your course/program work. Therefore it is recommended that you build the HTTP server into the default **`C:` drive** location and instead point the server to another **`C:` drive** directory for your web page files (instructions will follow below).

You are recommended to create a folder:

`C:\Libraries\Documents\webd2201\lastnamefirstinitial`

where lastnamefirstinitial is YOUR LASTNAME WITH YOUR FIRSTINITIAL (e.g. Bill Smith would have a folder named smithb, all lowercase, no spaces and no special characters like hyphens or apostrophes).
:::

- Download the appropriate Apache 2.4 setup file from the course webserver (links above).
- Unzip the Apache archive **`.zip`** into the root of `C:\`.
- To verify that Apache will work on your laptop, open up a Windows command line as an Administrator, and change into your `Apache24\bin` directory.
- Run the command: `httpd`

::: warning Warning- httpd
If you receive the warning similar to:

`AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using fe80::15eb:34c8:bd5:8de. Set the 'ServerName' directive globally to suppress this message`
means in fact the Apache server has been started (it is only a warning). You can continue with the set up steps below.

To get rid of the warning, when below you edit the httpd.conf find the line that states:

`#ServerName www.example.com:80`

and uncomment it (i.e. remove the pound sign #):

`ServerName www.example.com:80`
:::

::: danger Error- Missing \*.dll
If you get an error when attempting to starting the Apache server/monitor stating:

`The Program can't start because MSVCR110.dll is missing from your computer. Try reinstalling the program to fix this problem.`

You need to download the [Microsoft Visual C++ Redistributable 2010](http://opentech.durhamcollege.org/pufferd/shared_software/vcredist_x86.exe) and run it as an Adminstrator on your laptop.
:::

::: danger Error- httpd: Syntax error on line 72
If you receive the error:

`httpd: Syntax error on line 72 of C:/Apache24/conf/httpd.conf: Cannot load modules/mod_access_compat.so into server: The specified module could not be found.`

The problem is really on line 37 (where the ServerRoot is declared). It is pointing to the wrong file folder and therefore Apache is unable to get to the **\*.so** file in a modules sub-directory. It probably means that you have an extra Apache24 folder inside of their Apache24 folder (i.e. `C:\Apache24\Apache24`).
This will occur depending on how you unzipped the provided zipped software file.

Solutions:

Rename the top level Apache24 folder and move the sub-folder up to the root of C:\ (preferred solution); or
change line 37 to: ServerRoot `C:\Apache24\Apache24` (not as good as the above solution but will resolve the issue)
:::

::: danger Only one usage of each socket address
If you receive the error:

`(OS 10048)Only one usage of each socket address (protocol/network address/port) is normally permitted. : AH00072: make_sock: could not bind to address [::]:80`<br/>
`(OS 10048)Only one usage of each socket address (protocol/network address/port) is normally permitted. : AH00072: make_sock: could not bind to address 0.0.0.0:80`<br/>
`AH00451: no listening sockets available, shutting down`<br/>
`AH00015: Unable to open logs`

This means your laptop already has a web server running on port 80 , or they have Skype and/or DropBox is running on Port 80 (most likely the issue).
NOTE: Skype and DropBox take over port 80 by default, but will look for other available ports if it is already in use.
To resolve the issue, open up a DOS command window as an Administrator and run the command:

`net stop http`<br/>
Enter Y when prompted and then navigate to the `C:\Apache24\bin` and re-run the `httpd` command again.
:::

- Verify Apache Loaded Succesfully
  Open up your browser of choice. Type into the address bar:
  [http://localhost](http://localhost)
  or
  [http://127.0.0.1](http://127.0.0.1)

  The browser should show a welcome page with **"It works!"**. If so Apache is on your laptop and running, continue with the following steps to complete the configuration.

- To stop the service in the DOS command Window click CTRL-C (this will stop the httpd service turning off Apache)

::: tip Note- Default Server HTML File Location
Though you have built the application to the default location (i.e. `C:\Apache24`) you do not have to store/run your files from the `C:\Apache24\htdocs` drive. You can now instead build another folder on your hard drive and point the server to it (as an example assume you have a `C:\Libraries\Documents\webd2201\lastnamefirstinitial` folder that you want to build your website into). To have the Apache web server access this folder location (and therefore the **`*.html/*php`** files in it) complete the following steps
:::

- Find the lines in the `httpd.conf` file that state (approx. line 246):

```
DocumentRoot "${SRVROOT}/htdocs"
<Directory "${SRVROOT}/htdocs">
```

- Go to `C:\Apache24\conf`
  Select the file httpd.conf file right mouse-click and select "Edit with Sublime" (download and config Sublime if this is not an option)

::: tip To add a file location to path
To add a folder to your Windows PATH environment so that you can run applications from the command line (instead of having to navigate to the folder each time), you can do one of two things:
Go through the Control **Panel -> System -> Advanced system Settings** and click on the **Environment Variables** button on the System Properties Screen then append the folder location to the System Path item; or,
From the Windows command line (run as an administrator) open a Windows DOS command window and type in the folder location, for this class:<br/>
`set PATH = %PATH%;"C:\Apache24\bin"`
:::

- Change them so that they state:
  ```
  DocumentRoot "C:\Libraries\Documents\webd2201\lastnamefirstinitial"
  <Directory "C:\Libraries\Documents\webd2201\lastnamefirstinitial">
  ```
  Be sure to create this folder if you have not already.

::: tip Creating Web Content
Create a text file named index.html, place some recognizeable content in it and save it into the `C:\Libraries\Documents\webd2201\lastnamefirstinitial` directory.<br>
Open up your browser of choice.<br>
Type into the address bar:
[http://localhost](http://localhost)
or
[http://127.0.0.1](http://127.0.0.1)
The browser should show the contents of your index.html file.
:::

- To add Apache 2.4 as a Window Service. Open the Windows command line (i.e. cmd.exe as an administrator, change directory to the `C:\Apache24\bin` (or wherever you unzipped you Apache files) then enter:<br>
  `httpd -k install -n "Apache 2.4"`
- If you have added Apache 2.4 as a Window service, start ApacheMoniter.exe in the `Apache24/bin` folder (if you received an error that it is already running, exit from the running instance in your Windows menu, then try to run the file again).
- In the Apache Monitor click "Start" or "Restart" (whichever is available) to restart Apache 2.4
- To test that Apache is working. Create a new text file named index.html, place content in it and save.
- In a browser navigate to [http://localhost](http://localhost), the contents of your index.html file should be displayed.
