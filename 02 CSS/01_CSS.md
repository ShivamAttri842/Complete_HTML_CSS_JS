# CSS (Cascading Style Sheets) Complete Notes

## 1. Introduction to CSS
CSS (Cascading Style Sheets) is used to style HTML documents. It controls the layout, colors, fonts, and spacing of web elements.

### Types of CSS
1. **Inline CSS** - Applied directly to an HTML element using the `style` attribute.
   ```html
   <p style="color: red;">This is a red paragraph.</p>
   ```
2. **Internal CSS** - Defined inside a `<style>` tag within the HTML `<head>`.
   ```html
   <style>
       p { color: blue; }
   </style>
   ```
3. **External CSS** - Stored in a separate `.css` file and linked to the HTML file.
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

## 2. CSS Selectors
Selectors are used to target HTML elements.

### Basic Selectors
- **Universal Selector (`*`)** - Selects all elements.
  ```css
  * { margin: 0; padding: 0; }
  ```
- **Element Selector** - Selects elements by tag name.
  ```css
  p { color: green; }
  ```
- **Class Selector (`.`)** - Selects elements with a specific class.
  ```css
  .myClass { font-size: 20px; }
  ```
- **ID Selector (`#`)** - Selects an element with a specific ID.
  ```css
  #myId { background-color: yellow; }
  ```

### Advanced Selectors
- **Group Selector (`A, B, C`)**
  ```css
  h1, h2, p { font-family: Arial; }
  ```
- **Descendant Selector (`A B`)**
  ```css
  div p { color: blue; }
  ```
- **Child Selector (`A > B`)**
  ```css
  div > p { font-weight: bold; }
  ```
- **Adjacent Sibling (`A + B`)**
  ```css
  h1 + p { color: red; }
  ```
- **General Sibling (`A ~ B`)**
  ```css
  h1 ~ p { font-style: italic; }
  ```

## 3. CSS Properties

### 3.1. Text & Font Properties
- `color` - Sets text color.
  ```css
  p { color: blue; }
  ```
- `font-size` - Defines font size.
  ```css
  p { font-size: 16px; }
  ```
- `font-family` - Specifies font type.
  ```css
  p { font-family: Arial, sans-serif; }
  ```
- `font-weight` - Controls text boldness.
  ```css
  p { font-weight: bold; }
  ```
- `text-align` - Aligns text.
  ```css
  p { text-align: center; }
  ```

### 3.2. Background Properties
- `background-color` - Sets background color.
  ```css
  body { background-color: lightblue; }
  ```
- `background-image` - Adds background image.
  ```css
  body { background-image: url('image.jpg'); }
  ```

### 3.3. Border & Outline Properties
- `border` - Defines border width, style, and color.
  ```css
  p { border: 2px solid black; }
  ```
- `border-radius` - Rounds element corners.
  ```css
  p { border-radius: 10px; }
  ```

### 3.4. Box Model Properties
- `margin` - Sets space outside an element.
  ```css
  div { margin: 10px; }
  ```
- `padding` - Sets space inside an element.
  ```css
  div { padding: 10px; }
  ```
- `width` - Defines element width.
  ```css
  div { width: 300px; }
  ```

### 3.5. Display & Positioning
- `display` - Defines element behavior (block, inline, etc.).
  ```css
  span { display: block; }
  ```
- `position` - Positions an element.
  ```css
  div { position: relative; top: 10px; left: 20px; }
  ```

### 3.6. Pseudo-Classes & Pseudo-Elements
- `:hover` - Styles element on hover.
  ```css
  a:hover { color: red; }
  ```
- `:focus` - Styles element when focused.
  ```css
  input:focus { border: 2px solid blue; }
  ```

### 3.7. Transitions & Animations
- `transition` - Defines smooth transitions.
  ```css
  button { transition: background-color 0.3s ease-in-out; }
  ```
- `animation` - Applies animations.
  ```css
  @keyframes example {
    from { background-color: red; }
    to { background-color: yellow; }
  }
  div { animation: example 2s infinite; }
  ```

### 3.8. Media Queries (Responsive Design)
```css
@media (max-width: 600px) {
    body { background-color: lightgray; }
}
```

## 4. Documentation References
- [W3Schools CSS Reference](https://www.w3schools.com/css/)
- [MDN Web Docs CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)