/**
*
* Recipe Changes for Vanilla Armors
*
*/
ServerEvents.recipes((event) => {
    // Iron Armor
    event.remove({ output: "minecraft:iron_helmet", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:iron_helmet", [ "PPP", "PHP" ], {
      P: "gtceu:iron_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:iron_chestplate", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:iron_chestplate", [ "PHP", "PPP", "PPP" ], {
      P: "gtceu:iron_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:iron_leggings", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:iron_leggings", [ "PPP", "PHP", "P P" ], {
      P: "gtceu:iron_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:iron_boots", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:iron_boots", [ "P P", "PHP" ], {
      P: "gtceu:iron_plate",
      H: "#forge:tools/hammers"
    });

    // Gold Armor
    event.remove({ output: "minecraft:golden_helmet", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:golden_helmet", [ "PPP", "PHP" ], {
      P: "gtceu:gold_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:golden_chestplate", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:golden_chestplate", [ "PHP", "PPP", "PPP" ], {
      P: "gtceu:gold_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:golden_leggings", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:golden_leggings", [ "PPP", "PHP", "P P" ], {
      P: "gtceu:gold_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:golden_boots", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:golden_boots", [ "P P", "PHP" ], {
      P: "gtceu:gold_plate",
      H: "#forge:tools/hammers"
    });

    // Diamond Armor
    event.remove({ output: "minecraft:diamond_helmet", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:diamond_helmet", [ "PPP", "PHP" ], {
      P: "gtceu:diamond_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:diamond_chestplate", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:diamond_chestplate", [ "PHP", "PPP", "PPP" ], {
      P: "gtceu:diamond_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:diamond_leggings", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:diamond_leggings", [ "PPP", "PHP", "P P" ], {
      P: "gtceu:diamond_plate",
      H: "#forge:tools/hammers"
    });
    event.remove({ output: "minecraft:diamond_boots", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:diamond_boots", [ "P P", "PHP" ], {
      P: "gtceu:diamond_plate",
      H: "#forge:tools/hammers"
    });
});