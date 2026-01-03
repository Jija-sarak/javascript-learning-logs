Challenge 2: Traffic Signal System (Async/Await Edition)
Problem Statement
You are building a simple traffic light simulation — the same one you created earlier using Promise chaining — but this time, you’ll rewrite it using async/await.

Your goal is to convert your previous Promise-based code into one that uses async functions and the await keyword for a cleaner, easier-to-read version.

Your Task
Create a webpage that behaves as follows:

The page displays one circle in the center of the screen, representing the traffic light.
A Start button appears below the light. The sequence begins only when the player clicks Start. The Start button should be disabled once clicked.
A timer is displayed below the light, showing how many seconds are left for the current color.
The color of the light changes in this order:
Green for 6 seconds
Yellow for 2 seconds
Red for 6 seconds
After all three lights finish, show the text “Cycle complete.” below the light. Also, re-enable the Start button.
Use async/await to control the timing of color changes. Do not use .then() chaining.
Each color change should be handled by an async function that uses await to pause before moving to the next light.

Note: Write the HTML code in the HTML tab and the JavaScript code in the JavaScript tab.



