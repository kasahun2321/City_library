
var unzip = require('unzip');
var fs = require('fs');
let driver ='C:\Users\kas\Documents\MSD_File_COLLECTION\CS477 - NODE.JS\MyNodeclassCourse\practice'

var inputFileName = '/input.zip';
var extractToDirectory = '${driver}/outputdir';

fs.createReadStream(inputFileName)
	.pipe(unzip.Extract({
		path: extractToDirectory 
	}));