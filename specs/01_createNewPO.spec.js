require('dotenv').config()
var standardZPO = require( "../data/standardZPO.json");
var listReport = require( '../module/listReport.js');
var objectPage = require ("../module/objectPage.js");
var elementsData = require ("../data/elementsData.json");

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
        await util.browser.sleep (15000);
    });

    it ('Step 04: Select Purchase Order Type - Standard Z-PO (ZNB)', async function(){
//       
           await objectPage.fillInFields(elementsData.comboBox.purchaseOrderType.type,
                 elementsData.comboBox.purchaseOrderType.metadata,
                 elementsData.comboBox.purchaseOrderType.id,
                 standardZPO.generalInformation.purchaseOrderType
            );
        });

    it ('Step 05: Choose Suplier - 50000040',  async function(){
        // const selector = {
        //     "elementProperties": {
        //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
        //         "metadata": "sap.m.Input",
        //         "id": "*GeneralInformationFacet1::Supplier::Field-input"
        //     }
        // };
        await objectPage.fillInFields(elementsData.field.supplier.type,
            elementsData.field.supplier.metadata,
            elementsData.field.supplier.id,
            standardZPO.generalInformation.supplier
            );
        // const valueToEnter = "50000040";
        // await ui5.userInteraction.clearAndFill(selector, standardZPO.generalInformation.supplier);
    });

    it ('Step 06: Choose Currency - EUR',  async function(){
        
        await objectPage.fillInFields(elementsData.field.currency.type,
            elementsData.field.currency.metadata,
            elementsData.field.currency.id,
            standardZPO.generalInformation.currency
        );
        
    });

    it ('Step 07: Choose Pucrchasing Group - 001',  async function(){
        
        await objectPage.fillInFields(elementsData.field.purchasingGroup.type,
            elementsData.field.purchasingGroup.metadata,
            elementsData.field.purchasingGroup.id,
            standardZPO.generalInformation.purchasingGroup
        );
        
        await common.userInteraction.pressEnter();
    });

    it ('Step 08: Choose Purchasing Organization - 1010',  async function(){
        
        await objectPage.fillInFields(elementsData.field.purchasingOrganization.type,
            elementsData.field.purchasingOrganization.metadata,
            elementsData.field.purchasingOrganization.id,
            standardZPO.generalInformation.purchasingOrganization
        );
        
        await common.userInteraction.pressEnter();
    });

    it ('Step 09: Choose Company Code - 1010',  async function(){
       
        await objectPage.fillInFields(elementsData.field.companyCode.type,
            elementsData.field.companyCode.metadata,
            elementsData.field.companyCode.id,
            standardZPO.generalInformation.companyCode
        );
       
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

    var itemArr = standardZPO.items;
    for (let [itemIndex, itemValue] of itemArr.entries()) {

        it ("Item " + itemValue.item + " Add Purchase Order Item",  async function(){
            
            const selector = {
                "elementProperties": {
                    "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
                    "metadata": "sap.m.Button",
                    "id": "*ItemsFacet::addEntry"
                }
            };
            await ui5.userInteraction.click(selector);

        });

        it ("Item " + itemValue.item + " Select Item Category - " + itemValue.itemCategory,  async function(){

            await objectPage.fillInFields(elementsData.field.itemCategory.type,
                elementsData.field.itemCategory.metadata,
                elementsData.field.itemCategory.path, 
                itemValue.itemCategory,
                itemValue.item
            );

        });
    
        it ("Item " + itemValue.item + " Choose Material - " + itemValue.Material,  async function(){

            await objectPage.fillInFields(elementsData.field.itemMaterial.type,
                elementsData.field.itemMaterial.metadata,
                elementsData.field.itemMaterial.path, 
                itemValue.material,
                itemValue.item
            );

        });
    
        it ("Item " + itemValue.item + " Fill in Quantity " + itemValue.orderQuantity,  async function(){

            await objectPage.fillInFields(elementsData.field.itemQuantity.type,
                elementsData.field.itemQuantity.metadata,
                elementsData.field.itemQuantity.path, 
                itemValue.quantity,
                itemValue.item
            );

        });
    };

    // it ('Step 11: Add Purchase Order Item',  async function(){
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Button",
    //             "id": "*ItemsFacet::addEntry"
    //         }
    //     };

    //     await ui5.userInteraction.click(selector);
    // });

    
    // it ('Step 12: Fill in Item Category',  async function(){
    //     // const selector = {
    //     //     "elementProperties": {
    //     //         "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //     //         "metadata": "sap.m.ComboBox",
    //     //         "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*"
    //     //     }
    //     // };
    //     await objectPage.fillInFields(elementsData.field.itemCategory.type, 
    //         elementsData.field.itemCategory.metadata, 
    //         elementsData.field.itemCategory.path, 
    //         standardZPO.items[0010].itemCategory);

    //     //actualValue = "Standard"
    //     await ui5.userInteraction.selectComboBox(selector, standardZPO.items[00010].itemCategory);
    // });

    // it ('Step 13: Choose Material - WM-D03',  async function(){
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
    //             "value": [{
    //                 "path": "ManufacturerMaterial"
    //             }]
    //         }
    //     };

    //     //const valueToEnter = "WM-D03";
    //     await ui5.userInteraction.clearAndFill(selector, standardZPO.items[00010].material);

    // });

    // it ('Step 14: Fill in Quantity',  async function(){
    //     const selector = {
    //         "elementProperties": {
    //             "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
    //             "metadata": "sap.m.Input",
    //             "bindingContextPath": "/C_PurchaseOrderItemTP*PurchaseOrder=''*PurchaseOrderItem='00010'*",
    //             "value": [{
    //                 "path": "OrderQuantity"
    //             }],
    //             "ariaLabelledBy": ["*ItemsFacet::Table-OrderQuantity-header"]
    //         }
    //     };
           
    //     //const valueToEnter = "10";
    //     await ui5.userInteraction.clearAndFill(selector, standardZPO.items[00010].quantity);
    // });


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
        console.log(purchaseOrderID);
        const userData = {
            "purchaseOrderNumber": purchaseOrderID
        };

        browser.config.params.export.purchaseOrderNumber = userData;

        const references = browser.config.params.import.data ["references"];
        references.purchaseOrderNumber = purchaseOrderID;
    });



    it ('Step 17: Logging Out',  async function(){
         await ui5.session.logout();
    });

        
       
    })