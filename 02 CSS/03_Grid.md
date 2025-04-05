# **CSS Grid - Complete Guide**  

CSS Grid is a powerful two-dimensional layout system that allows developers to design flexible and responsive layouts efficiently. Unlike Flexbox, which is one-dimensional (row or column), Grid handles both rows and columns.

---

## **1. Basics of CSS Grid**  
To enable Grid on a container:  
```css
.container {
    display: grid;  /* Defines a grid container */
}
```

### **1.1 Defining Grid Columns & Rows**  

1. **grid-template-columns & grid-template-rows**  
   - Specifies the number and size of columns/rows.  
   ```css
   .container {
       display: grid;
       grid-template-columns: 100px 200px auto; /* Three columns */
       grid-template-rows: 100px auto; /* Two rows */
   }
   ```

2. **repeat() Function**  
   - Simplifies repetitive column/row definitions.  
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(3, 1fr); /* Three equal columns */
   }
   ```

3. **fr Unit (Fractional Unit)**  
   - Distributes space dynamically.  
   ```css
   .container {
       display: grid;
       grid-template-columns: 2fr 1fr; /* First column takes twice the space */
   }
   ```

4. **Auto-fit & Auto-fill**  
   - Adjusts column layout based on available space.  
   ```css
   .container {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   }
   ```

---

## **1.2 Placing Items on the Grid**  

1. **grid-column & grid-row**  
   - Defines where an item should be placed.  
   ```css
   .item {
       grid-column: 1 / 3; /* Spans from column 1 to 3 */
       grid-row: 2; /* Starts at row 2 */
   }
   ```

2. **grid-area (Shorthand Property)**  
   - Defines row start, column start, row end, and column end in a single declaration.  
   ```css
   .item {
       grid-area: 1 / 1 / 3 / 3; /* Spans multiple rows and columns */
   }
   ```

---

## **2. Advanced Grid Features**  

### **2.1 Grid Gaps (Spacing)**  

1. **gap (General Spacing)**  
   ```css
   .container {
       display: grid;
       gap: 10px; /* Space between rows & columns */
   }
   ```

2. **row-gap & column-gap (Specific Gaps)**  
   ```css
   .container {
       display: grid;
       row-gap: 20px;
       column-gap: 10px;
   }
   ```

### **2.2 Aligning Grid Items**  

1. **align-items (Vertical Alignment)**  
   ```css
   .container {
       align-items: center; /* Centers items vertically */
   }
   ```

2. **justify-items (Horizontal Alignment)**  
   ```css
   .container {
       justify-items: center; /* Centers items horizontally */
   }
   ```

3. **place-items (Shorthand for Aligning Both Directions)**  
   ```css
   .container {
       place-items: center; /* Centers items horizontally & vertically */
   }
   ```

### **2.3 Aligning the Entire Grid**  

1. **align-content (Moves Entire Grid Vertically)**  
   ```css
   .container {
       align-content: center;
   }
   ```

2. **justify-content (Moves Entire Grid Horizontally)**  
   ```css
   .container {
       justify-content: space-between;
   } 
   ```

---

## **3. Creating Responsive Layouts with Grid**  
Example of a responsive grid layout:  
```css
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
}
```

---

## **4. Grid Template Areas (Named Layouts)**  

You can assign names to different sections of the grid, making layouts more readable.  

```css
.container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
}

.header {
    grid-area: header;
}
.sidebar {
    grid-area: sidebar;
}
.content {
    grid-area: content;
}
.footer {
    grid-area: footer;
}
```

---

## **5. Common Pitfalls & Fixes**  

1. **Items not aligning properly?**  
   - Check `align-items`, `justify-items`, and `place-items`.

2. **Uneven spacing?**  
   - Use `gap`, `row-gap`, and `column-gap` for uniform spacing.

3. **Grid overflowing container?**  
   - Use `minmax()` and `auto-fit` for flexibility.

---

## **6. Documentation & Further Reading**  

For more in-depth details and examples, refer to the official documentation:  

- 📄 **MDN Web Docs (Mozilla)**: [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)  
- 📄 **CSS-Tricks Guide**: [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)   
- 📄 **Google Developers**: [Learn CSS Grid](https://web.dev/learn/css/grid/)  

---