
# Carolina #

Carolina is the working name of my set of project templates I want to
work on.

This is the CLI that simply fetches templates from this GitHub organization.

## Installation #

`npm i -g carolina-suite/carolina`

## Usage #

Create a new project from a template:

`carolina new {templateName} {projectName}`

This will create a new project from a given template in a new directory with
the title of the given `projectName` argument.

Possible templates:

* [`node-server`](https://github.com/carolina-suite/node-server-start): NodeJs project for MongoDb, Mongoose ODM, Fastify web server, and ReactJs.
* [`static-site`](https://github.com/carolina-suite/static-site-start): NodeJs static site generator with themes in Pug.
