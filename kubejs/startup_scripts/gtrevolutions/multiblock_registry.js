GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // Bloomery
    event.create('bloomery')
        .category('multiblock')
        .setMaxIOSize(3, 3, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FIRE)
});

GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Bloomery
    event.create("bloomery", "multiblock")
        .rotationState(RotationState.ALL)
        .recipeType("bloomery")
        .appearanceBlock(() => Block.getBlock("minecraft:bricks"))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBB", "BBB", "BBB")
            .aisle("BBB", "B#B", "BBB")
            .aisle("BBB", "BCB", "BBB")
            .where("C", Predicates.controller(Predicates.blocks(definition.get())))
            .where("B", Predicates.blocks("minecraft:bricks"))
            .where("#", Predicates.air())
            .build())
        .workableCasingRenderer("minecraft:bricks", "minecraft:bricks", false);
});