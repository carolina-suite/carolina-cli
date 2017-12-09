
var fs = require('fs-extra');
var path = require('path');

var Git = require('simple-git');

var templates = require('./template-list');

module.exports = function(args) {

  if (!templates.obj.hasOwnProperty(args.templateName)) {
    console.log("Not a valid template name. Options are:");
    console.log(templates.list);
    process.exit();
  }

  var git = Git(process.cwd());
  git.clone(`https://github.com/carolina-suite/${templates.obj[args.templateName]}`,
    path.resolve(process.cwd(), args.projectName), function() {
      fs.removeSync(path.resolve(process.cwd(), args.projectName, '.git'))
    }
  );
}
