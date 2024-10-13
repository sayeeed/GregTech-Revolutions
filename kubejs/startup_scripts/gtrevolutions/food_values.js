let hungerRatio = 0.5;

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