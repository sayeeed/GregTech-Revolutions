ServerEvents.tags('item', event => {
    // Pam's Harvest Craft 2
    event.remove("forge:stock_ingredients/bone", "minecraft:bone");
    event.remove("forge:stock_ingredients", "minecraft:bone");
    event.remove("forge:egg/banana", "pamhc2trees:bananaitem");
    event.remove("forge:egg/avocado", "pamhc2trees:avocadoitem");
});