function doGet(e) {
    const page = e.parameter.page || 'index';
    switch (page) {
        case 'page1':
            return doGetPage1(e);
        case 'page2':
            return doGetPage2(e);
        default:
            return doGetIndex(e);
    }
}

function doGetIndex(e) {
    const template = HtmlService.createTemplateFromFile('index');
    const userEmail = Session.getActiveUser().getEmail();
    const userId = Session.getActiveUser().getUserLoginId();
    const user = new User(userEmail);
    template.userEmail = userEmail;
    template.userId = userId;
    template.userName = user.name;
    return template.evaluate();
}

function doGetPage1(e) {
    const template = HtmlService.createTemplateFromFile('page1');
    const userEmail = Session.getActiveUser().getEmail();
    const userId = Session.getActiveUser().getUserLoginId();
    const user = new User(userEmail);
    template.userEmail = userEmail;
    template.userId = userId;
    template.userName = user.name;
    return template.evaluate();
}

function doGetPage2(e) {
    const template = HtmlService.createTemplateFromFile('page2');
    const userEmail = Session.getActiveUser().getEmail();
    const userId = Session.getActiveUser().getUserLoginId();
    const user = new User(userEmail);
    template.userEmail = userEmail;
    template.userId = userId;
    template.userName = user.name;
    return template.evaluate();
}
