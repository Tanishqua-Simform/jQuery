# jQuery

Hello Dear Reader, I see that you have been intrigued by my jQuery repository. Feel free to move around and learn as you go!

##### Dt. 30 Jan, 2025.

This won't be as detailed as other repositories, but I will try to touch as many topics as I can!

## What is jQuery?

jQuery is a fast, small, and feature-rich JavaScript library. It simplifies things like HTML document traversal and manipulation, event handling, and animation using an easy-to-use API that works across a multitude of browsers. It enables developers to write less code and achieve more functionality compared to plain JavaScript.

Motto - _Write less, do more!_

## Installing jQuery

There are two main ways to include jQuery in a project -

#### Using a CDN (Recommended)

The simplest way is to include jQuery via a Content Delivery Network (CDN) -

```html
<script src="https -//code.jquery.com/jquery-3.6.4.min.js"></script>
```

This method ensures that the latest stable version is always used, and it benefits from browser caching.

A CDN (Content Delivery Network) - hosts jQuery files on multiple servers worldwide, allowing faster loading times by serving the file from the nearest server.

Browser Caching stores previously loaded resources locally, so if a user visits multiple sites using the same CDN version of jQuery, the browser loads it from cache instead of downloading again, improving performance.

#### Downloading and Using a Local Copy

