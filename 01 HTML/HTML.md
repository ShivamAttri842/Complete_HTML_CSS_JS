# HTML Guide: Beginner to Advanced

## Introduction to HTML
HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It consists of a series of elements, represented by tags, that define the structure of a webpage.

---
## 1. Basics of HTML
### 1.1 Basic Structure of an HTML Document
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A beginner to advanced guide to HTML.">
    <meta name="keywords" content="HTML, Web Development, Beginner Guide, Advanced HTML">
    <meta name="author" content="Shivam Attri">
    <title>Document Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>
```
### Explanation:
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: Root element of the document.
- `<head>`: Contains metadata such as:
  - `<meta charset="UTF-8">`: Defines character encoding.
  - `<meta name="viewport">`: Ensures responsive design.
  - `<meta name="description">`: Provides a brief page description for SEO.
  - `<meta name="keywords">`: Lists relevant keywords (optional in modern SEO).
  - `<meta name="author">`: Specifies the author.
  - `<title>`: Sets the title displayed on the browser tab.
- `<body>`: Contains all visible content of the webpage.

### 1.2 Common Tags
#### Headings:
```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
```
#### Paragraphs:
```html
<p>This is a paragraph.</p>
```
#### Links:
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```
#### Images:
```html
<img src="image.jpg" alt="Description">
```
#### Lists:
- **Ordered List:**
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
```
- **Unordered List:**
```html
<ul>
    <li>Item A</li>
    <li>Item B</li>
</ul>
```

### 1.3 Attributes
Attributes provide additional information about an element.
```html
<a href="https://example.com" target="_blank">Visit Example</a>
```
- `href`: Specifies the hyperlink destination.
- `target`: Defines where to open the link (`_blank` opens in a new tab).

---
## 2. Intermediate HTML
### 2.1 Forms and Inputs
Forms collect user input.
```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Submit</button>
</form>
```
- `action`: Defines the destination for form submission.
- `method`: Specifies the HTTP method (`GET` or `POST`).
- Common input types: `text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`, `file`.

### 2.2 Tables
```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>30</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```
- `<thead>`: Defines the table header.
- `<tbody>`: Contains the table body.
- `<th>`: Table header cells.
- `<td>`: Table data cells.

### 2.3 Semantic Elements
Semantic tags provide meaningful structure to the webpage.
```html
<header>
    <h1>Website Title</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
```
Common semantic tags: `<header>`, `<footer>`, `<article>`, `<section>`, `<aside>`, `<main>`, `<nav>`.

---
## 3. Advanced HTML
### 3.1 Multimedia
#### Images:
```html
<img src="image.jpg" alt="Description" width="300" height="200">
```
#### Videos:
```html
<video controls width="500">
    <source src="video.mp4" type="video/mp4">
</video>
```
#### Audio:
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### 3.2 iframes
```html
<iframe src="https://example.com" width="600" height="400" frameborder="0"></iframe>
```
Used to embed external content such as maps or videos.

### 3.3 Data Attributes
Custom data storage within elements.
```html
<div data-id="123" data-type="user">User Info</div>
```
Access with JavaScript:
```js
const div = document.querySelector('div');
console.log(div.dataset.id); // Output: 123
```

### 3.4 Accessibility (ARIA)
Improves accessibility for users with disabilities.
```html
<button aria-label="Close">X</button>
```
- `alt` attribute for images.
- ARIA roles and labels enhance screen reader support.

### 3.5 Forms Validation
Built-in HTML5 validation.
```html
<form>
    <input type="email" required>
    <input type="password" minlength="6" required>
    <button type="submit">Submit</button>
</form>
```

---
## Best Practices
1. **Use Semantic HTML**: Enhances readability and SEO.
2. **Keep Code Clean and Indented**: Improves maintainability.
3. **Add Comments**: Use `<!-- Comment -->` for clarity.
4. **Use External Stylesheets and Scripts**: Avoid inline CSS and JavaScript.
5. **Optimize for Accessibility**: Follow WCAG guidelines.
6. **Test Responsiveness**: Use DevTools to check mobile compatibility.

---
## Documentation
### Official HTML Documentation:
- [MDN Web Docs (HTML)](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)
- [HTML Living Standard](https://html.spec.whatwg.org/)