var fs = require("fs");
const directoryWrite = "./src/vlendir";

var navPages = [];
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    if (fs.statSync(path + "/" + file).isDirectory()) {
      const dir = directoryWrite + "/" + file;
      console.log(dir);

      navPages.push({
        key: file,
        url: "",
        title: "",
        children: [],
      });

      //createMd(path + "/" + file, dir);
    }
  });
}

getDirectories(directoryWrite);
console.log(navPages);
return;

function createMd(directoryReadPath, directoryWritePath) {
  console.log(directoryReadPath);
  fs.readdirSync(directoryReadPath).forEach((file) => {
    if (file.endsWith(".html")) {
      console.log(file);
      const data = fs.readFileSync(directoryReadPath + "/" + file, {
        encoding: "utf8",
      });
      var markdown = "# " + file.replace(".html", "") + "\n\n" + turndownService.turndown(data);
      fs.writeFileSync(
        directoryWritePath + "/" + file.replace(".html", ".md"),
        markdown,
        function (err) {
          if (err) throw err;
          console.log("Results Received");
        }
      );
    }
  });
}
