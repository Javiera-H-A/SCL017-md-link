 
const fs=require('fs');
const PATH=require('path');
const fetch= require('fetch')

const MdLinks = (path,options={validate: false, stats: false}) => {
    let currentPath = PATH.basename(__dirname)
    if(fs.lstatSync(path).isDirectory()){ 
        let fileList = fs.readdirSync(path);

        for( let j=0; j<fileList.length; j++){
            let filePath = PATH.join(path,fileList[j]);
            let relativePath = PATH.relative(currentPath,filePath)
            let readFile = fs.readFileSync(filePath, (error,datos) => {
                if (error){
                    console.log(error)
                }
                else{
                    return datos
                }
            });

            let mdContents = readFile.toString();
            const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm
            const matches = mdContents.match(regexMdLinks);
            const singleMatch = /\[([^\[]+)\]\((.*)\)/ 
            let listLinks = [];

            for(let i = 0; i < matches.length; i++) {
                let text = singleMatch.exec(matches[i]);
                listLinks.push(text[2]);
                
                if(!options.stats){
                
                if (options.validate){
                    fetch.fetchUrl(text[2], function(error, meta, body){
                        if (body === undefined){
                        }
                        else{
                            if(meta.status>= 200 && meta.status<400){
                                console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'ok' + '\n')
                            }
                            else{
                                console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'fail' + '\n')
                            }
                        }
                    });
                }
                else{
                    console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + '\n')                    
                }
            }}
            if(options.stats){
                console.log(fileList[j])
                console.log("Total", listLinks.length);
                let unique = new Set(listLinks);
                console.log("Unique", [...unique].length);                
            }        
        }        
    }
    
    else{
        let filePath = path;
        let relativePath = PATH.relative(currentPath,filePath);
        let readFile = fs.readFileSync(path, (error,datos) => {
            if (error){
            console.log(error)
            }
            else{
                return datos;
            }
        });

        let mdContents = readFile.toString();
        const regexMdLinks = /\[([^\[]+)\](\(.*\))/gm
        const matches = mdContents.match(regexMdLinks)
        const singleMatch = /\[([^\[]+)\]\((.*)\)/ 
        let listLinks = [];

        for(let i = 0; i < matches.length; i++) {
            let text = singleMatch.exec(matches[i])
            listLinks.push(text[2]);

            if(!options.stats){

            if (options.validate){
                fetch.fetchUrl(text[2], function(error, meta, body){
                    if (body === undefined){
                    }
                    else{
                        if(meta.status>= 200 && meta.status<400){
                            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'ok' + '\n')
                        }
                        else{
                            console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + ' Status: '+ meta.status+' Ok: '+'fail' + '\n')
                        }
                    }
                });
            }
            else{
                console.log(`Text: ${text[1].slice(0,50)}, Link: ${text[2]}`+ ' File: ' + relativePath + '\n')                
            }           
        }        
    }
    if(options.stats){
        console.log(filePath)
        console.log("Total", listLinks.length);
        let unique = new Set(listLinks);
        console.log("Unique", [...unique].length);
        
    }}        
}
module.exports = {
    MdLinks
}

// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/',{validate: false})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/',{validate: true})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/README2.md',{validate: true})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/README2.md',{validate: false})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/README2.md',{stats:true})
// MdLinks('C:/Users/javie/Desktop/proyectos/Cuarto proyecto/SCL017-md-link/Markdown/',{stats:true})


