---
layout: assignment-two-column
title: |
   HTML & CSS Practice: The Spotify UI
abbreviation: HW1
type: homework
due_date: 2020-04-24
ordering: 1
draft: 1
points: 10
---
<style>
    img {
        max-width: 700px;
        max-height: 300px;
    }
</style>

## Preview
This is the first of a 2-part exercise that is intended to help you to understand how HTML, CSS, and JavaScript work together to produce a web app. To do this, we will be reverse engineering the Spotify website. In the first part of this assignment, you will be working on designing the look-and-feel of the website. In the second part, you will actually be programming the interface so that it 

## Some Background Concepts
Please begin by downloading the assignment files:

<a class="nu-button" href="{{site.baseurl}}/{{page.files}}">
    download assignment zip 
    <i class="fas fa-link"></i>
</a>


## Assignment Instructions
In this assignment, you will create the Desktop UI pictured below (click to make the image bigger) by modifying the files in the `your_task` folder (which you have downloaded). Please read the instructions carefully and complete the 5 steps below.

<a href="{{site.baseurl}}/assets/images/hw04/screen_1.png" target="_blank"><img src="{{site.baseurl}}/assets/images/hw04/screen_1.png" /></a>

### Step #1: Left Navigation
Complete the following tasks:

{:.checkbox}
In the `index.html` file, add Font Awesome icons (Spotify logo, home, search, and headphones) within the "aside" tag (pictured below) in accordance with the screenshot. Note that the Font Awesome font reference is already included at the bottom of your `index.html` file. Your job is to search for relevant icons and include them. For instance, to get the Spotify icon, take a look <a href="https://fontawesome.com/icons/spotify?style=brands" target="_blank">here</a>.

Other than adding the icons, please do not make any other changes to the HTML.

```html
<aside id="sidebar">
    <h1>
        <!--TODO: Font Awesome Icon Here -->
        Spotify
    </h1>
    <a href="#">
        <!--TODO: Font Awesome Icon Here -->
        Home
    </a>
    <a href="#">
        <!--TODO: Font Awesome Icon Here -->
        Search
    </a>
    <a class="selected" href="#">
        <!--TODO: Font Awesome Icon Here -->
        Your Library
    </a>
</aside>
```

{:.checkbox}
In the `style.css` file, update the CSS to make the UI look like the screenshots (pictured above). This should be accomplished primarily by using flexbox properties and the box model. Be sure to put all of the CSS related to the left navigation in style.css.


### Step #2: Header & Nav Styling
Next, you need to style the `header` and `nav` sections:
```html
<header>
    <a href="#" id="upgrade">Upgrade</a>
    <a href="#" id="profile">
        <i class="far fa-user"></i> Profile</a>
</header>
<nav>
    <a href="#">Playlists</a>
    <a href="#">Albums</a>
    <a class="selected" href="#">Artists</a>
</nav>
```

{:.checkbox}
In the `style.css` file, add CSS style blocks to make the UI look like the screenshots (pictured above). Just as with Step #1, all alignment should be done using the box model (e.g. padding, margin, height, width) and with flexbox (e.g. flex-direction, justify-content, align-items).


### Step #3: Artists Panel
Next, you need to style the `section` cards that represent each Spotify artist (pictured below):

```html
<article id="featured-content">
    <section class="artist-card">
        <div>
            <img src="https://i.scdn.co/image/62b33d12e2b9a033cf77585f6e3d4b2c6b3a63a1" />
            <h3>Taylor Swift</h3>
            <p>Artist</p>
            <span class="play-button"><i class="fas fa-play"></i></span>
        </div>
    </section>
    ...
</article>
```

{:.checkbox}
In the `style.css` file, add CSS style blocks to make the UI look like the screenshots (pictured above). Again, all alignment should be done using the box model (e.g. padding, margin, height, width) and with flexbox (e.g. flex-direction, justify-content, align-items).

### Step #4: Create Responsive UIs

{:.checkbox}
Create the following responsive UIs shown below. If you're using more than 10-15 lines of code to achieve each of these effects, you're on the wrong track. Add the CSS to make these responsive UIs to `style.css`.

**Tablet:**  Use Flexbox to display albums 3-across.

<a href="{{site.baseurl}}/assets/images/hw04/screen_3.png" target="_blank"><img src="{{site.baseurl}}/assets/images/hw04/screen_3.png" /></a>

**Mobile:**  Use Flexbox to display albums 2-across and hide the left menu.

<a href="{{site.baseurl}}/assets/images/hw04/screen_5.png" target="_blank"><img src="{{site.baseurl}}/assets/images/hw04/screen_5.png" /></a>

### Step #5: Hover Effects

{:.checkbox}
Finally, implement the 4 hover effects shown in this video.

<iframe width="720" height="405" src="https://northwestern.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=326b528e-e7a1-4431-a837-ab4900158410&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Rubric

{:.checkbox-list}
* Left Navigation:  
  * Icons added **(2 pts)**
  * Styling reflects screenshot **(2 pts)**
* Header & Nav Styling **(2 pts)** 
* Artists Panel **(3 pts)**
* Responsive UIs Implemented **(3 pts)**
* Hover effects implemented **(3 pts)**

## What to Turn In
Turn in a zip file of the `your_task` files with your completed HTML and CSS files.




