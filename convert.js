const togeojson = require("@mapbox/togeojson");
const DomParser = require("xmldom").DOMParser; // node doesn't have xml parsing or a dom.
const fs = require("fs");

const config = {};

// Read out params passed in
const args = process.argv.slice(2);

args.forEach(val => {
  const flag = val.split("=");

  switch (flag[0]) {
    case "--input":
      config.in_file = flag[1];
      break;
    case "--output":
      config.out_file = flag[1];
      break;
    default:
      console.log(`Unrecognized parameter passed: ${flag[0]}`);
      break;
  }
});

if (config.in_file) {
  const fileParsedFromDom = new DomParser().parseFromString(
    fs.readFileSync(config.in_file, "utf-8")
  );
  // Convert GPX to GeoJSON
  const converted = togeojson.gpx(fileParsedFromDom);
  if (config.out_file) {
    fs.writeFile(config.out_file, JSON.stringify(converted), err => {
      if (err) {
        throw new Error(err);
      }
      console.log("Success");
    });
  } else {
    throw new Error(`Output file is not defined`);
  }
} else {
  throw new Error(`Input file not defined`);
}
