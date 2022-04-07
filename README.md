**Basic level:**

Write a piece of the code in plain JavaScript that would:
a) Receive an Array of Objects with fields id, name, code as it's input
b) Filter input objects by all of following conditions (logical AND):
- id field is not null, empty or undefined
- code strictly equal to string "025"
- name contains text "test"
  c) Invoke a function, passing filtered array of objects to it, and print this array into console inside it.
  d) Return filtered array of objects from the solution.

---> **see basic.js**

*to start the script:*
```
node  basic.js 
```
------------


**Regular level:**

Write a NodeJS-based solution in JavaScript, using Express framework and ES6 language features.
The solution, upon request to its REST interface, should:
- asynchronously read data from a table in database into array of objects with fields id, code, name
- filter acquired data with all of the following rules: id field is not null, empty or undefined, AND code strictly equal to string "025", AND name contains text "test"
  Then solution should take the filtered array of objects and send it asynchronously to a SOAP web service (compose a request, underlying HTTP call can be mocked)
  After that solution should respond with data received from web-service.
  Solution interface should conform to REST standard.
  Optional:
  write a Docker file to run solution in Docker environment

---> **see index.js**

*to start the script:*
```
node index.js
```
*to check the script:* send a POST request to "/data" in any way possible way
*******

Run docker-compose:
```
docker-compose build --no-cache test-server
docker-compose down -v
docker-compose up -d
```

Run Dockerfile:
```
docker build . -t anastasia/test-server
docker run -p 3000:3000 anastasia/test-server
```
In case of doubt, the candidate can make any assumptions in line with this task description. 