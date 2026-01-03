Challenge 1: Async Message Board
Problem Statement
You are building a simple message board that randomly displays a success or error message after a short delay when the user clicks a button.

Previously, this was done using Promises with .then() and .catch(). In this version, try to convert your previous Promise-based solution into one that uses async/await instead of rewriting it from scratch. This helps you directly see how async/await makes code cleaner and easier to read.

Your Task
Create a webpage that behaves as follows:

The page displays a button labeled Show Message.
A message area is shown below the button.
When the player clicks the button:
The button immediately disables, and the message area displays "Loading message...".
A Promise starts, which resolves or rejects after 2 seconds.
Whether it resolves or rejects is determined randomly using Math.random(). If Math.random() > 0.5, the Promise resolves; otherwise, it rejects.
If the Promise resolves, display "Message loaded successfully!" and set the text color to green.
If the Promise rejects, display "Something went wrong!" and set the text color to red.
The button re-enables after the Promise is resolved or rejected.
Use an async function and await to handle the Promise that returns the message.

Note: Write the HTML code in the HTML tab and the JavaScript code in the JavaScript tab.