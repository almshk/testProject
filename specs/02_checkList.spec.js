require('dotenv').config()

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
    });
    
    it ("Step 02: Login", async function() {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        await util.browser.sleep (2000);
    });


    it ('Step 03: Fill in PO', async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.ui.comp.smartfilterbar.SFBMultiInput",
                "id": "*listReportFilter-filterItemControl_BASIC-PurchaseOrder"
            }
        };

        const references = browser.config.params.import.data["references"];
        common.assertion.expectDefined(references);
        await common.assertion.expectDefined(references.purchaseOrderNumber);
        const valueToEnter = references.purchaseOrderNumber;
        util.console.log(references.purchaseOrderNumber);
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
        });

        it ('Step 04: Click Go Button', async function(){
            const selector = {
                "elementProperties": {
                    "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                    "metadata": "sap.m.Button",
                    "id": "*listReportFilter-btnGo"
                }
            }   
            await ui5.userInteraction.click(selector);
        });

        it ('Step 05: Open new Purchase Order', async function(){
            const references = browser.config.params.import.data["references"]; 
            common.assertion.expectDefined(references);
            await common.assertion.expectDefined(references.purchaseOrderNumber);
          
            const selector = {
                "elementProperties": {
                    "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                    "metadata": "sap.m.ColumnListItem"
                }
            };
                    
            await ui5.userInteraction.click(selector);

        });

        it ('Step 06: Validate Purchase Order', async function(){
            const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Title",
                "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        };
        
            const references = browser.config.params.import.data["references"]; 
            common.assertion.expectDefined(references);
            await common.assertion.expectDefined(references.purchaseOrderNumber);
            await ui5.assertion.expectAttributeToBe(selector, "text", references.purchaseOrderNumber)
        });
    })