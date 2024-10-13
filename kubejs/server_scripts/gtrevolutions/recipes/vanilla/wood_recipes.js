/**
*
* Recipe Changes for Wood Related Items
*
*/
ServerEvents.recipes((event) => {
      const greg = event.recipes.gtceu;
      /**
       * Modded Logs to Planks
       */
      // fixes GT Rubber Log to Planks recipe
      event.remove({ output: "gtceu:rubber_planks", type: "minecraft:crafting_shapeless" });
      event.shapeless(`2x gtceu:rubber_planks`, [
        "gtceu:rubber_log"
      ]);
      // compat with Regions Unexplored wood
      event.forEachRecipe({ mod: "regions_unexplored", output: "#minecraft:planks", type: "minecraft:crafting_shapeless" }, r => {
        const json = JSON.parse(r.json);
        const log = json.ingredients[0];
        const result = json.result.item;
        event.remove({ mod: "regions_unexplored", output: result, type: "minecraft:crafting_shapeless" });
        // 1 Log to 2 Planks
        event.shapeless(`2x ${result}`, [
          log
        ]);
        // 1 Log to 4 Planks with Saw
        event.shaped(`4x ${result}`, [ "S", "L" ], {
          S: "#forge:tools/saws",
          L: log
        });
        // Cutter recipes
        greg
          .cutter(`${result}_lubricant`)
          .itemInputs(log)
          .inputFluids(Fluid.of("gtceu:lubricant", 1))
          .itemOutputs(`6x ${result}`, `2x gtceu:wood_dust`)
          .duration(200)
          .EUt(7);
        greg
          .cutter(`${result}_distilled_water`)
          .itemInputs(log)
          .inputFluids(Fluid.of("gtceu:distilled_water", 3))
          .itemOutputs(`6x ${result}`, `2x gtceu:wood_dust`)
          .duration(300)
          .EUt(7);
        greg
          .cutter(`${result}_water`)
          .itemInputs(log)
          .inputFluids(Fluid.of("minecraft:water", 4))
          .itemOutputs(`6x ${result}`, `2x gtceu:wood_dust`)
          .duration(400)
          .EUt(7);
      });

      /**
       * Cleaning up extra stick recipes
       */
      event.remove({ output: "minecraft:stick", type: "crafting_shapeless" })
      event.shapeless("minecraft:stick", [
        "#regions_unexplored:branches"
      ]);

      /**
       * Modded Slabs (including non-wood)
       */
      // Architect's Pallette
      event.forEachRecipe({ mod: "architects_palette", output: "#minecraft:slabs", type: "minecraft:crafting_shaped" }, r => {
        const json = JSON.parse(r.json);
        if (!json.key) return;
        const i = json.key['#'];
        const j = json.key['x'];
        const result = json.result.item;
        if (!i) {
          event.remove({ mod: "architects_palette", output: result, type: "minecraft:crafting_shaped" });
          event.shaped(`2x ${result}`, [ "Ss" ], {
            S: "#forge:tools/saws",
            s: j
          });
        } else {
          event.remove({ mod: "architects_palette", output: result, type: "minecraft:crafting_shaped" });
          event.shaped(`2x ${result}`, [ "Ss" ], {
            S: "#forge:tools/saws",
            s: i
          });
        }
      });
      // Regions Unexplored
      event.forEachRecipe({ mod: "regions_unexplored", output: "#minecraft:slabs", type: "minecraft:crafting_shaped" }, r => {
        const json = JSON.parse(r.json);
        if (!json.key) return;
        const i = json.key['#'];
        const result = json.result.item;
        event.remove({ mod: "regions_unexplored", output: result, type: "minecraft:crafting_shaped" });
        event.shaped(`2x ${result}`, [ "Ss" ], {
          S: "#forge:tools/saws",
          s: i
        });
      });

});