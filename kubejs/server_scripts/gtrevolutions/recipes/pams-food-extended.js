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

ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;

    // Silken Tofu
    event.remove({ output: "pamhc2foodextended:silkentofuitem" });
    event.shapeless("pamhc2foodextended:silkentofuitem", [
        "pamhc2foodcore:saucepanitem",
        `2x pamhc2crops:soybeanitem`
    ]);
    // Raw Tofabbit
    event.remove({ output: "pamhc2foodextended:rawtofabbititem" });
    event.shapeless("pamhc2foodextended:rawtofabbititem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "gtceu:salt_dust"
    ]);
    // Raw Tofacon
    event.remove({ output: "pamhc2foodextended:rawtofaconitem" });
    event.shapeless("pamhc2foodextended:rawtofaconitem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "pamhc2trees:maplesyrupitem"
    ]);
    // Raw Tofeak
    event.remove({ output: "pamhc2foodextended:rawtofeakitem" });
    event.shapeless("pamhc2foodextended:rawtofeakitem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "pamhc2foodextended:blackpepperitem"
    ]);
    // Raw Toficken
    event.remove({ output: "pamhc2foodextended:rawtofickenitem" });
    event.shapeless("pamhc2foodextended:rawtofickenitem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "pamhc2foodcore:flouritem"
    ]);
    // Raw Tofish
    event.remove({ output: "pamhc2foodextended:rawtofishitem" });
    event.shapeless("pamhc2foodextended:rawtofishitem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "minecraft:kelp"
    ]);
    // Raw Tofutton
    event.remove({ output: "pamhc2foodextended:rawtofuttonitem" });
    event.shapeless("pamhc2foodextended:rawtofuttonitem", [
        "pamhc2foodcore:mixingbowlitem",
        "pamhc2foodextended:firmtofuitem",
        "pamhc2foodextended:soysauceitem",
        "pamhc2crops:spiceleafitem"
    ]);
});