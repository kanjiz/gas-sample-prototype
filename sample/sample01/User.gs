class User {
    constructor(email) {
        this.email = email;
        this.name = this.getUserNameFromSheet(email);
    }

    getUserNameFromSheet(email) {
        const sheet = SpreadsheetApp.openById('スプレッドシートID').getSheetByName('シート名');
        const data = sheet.getDataRange().getValues();
        const user = data.find(row => row[0] === email);
        return user ? user[1] : 'Unknown User';
    }
}
