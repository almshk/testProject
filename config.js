const QmateService = require("@sap_oss/wdio-qmate-service");

exports.config = {
    baseUrl: 'https://us4.leverx.local:44302/sap/bc/ui2/flp',    
    runner: 'local',
    specs: [
      
         [ "./specs/01_createNewPO.spec.js",
          "./specs/02_checkList.spec.js"
    ],
    ],

    params: {
      qmateCustomTimeout: 700000,
      import: {
        data:"./data/",
        purchaseOrder: "./data/purchaseOrder.json"
      },
      export: {
        purchaseOrder: "./data/purchaseOrder.json"
      }

        },

    maxInstances: 5,

    capabilities: [{
        // capabilities for local browser web tests
      browserName: "chrome", 
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        "--output=/dev/null",
        "--log-level=3",
        "--no-sandbox",
        "--incognito",
        "--ignore-certificate-errors",
        "--window-size=1920,1200",
        "--whitelisted-ips",
        "--disable-dev-shm-usage",
        //"--headless",
        "--disable-gpu",
        "--disable-web-security",
        "--disable-infobars",
        "--disable-extensions",
        "--disable-logging",
        "--lang=en-US"
        ]
        }
    }],

    //logLevel: 'warn',

        
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    waitForUI5Timeout: 90000,
    

    services: [[QmateService],['chromedriver']],

    framework: 'mocha',
        mochaOpts:{
      timeout: 1200000,
      bail: true

    },
    
    reporters: [
        [
            'spec',
            {
                symbols: {
                    passed: '[PASS]',
                    failed: '[FAIL]',
                },
            },
        ]
    ],
    
};