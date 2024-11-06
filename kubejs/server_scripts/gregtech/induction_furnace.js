ServerEvents.recipes(event => {


    const inductionrecipe = [
        ['lv', 'steel', 'tin'],
        ['mv', 'aluminium', 'copper'],
        ['hv', 'stainless_steel', 'gold'],
        ['ev', 'titanium', 'aluminium'],
        ['iv', 'tungsten_steel', 'platinum'],
        ['luv', 'rhodium_plated_palladium', 'niobium_titanium'],
        ['zpm', 'naquadah_alloy', 'vanadium_gallium'],
        ['uv', 'darmstadtium', 'yttrium_barium_cuprate'],
        ['uhv', 'neutronium', 'europium']
    ]
    inductionrecipe.forEach(([tier, plate, wire]) => {
    event.shaped(
        `gtceu:${tier}_induction_furnace`, [
        'WSW',
        'CHC',
        'PPP'
    ], {
        P: `gtceu:${plate}_plate`,
        H: `gtceu:${tier}_machine_hull`,
        W: `gtceu:${wire}_quadruple_cable`,
        C: `#gtceu:circuits/${tier}`,
        S: `gtceu:mv_voltage_coil`
    }).id(`kubejs:shaped/${tier}_induction_furnace`)
    })


    let greg = event.recipes.gtceu;


    function replace_liquid(liquid, input, EUt, duration) {
        event.remove({ output: "gtceu:" + liquid })
        greg.induction_furnace(liquid)
            .itemInputs(input)
            .outputFluids(Fluid.of(liquid, 144))
            .duration(duration)
            .EUt(EUt)
    }

    replace_liquid("aluminium", "gtceu:aluminium_ingot", 120, 3)
})