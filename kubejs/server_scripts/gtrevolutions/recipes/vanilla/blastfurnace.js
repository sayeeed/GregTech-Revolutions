ServerEvents.recipes(event => {
    event.remove({ output: "minecraft:iron_ingot" })
    event.remove({ output: "minecraft:gold_ingot" })
    event.remove({ output: "minecraft:copper_ingot" })
    
    
    event.blasting("minecraft:iron_ingot", "#forge:ores/iron", 1.0)
    event.blasting("minecraft:gold_ingot", "#forge:ores/gold", 1.0)
    event.blasting("minecraft:copper_ingot", "#forge:ores/copper", 1.0)
})