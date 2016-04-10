# Trellis CSS
A CSS base and responsive framework.

Trellis keeps styles to a configurable set of formating and responsive layout classes. This allows you the freedom to style elements as you need, and quickly structure your content while keeping global options and settings centralized.

Many CSS frameworks limit your layouts to a maximum width or grid size, and are engineered to include many styles in an effort to get you up and running fast. Unfortunately these features become a hinderance when you need to achieve certain design requirements. Trellis doesn’t include multitudes of styles that you’ll find yourself overriding or limit your layout’s grid width.

###Installation
Once downloaded, organize the "trellis-scss" and "trellis-js" folders located in "Source" within you CSS/SCSS and Javscript files. Process trellis.scss with your SCSS files and jquery.trellis.js with your javascript files.

If you're not familair with SCSS, check out http://sass-lang.com/. If your not familair with processing it, check out https://prepros.io/.

**Important Note!**

Including jquery.trellis.js is only necessary to incorporate Trellis' "Scroll Nav" feature. jquery.trellis.js requires the use of Headroom.js http://wicky.nillia.ms/headroom.js/. Headroom.js adds classes to the HTML tag to aid in the settign of scroll states for the "Scroll Nav". 


###Configuration###

Edit _config.scss in the "trellis-scss" folder. Here you will establish the base styles for your site I.E. colors, font sizes, screen breakpoints, etc... 

Trellis includes a library of Mixins in Source/scss/lib/mixins.scss that you can take advantage of.



###Reference & Help
Included is an example page in "Examples" outlining the primary class names with usage examples and descriptions. 

You can also view that page here: http://www.theelixirhaus.com/projects/trellis/
