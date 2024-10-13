GTCEuServerEvents.bedrockOreVeins(event => {
    event.add('gtceu:iron_bedrock_vein', vein => {
        console.log("Hello");
        vein.dimensions(["minecraft:overworld"]);
        vein.material(GTMaterials.Iron, 1);
        vein.weight(100);
        vein.size(3);
        vein.yield(1);
        vein.depletionAmount(10);
        vein.depletionChance(1);
        vein.depletedYield(5);
    }) 
})