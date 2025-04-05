# Introduction to Flexbox
CSS Flexbox (Flexible Box) is a layout model designed to efficiently align and distribute items inside a container, even when their sizes vary. It simplifies complex layouts, making it a key tool for modern web design.

## 1. Basics of Flexbox
Flexbox consists of a **parent container** (flex container) and **child elements** (flex items). To enable Flexbox, set the `display` property to `flex` or `inline-flex`:

```css
.container {
    display: flex; /* Block-level flex container */
}
```

### 1.1 Flex Container Properties
1. **display**: Defines the flex container.
   ```css
   display: flex; /* Block-level flex container */
   display: inline-flex; /* Inline-level flex container */
   ```
2. **flex-direction**: Sets the main axis direction.
   ```css
   flex-direction: row; /* Default: left to right */
   flex-direction: row-reverse; /* Right to left */
   flex-direction: column; /* Top to bottom */
   flex-direction: column-reverse; /* Bottom to top */
   ```
3. **flex-wrap**: Controls item wrapping.
   ```css
   flex-wrap: nowrap; /* Default: No wrapping */
   flex-wrap: wrap; /* Wrap items to a new line */
   flex-wrap: wrap-reverse; /* Wrap items in reverse order */
   ```
4. **flex-flow**: Shorthand for `flex-direction` and `flex-wrap`.
   ```css
   flex-flow: row wrap; /* Row direction with wrapping */
   ```
5. **justify-content**: Aligns items along the main axis.
   ```css
   justify-content: flex-start; /* Default: Items at start */
   justify-content: flex-end; /* Items at end */
   justify-content: center; /* Items centered */
   justify-content: space-between; /* Space between items */
   justify-content: space-around; /* Space around items */
   justify-content: space-evenly; /* Equal space around items */
   ```
6. **align-items**: Aligns items along the cross axis.
   ```css
   align-items: flex-start; /* Items at start of cross axis */
   align-items: flex-end; /* Items at end of cross axis */
   align-items: center; /* Items centered on cross axis */
   align-items: stretch; /* Default: Items stretch to fill container */
   align-items: baseline; /* Align items by their text baseline */
   ```
7. **align-content**: Aligns flex lines when there is extra space.
   ```css
   align-content: flex-start; /* Align lines to start */
   align-content: flex-end; /* Align lines to end */
   align-content: center; /* Align lines to center */
   align-content: space-between; /* Evenly distribute lines */
   align-content: space-around; /* Space around lines */
   align-content: space-evenly; /* Equal space around lines */
   ```

## 2. Flex Item Properties
These properties control individual flex items.

1. **order**: Specifies the order of items.
   ```css
   order: 1; /* Default is 0, higher values push items later */
   ```
2. **flex-grow**: Determines how much an item should grow.
   ```css
   flex-grow: 1; /* Items take available space equally */
   ```
3. **flex-shrink**: Controls how much an item should shrink.
   ```css
   flex-shrink: 1; /* Default: Items shrink equally */
   ```
4. **flex-basis**: Sets the initial size before growing/shrinking.
   ```css
   flex-basis: 200px; /* Starts at 200px before adjusting */
   ```
5. **flex**: Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
   ```css
   flex: 1 1 auto; /* Default behavior */
   flex: 2 1 150px; /* Grow 2x, shrink normally, start at 150px */
   ```
6. **align-self**: Overrides `align-items` for individual items.
   ```css
   align-self: flex-start; /* Aligns item to start */
   align-self: flex-end; /* Aligns item to end */
   align-self: center; /* Aligns item to center */
   align-self: stretch; /* Stretches item to fill */
   align-self: baseline; /* Aligns item by text baseline */
   ```

## 3. Advanced Techniques & Use Cases
### 3.1 Responsive Layouts with Flexbox
Flexbox is widely used for responsive design. Example:

```css
.container {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap */
    justify-content: space-between; /* Space between items */
}
.item {
    flex: 1 1 300px; /* Flexible with a minimum width of 300px */
}
```

### 3.2 Flexbox Grid System
A simple grid system using Flexbox:

```css
.row {
    display: flex; /* Use flexbox for row */
    flex-wrap: wrap; /* Allow wrapping */
}
.col {
    flex: 1; /* Equal column width */
    padding: 10px;
}
.col-2 {
    flex: 2; /* Double the width of .col */
}
```

### 3.3 Centering Elements with Flexbox
Centering elements both vertically and horizontally:

```css
.center {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100vh; /* Full viewport height */
}
```

## 4. Common Pitfalls and Fixes
1. **Items not aligning correctly?**
   - Check if `flex-wrap` is needed.
   - Ensure `align-items` or `align-self` is set correctly.
2. **Elements not growing/shrinking as expected?**
   - Adjust `flex-grow`, `flex-shrink`, or `flex-basis`.
3. **Spacing issues?**
   - Use `justify-content` or `align-content`.

## 5. Documentation
For further learning, refer to:
- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
