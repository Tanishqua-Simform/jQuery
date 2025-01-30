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
