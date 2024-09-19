const apiKey = 'AIzaSyBr0paDRR43wk3RD75GcjynnEam6u9oi48'
const spreadsheetId = '1bXtmGQ_QXt_zIZNWBYuePvD5EdDaAEBIhw2pAD0GfIY'
const sheetName = 'sheet'; 





function checkSpreadsheet(){
	//alert()

	fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values?key=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data.values))
  .catch(error => console.error('Error:', error));
}