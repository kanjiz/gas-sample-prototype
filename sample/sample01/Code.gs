function doGet(e) {
    const page = e.parameter.page || 'index';
    try {
        switch (page) {
            case 'page1':
                return doGetPage1(e);
            case 'page2':
                return doGetPage2(e);
            default:
                return doGetIndex(e);
        }
    } catch (error) {
        console.error('Error in doGet: ' + error.message);
        return HtmlService.createHtmlOutput('An error occurred: ' + error.message);
    }
}

function doGetIndex(e) {
    try {
        const template = HtmlService.createTemplateFromFile('index');
        const userEmail = Session.getActiveUser().getEmail();
        const userId = Session.getActiveUser().getUserLoginId();
        const user = new User(userEmail);
        template.userEmail = userEmail;
        template.userId = userId;
        template.userName = user.name;
        return template.evaluate();
    } catch (error) {
        console.error('Error in doGetIndex: ' + error.message);
        return HtmlService.createHtmlOutput('An error occurred: ' + error.message);
    }
}

function doGetPage1(e) {
    try {
        const template = HtmlService.createTemplateFromFile('page1');
        const userEmail = Session.getActiveUser().getEmail();
        const userId = Session.getActiveUser().getUserLoginId();
        const user = new User(userEmail);
        template.userEmail = userEmail;
        template.userId = userId;
        template.userName = user.name;
        return template.evaluate();
    } catch (error) {
        console.error('Error in doGetPage1: ' + error.message);
        return HtmlService.createHtmlOutput('An error occurred: ' + error.message);
    }
}

function doGetPage2(e) {
    try {
        const template = HtmlService.createTemplateFromFile('page2');
        const userEmail = Session.getActiveUser().getEmail();
        const userId = Session.getActiveUser().getUserLoginId();
        const user = new User(userEmail);
        template.userEmail = userEmail;
        template.userId = userId;
        template.userName = user.name;
        return template.evaluate();
    } catch (error) {
        console.error('Error in doGetPage2: ' + error.message);
        return HtmlService.createHtmlOutput('An error occurred: ' + error.message);
    }
}
