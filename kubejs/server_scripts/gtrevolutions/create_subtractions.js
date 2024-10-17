// priority: 10

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

let yeetFluid = (fluid) => {
  ServerEvents.recipes(event => {
    event.remove({ output: fluid });
  });
  ServerEvents.tags('fluid', event => {
    event.add('forge:viewers/hidden_from_recipe', fluid);
    event.add('c:hidden_from_recipe_viewers', fluid);
  });
}

//yeet(/create:(.*)/);
yeetFluid("create:honey");
yeetFluid("create:chocolate");