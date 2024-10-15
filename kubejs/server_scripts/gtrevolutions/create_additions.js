// priority: 1

let add = (item) => {
    ServerEvents.tags('item', event => {
      event.remove('forge:viewers/hidden_from_recipe', item);
      event.remove('c:hidden_from_recipe_viewers', item);
    });
}

add("create:portable_fluid_interface");
add("create:portable_storage_interface");
add("create:track");
add("create:railway_casing");
add("create:schedule");
add("create:track_station");
add("create:track_signal");
add("create:track_observer");
add("create:controls");
add(/create:(.*)_seat/);