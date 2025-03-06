function doGet(e: GoogleAppsScript.Events.DoGet) {
    const template = HtmlService.createTemplateFromFile('templates/index');
    const userEmail = Session.getActiveUser().getEmail();
    template.userEmail = userEmail;
    return template.evaluate();
}
