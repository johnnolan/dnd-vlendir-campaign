var fs = require("fs");
var TurndownService = require("turndown");
const rootDirectory = "./export/worlds/Vlendir/articles";
const rootDirectoryWrite = "./export/worlds/vlendir/articles";
const directory = "./export/worlds/Vlendir/articles/Chapter 1";
const directoryWrite = "./src/vlendir/import";

var turndownService = new TurndownService({
  blankReplacement: (content, node) =>
    node.isBlock && node.matches("SPAN") ? node.outerHTML : "\n\n",
});

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    if (fs.statSync(path + "/" + file).isDirectory()) {
      const dir = directoryWrite + "/" + file;
      console.log(dir);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      createMd(path + "/" + file, dir);
    }
  });
}

console.log(getDirectories(rootDirectory));

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

//
//var markdown = converter.convert("<h2> Happy Journey </h2>");
