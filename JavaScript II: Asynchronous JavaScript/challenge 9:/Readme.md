Challenge 3: File Upload Simulator
Problem Statement
You are building a simple simulation of a file upload process. The page will show the upload steps — Uploading file → Processing file → Saving result — one by one, each with a delay. Sometimes, one of these steps may fail, just like a real upload might.

Your Task
Create a webpage that behaves as follows:

The page displays a button labeled Start Upload and a message area below it.
When the user clicks the button:
The button is disabled to prevent multiple uploads.
The message area updates to show progress in the following order:
“Uploading file…” (takes 3 seconds)
“Processing file…” (takes 2 seconds)
“Saving result…” (takes 2 seconds)
Each step appears only after the previous one finishes.
Each step has a small random chance (say, 30%) to fail. Use Math.random() — if Math.random() < 0.3, the step fails; otherwise, it succeeds.
If all steps are completed successfully, show "Upload successful!" and set the text color to green.
If any step fails, immediately show "Upload failed! Please try again." and set the text color to red.
The button should re-enable once the process (success or failure) finishes.
Use async/await and try...catch to manage all asynchronous behavior — do not use .then() or .catch().

Note: Write the HTML code in the HTML tab and the JavaScript code in the JavaScript tab.