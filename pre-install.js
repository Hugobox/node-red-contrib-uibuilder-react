var fs = require('fs')
var process = require('process')

class InstallReactAndNodered {
  constructor() {

  }
  // Getter
  installReact() {
	let err = "ok"

	var react = process.cwd()+'/uibuilder/react_ui/src/react_webix/'
	console.log('Installing ReactJS in cwd: ' + react);
	require('child_process').execSync('npm install '+ react, {cwd:react}, function(err,stdout,stderr){
		console.log('err: ' + err)
  		console.log('stdout: ' + stdout)
  		console.log('stderr: ' + stderr)
	    })
	require('child_process').execSync('npm run build', {cwd:react}, function(err,stdout,stderr){
		console.log('err: ' + err)
  		console.log('stdout: ' + stdout)
  		console.log('stderr: ' + stderr)
		    })

    return err
  }

  installNodeRed() {
  let err = "ok"
  console.log("Creating Symlink in cwd: " + process.cwd())

  fs.symlink(process.cwd() + '/uibuilder/react_ui/src/react_webix/build/', process.cwd() + '/uibuilder/react_ui/dist/', 'junction', function(err,stdout,stderr){
	  console.log('err: ' + err)
	  console.log('stdout: ' + stdout)
	  console.log('stderr: ' + stderr)
	})

	console.log('"Installing NodeRed" cwd: ' + process.cwd());
	var react = process.cwd()+ './'
	require('child_process').execSync('npm install ', {cwd:react}, function(err,stdout,stderr){
		console.log('err: ' + err)
		console.log('stdout: ' + stdout)
		console.log('stderr: ' + stderr)
	  })

	return err
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

const install = new InstallReactAndNodered();

install.execute()

console.log("Install Done")
