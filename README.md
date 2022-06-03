# itpm-lecture

![Node.js CI](https://github.com/felixpeters/itpm-lecture/workflows/Node.js%20CI/badge.svg)

Code for practical ITPM lectures offered by Software &amp; Digital Business Group at Technical University of Darmstadt

## Setup

Complete the following steps in order to run the code:
- Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for version control
- Install [Node.js](https://nodejs.org/en/download/) for running JavaScript code
- Install [VS Code](https://code.visualstudio.com/Download) as your IDE
- Clone this repository using one of the two options below:
  - Use the "Clone repository" option inside VS Code
  - Open a new terminal and run `git clone https://github.com/felixpeters/itpm-lecture.git`
- Inside the repository, run `npm install` to install all dependencies

Congrats, you can now run the code examples inside VS Code!

## Example 1: Hello world!

In your terminal inside VS Code, run `node hello.js`. You should see the following output: `Server running at http://127.0.0.1:3000/`.
Now, navigate to this URL inside your preferred web browser. `Hello World` should be printed on your screen.

## Example 2: Grade calculator

In your terminal inside VS Code, run `npm start`. You should see the following output: `Grade calculator app listening at http://localhost:3000/`.
Now, navigate to this URL inside your preferred web browser and test the grade calculator.
Run unit tests for the grade calculator running the command `npm test`.
