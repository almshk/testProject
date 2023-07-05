require('dotenv').config()
var standardZPO = require( '../data/standardZPO.json');

describe("Create new Purchase Order", function() {
    
    it ("Step 01: Open system and navigate to the Manage Purchase Order application", async function() {
        await ui5.navigation.navigateToApplication ("PurchaseOrder-manage")
    });
    
    it ("Step 02: Login", async function() {
        await ui5.session.login(process.env.USER, process.env.PASSWORD);
        //await util.browser.sleep (2000);
    });
    
    it ('Step 03: Click Create', async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
                "metadata": "sap.m.Button",
                "id": "*addEntry"
            }
        };

        await ui5.userInteraction.click(selector);
        await util.browser.sleep (30000);
    });

    it ('Step 04: Select Purchase Order Type - Standart Z-PO (ZNB)', async function(){
       const selector = {
            "elementProperties": {
                 "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                 "metadata": "sap.m.ComboBox",
                 "id": "*GeneralInformationFacet1::PurchaseOrderType::Field-comboBoxEdit"
    }
};

        actualValue = "Standard Z-PO (ZNB)"
        await ui5.userInteraction.selectComboBox(selector, actualValue);
    });

    it ('Step 05: Choose Suplier - 50000040',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet1::Supplier::Field-input"
            }
        };

        const valueToEnter = "50000040";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    });

    it ('Step 06: Choose Currency - EUR',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet1::DocumentCurrency::Field-input"
            }
        };

        const valueToEnter = "EUR";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    });

    it ('Step 07: Choose Pucrchasing Group - 001',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::PurchasingGroup::Field-input"
            }
        };

        const valueToEnter = "001";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
        await common.userInteraction.pressEnter();
    });

    it ('Step 08: Choose Purchasing Organization - 1010',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::PurchasingOrganization::Field-input"
            }
        };

        const valueToEnter = "1010";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
        await common.userInteraction.pressEnter();
    });

    it ('Step 09: Choose Company Code - 1010',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "id": "*GeneralInformationFacet2::CompanyCode::Field-input"
            }
        };

        const valueToEnter = "1010";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
        await common.userInteraction.pressEnter();
    });

    it ('Step 10: Navigate to the Items Tab',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*objectPage-anchBar-ui.ssuite.s2p.mm.pur.po.manage.st.s1::sap.suite.ui.generic.template.ObjectPage.view.Details::C_PurchaseOrderTP--ItemsFacet::Section-anchor"
            }
        };

        await ui5.userInteraction.click(selector);
    });

    it ('Step 11: Add Purchase Order Item',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*ItemsFacet::addEntry"
            }
        };

        await ui5.userInteraction.click(selector);
    });

    it ('Step 12: Fill in Item Category',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.ComboBox",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
            }
        };

        actualValue = "Standard"
        await ui5.userInteraction.selectComboBox(selector, actualValue);
    });

    it ('Step 13: Choose Material - WM-D03',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
                "value": [{
                    "path": "ManufacturerMaterial"
                }]
            }
        };

        const valueToEnter = "WM-D03";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);

    });

    it ('Step 14: Fill in Quantity',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Input",
                "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
                "value": [{
                    "path": "OrderQuantity"
                }],
                "ariaLabelledBy": ["*ItemsFacet::Table-OrderQuantity-header"]
            }
        };
           
        const valueToEnter = "10";
        await ui5.userInteraction.clearAndFill(selector, valueToEnter);
    });

    it ('Step 15: Click Create Button',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Button",
                "id": "*activate"
            }
        };

        await common.userInteraction.pressEnter();
        await ui5.userInteraction.click(selector);

    });

    it ('Step 16: Get PO ID',  async function(){
        const selector = {
            "elementProperties": {
                "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                "metadata": "sap.m.Title",
                "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        };

        const purchaseOrderID = await ui5.element.getPropertyValue(selector, "text");
        /*util.console.log(purchaseOrderID);
        const userData = {
            "purchaseOrder": purchaseOrderID
        };

        browser.config.purchaseOrderNumber = userData;*/

        const references = browser.config.params.import.data ["references"];
        references.purchaseOrderNumber = purchaseOrderID;
    });



    it ('Step 17: Logging Out',  async function(){
         await ui5.session.logout();
    });



           /* "ancestorProperties": { ... },
            "parentProperties": { ... },
            "siblingProperties": { ... },
            "prevSiblingProperties": { ... },
            "nextSiblingProperties": { ... },
            "childProperties": { ... },
            "descendantProperties": { ... }*/
            
       
    })