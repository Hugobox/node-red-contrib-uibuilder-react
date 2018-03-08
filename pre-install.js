var fs = require('fs')
var process = require('process')

class InstallReactAndNodered {
  constructor(uibuilderNodeName) {
      this.uibuilderRelativePath = "/uibuilder/" + uibuilderNodeName + "/src/react_webix/"
      this.uibuilderDistRelativePath = '/uibuilder/' + uibuilderNodeName + '/dist/'
  }
  // Getter
  installReact() {
	let stdout = "ok"

	var react = process.cwd() + this.uibuilderRelativePath
	console.log('Installing ReactJS in cwd: ' + react);
	stdout = require('child_process').execSync('npm install '+ react, {cwd:react})
    if(stdout.status){
        console.log(stdout)
        process.exit()
    }
	stdout = require('child_process').execSync('npm run build', {cwd:react})
    if(stdout.status){
        console.log(stdout)
        process.exit()
    }

    return stdout
  }

  installNodeRed() {
  let err = "ok"
  console.log("Creating Symlink in cwd: " + process.cwd())

  fs.symlink(process.cwd() + this.uibuilderRelativePath + 'build/', process.cwd() + this.uibuilderDistRelativePath, 'junction', function(err,stdout,stderr){
	  console.log('err: ' + err)
	  console.log('stdout: ' + stdout)
	  console.log('stderr: ' + stderr)
	})

	console.log('"Installing NodeRed" cwd: ' + process.cwd());
	var react = process.cwd()+ './'
	stdout = require('child_process').execSync('npm install ', {cwd:react})
    if(stdout.status){
        console.log(stdout)
        process.exit()
    }

	return stdout
  }

  execute() {
	  this.installReact()
	  this.installNodeRed()
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const react_ui = new InstallReactAndNodered("react_ui");
react_ui.execute()
// const snw = new InstallReactAndNodered("snw");
// snw.execute()

console.log("Install Done")
