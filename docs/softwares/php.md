# PHP Installation

## Download Links

The server-sided scripting language used for the webd2201 course. Download this zip file and decompress on your laptop.

- Download from Our Site (32 BIT) [PHP 5.6.25](https://dcapi.netdevv.com/downloads/php-5.6.25-Win32-VC11-x86.zip)

::: tip Latest PHP version
Download from PHP.NET [PHP 7.3.6](https://windows.php.net/downloads/releases/php-7.3.6-src.zip)
:::

## Config Procedure

::: tip Pre-amble
You MUST have already set up Apache to run on your laptop. PHP is a server-sided programming language, that requires the web server to process any **\*.php** files.
:::

- Download the PHP file from the course webserver (it is a zip file).
- Unzip your PHP files onto your laptop, taking note of the location (You are recommended to unzip into your Apache folder , i.e.`C:\Apache24` if you went with the default location). The php folder does not need to be in there (it can be placed anywhere on your laptop), but it makes it easier to find the files that you will need for future config changes (you will not have to locate the folder later).

::: tip Simplify the Folder Name
For simplicity, you can change the full PHP folder name (including the version number and the O/S it is created for) to just **php**. This will make the following config easier (less chance for typos).
:::

- Go into the php folder and make a copy of `php.ini-development` and rename it to `php.ini`. Open the re-named file in a text editor.
- Find the line in php.ini that sets the extension_dir, uncomment it (i.e. remove the semi-colon ; symbol) and set it to the location of the ext folder in your php folder, e.g.:<br/>
  `extension_dir = "C:\Apache24\php\ext"`<br>
  Save the file.
- In `php.ini` search for the line that shows:
  `;date.timezone =`
  (it should be around line 925) and change it to:
  `date.timezone = "America/Toronto"`
  **NOTE: the semi-colon (`;`) comment is removed AND the value is set to the local timezone.**
- Open the httpd.conf file in the Apache24/conf folder in a text editor, find the line that shows:
  `DirectoryIndex index.html`
  change it so that it states:
  `DirectoryIndex index.php index.html`
- Go to the bottom of the file and add the following lines:

```php
// YOUR_FILE_STRUCTURE is used as a reference. Read below tip for brief.
PHPIniDir "YOUR_FILE_STRUCTURE"
LoadModule php5_module "YOUR_FILE_STRUCTURE\php5apache2_4.dll"
AddType application/x-httpd-php .phtml .php
AddType application/x-httpd-source .phps
```

::: tip
**YOUR_FILE_STRUCTURE** must be modified to your file structure as to where you unzipped the PHP files. If you forget to do this there are no guarantee that your instructor will be able to keep a straight face when you ask for help.

e.g. if you have unzipped and renamed the unzipped PHP folder to php in in the Apache2.4 folder:

`C:\Apache24\php`

The above described section should look like:

```php
PHPIniDir "C:\Apache24\php"
LoadModule php5_module "C:\Apache24\php\php5apache2_4.dll"
AddType application/x-httpd-php .phtml .php
AddType application/x-httpd-source .phps
```

:::

- Save the `httpd.conf` file.
- Start the Apache Monitor (`ApacheMonitor.exe` found in the `C:\Apache24\bin` folder) if is not already started.
- Restart your Apache server by clicking on the "Restart" button.
- If you receive no errors, to verify that PHP is working correctly. Make a new text file, name it phpinfo.php, and then save it into your Apache DocumentRoot (`C:/Apache24/htdocs` if you went with the setup default values when you loaded Apache, or your working directory if you changed where Apache finds its files). Add the following lines of code into the phpinfo.php file (and save it):

```php
<?php
	phpinfo();
?>
```

- Open a browser window and type the following into the address bar:
  [http://localhost/phpinfo.php](http://localhost/phpinfo.php)
  If it works your browser will display pages of data describing the Apache/PHP configuration on your laptop.

::: danger The requested Operation has Failed
If you receive an error pop-up that states the "The requested operation has failed". you should go into the Event Viewer in the **Control Panel -> Administrative Tools** and check under "Windows Logs" -> Applications to verify what the OS has captured.

If there is an error referencing that the **php5apache2_4.dll** file cannot be found, ensure that the file is where the httpd.conf file is pointing, and if so you might need to load the NET Framework 4 Client Profile and/or Visual C++ Redistributable for Visual Studio 2015 (which all PHP 5.3+ versions require to run). Download and attempt to run the following files for [dot.NET Framework 4 Client Profile](https://dcapi.netdevv.com/downloads/dotNetFx40_Full_setup.exe) and/or [Visual C++ Redistributable (x86)](https://dcapi.netdevv.com/downloads/vc_redist.x86.exe). The setup files will inform you whether the components are already loaded on your laptop (or load otherwise). Attempt to restart Apache through the Apache Monitor when the components are loaded.
:::
