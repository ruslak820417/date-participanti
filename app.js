const { google } = require('googleapis');

// Define the Client ID and Spreadsheet ID
const CLIENT_ID = '536605246104-mbl42mmue73ju5b53h7ab8k4hrs5aes4.apps.googleusercontent.com';
const SPREADSHEET_ID = '1N238nkONBqnrFKleXSjZueIwsJSsCr_VwL8RyFMjzX4';

// Initialize the Google Sheets API client
const sheets = google.sheets({ version: 'v4', auth: CLIENT_ID });

async function accessSpreadsheet() {
    try {
        const response = await sheets.spreadsheets.get({
            spreadsheetId: SPREADSHEET_ID,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error accessing the spreadsheet:', error);
    }
}

accessSpreadsheet();