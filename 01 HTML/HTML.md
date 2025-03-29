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
