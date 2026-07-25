const path = require("node:path");
const fs = require("node:fs");

// Q1

// function pathInfo() {
//   console.log({ Dir: __dirname, File: __filename });
// }

// pathInfo();

//Q2

// function fileName(filePath) {
//   return path.basename(filePath);
// }

// console.log(fileName(__filename));

//Q3

// function buildPath(input) {
//   return path.format(input);
// }

// const pathDetails = {
//   dir: "folder",
//   name: "app",
//   ext: ".js",
// };
// console.log(buildPath(pathDetails));

//Q4

// function extPath(inp) {
//   return path.extname(inp);
// }
// console.log(extPath("/docs/readme.md"));

//Q5

// function parseFile(n) {
//   const result = path.parse(n);
//   return {
//     Name: result.name,
//     Ext: result.ext,
//   };
// }
// console.log(parseFile("/home/app/main.js"));

//Q6

// function checkAbsolute(input) {
//   if (path.isAbsolute(input)) {
//     return true;
//   }
//   return false;
// }
// console.log(checkAbsolute("/home/user/project/src/index.js"));

//Q7

// function joinPath(n1, n2, n3) {
//   return path.join(n1, n2, n3);
// }
// console.log(joinPath("src", "components", "App.js"));

//Q8

// function resolvePath() {
//   return path.resolve("./index.js");
// }
// console.log(resolvePath());

//Q9

// function joinPath(n1, n2) {
//   return path.join(n1, n2);
// }
// console.log(joinPath("/folder1", "folder/file.txt"));

// Q10

// const pathFile = path.resolve("./file.txt");

// function deleteFile(dest) {
//   fs.unlink(dest, (error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
// }

// fs.writeFileSync(pathFile, "hello");

// deleteFile(pathFile);

// console.log("the file.txt is deleted");

// Q11

// function createFolder(folderPath) {
//   fs.mkdir(folderPath, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log("Success");
//   });
// }

// createFolder("data2");

//Q12
// const { EventEmitter } = require("node:events");
// const event = new EventEmitter();

// event.on("start", () => {
//   console.log("Welcome event triggered!");
// });

// event.emit("start");

//Q13

// const { EventEmitter } = require("node:events");
// const event = new EventEmitter();

// event.on("login", (name) => {
//   console.log(`user logged in : ${name}`);
// });

// event.emit("login", "Ahmed");

//Q14

// const pathName = path.resolve("./users.txt");
// fs.readFile(pathName, "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(`the file content => ${data}`);
// });

//Q15

// const pathFile = path.resolve("./async.txt");
// fs.writeFile(pathFile, "Async save", (error) => {
//   if (error) {
//     console.log(error);
//   }
// });

//Q16

// function checkExistFile(pathFile) {
//   return fs.existsSync(pathFile);
// }

// console.log(checkExistFile("./notes.txt"));

//Q17
// const os = require("node:os");
// const platform = os.platform();
// const arch = os.arch();
// console.log({ Platform: platform, Arch: arch });

//Q18

// const readStream = fs.createReadStream("./big.txt","utf-8");
// readStream.on("data",(chunk)=>{
// console.log(chunk)
// })

//Q19

// const readStream = fs.createReadStream("./dest.txt", "utf-8");
// const writeStream = fs.createWriteStream("./source.txt");
// readStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// readStream.on("end", () => {
//   console.log("File copied using streams");
// });

//Q20

// const { createGzip } = require("zlib");
// const zip = createGzip();
// const readStream = fs.createReadStream("./dest.txt", "utf-8");
// const writeStream = fs.createWriteStream("./data.txt.gz");
// readStream.pipe(zip).pipe(writeStream);

//Q21

// const pathFile = path.resolve("./users.json");
// const http = require("node:http");
// const port = 3000;

// function listen(port)
// {
//     httpServer.listen(port , ()=>[
//         console.log(`Server is running on port ${port}`)
//     ])
// }

// const httpServer = http.createServer((req , res)=>{
//     const {url , method} =req;
//     console.log({url , method});

//     if(url == "/user" && method == "POST")
//     {
//         let data = "";
//         req.on("data" , (chunk)=>{
//             console.log({chunk})
//             data +=chunk;

//         req.on("end" , ()=>{
//             data = JSON.parse(data);
//             const {name , age , email} =data;

//             const users = fs.readFile(path.resolve("./users.json") , "utf-8" ,(error , data)=>{
//                 if(error)
//                 {
//                     res.writeHead(500, { "Content-Type": "application/json" });

//                     res.write(JSON.stringify({ message: "Fail" }));

//                     res.end();
//                 }
//                 else{

