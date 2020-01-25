#!/usr/bin/env node
const args = require('args')
// import COL_FORMAT from './col_format.js';
const toJsonFromFile = require("positional-flat-file-to-json").toJsonFromFile
const fs = require('fs')

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

const COL_FORMAT = {
  code_facturation: {
      columnPosition: 1,
      size: 8
  },
  date_debut_effectivite: {
      columnPosition: 9,
      size: 6
  },
  date_fin_effectivite: {
      columnPosition: 15,
      size: 6
  },
  date_mise_en_production: {
      columnPosition: 21,
      size: 6
  },
  indicateur_changement: {
      columnPosition: 27,
      size: 1
  },
  ancien_code_din: {
      columnPosition: 28,
      size: 8
  },
  classe_ahf_1: {
      columnPosition: 36,
      size: 6
  },
  classe_ahf_2: {
      columnPosition: 42,
      size: 6
  },
  code_denomination_commune:{
    columnPosition:48,
    size:5
  },
  code_forme: {
    columnPosition: 53,
    size: 5
},
code_teneur: {
    columnPosition: 58,
    size: 5
},
denomination_commune: {
    columnPosition: 63,
    size: 150
},
forme: {
    columnPosition: 213,
    size: 18
},
teneur: {
    columnPosition: 231,
    size: 36
},
marque_de_commerce: {
    columnPosition: 267,
    size: 24
},
fabriquant: {
    columnPosition: 291,
    size: 10
},
categorie_medicament: {
    columnPosition: 301,
    size: 3
},
nature_medicament: {
    columnPosition: 304,
    size: 3
},
indicateur_produit_unique: {
    columnPosition: 307,
    size:1
},
categorie_beneficiaire: {
    columnPosition: 308,
    size: 3
},
code_sexe: {
    columnPosition: 311,
    size: 1
},
code_programme: {
    columnPosition: 312,
    size: 40
},
pvg: {
    columnPosition: 352,
    size: 4
},
element_remplissage: {
    columnPosition: 356,
    size: 11
},
unite_des_formats: {
    columnPosition: 367,
    size: 2
},
};

// Read a flat file from the file system and return a JavaScript object
toJsonFromFile(COL_FORMAT, flags.i).then(convertedJson => {
    console.log(convertedJson[10]); // St. Louis
    writeToFile(convertedJson,flags.o)
});

// // Pass in string or string buffer flat file data and return a JavaScript object.
// conveflatFileConverterrter.toJson(sourceFileConfig, sourceString).then(convertedJson => {
//     console.log(convertedJson[0].city); // Quincy
// });

writeToFile = function(jsObj,path){



    jsString = JSON.stringify(jsObj)
    fs.writeFile(path,jsString,'latin1',function(err){
        if(err){
            console.log("erreur a l;<ecriture du fichier");
            return console.log(err);
        }
        console.log("reussi!");
    })
}