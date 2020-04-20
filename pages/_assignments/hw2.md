---
layout: assignment-two-column
title: |
   HTML & CSS Practice: Spotify
abbreviation: HW2
type: homework
due_date: 2020-05-01
ordering: 2 
points: 10
draft: 0
---

<style>
    img {
        max-width: 700px;
        max-height: 300px;
    }
</style>

With respect to interface design, Layouts are, hands-down, one of the most difficult things to accomplish in CSS. As such, HW2 consists of three parts:

1. A CSS Grid exercise (recommended)
1. A Flexbox exercise (required)
1. Implementing some of the Spotify interface (required)

Whereas the first two are tutorial-style exercises that walk you through the steps of creating particular effects, you will do the Spotify activity on your own (but of course come to office hours and ask lots of questions).

## Part 1: CSS Grid exercise (recommended)

As mentioned in class, one of the biggest challenges in front-end web development is marshaling CSS and HTML to produce the kinds of layouts you envision in your head. [Tutorial 3](../lectures/08tutorial) was an effort to scaffold this learning process (solutions will be posted).

To understand one approach to reproducing the Spotify layout, we have made an HTML and CSS file inside the "layout" directory. Together, `index.html` and `layout.css` produce the two layouts pictured below (for desktop and mobile).

<img src="{{site.baseurl}}/assets/images/homework/hw02/desktop-layout.png" />
<img src="{{site.baseurl}}/assets/images/homework/hw02/mobile-layout.png" />

### Desktop Layout
The main desktop layout is controlled by the CSS grid defined in the body selector. Each region of the page is then assigned to an area using the grid-area property. Note, there are other ways to accomplish this same effect. This is one approach.

```css
body {
    display: grid;
    overflow: hidden;
    margin: 0px;
    grid-template-columns: 250px auto;
    grid-template-rows: auto 100px;
    grid-template-areas:
       "left main"
       "bottom bottom";
    height: 100vh;
}
```
### Mobile Layout
The mobile layout is achieved by overriding some of the CSS properties within a media query. In this case, the grid is redefined as a single-column layout, the left panel gets hidden, and the position of the header is reconfigured: 

```css
@media screen and (max-width: 700px) {
    body {
        grid-template-columns: auto;
        grid-template-areas:
           "main"
           "bottom";
        height: 100vh;
    }
    header {
        left: 0px;
        width: 100vw;
    }
    aside {
        display: none;
    }
}
```

#### Practice
Please open `layout/index.html` and `layout/layout.css` and study them. The techniques used in these files will form the basis of your Spotify app.


## Part 2: Flexbox exercise + image formatting tips (required)
The first part of HW2 involves going through a series of steps to create an image gallery that is responsive (i.e. mobile-friendly) and follows a principled set of alignment rules. We will use "flexbox" to do this. Please follow the steps below:

### Step 1: Create cards
1. Flexbox
2. Images -> Divs with background images

### Step 2: Make your interface responsive
1. Media Queries

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

```html
<head>
    <meta charset="utf-8">
    <title>Image Gallery</title>
    <link rel="stylesheet" href="hint_4.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

And some CSS...
```css

@media screen and (max-width: 1000px) {
    .card {
        width: 50%;
    }
    .card .image-div {
        height: 350px;
    }
}

```

### Step 3: Add borders / accents by adding another div
A common design technique involves adding borders to your cards and spacing them x-units apart. However, margin isn't taken into account when your browser calculates widths. Therefore, if you set each card's width to 50% (so that you have two cards per row) but then you give each card a margin, this added margin will push your second card onto the next row. 

Because of this, if you want to add a border, you'll have to create a child element inside the card and give the child element a border.

### Step 4: Hover effects
Pseudoclasses

### Checklist

{:.checkbox-list}
* Desktop View:
  * Photos are all the same size 
  * There are three photos per row
* Mobile View:
  * When the screen is less than 1000 pixels, there are only two photos per row
  * When the creen is less than 700 pixeks, there is only one photo per row
* There is a border around each card
* Hover effects have been implemented

## Part 3: Spotify CSS (required)
This is the first of a 2-part exercise that is intended to help you to understand how HTML, CSS, and JavaScript work together to produce a web app. To do this, we will be reverse engineering the Spotify website. for this week, you will be working on designing the look-and-feel of the website. In a future assigment, you will actually be programming the interactions / data queries using JavaScript in order to pull down acutal songs, images, and text down from the Spotify servers (and play some music).

Please begin by downloading the assignment files:

<a class="nu-button" href="{{site.baseurl}}/{{page.files}}">
    download starter files 
    <i class="fas fa-download"></i>
</a>


## Assignment Instructions
In this assignment, you will create the Desktop UI pictured below (click to make the image bigger) by modifying the files in the `your_task` folder (which you have downloaded). Please read the instructions carefully and complete the 5 steps below.

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_1.png" target="_blank"><img src="{{site.baseurl}}/assets/images/homework/hw02/screen_1.png" /></a>

### A. Left Navigation
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


### B. Header & Nav Styling
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


### C. Artists Panel
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

### D. Create Responsive UIs

{:.checkbox}
Create the following responsive UIs shown below. If you're using more than 10-15 lines of code to achieve each of these effects, you're on the wrong track. Add the CSS to make these responsive UIs to `style.css`.

**Tablet:**  Use Flexbox to display albums 3-across.

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_3.png" target="_blank"><img src="{{site.baseurl}}/assets/images/homework/hw02/screen_3.png" /></a>

**Mobile:**  Use Flexbox to display albums 2-across and hide the left menu.

<a href="{{site.baseurl}}/assets/images/homework/hw02/screen_5.png" target="_blank"><img src="{{site.baseurl}}/assets/images/homework/hw02/screen_5.png" /></a>

### E. Hover Effects

{:.checkbox}
Finally, implement the 4 hover effects shown in this video.

<iframe width="720" height="405" src="https://northwestern.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=326b528e-e7a1-4431-a837-ab4900158410&autoplay=false&offerviewer=true&showtitle=true&showbrand=false&start=0&interactivity=all" style="border: 1px solid #464646;" allowfullscreen allow="autoplay"></iframe>

## Rubric

{:.checkbox-list}
* Left Navigation:  
  * Icons added **(1 pts)**
  * Styling reflects screenshot **(1 pts)**
* Header & Nav Styling **(1 pts)** 
* Artists Panel **(2 pts)**
* Responsive UIs Implemented **(3 pts)**
* Hover effects implemented **(2 pts)**

## What to Turn In
Turn in a zip file of the `your_task` files with your completed HTML and CSS files.

