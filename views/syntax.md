EJS syntax:
1. <% ‘Scriptlet’ tag, for control-flow, no output
2. <%\_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
3. <%= Outputs the value into the template (HTML escaped)
4. <%- Outputs the unescaped value into the template
5. <%# Comment tag, no execution, no output
6. <%% Outputs a literal ‘<%’
7. %> Plain ending tag
8. -%> Trim-mode (‘newline slurp’) tag, trims following newline
9. \_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

Create a partial out of the head, do not remove the title as that will change on each page
Create a folder called models
Create a file called Users.json inside the models folder
Create a get route called with a path of /users
Create an ejs file called users
Implement the head partial and the header partial
Create an organized list out of the info in users
Expected output for each one is: 'Peter is from Plymouth' if Peter is the name and Plymouth is the city
Here is the json to place inside:
[
  { "name": "Peter", "city": "Plymouth" },
  { "name": "Jeff", "city": "Old Mouth" },
  { "name": "Lana", "city": "Burnsville" },
  { "name": "Connie", "city": "Little Rock" },
  { "name": "Frank", "city": "Bronxville" },
  { "name": "Doug", "city": "Lancaster" },
  { "name": "Donna", "city": "Burlington" },
  { "name": "Carla", "city": "White Plains" }
]