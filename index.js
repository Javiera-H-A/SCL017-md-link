module.exports = () => {
  //Llamamos 
const fs=require('fs');
const PATH=require('path');
const https = require('https')
const request = require('sync-request');


let rutaActual = PATH.basename(__dirname)

function MdLinks(path) {
  let files = fs.readdirSync(path);

for ( let j=0; j<files.length; j++){
  console.log(files[j]);
  filePath = PATH.join(path,files[j]);
  relativePath = PATH.relative(filePath,rutaActual)
  let textin = fs.readFileSync(filePath, (error,datos) => {
    if (error)
      console.log(error);
    else
      return datos;
    });

  let mdContents = textin.toString();
  // console.log(mdContents.slice(0,200))
  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm

  const matches = mdContents.match(regexMdLinks)
  const singleMatch = /\[([^\[]+)\]\((.*)\)/ 
   
for (var i = 0; i < matches.length; i++) {
  let text = singleMatch.exec(matches[i])
  // console.log(text[2])
      console.log(`#${i} Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath+ '\\' +files[j] )

  // const options = {
  //   hostname: 'nodesource.com',
  //   path: '/products/nsolid',
  //   // port: 443, 
  //   method: 'GET'
  // }

  // const req = https.got(options, res => {
  //   // console.log(`statusCode: ${res.statusCode}`)
  //   console.log(`#${i} Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath+ '\\' +files[j] )

    
  // })
  // req.on('error', error => {
  //   console.error(error)
  // })
  // req.end()
  let res = request('GET', text[2]) 
  console.log(res.statusCode);

  if (error) { 
      console.log(error);
  }
    else
      return datos;
  
    
  
  
 

}
}
}
MdLinks('C:/Users/javie/Desktop/Para ver proyectos/Probando/Markdown')







};
