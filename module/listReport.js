var listReport = function() {
    
    const viewName = "sap.suite.ui.generic.template.ListReport.view.ListReport";

    this.clickCreateFirst = async function (metadata, id) {
        {
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": `${metadata}`,
                    "id": `*${id}*`
                }
            };
            await ui5.userInteraction.click(selector);
        }
    };
};

module.exports = new listReport();