# Lazy_Loading-_Images_with_Bootstrap
Request:

Create webpage(design.png) in html5, use your best coding skills ( see attached video(assignment.mov) for the output expected )

Use any images or can use below images (all images must be used) , reuse images to fill the page, page must have alteast 20 images

1. https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg
2. https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg
3. https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg
4. https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg
5. https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg
6. https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg
7. https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg
8. https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg
9. https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg

What to use :
No JS Framework allowed
HTML5
SCSS/SASS
Vanilla Js/ jQuery only
No external plugins allowed, eg. masonry etc

Must use grunt to compile js and sass, so the submission must include src and destination with gruntfile and package.json

Output expected -
1. Use bootstrap5 html framework to code the webpage-----（https://getbootstrap.com/docs/5.3/forms/checks-radios/）（https://getbootstrap.com/docs/5.3/layout/grid/）
2. Image should only load when in viewport----- trigger event---document.addEventListener("DOMContentLoaded", function() { ... })
3. Webpage must be responsive and must use grid structure ( 4-5 images on desktop and 2 images on tablet, 1 image on mobile)----- media query
4. Use Vanilla Js/jQuery wherever is required, no external plugins allowed----- import modules in node.js
5. Image box must always be square and image should always fill the box ( using css aspect ratio 1:1 is not allowed)
6. Image should not lose its aspect ratio
7. Those boxes must be checkbox and image should be background image of those checkboxes
9. As the default property of checkbox, i should be able to select those image and selection should be highlighted with outline/border, selection part must be done using only css without any js

Project structure should look something like this,  just a prototype -

assignment/
│
├── src/
│ ├── js/
│ │ └── script.js
│ ├── scss/
│ │ └── styles.scss
│ └── index.html
│
├── dist/
│ ├── css/
│ │ └── styles.css
│ ├── js/
│ │ └── script.js
│ └── index.html
│
├── package.json
└── Gruntfile.js



