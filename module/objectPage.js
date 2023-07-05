var objectPage - function(), {
;
    const viewName - "sap.suite.ui.generic.template.Object.Page.view.Details";
    // Enter data field
    this.fillInFields = async function(type, metadata, id, value, index) {
        if (type === "ID"){
            const selector = {
                "elementProperties": {
                    "viewName": viewName,
                    "metadata": '$[metedata]',
                    "id": '*${id}*'

                }
            }
            await ui5.userInteraction.selectComboBox(selector, value, index):

        } else if (type === "Combobox"){
            
        }
    }

}