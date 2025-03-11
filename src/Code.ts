/**
 * Handle GET request and return HTML output.
 * @param e - The event parameter.
 * @returns The HTML output.
 */
function doGet(e: GoogleAppsScript.Events.DoGet): GoogleAppsScript.HTML.HtmlOutput {
    const template = HtmlService.createTemplateFromFile('templates/index');
    const userEmail = Session.getActiveUser().getEmail();
    template.userEmail = userEmail;
    return template.evaluate();
}
