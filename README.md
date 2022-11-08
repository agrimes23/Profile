<h1>Alex's Profile</h1>

<p>My first ever live site! I will be breaking down the functionality of each page, the challenges I faced and mention at the end some things I would like to improve on in the future.</p>

First section:

<h2>Header / Nav Bar and Footer</h2>

<p>These two features appear on each page. I made a "sticky" nav bar by setting it to a fixed position. 
The html/body I think was preventing the navbar from stretching to the top corners of the page, so I had to set the top and left positioning to 0.</p>
<p>My logo at the top right corner is also an anchor tag that navigates back to the home page if the user is on any other tab. The other three on the 
right side navigate to different pages on the site. These anchor tags have icons within the text part of the anchor tag so that it shows up as the anchor tag text. 
Each anchor tag in the nav bar glows when hovered over. </p>

<h4>✨Interaction 1✨</h4>
<p>This actually is also a responsive design feature. The jQuery method used is calld <code>slideToggle()</code>. I wanted the menu to not just appear, but to slide down 
and slide up. Within the <code>()</code> of <code>slideToggle</code>, I used 'slow' to make the animation visual for the user. </p>

<p>When the screen gets below a certain width, the hamburger menu (three horizontal lines) shows up instead 
of having three tabs. The user can click on it and it will show the three tabs in a smaller menu. One issue I had with this was when the screen went past the 
higher end of the range for it to appear on the screen, the hamburger menu icon went away, but the dropdown still appeared if it was left open. 
One way I solved it was creating a min-width and just setting the display to none.</p>
<h1></h1>
<p>As for the footer, I placed the html for this at the bottom of the body. That way, it would show up at the bottom of all pages. The first two anchor tags 
are links to each respective website. The contact anchor tag sends the user to the contact page. </p>

<h2>Dark Mode</h2>
<h4>✨Interaction 2✨</h4>
<p>I used the <code>toggleClass()</code> method and wrote out two css stylings for light mode (no extra class added to the html elements) and dark mode (.dark-mode class stlying on html elements).
<code>toggleClass()</code> allows for the <code>.dark-mode</code> class to be toggled on to any html element I use to toggle. If the toggle is on, the elements with <code>.dark-mode</code> will use that css styling. 
</p>

<h1></h1>

<p>One issue I had was with the dark mode button was that the button color & background while normal and hover does not change color despite having css code changing those colors. 
I haven't figured out why it won't do it, I might need to use !important, but I've heard you should only use that sparingly.</p>
<p>An issue I had but have fixed was changing the icon from moon while in light mode to the sun while in dark mode. I want to show the user they can change it back to light mode and have the appropriate symbol for it. I basically made css styling for both icons in dark and light mode. I used the <code>toggleClass()</code> jQuery method to toggle the button dark-mode class. 
This was applied to the children of the button, so both moon and sun icons (inputted in the button text area of the html). I set display none for the sun while in light mode and <code>display: none</code> for the moon when in dark mode. And for each time they should appear again, I used the display value <code>inherit</code>, which is setting it back to the default html element's style.</p>

<h2>Website Pages</h2>
<p>Before I explain each page, just a brief explanation on how each page shows up on the screen.</p>

<h4>✨Interaction 3✨</h4>
<p>I used both the <code>hide()</code> and <code>show()</code> jQuery methods to hide the pages the user didn't click on, and to show the page the user clicked on. </p>

<h4>✨Interaction 3.1✨</h4>
<p>This was an interaction that wasn't initially included on my list but rather something that I noticed while writing code. For longer pages, 
the screen wouldn't go to the top of the page, but rather sit in the bottom of the page when the user clicked on another section. I found that the <code>animate()</code> method allowed for that slow scroll up to the top of the current page. Within the parentheses, <code>"scrollTop: "0"</code> is the part of the code that takes the user's screen to the top of the page. </p>

<h2>Home Page</h2>

<p>The home page contains</p>
<ol>
<li> My photo, name, and what I do </li>
<li> An about me / bio</li>
<li> My recent projects</li>
</ol>

<p>I wanted all of this on my home page because I saw other sites like adobe and others that used contrasting sections as the user scrolls down. I sort of did that 
with the about me section.</p>
<p>The recent projects section showcases my most recent projects. I might update it to maybe "most popular" or "most well known" or something. As you hover over each 
image, it makes the image slightly opaque, just something to let the user know which project they're about to click on.</p>
<p></p>

<h2>Resume Page</h2>
<p>This page has four collapsed sections. Each time you open one section, any other section that's open will automatically close. I though it looked too cluttered to have multiple sections open at the same time. This auto close for sections the user is not looking at allows the user to focus on one section at a time. I also put a gradient color on each section title, and on hover it will show the gradient the opposite way, creating a shine effect.</p>

<h4>✨Interaction 3.2✨</h4>
<p>I used the <code>slideUp()</code> jQuery method to close all other sections that the user did not click on. And with what the user clicked on, I used the <code>toggle()</code> jQuery method and <code>'slow'</code> in the parentheses to slowly show the clicked section's content. </p>

<h2>Projects Page</h2>

<p>This page includes cards for each project. On each card: a screenshot of the main section of the project, a short summary of the project, and a link to the github page.
Each card has a shine effect too just like the resume section titles. I used flexbox <code>flex-start</code> so that it wouldn't affect the other cards in the row too much when the description dropped down. </p>

<h4>✨Interaction 3.3✨</h4>
This might not count as a new jQuery method, but I used <code>toggle()</code> again to show descriptions on each card. 

<h2>Contact Page</h2>
<p>My contact page is static currently. I looked into how to open the mail app, but I would like to do some different functionality. However, we have not learned that yet in this course and will add it once we have learned it.</p>
<p>I created sections for the user's name, email and message they would like to send to me. There is a submit button that changes color when hovered over. </p>

<h2>Problems / Issues</h2>
<ul>
<li>I cannot change the color of the button in regular & hover mode when I change the dark / light mode. </li>
<li>Making the site responsive was a challenge for me. I'm not used to working with css so it was a good problem to tackle. I ended up using a lot of 
flexboxes, which for some elements, made it easier to make things responsive as the screens size changed. I also practiced using media queries.</li>
<li>Changing the icon from moon to sun on the dark-mode button took a lot longer than I'd like to admit. It seems such a small feature that shouldn't 
take much time. I evetually figured it out by setting display: none / inherit.</li>
<li>Making the nav bar extend to the very top corners of the page. I think the html prevented me from extending all the way. I made this work by fixing 
the header to position 0, 0 by using <code>top:0</code>, <code>left:0</code>.</li>
</ul>

<h2>Future Plans / Changes</h2>
<ul>
<li>Creating a scroll animation on the home page when scrolling through different sections. Maybe like the section will come into view / be less opaque as you scroll. </li>
<li>Make the contact page usable. Might need to use a third party API for this, or adjust settings on my google account.</li>
<li>Get rid of text slide animation when you click on resume sections.</li>
<li>Style the project cards better</li>
</ul>

