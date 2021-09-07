#!/usr/bin/env node

const { mdlinks } = require("./index.js");
const ruta = process.argv[2];

console.log(process.argv[2])

mdlinks(process.argv[2]).then((f)=> {
    console.log("then", f)
}).catch((e) => {
    console.log("catch del error", e)
})