//                  data = JSON.parse(data);
//                  const exist = data.find((ele)=> ele.email ==email)
//                  if(exist)
//                  {
//                      res.writeHead(409, { "Content-Type": "application/json" });
//                      res.write(JSON.stringify({ message: "Email already exist" }));
//                      res.end();
//                  }

//                  else{
//                     data.push({name , age ,email});
//                     fs.writeFile(path.resolve("./users.json") , JSON.stringify(data), (error)=>{
//                         if(error){
//                              res.writeHead(500, { "Content-Type": "application/json" });
//                              res.write(JSON.stringify({ message: "Fail" }));
//                              res.end();
//                         }
//                         else{
//                             res.writeHead(201, { "Content-Type": "application/json" });
//                              res.write(JSON.stringify({ message: "User added successfully" }));
//                              res.end();
//                         }

//                     })
//                  }

//                 }
//             })

//         })

//         })

//     }

// })

// listen(port)

//Q22

// const pathFile = path.resolve("./users.json");
// const http = require("node:http");
// const port = 3000;

// function listen(port) {
//   httpServer.listen(port, () => [
//     console.log(`Server is running on port ${port}`),
//   ]);
// }

// const httpServer = http.createServer((req, res) => {
//   const { url, method } = req;
//   console.log({ url, method });

//   if (url.startsWith ("/user/") && method == "PATCH") {
//     const id = url.split("/")[2];
//     let data = "";
//     req.on("data", (chunk) => {
//       console.log({ chunk });
//       data += chunk;
//   });

//       req.on("end", () => {
//         data = JSON.parse(data);
//         const { name, age, email } = data;

//         fs.readFile(path.resolve("./users.json"), "utf-8", (error, data) => {
//           if (error) {
//             res.writeHead(500, { "Content-Type": "application/json" });

//             res.write(JSON.stringify({ message: "Fail" }));

//             res.end();
//           } else {
//             data = JSON.parse(data);

//             const user = data.find((ele) => ele.id == id);
//             if (!user) {
//               res.writeHead(404, { "Content-Type": "application/json" });
//               res.write(JSON.stringify({ message: "user ID not found" }));
//               res.end();
//               return;
//             }

//             if (name) {
//               user.name = name;
//             }
//             if (age) {
//               user.age = age;
//             }
//             if (email) {
//               user.email = email;
//             }

//             fs.writeFile(
//               path.resolve("./users.json"),
//               JSON.stringify(data),
//               (error) => {
//                 if (error) {
//                   res.writeHead(500, { "Content-Type": "application/json" });
//                   res.write(JSON.stringify({ message: "Fail" }));
//                   res.end();
//                 } else {
//                   res.writeHead(201, { "Content-Type": "application/json" });
//                   res.write(
//                     JSON.stringify({ message: "User update successfully" }),
//                   );
//                   res.end();
//                 }
//               },
//             );
//           }
//         });
//       });
    
//   }
// });

// listen(port);

//Q23

// const pathFile = path.resolve("./users.json");
// const http = require("node:http");
// const port = 3000;

// function listen(port) {
//   httpServer.listen(port, () => [
//     console.log(`Server is running on port ${port}`),
//   ]);
// }

// const httpServer = http.createServer((req, res) => {
//   const { url, method } = req;
//   console.log({ url, method });

//   if (url.startsWith ("/user/") && method == "DELETE") {
//     const id = Number(url.split("/")[2]);
  
//         fs.readFile(path.resolve("./users.json"), "utf-8", (error, data) => {
//           if (error) {
//             res.writeHead(500, { "Content-Type": "application/json" });

//             res.write(JSON.stringify({ message: "Fail" }));

//             res.end();
//           } else {
//             data = JSON.parse(data);

//             const user = data.find((ele) => ele.id == id);
//             if (!user) {
//               res.writeHead(404, { "Content-Type": "application/json" });
//               res.write(JSON.stringify({ message: "user ID not found" }));
//               res.end();
//               return;
//             }

//             data = data.filter((element) => element.id!==id); // معناها اني بقولك الداتا بقت شايله كل الداتا ماعدا اللي ال اي دي بتاعو

//             fs.writeFile(
//               path.resolve("./users.json"),
//               JSON.stringify(data),
//               (error) => {
//                 if (error) {
//                   res.writeHead(500, { "Content-Type": "application/json" });
//                   res.write(JSON.stringify({ message: "Fail" }));
//                   res.end();
//                 } else {
//                   res.writeHead(201, { "Content-Type": "application/json" });
//                   res.write(
//                     JSON.stringify({ message: "User deleted successfully" }),
//                   );
//                   res.end();
//                 }
//               },
//             );
//           }
//         });

    
//   }
// });

// listen(port);
