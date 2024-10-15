ServerEvents.recipes((event) => {
    event.shaped(`16x create:track`, [ "SBS", "SLS", "SBS" ], {
        S: "gtceu:steel_ingot",
        B: "gtceu:steel_bolt",
        L: "#forge:oak_logs"
    });
});