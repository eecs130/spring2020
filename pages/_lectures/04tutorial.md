---
layout: module
title: Installation & Configuration
type: tutorial
draft: 0 
points: 2
show_schedule: 1
num: 1
description:
  - Installing & configuring Atom
  - Practice with HTML tags
due_date: 2020-04-09
---

## 1. Install Atom
Download and install Atom: <a href="https://atom.io/" target="_blank">https://atom.io/</a>. Note: if you installed it on a Mac, you will need to drag the Atom Icon (green ball) into your Applications folder.

## 2. Organize your files
File management and organization are an essential part of programming and web development. As such, we suggest the following system:
1. Create a course folder called **cs130** somewhere on your computer. Many people store theirs in Documents or on their Desktop.
2. Create a **tutorials** folder inside of your cs130 folder.
3. Download the tutorial01.zip file, unzip it (ask your TA if you’re new to zipping / unzipping files) and put them into the cs130/tutorials folder.

```
cs130
    |-- tutorials
    │   |-- tutorial01
    │   |-- tutorial02
    |   ...
    |
    |-- homework
    │   |-- hw01
    │   |-- hw02
    |   ...
    |
    |-- lessons
        |-- lesson_01
        |-- lesson_02
        ...
```

## 3. Open the tutorial01 files in Atom
Now that Atom is installed, you are going to edit the lab files:
1. Open Atom
2. Add your entire cs130 folder to Atom by clicking File >> Add Project Folder... and then navigate to wherever you saved your cs130 folder.

[[IMAGE GOES HERE]]

## 4. Open the lab01 files in your Web Browser
Once you’ve taken a look at the code in Atom, go to your file navigator (Windows Explorer for Windows, Finder for Mac, and double-click index.html to preview it in your browser). Please complete the following tasks:

### A. General
Choose a topic to design for (music, art, travel, home, food, nature, etc.). If you can’t think of one, pick from the following:
favorite animal
favorite band
favorite place
favorite food/cuisine

### B. Edit the existing index.html file as follows:
In Atom: Change the title and header of your web page to correspond with the theme you have chosen. Save it and then preview your changes in your web browser.
Above the header, create a navigation section at the top of your page that has links to two other pages (you will be coming back to this). Hint: use a div tag as the container, and put links inside of it. Take a look at the Hyperlinks page on the course website (and scroll to the bottom).
Write a paragraph below the heading that introduces your page (can be very short); can be copied from somewhere else.
Modify the image links (src attribute) to point to images that relate to your theme (do at least three, and you can delete the rest):
Some of the images should be relative. To make this happen, you need to download them from the web, save them inside of your assets/images folder, and create a relative image link.
Some images should be absolute (linked directly to the webpage you found them on).
	(Refer to the images page on the course website).
Embed an iframe of a video on your topic next to your image gallery.

### C. Create a  new HTML file
Create a brand new HTML file called page_2.html with the following skeleton:

```html
<!DOCTYPE html>
<html lang="en">
   <head>
       <title>Page 2</title>       
       <link rel="stylesheet" href="assets/style.css">
   </head>
   <body>
       <!-- You HTML code goes here -->
   </body>
</html>
```
1. Copy your navigation and heading from the first page into your new page_2.html page.
2. Create a heading for your page.
3. Create an ordered list list that describes a few things you might want to know about the topic (e.g. 3 things you didn’t know about Sloths; top three pizza joints in Chicagoland).
4. Below your list, create a table that shares some important information about your topic: statistics, facts, etc. Even if you’re using a reference, please do try to type the table syntax yourself (so that you can get some practice looking at syntax more carefully, and developing good indenting practices.

### D. Update the Navigation
Modify the navigation section in each of your two pages so it is possible to link to the other page and to an external link with more information about your topic. For example:
Navigation for index.html
Home | Page 1 | More information 

Navigation for page_1.html
Home | Page 1 | More information 

Make sure that the Home and Page 1 links are relative links and that the “More Info” link is an absolute link to an external page. Moreover, if it’s an external link, make sure the page opens in a new tab (instead of the same tab) using the target attribute.

## 5. Optional Enhancements
While we have not yet covered CSS or Web Accessibility ideas, we encourage you to look towards what’s coming next and start getting oriented with CSS and accessibility standards.
Accessibility enhancements:
Note: following accessibility guidelines is good for everyone — people with disabilities, screen readers, and crawlers and machines who are indexing your content so that you are discoverable on the web. Some simple things you can do:
Alt tags for images [source]
Add captions and summaries to table [source]
Validate your HTML using an online validator
CSS enhancements:
Try editing assets/style.css as follows:
See if you can change the fonts and/or text color of the h1 tag
Try resizing the images
See if you can get your iframe to have the same style as your image
Change the background color of you web page
See if you can get your hyperlinks to have a hover effect
6. What to turn in
Please zip your entire lab01 folder (ask your TA if you don’t know how to do this), and submit it to Canvas under Lab 1.
