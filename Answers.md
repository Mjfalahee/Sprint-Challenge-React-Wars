# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a Javascript library that makes it much simpler to creative interactive UI. It acts on the DOM for us, making it much simpler to create and use reusable components throughout a website.


1.  What does it mean to _think_ in react?

It means the process of thinking of a webpage through in the process of creating it in React. 
 Start with a Mock up -> Break the UI into a component hierarchy -> build a static version in react -> Indentify the Minimal represenation of UI state -> Identify where your state should live -> Add inverse Data flow -> Done

 Basically breaking down a webpage or idea into components that are built with react, and thinking about how your data needs to flow in order to create a simple and functional UI. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component builds out elements using the DOM in a very straight forward way. It utilizes JSX to create elements on a page, based on whether or not it has received any input from above, or not.
A class/stateful component allows us to utilize the state. We can use the state to create dynamic responsive elements that change and interact with functional components to create varying elements on a page that adapt to the data. 

1.  Describe state.

The state is where you can store your data using react. It allows us to keep track of what we are doing, and manipulate our lower-in-the-hierarchy components depending on where we are in the state. It's neat because it allows us to build responsive components easily.

1.  Describe props.

Props are like parameters for a function. Passed into a component and then used within the function of the component, typically to show data within an element or to pass a handler function down from a parent component to a child. They are very useful.