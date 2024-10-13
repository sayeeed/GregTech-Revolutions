ServerEvents.tags('item', event => {
    // Pam's Harvest Craft 2
    event.remove("forge:stock_ingredients/bone", "minecraft:bone");
    event.remove("forge:stock_ingredients", "minecraft:bone");
});