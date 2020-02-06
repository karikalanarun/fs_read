import fs from "fs";

const FILE_NAME = "file_name.txt";

// promise.

// Thennable is an interface.
// Thennable should have method called "then".
// "then" will accept a callback. inside a then accepted callback function,
// if you can retrun another thennable or anything.

const readFile = (name: string): Promise<string> =>
  new Promise((resolve, reject) => {
    fs.readFile(name, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });

readFile(FILE_NAME)
  .then(ANOTHER_FILE_NAME => {
    return readFile(ANOTHER_FILE_NAME);
  })
  .then(
    file_content => {
      console.log("content will be ::: ", file_content);
    },
    err => {
      console.log("err:: ", err);
    }
  );

// fs.readFile(FILE_NAME, "utf8", (err, ANOTHER_FILE_NAME) => {
//   if (err) {
//     throw err;
//   }
//   fs.readFile(ANOTHER_FILE_NAME, "utf8", (err, content) => {
//     if (err) {
//       throw err;
//     }
//     console.log("content will be ::: ", content);
//   });
// });
