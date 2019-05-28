({
  sendConfigData: function(component, event) {
    // Get the configuration data string
    var configData = component.get("v.configData");

    // Log it to the console
    console.log("Configuration Data in Lightning Component: ");
    console.log(configData);

    // get the update configuration event,
    // set the config data and fire the event.
    var updateEvent = $A.get("e.c:ConfigEvent");
    updateEvent.setParams({ configData: configData }).fire();
  }
});
