let hungerRatio = 0.5;
/*let foodOverride = {
    "miners_delight:baked_cave_carrot": 2,
    "miners_delight:copper_carrot": 3
}*/

//let foodOverrideKeys = Object.keys(foodOverride);

ItemEvents.modification((event) => {
    let edibleStacks = Ingredient.custom((i) => i.edible).getStacks();

    edibleStacks.forEach((stack) => {
        let foodProperties = stack.item.foodProperties;
        if(foodProperties) {
            event.modify(stack.item.id, (foodItem) => {
                foodItem.foodProperties = (food) => {
                    food.hunger(parseInt(foodProperties.nutrition*hungerRatio))
                };
            });
        }
    });
});