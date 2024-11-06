GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('induction_furnace')
        .category('induction')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.FURNACE_OVERLAY_1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('induction_furnace', 'simple', 0, GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('induction_furnace')
        .tankScalingFunction(tier => tier * 3200)
})