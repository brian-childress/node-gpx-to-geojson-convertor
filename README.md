# GPX to GeoJSON Convertor

This handy application helps to convert .gpx files to .geojson quickly and easily.

## Tutorial Available

[YouTube: GPX to GeoJSON Convertor](https://www.youtube.com/watch?v=YwRGml8_3DU)

[![GPX to GeoJSON Convertor](images/node-gpx-to-geojson.png)](https://www.youtube.com/watch?v=YwRGml8_3DU "GPX to GeoJSON Convertor with Node")

### Technologies:
- [togeojson](https://github.com/placemark/togeojson)
- [@xmldom/xmldom](https://github.com/xmldom/xmldom)
- [NodeJS](https://nodejs.org)

## Getting Started

### Installing

```sh
npm install
```

### Converting

To use this application to convert a .gpx file to .geojson we can simply run the following command in your terminal:

Required Parameters:

- `--input`: The relative path to the input .gpx file
- `--output`: The relative path to the desired output .geojson file, including filename and .geojson extension

_Example:_
```sh
node convert.js --input=input.gpx --output=output.geojson
```
