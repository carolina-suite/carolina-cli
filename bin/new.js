
var fs = require('fs-extra');
var path = require('path');

var Git = require('simple-git');

var templateList = require('./template-list');

module.exports = function(args) {

  if (templateList.indexOf(args.templateName) == -1) {
    console.log("Not a valid template name. Options are:");
    console.log(templateList);
    process.exit();
  }

  var git = Git(process.cwd());
  git.clone(`https://github.com/carolina-suite/${args.templateName}-start`,
    path.resolve(process.cwd(), args.projectName), function() {
      fs.removeSync(path.resolve(process.cwd(), args.projectName, '.git'))
    }
  );
}
