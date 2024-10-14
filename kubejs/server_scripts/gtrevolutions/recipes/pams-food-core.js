// removes item from EMI and removes the recipe, effectively deleting the item from survival worlds
let yeet = (item) => {
    ServerEvents.recipes(event => {
      event.remove({ output: item });
    });
    ServerEvents.tags('item', event => {
      event.add('forge:viewers/hidden_from_recipe', item);
      event.add('c:hidden_from_recipe_viewers', item);
    });
}

// Recipe removal and item hiding
yeet("pamhc2foodcore:saltitem");

// Recipe Modifications
ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    
    // Bakeware
    event.remove({ output: "pamhc2foodcore:bakewareitem" })
    event.shaped("pamhc2foodcore:bakewareitem", [ "P P", "PHP", "BPB" ], {
        P: "gtceu:stainless_steel_plate",
        H: "#forge:tools/hammers",
        B: "gtceu:stainless_steel_bolt"
    }).damageIngredient("#forge:tools/hammers", 4);
    // Cutting Board
    event.remove({ output: "pamhc2foodcore:cuttingboarditem" })
    event.shaped("pamhc2foodcore:cuttingboarditem", [ "PPF", "PP ", "RWH" ], {
        P: "gtceu:stainless_steel_plate",
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        R: "gtceu:stainless_steel_rod",
        W: "gtceu:wood_plate"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Juicer
    event.remove({ output: "pamhc2foodcore:juiceritem" })
    event.shaped("pamhc2foodcore:juiceritem", [ "PHP", "PDP", "BPB" ], {
        P: "gtceu:stainless_steel_plate",
        H: "#forge:tools/hammers",
        B: "gtceu:stainless_steel_bolt",
        D: "gtceu:stainless_steel_drill_head"
    }).damageIngredient("#forge:tools/hammers", 4);
    // Grinder
    event.remove({ output: "pamhc2foodcore:grinderitem" })
    event.shaped("pamhc2foodcore:grinderitem", [ "HRF", "SRS", "SSS" ], {
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        R: "gtceu:stainless_steel_rod",
        S: "minecraft:stone"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Mixing Bowl
    event.remove({ output: "pamhc2foodcore:mixingbowlitem" })
    event.shaped("pamhc2foodcore:mixingbowlitem", [ "SHS", "PBP", "SFS" ], {
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        S: "gtceu:iron_screw",
        P: "gtceu:iron_plate",
        B: "minecraft:bucket"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Pot
    event.remove({ output: "pamhc2foodcore:potitem" })
    event.shaped("pamhc2foodcore:potitem", [ "HPF", "RBR", "SPS" ], {
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        S: "gtceu:iron_screw",
        P: "gtceu:iron_plate",
        B: "minecraft:bucket",
        R: "gtceu:iron_ring"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Roller
    event.remove({ output: "pamhc2foodcore:rolleritem" })
    event.shaped("pamhc2foodcore:rolleritem", [ "  R", " I ", "R F" ], {
        F: "#forge:tools/files",
        I: "minecraft:iron_ingot",
        R: "gtceu:iron_rod"
    }).damageIngredient("#forge:tools/files", 4);
    // Saucepan
    event.remove({ output: "pamhc2foodcore:saucepanitem" })
    event.shaped("pamhc2foodcore:saucepanitem", [ "WFS", "RBP", "WHP" ], {
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        S: "gtceu:iron_screw",
        P: "gtceu:iron_plate",
        R: "gtceu:iron_rod",
        B: "minecraft:bucket",
        W: "minecraft:stick"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Skillet
    event.remove({ output: "pamhc2foodcore:skilletitem" })
    event.shaped("pamhc2foodcore:skilletitem", [ "WRH", "RBP", "WFP" ], {
        H: "#forge:tools/hammers",
        F: "#forge:tools/files",
        P: "gtceu:iron_plate",
        R: "gtceu:iron_rod",
        B: "minecraft:bucket",
        W: "minecraft:stick"
    }).damageIngredient("#forge:tools/hammers", 4).damageIngredient("#forge:tools/files", 4);
    // Flour
    event.shapeless("pamhc2foodcore:flouritem", [
        "#forge:tools/mortars",
        "#forge:flour_plants"
    ])
    greg
        .macerator("flour_plants")
        .itemInputs("#forge:flour_plants")
        .itemOutputs("pamhc2foodcore:flouritem")
        .duration(300)
        .EUt(2);
    // Dough
    event.remove({ output: "pamhc2foodcore:doughitem" });
    event.shapeless("pamhc2foodcore:doughitem", [
        "pamhc2foodcore:mixingbowlitem",
        "#forge:water",
        "pamhc2foodcore:doughitem",
        "gtceu:salt_dust"
    ]);
    // Bread
    event.remove({ output: "minecraft:bread" });
    event.smelting("minecraft:bread", "pamhc2foodcore:doughitem");
    event.smoking("minecraft:bread", "pamhc2foodcore:doughitem");
    // Toast
    event.remove({ output: "pamhc2foodcore:toastitem" });
    event.smelting("pamhc2foodcore:toastitem", "minecraft:bread");
    event.smoking("pamhc2foodcore:toastitem", "minecraft:bread");
    // Grilled Cheese
    event.remove({ output: "pamhc2foodcore:grilledcheeseitem" });
    event.shapeless("pamhc2foodcore:grilledcheeseitem", [
        "pamhc2foodcore:skilletitem",
        "pamhc2foodcore:toastitem",
        "pamhc2foodcore:butteritem",
        "pamhc2foodcore:cheeseitem"
    ]);
    // Pasta
    event.remove({ output: "pamhc2foodcore:pastaitem" });
    event.shapeless("pamhc2foodcore:pastaitem", [
        "pamhc2foodcore:rolleritem",
        "pamhc2foodcore:doughitem",
        "pamhc2foodcore:butteritem"
    ]);
    // remove all forge/cheese for just Pam cheese
    event.replaceInput({ mod: "pamhc2foodcore", input: "#forge:cheese" }, "#forge:cheese", "pamhc2foodcore:cheeseitem");
    event.replaceInput({ mod: "pamhc2foodextended", input: "#forge:cheese" }, "#forge:cheese", "pamhc2foodcore:cheeseitem");
    // Stock
    event.remove({ output: "pamhc2foodcore:stockitem" });
    event.shapeless("pamhc2foodcore:stockitem", [
        "pamhc2foodcore:potitem",
        "#forge:stock_ingredients"
    ]);
    // remove all forge/dough for just Pam dough
    event.replaceInput({ mod: "pamhc2foodcore", input: "#forge:dough" }, "#forge:dough", "pamhc2foodcore:doughitem");
    event.replaceInput({ mod: "pamhc2foodextended", input: "#forge:dough" }, "#forge:dough", "pamhc2foodcore:doughitem");
    // Cocoa Power
    event.shapeless("pamhc2foodcore:cocoapowderitem", [
        "#forge:tools/mortars",
        "minecraft:cocoa_beans"
    ]).damageIngredient("#forge:tools/mortars", 4);
    greg
        .macerator("cocoa_powder")
        .itemInputs("minecraft:cocoa_beans")
        .itemOutputs("pamhc2foodcore:cocoapowderitem")
        .duration(400)
        .EUt(2);
    // remove all forge/flour for just Pam flour
    event.replaceInput({ mod: "pamhc2foodcore", input: "#forge:flour" }, "#forge:flour", "pamhc2foodcore:flouritem");
    event.replaceInput({ mod: "pamhc2foodextended", input: "#forge:flour" }, "#forge:flour", "pamhc2foodcore:flouritem");
    //event.replaceInput({ mod: "pamhc2foodcore", input: "#forge:egg" }, "#forge:egg", "minecraft:egg");
    // Batter
    event.remove({ output: "pamhc2foodcore:batteritem" });
    event.shapeless("pamhc2foodcore:batteritem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodcore:flouritem",
        "#forge:milk",
        "minecraft:egg"
    ]);
    // Chocolate Cake
    event.remove({ output: "pamhc2foodcore:chocolatecakeitem" });
    event.shapeless("pamhc2foodcore:chocolatecakeitem", [
        "pamhc2foodcore:bakewareitem",
        "pamhc2foodcore:doughitem",
        "pamhc2foodcore:cocoapowderitem",
        "pamhc2foodcore:batteritem"
    ]);
    // Muffins
    event.remove({ output: "pamhc2foodcore:chocolatemuffinitem" });
    event.remove({ output: "pamhc2foodcore:pumpkinmuffinitem" });
    event.remove({ output: "pamhc2foodcore:carrotmuffinitem" });
    event.remove({ output: "pamhc2foodcore:caramelmuffinitem" });
    event.shapeless(`2x pamhc2foodcore:chocolatemuffinitem`, [
        "pamhc2foodcore:bakewareitem",
        "pamhc2foodcore:cocoapowderitem",
        "pamhc2foodcore:batteritem"
    ]);
    event.shapeless(`2x pamhc2foodcore:pumpkinmuffinitem`, [
        "pamhc2foodcore:bakewareitem",
        "minecraft:pumpkin",
        "pamhc2foodcore:batteritem"
    ]);
    event.shapeless(`2x pamhc2foodcore:carrotmuffinitem`, [
        "pamhc2foodcore:bakewareitem",
        "minecraft:carrot",
        "pamhc2foodcore:batteritem"
    ]);
    event.shapeless(`2x pamhc2foodcore:caramelmuffinitem`, [
        "pamhc2foodcore:bakewareitem",
        "pamhc2foodcore:caramelitem",
        "pamhc2foodcore:batteritem"
    ]);
    // Cooking Oil
    event.remove({ output: "pamhc2foodcore:cookingoilitem" });
    event.shapeless("pamhc2foodcore:cookingoilitem", [
        "pamhc2foodcore:rolleritem",
        "minecraft:egg"
    ]);
    event.shapeless("pamhc2foodcore:cookingoilitem", [
        "pamhc2foodcore:rolleritem",
        "pamhc2crops:canolaitem"
    ]);
    event.shapeless("pamhc2foodcore:cookingoilitem", [
        "pamhc2foodcore:rolleritem",
        "#forge:nuts"
    ]);
    // Replace all Pam's salt for GregTech salt
    event.replaceInput({ mod: "pamhc2foodcore", input: "pamhc2foodcore:saltitem" }, "pamhc2foodcore:saltitem", "gtceu:salt_dust");
    event.replaceInput({ mod: "pamhc2foodextended", input: "pamhc2foodcore:saltitem" }, "pamhc2foodcore:saltitem", "gtceu:salt_dust");
    // Soft Pretzel
    event.remove({ output: "pamhc2foodcore:softpretzelitem" });
    event.shapeless("pamhc2foodcore:softpretzelitem", [
        "pamhc2foodcore:bakewareitem",
        "pamhc2foodcore:doughitem",
        "gtceu:salt_dust",
        "pamhc2foodcore:butteritem"
    ]);
    // Butter
    event.remove({ output: "pamhc2foodcore:butteritem" });
    event.shapeless("pamhc2foodcore:butteritem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodcore:creamitem"
    ]);
    // Chocolate Bar
    event.remove({ output: "pamhc2foodcore:chocolatebaritem" });
    event.shapeless("pamhc2foodcore:chocolatebaritem", [
        "pamhc2foodcore:saucepanitem",
        "pamhc2foodcore:cocoapowderitem",
        "pamhc2foodcore:butteritem",
        "#forge:milk"
    ]);
    event.remove({ output: "pamhc2foodcore:marshmellowsitem" });
    event.shapeless("pamhc2foodcore:marshmellowsitem", [
        "pamhc2foodcore:saucepanitem",
        "minecraft:sugar",
        "minecraft:egg",
        "#forge:water"
    ]);
    // Fried Chicken
    event.remove({ output: "pamhc2foodcore:friedchickenitem" });
    event.shapeless("pamhc2foodcore:friedchickenitem", [
        "pamhc2foodcore:potitem",
        "pamhc2foodcore:flouritem",
        "#forge:rawchicken",
        "pamhc2crops:spiceleafitem",
        "pamhc2foodextended:saltandpepperitem",
        "#forge:cookingoil"
    ]);
    // Pot Roast
    event.remove({ output: "pamhc2foodcore:potroastitem" });
    event.shapeless("pamhc2foodcore:potroastitem", [
        "pamhc2foodcore:potitem",
        "#forge:rawbeef",
        "minecraft:potato",
        "minecraft:carrot",
        "pamhc2foodcore:stockitem"
    ]);
    // Fresh Water/Milk
    event.remove({ output: "pamhc2foodcore:freshwateritem" });
    event.remove({ output: "pamhc2foodcore:freshmilkitem" });
    event.shapeless(`4x pamhc2foodcore:freshwateritem`, [
        "minecraft:water_bucket"
    ]);
    event.shapeless(`4x pamhc2foodcore:freshmilkitem`, [
        "minecraft:milk_bucket"
    ]);
});