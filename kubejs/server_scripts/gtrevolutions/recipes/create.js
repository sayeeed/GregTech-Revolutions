// priority: 1

ServerEvents.recipes((event) => {
    // Railways
    event.shaped(`16x create:track`, [ "SBS", "SLS", "SBS" ], {
        S: "gtceu:steel_ingot",
        B: "gtceu:steel_bolt",
        L: "#forge:oak_logs"
    });

    // Andesite Casing
    event.shaped("create:andesite_casing", [ "SOS", "OLO", "SOS" ], {
        S: "gtceu:steel_plate",
        O: "create:andesite_alloy",
        L: "#minecraft:logs"
    });

    // Copper Casing
    event.shaped("create:copper_casing", [ "SOS", "OLO", "SOS" ], {
        S: "gtceu:steel_plate",
        O: "gtceu:copper_plate",
        L: "#minecraft:logs"
    });

    // Brass Casing
    event.shaped("create:brass_casing", [ "SOS", "OLO", "SOS" ], {
        S: "gtceu:steel_plate",
        O: "gtceu:brass_plate",
        L: "#minecraft:logs"
    });

    // Train Casing
    event.shaped("create:railway_casing", [ "SOS", "OLO", "SOS" ], {
        S: "gtceu:steel_plate",
        O: "gtceu:obsidian_plate",
        L: "create:brass_casing"
    });

    // Train Schedule
    event.shapeless("create:schedule", [
        "gtceu:obsidian_plate",
        "minecraft:paper"
    ]);

    // Train Station
    event.shaped("create:track_station", [ "TTT", "TCT", "TTT" ], {
        T: "create:railway_casing",
        C: "minecraft:compass"
    });

    // Electron Tube
    event.shaped("create:electron_tube", [ "RGR", "RER", "RRR" ], {
        R: "gtceu:rose_gold_plate",
        G: "gtceu:glass_tube",
        E: "gtceu:hv_emitter"
    });

    // Train Signal
    event.shaped(`2x create:track_signal`, [ "TTT", "ECE", "TTT" ], {
        T: "create:railway_casing",
        E: "create:electron_tube",
        C: "gtceu:advanced_integrated_circuit"
    });

    // Train Observer
    event.shaped("create:track_observer", [ "PPP", "TTT", "TTT" ], {
        P: "minecraft:heavy_weighted_pressure_plate",
        T: "create:railway_casing"
    });

    // Train Controls
    event.shaped("create:controls", [ " L ", "PPP", "TTT" ], {
        L: "minecraft:lever",
        P: "create:precision_mechanism",
        T: "create:railway_casing"
    });

    // Precision Mechanism
    event.shaped("create:precision_mechanism", [ "SIS", "GPG", "PPP" ], {
        S: "gtceu:steel_screw",
        I: "gtceu:iron_plate",
        P: "gtceu:gold_plate",
        G: "gtceu:gold_bolt"
    });

    // Portable Storage Interface
    event.shaped("create:portable_storage_interface", [ "AAA", "PPP", "AAA" ], {
        A: "create:andesite_casing",
        P: "gtceu:tin_normal_item_pipe"
    });

    // Portable Fluid Interface
    event.shaped("create:portable_fluid_interface", [ "AAA", "PPP", "AAA" ], {
        A: "create:copper_casing",
        P: "gtceu:steel_normal_fluid_pipe"
    });
});