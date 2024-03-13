# library

View live site on [GitHub Pages](https://lucashogg.github.io/library/)

## About

> Let’s extend the ‘Book’ example from the previous lesson and turn it into a small Library app.

![library-01](https://github.com/lucashogg/library/assets/73367876/26277e10-8d4f-46ee-a078-33455859ec30)
![library-02](https://github.com/lucashogg/library/assets/73367876/8d3482f9-ec42-4947-b3d3-184927b43a28)
![library-03](https://github.com/lucashogg/library/assets/73367876/918053e5-14b2-4c2b-a0f5-6200853229c5)

In this **The Odin Project** assignment we are tasked with building a web based "library" which prompts users to enter book data and have it displayed in a table-like format.

### Features

- Pop up modal with form
- Inputs for entering requested information
- Client-side validation for all inputs
- Responsive design

### Technologies

-   Javascript
-   CSS
-   HTML

### What I Learned

This was a fun exercise for implementing Object Constructors, and everything else we've learned so far in The Odin Project program. Since there was no server-side storage involved, the trickiest part of the logic for me to figure out was how to loop through the library array without creating duplicates of each `book-card` displaying on the page. My solution was to reset the html markup for each book added. The task also explicitly requested that we indeed "loop" through the array of objects and change the data withing the object. It would have been easy to just `querySelector` some of the elements and change their html appearance without touching the objects, but once I figured out the correct looping logic (hint: using a classic `for` loop rather than `forEach`), targeting the object's keys/values was successful.

### Additional Links

[The Odin Project](https://www.theodinproject.com/)

