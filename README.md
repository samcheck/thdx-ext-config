# How to Implement a Custom Configurator in Salesforce CPQ

TrailheaDX 2019 session

## Map External Configurator

External configurator with a Leaflet JS map as shown during the demo.

### Files

force-app/main/default/pages/CPQB_ConfigMap.page
force-app/main/default/staticresources/leaflet

Deploy the visualforce page to your Salesforce org using SFDX.

## Lightning Out External Configurator

Aura App, Aura Component, Event and Visualforce page for a demo external configurator in Salesforce CPQ.

### Files

force-app/main/default/pages/CPQB_ExternalConfig.page

- Visualforce page used a Lightning Out Host.

force-app/main/default/aura/ConfigEvent

- Configuration event to communicate between the Aura component and Visualforce page.

force-app/main/default/aura/CPQB_ExtConfig

- Aura Component to display the raw configuration data passed via easyXDM in an Aura Component.

force-app/main/default/aura/CPQB_ExtConfigApp

- Aura App to use in Lightning Out to create the External Config Aura Component.

### Setup

Deploy all components to your Salesforce org.

## Sample Configuration JSON

2 sample JSONs of configuration data from Salesforce CPQ.

### Files

configSampleInitial.json

- Sample JSON of initial configuration data recieved from Salesforce CPQ.

configSampleReconfigure.json

- Sample JSON of configuration data recieved from Salesforce CPQ after reconfiguring a bundle product.

