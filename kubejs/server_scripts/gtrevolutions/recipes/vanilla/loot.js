LootJS.modifiers(event => {
    // remove flint dropping from gravel
    event.addBlockLootModifier("minecraft:gravel").removeLoot(Ingredient.all).addLoot("minecraft:gravel");
});