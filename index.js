#!/usr/bin/env node
const args = require('args')
const COL_FORMAT = require('./col_format').COL_FORMAT
//const toJsonFromFile = require("positional-flat-file-to-json").toJsonFromFile
const fs = require('fs')
const readline=require('readline')

args
  .options([
    {
      name:"input",
      init: content => content,
  },
  {
    name:'output',
    init: content=>content
}
 ])
//   .command('serve', 'Serve your static site', ['s'])

const flags = args.parse(process.argv)




const toJsonFromFile = function(sourceFileConfig, sourceFilepath) {
	return new Promise(function (resolve) {
		var convertedData = [];
		var rd = readline.createInterface({ input: fs.createReadStream(sourceFilepath,{encoding:'latin1'}) });

		rd.on('line', function (line) {
            //console.log(line);
            
			var convertedLine = convertLine(sourceFileConfig, line);
			convertedData.push(convertedLine);
			
		});

		rd.on('close', function () {
		    resolve(convertedData);
		});
	});
};


// Read a flat file from the file system and return a JavaScript object
toJsonFromFile(COL_FORMAT, flags.i).then(convertedJson => {
//    console.log(convertedJson[10]); // St. Louis
    writeToFile(convertedJson,flags.o)
});


convertLine = function(sourceFileConfig, line) {
	var convertedLine = {};

	for (var col in sourceFileConfig) {
		if (Object.prototype.hasOwnProperty.call(sourceFileConfig, col)) {
			convertedLine[col] = line.substr(sourceFileConfig[col].columnPosition - 1, sourceFileConfig[col].size).trim();
		}
	}

	return convertedLine;
}

writeToFile = function(jsObj,path){
    jsString = JSON.stringify(jsObj)
    fs.writeFile(path,jsString,'utf8',function(err){
        if(err){
            console.log("erreur a l;<ecriture du fichier");
            return console.log(err);
        }
        console.log("reussi!");
    })
}
