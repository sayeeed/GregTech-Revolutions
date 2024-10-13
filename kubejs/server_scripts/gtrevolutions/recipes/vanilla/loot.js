LootJS.modifiers(event => {
    // remove flint dropping from gravel
    event.addBlockLootModifier("minecraft:gravel").removeLoot("minecraft:flint");
});