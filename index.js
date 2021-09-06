 
const fs=require('fs');
const PATH=require('path');
// const https = require('https')
// const request = require('sync-request');
// const axios = require('axios');
const fetch= require('fetch')



function MdLinks(path,options={validate: false}) {
  let currentPath = PATH.basename(__dirname)
  if(fs.lstatSync(path).isDirectory()){ 
  let fileList = fs.readdirSync(path);

for( let j=0; j<fileList.length; j++){
  let filePath = PATH.join(path,fileList[j]);
  let relativePath = PATH.relative(currentPath,filePath)
  let readFile = fs.readFileSync(filePath, (error,datos) => {
    if (error)
      console.log(error);
    else
      return datos;
    });

  let mdContents = readFile.toString();
  // console.log(mdContents.slice(0,200))
  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm
  const matches = mdContents.match(regexMdLinks)
  const singleMatch = /\[([^\[]+)\]\((.*)\)/ 
   
for(let i = 0; i < matches.length; i++) {
  let text = singleMatch.exec(matches[i])
  // console.log(text[2])
  if (options.validate){
      // axios.get(text[2])
      // .then((response) => {
      //   console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath+ ' Status: '+ response.status+' Ok: '+response.statusText + '\n')        
      // }, (error) => {  
      //   console.log(error.response)       
      // } );
      fetch.fetchUrl(text[2], function(error, meta, body){
        if (body === undefined){

        }else{
          if(meta.status>= 200 && meta.status<400){
            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'ok' + '\n')
          }else{
            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'fail' + '\n')
            
          }
        }
    });


  }else{
    console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + '\n')

  }
      



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
  // let res = request('GET', text[2]) 
  // console.log(res.statusCode);

  // if (error) { 
  //     console.log(error);
  // }
  //   else
  //     return datos;
  
    

  
 

}
}}else{
  let filePath = path;
  let relativePath = PATH.relative(currentPath,filePath);
  let readFile = fs.readFileSync(path, (error,datos) => {
    if (error)
      console.log(error);
    else
      return datos;
    });

  let mdContents = readFile.toString();
  // console.log(mdContents.slice(0,200))
  const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm
  const matches = mdContents.match(regexMdLinks)
  const singleMatch = /\[([^\[]+)\]\((.*)\)/ 
   
for(let i = 0; i < matches.length; i++) {
  let text = singleMatch.exec(matches[i])
  // console.log(text[2])
  if (options.validate){
      // axios.get(text[2])
      // .then((response) => {
      //   console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath+ ' Status: '+ response.status+' Ok: '+response.statusText + '\n')        
      // }, (error) => {  
      //   console.log(error.response)       
      // } );
      fetch.fetchUrl(text[2], function(error, meta, body){
        if (body === undefined){

        }else{
          if(meta.status>= 200 && meta.status<400){
            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'ok' + '\n')
          }else{
            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'fail' + '\n')

          }
        }
    });


  }else{
    console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + '\n')

  }}
}
}



// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/',option = {validate: true})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/',option = {validate: false})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/README2.md',option = {validate: true})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/README2.md',option = {validate: false})
MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/', {validate:true})


