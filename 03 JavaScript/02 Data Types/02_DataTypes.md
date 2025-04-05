# Data Types in JS

- **Dynamically Typed Language**
  - Variables in JavaScript are not bound to a single type; the same variable can hold values of different types over time.
  - JavaScript determines the type of a value at runtime, making type flexibility one of its key characteristics.  

- **Two Main Categories**
  - **Primitive Data Types:** Represent the most basic, immutable values.
  - **Non-Primitive Data Types (Objects):** Hold collections of data and are mutable.

---

### Primitive Data Types

1. **Undefined**
   - **Definition:** A variable that has been declared but not assigned a value.
   - **Behavior:** When you use the `typeof` operator on an undefined variable, it returns `"undefined"`.
   - **Example:**  
     ```js
     let x;
     console.log(x); // Outputs: undefined
     ```
   - **Note:** It is the default value for uninitialized variables.  

2. **Null**
   - **Definition:** A special value that represents the intentional absence of any object value.
   - **Behavior:** Although it signifies “no value,” using `typeof null` returns `"object"` due to a historical quirk.
   - **Example:**  
     ```js
     let data = null;
     console.log(data); // Outputs: null
     ```
   - **Use Case:** Often used to explicitly indicate “no value” or “empty.”  

3. **Boolean**
   - **Definition:** Represents a logical entity that can have only one of two values: `true` or `false`.
   - **Usage:** Commonly used in conditional statements to control the flow of execution.
   - **Example:**  
     ```js
     let isActive = true;
     if (isActive) {
       console.log("Active!");
     }
     ```
   - **Key Point:** They are fundamental for decision making and comparisons.  

4. **Number**
   - **Definition:** Represents both integer and floating-point numbers.
   - **Representation:** Uses the IEEE 754 double-precision format.
   - **Special Values:**
     - `Infinity` and `-Infinity`: Results from divisions by zero or overflow.
     - `NaN`: Stands for “Not a Number” and results from undefined or erroneous mathematical operations.
   - **Example:**  
     ```js
     let count = 42;
     let price = 9.99;
     let error = "abc" / 3; // error becomes NaN
     ```
   - **Caution:** Floating-point precision can sometimes lead to unexpected results.  

5. **BigInt**
   - **Definition:** A newer primitive that allows representation of integers with arbitrary precision.
   - **Usage:** Ideal for situations where numbers exceed the safe integer limit (`Number.MAX_SAFE_INTEGER`).
   - **Syntax:** Append an `n` to the end of an integer literal.
   - **Example:**  
     ```js
     const hugeNumber = 1234567890123456789012345678901234567890n;
     ```
   - **Key Point:** Not interchangeable with the regular Number type in arithmetic operations without explicit conversion.  

6. **String**
   - **Definition:** A sequence of characters used to represent text.
   - **Immutability:** Once created, strings cannot be altered; any modification produces a new string.
   - **Syntax Variants:**
     - **Double Quotes:** `"Hello, world!"`
     - **Single Quotes:** `'Hello, world!'`
     - **Template Literals (Backticks):** `` `Hello, ${name}!` ``
   - **Example:**  
     ```js
     let greeting = "Hi";
     greeting += ", there!";
     console.log(greeting); // Outputs: Hi, there!
     ```
   - **Advantage:** Template literals allow embedding expressions directly within the string.  

7. **Symbol**
   - **Definition:** Introduced in ES6, symbols are unique and immutable primitive values.
   - **Purpose:** Typically used as unique identifiers for object properties, ensuring property keys do not collide.
   - **Example:**  
     ```js
     let sym1 = Symbol("id");
     let sym2 = Symbol("id");
     console.log(sym1 === sym2); // Outputs: false
     ```
   - **Key Feature:** Every symbol is unique, even if they share the same description.  

---

### Non-Primitive Data Types

8. **Object**
   - **Definition:** A complex data type that allows you to store collections of key-value pairs.
   - **Characteristics:**
     - **Mutable:** The content (properties and values) can be changed.
     - **Examples Include:** Plain objects, arrays, functions, dates, and more.
   - **Creation Examples:**  
     ```js
     // Object literal
     const person = {
       firstName: "John",
       lastName: "Doe",
       age: 30
     };

     // Array (which is also an object)
     const colors = ["red", "green", "blue"];

     // Function (a special type of object)
     function greet() {
       console.log("Hello!");
     }
     ```
   - **Key Point:** Objects are the only non-primitive type in JavaScript and are used to build more complex data structures.  

---