1. Download jQuery from the official website - [https -//jquery.com/download/](https -//jquery.com/download/)
2. Include it in your project -

```html
<script src="path/to/jquery.min.js"></script>
```

## jQuery Syntax

The basic jQuery syntax follows this pattern -

```js
$(selector).action();
```

- `$` - Denotes jQuery.
- `selector` - Targets HTML elements.
- `action()` - Applies jQuery methods on the selected elements.

Example -

```js
$("p").hide(); // Hides all <p> elements
```

## Using $(document).ready() vs DOMContentLoaded

It is a best practice to ensure the DOM is fully loaded before executing jQuery code. This is done using `$(document).ready()` -

```js
$(document).ready(function () {
  console.log("DOM is fully loaded");
});
```

It handles cross-browser inconsistencies. Alternatively, JavaScript has the `DOMContentLoaded` event. DOMContentLoaded (Vanilla JS) fires when the DOM is fully parsed, but before images and stylesheets load.

```js
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is fully loaded");
});
```

Both achieve the same result, but `$(document).ready()` is preferred in jQuery projects as it handles cross-browser compatibility issues.

## Selectors

jQuery provides powerful selectors to find and manipulate elements -

- ID Selector - `$("#id")`
- Class Selector - `$(".class")`
- Element Selector - `$("div")`
- Attribute Selector - `$("input[type='text']")`
- Child Selector - `$("div > p")`

Example -

```js
$("#btn").click(function () {
  $(".content").toggle();
});
```

## Effects

jQuery simplifies animations and effects -

- Hide/Show - `hide()`, `show()`
- Toggle - `toggle()`
- Fade - `fadeIn()`, `fadeOut()`, `fadeToggle()`
- Slide - `slideDown()`, `slideUp()`, `slideToggle()`
- Animate - `animate()`

Example -

```js
$("#btn").click(function () {
  $("#box").fadeToggle();
});
```

## Events

Common jQuery events include -

- Click Event - `click()`
- Hover Event - `hover()`
- Keyboard Events - `keydown()`, `keyup()`
- Form Events - `focus()`, `blur()`

Example -

```js
$("#input").focus(function () {
  $(this).css("background-color", "yellow");
});
```

Quick reference for all jQuery [Events](https://www.w3schools.com/jquery/jquery_ref_events.asp)

## Example of a Cross-Browser Issue in JavaScript (Not in jQuery)

A common cross-browser issue is handling `addEventListener` in older versions of Internet Explorer -

```js
// JavaScript way (IE8 issue)
var btn = document.getElementById("btn");
if (btn.addEventListener) {
  btn.addEventListener("click", function () {
    alert("Clicked!");
  });
} else {
  btn.attachEvent("onclick", function () {
    alert("Clicked!");
  });
}
```

In jQuery, this is handled seamlessly -

```js
$("#btn").click(function () {
  alert("Clicked!");
});
```

## What is AJAX?

AJAX (Asynchronous JavaScript and XML) allows web pages to be updated asynchronously without reloading the page. jQuery provides methods for AJAX calls such as -

- `$.get()` - Fetch data from a server.
- `$.post()` - Send data to a server.
- `$.ajax()` - Full control over an AJAX request.

Example -

```js
$.get("data.txt", function (response) {
  $("#content").html(response);
});
```

This enables smooth, dynamic updates in web applications.

Okay so that is it for today! Will come back here tomorrow with more advance topics like DOM Manipulation and do one interesting task on Pagination.

##### Dt. 31 Jan, 2025.

I forgot to add reference for video tutorial yesterday. [Simplilearn](https://www.youtube.com/watch?v=QhQ4m5g2fhA)

## DOM Manipulation

- Get and Set Content and Attributes

  - text() - Gets or sets the text content of elements.
  - html() - Gets or sets the HTML content.
  - val() - Gets or sets the value of form elements.
  - attr() - Gets or sets attributes of elements.

- Add New HTML Content

  - append() - Inserts content at the end of selected elements.
  - prepend() - Inserts content at the beginning of selected elements.
  - after() - Inserts content after the selected elements.
  - before() - Inserts content before the selected elements.

- Remove Elements/Content

  - remove() - Removes the selected element and its children.
  - empty() - Removes child elements from the selected element.

- jQuery Manipulating CSS

  - addClass() - Adds one or more classes to elements.
  - removeClass() - Removes one or more classes from elements.
  - toggleClass() - Toggles between adding/removing classes.
  - css() - Sets or returns CSS styles.

- jQuery Dimension Methods

  - width() - Gets or sets the width.
  - height() - Gets or sets the height.
  - innerWidth() - Includes padding but not border.
  - innerHeight() - Includes padding but not border.
  - outerWidth() - Includes padding and border.
  - outerHeight() - Includes padding and border.

## Traversing the DOM

- Traversing **Up** the DOM Tree

  - parent() - Gets the direct parent.
  - parents() - Gets all ancestors.
  - parentsUntil() - Gets all ancestors up to a specified element.

- Traversing **Down** the DOM Tree

  - children() - Gets direct children.
  - find() - Gets descendants matching a selector.

- Traversing **Sideways** in the DOM Tree

  - siblings() - Gets all siblings.
  - next() - Gets the next sibling.
  - nextAll() - Gets all next siblings.
  - nextUntil() - Gets all next siblings up to a specified element.
  - prev() - Gets the previous sibling.
  - prevAll() - Gets all previous siblings.
  - prevUntil() - Gets all previous siblings up to a specified element.

- jQuery **Filtering** Methods

  - first() - Selects the first element.
  - last() - Selects the last element.
  - eq() - Selects an element by index.
  - filter() - Selects elements matching a criteria.
  - not() - Selects elements not matching a criteria.

## jQuery - AJAX Introduction

AJAX allows data exchange with a server and updates parts of a web page without reloading the entire page.

_Note - Writing AJAX code in JS can be a bit tricky, because different browsers have different syntax for AJAX implementation. So we need to write extra code to test for different browsers. However, in jQuery we can write AJAX functionality with only one single line of code._

- jQuery `load()` Method

  - responseTxt - Contains the response content.
  - statusTxt - Contains the request status.
  - xhr - Contains the XMLHttpRequest object.

- jQuery `get()` and `post()` Methods

  - $.get(URL, callback) - Performs a GET request.
  - $.post(URL, data, callback) - Performs a POST request.
  - The callback function parameters:
    - First parameter: response content.
    - Second parameter: request status.

- noConflict()

  - Prevents conflicts between jQuery and other libraries using `$` as a shorthand.

- jQuery Filters

  - jQuery provides filtering methods to refine selections and traverse the DOM efficiently.

### Pagination Task (Not part of LMS)

Alright! so I performed pagination task for implementing the concepts of jQuery and AJAX. You can refer the code from [pagination.js](/pagination.js)

[dynamicTable.js](/dynamicTable.js) does the fetching of data and forming dynamic table. Rows and columns can be variable for different API call.

Preview of task done in [dynamicTable.js](/images/DynamicTablePreview.png) and [pagination.js](/images/PaginationPreview.png)

##### With this we come to an end for our jQuery Course (Learning duration - 2 days).
