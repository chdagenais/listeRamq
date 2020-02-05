#!/usr/bin/env node
const args = require('args')
const COL_FORMAT = require('./col_format').COL_FORMAT
const FORMAT_FORMAT = require('./col_format').FORMAT_FORMAT
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

const addDecimal =function(str,decimal){
    
    const output = str.substring(0,str.length-decimal)+"."+str.substring(str.length-decimal);
    return output
}


const parseFormats = function(str){
    let format = 1;
    let start = 0;
    let arr = []
    for(format, start;format<7;format++,start += 50){
        if(str.substr(start+1,5) !=="00000"){

            arr.push(str.substr(start,50).trim())
        }
    }
    arr.forEach((val,ind,arr)=>{
        const parsedLine = convertLine(FORMAT_FORMAT,val)
        parsedLine.quantite_format = parseInt(parsedLine.quantite_format)
        parsedLine.prix_format = parseFloat(addDecimal(parsedLine.prix_format,2))
        parsedLine.prix_unitaire = parseFloat(addDecimal(parsedLine.prix_unitaire,4))
        parsedLine.ppb_unitaire = parseFloat(addDecimal(parsedLine.ppb_unitaire,4))
        parsedLine.pmp_unitaire = parseFloat(addDecimal(parsedLine.pmp_unitaire,4))
        
        
        
        arr[ind] = parsedLine
    })

    return arr
}


// Read a flat file from the file system and return a JavaScript object
toJsonFromFile(COL_FORMAT, flags.i).then(convertedJson => {
//    console.log(convertedJson[10]);
    const tempArray = convertedJson
    tempArray.forEach((val)=>{
        val.groupe_formats = parseFormats(val.groupe_formats)
        val.pvg = parseFloat(addDecimal(val.pvg,2))
    })
    // tempObject.groupe_formats
    // console.log(tempArray[3972]);
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
