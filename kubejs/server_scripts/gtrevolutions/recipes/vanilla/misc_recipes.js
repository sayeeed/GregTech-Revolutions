/**
 * 
 * Miscellaneous Recipe Changes
 * 
 */
ServerEvents.recipes((event) => {
    // Crafting Table
    event.remove({ output: "minecraft:crafting_table", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:crafting_table", ["FF", "WW"], {
      F: "minecraft:flint",
      W: "#minecraft:logs"
    });

    // Furnace
    event.remove({ output: "minecraft:furnace", type: "minecraft:crafting_shaped" });
    event.shaped("minecraft:furnace", ["CCC", "FFF", "CCC"], {
      C:"#forge:cobblestone/normal",
      F:"minecraft:flint"
    });

    // Bed
    // removals
    event.remove({ output: "#minecraft:beds", type: "minecraft:crafting_shaped" });
    event.remove({ output: "#minecraft:wool_carpets", type: "minecraft:crafting_shaped" });

    // Regions Unexplored - fence compat
    // some issues but not a big deal (no assembler recipes as of now)
    event.forEachRecipe({ mod: "regions_unexplored", output: "#forge:fences/wooden", type: "minecraft:crafting_shaped" }, r => {
      const json = JSON.parse(r.json);
      console.log(json);
      if (!json.key) return;
      const wood = json.key['W'];
      const stick = json.key['#'];
      const result = json.result.item;
      event.remove({ mod: "regions_unexplored", output: result, type: "minecraft:crafting_shaped" });
      event.shaped(result, ["WSW","WSW","WSW"], {
        W: wood,
        S: stick
      });
    });
    
    // wool/bed colors
    const color = [
      'white',
      'light_gray',
      'gray',
      'black',
      'red',
      'orange',
      'yellow',
      'lime',
      'green',
      'cyan',
      'light_blue',
      'blue',
      'purple',
      'magenta',
      'pink',
      'brown'
    ]

    // set each wool carpet recipe
    color.forEach(c => 
      event.shapeless(`minecraft:${c}_carpet`, [
        `2x minecraft:${c}_wool`
      ])
    );

    // set each bed color recipe
    color.forEach(c => 
      event.shaped(`minecraft:${c}_bed`, ["CCC", "PPP", "FSF"], {
        C:`minecraft:${c}_carpet`,
        P:"#minecraft:planks",
        F:"#forge:fences/wooden",
        S:"#forge:tools/mallets"
      })
    );

    // Regions Unexplored - Wooden Door compat
    // no assembler recipes yet
    event.forEachRecipe({ mod: "regions_unexplored", output: "#minecraft:wooden_doors", type: "minecraft:crafting_shaped" }, r => {
      const json = JSON.parse(r.json);
      if (!json.key) return;
      const wood = json.key['#'];
      const result = json.result.item;
      event.remove({ mod: "regions_unexplored", output: result, type: "minecraft:crafting_shaped" });
      event.shaped(result, ["PTD","PRS","PPH"], {
        P: wood,
        T: "#minecraft:wooden_trapdoors",
        D: "#forge:tools/screwdrivers",
        R: "gtceu:iron_ring",
        S: "gtceu:iron_screw",
        H: "#forge:tools/hammers"
      });
    });

    // Trapdoors
    event.forEachRecipe({ mod: "regions_unexplored", output: "#minecraft:wooden_trapdoors", type: "minecraft:crafting_shaped" }, r => {
      const json = JSON.parse(r.json);
      console.log(json);
      if (!json.key) return;
      const wood = json.key['#'];
      const result = json.result.item;
      const pattern = ["BPS","PDP","SPB"];
      event.remove({ mod: "regions_unexplored", output: result, type: "minecraft:crafting_shaped" });
        event.shaped(result, pattern, {
          P: wood,
          S: "minecraft:stick",
          B: "gtceu:iron_bolt",
          D: "#forge:tools/screwdrivers"
        });
        event.shaped(`2x ${result}`, pattern, {
          P: wood,
          S: "minecraft:stick",
          B: "gtceu:steel_bolt",
          D: "#forge:tools/screwdrivers"
        });
    });

    // Remove vanilla tool recipes
    const tier = [
      'wooden',
      'stone',
      'iron',
      'golden',
      'diamond'
    ]
    
    tier.forEach(t => {
      event.remove(`minecraft:${t}_pickaxe`);
      event.remove(`minecraft:${t}_sword`);
      event.remove(`minecraft:${t}_shovel`);
      event.remove(`minecraft:${t}_axe`);
      event.remove(`minecraft:${t}_hoe`);
    });

    // Flint from Gravel
    event.shapeless("minecraft:flint", [
      `3x minecraft:gravel`
    ]);
});