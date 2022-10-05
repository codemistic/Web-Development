 // Current date - http://stackoverflow.com/a/4929629/412329
 var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth() + 1; //January is 0!
 var yyyy = today.getFullYear();

 if (dd < 10) {
 	dd = '0' + dd
 }

 if (mm < 10) {
 	mm = '0' + mm
 }

 today = yyyy + '-' + mm + '-' + dd;


 function saveFormAsTextFile()
 // Based on https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
 {
 	var textToSave =
 		'---\n' +
 		'title: ' + document.getElementById('title').value + '\n' + // =title
 		'date: ' + document.getElementById('date').value + '\n' + // =date
		'time: ' + document.getElementById('time').value + '\n' + // =date
 		'date: ' + today + '\n' + // =date - automatically puts today's date =todo: fix bug allowing going over 60 seconds, i.e. 61 seconds
 		'senses: ' + document.getElementById('senses').value + '\n' + // =senses - select menu
 		'tags: ' + '\n- ' + document.getElementById('tags').value.replace(/,\s/g, "\n- ") + '\n' +
 		// =tags
 		// The replace() bit above converts 'tag,tag' to '- tag\n- tag\n' with regular expressions
 		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 		'---\n' + '\n' +
 		document.getElementById('content').value // =content;

 	var textToSaveAsBlob = new Blob([textToSave], {
 		type: "text/plain"
 	});
 	var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
 	var fileNameToSaveAs = document.getElementById("filename").value;

 	var downloadLink = document.createElement("a");
 	downloadLink.download = fileNameToSaveAs;
 	downloadLink.innerHTML = "Download File";
 	downloadLink.href = textToSaveAsURL;
 	downloadLink.onclick = destroyClickedElement;
 	downloadLink.style.display = "none";
 	document.body.appendChild(downloadLink);

 	downloadLink.click();
 }

 function destroyClickedElement(event) {
 	document.body.removeChild(event.target);
 }