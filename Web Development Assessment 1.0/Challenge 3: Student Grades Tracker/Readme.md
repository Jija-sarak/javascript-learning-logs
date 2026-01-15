# Challenge 3: Student Grades Tracker
We want to create a program that manages student grades across multiple subjects. Each student will have a name and a list of subjects with their marks.

The data will be stored as an array of student objects, where each student has:

"name" (string)

"subjects" (array of objects, each containing "subject" and "marks").

We will perform operations using "forEach", "map", and "filter".

Your Task:

Create an array of at least 3 students, where each student object has:

name → a string with the student’s name.

subjects → an array of subject objects, each with:

subject (string)

marks (number).

Example structure:

const students = [
  {
    name: "Alice",
    subjects: [
      { subject: "Math", marks: 85 },
      { subject: "Science", marks: 90 },
      { subject: "History", marks: 78 }
    ]
  },
  ...
];
Write code to:

Find the average marks of each student and store it in a new array of objects:

[{ name: "Alice", average: 84.3 }, ...]
Filter students who scored above 80 in all subjects.

Use ".forEach()" to log each student’s name and all their subject marks in a neat format.