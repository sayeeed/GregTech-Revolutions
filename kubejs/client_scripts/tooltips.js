ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
      "storagedrawers:compacting_drawers_3",
      "storagedrawers:fill_level_upgrade",
      "storagedrawers:illumination_upgrade",

      "expatternprovider:caner",
      "ae2:inscriber",
      "expatternprovider:ex_inscriber",
      "expatternprovider:ingredient_buffer"
    ],
    Text.red("Disabled in this modpack!").bold(true)
  );
});
