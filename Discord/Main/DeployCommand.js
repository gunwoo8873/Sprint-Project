import { REST, Routes } from "discord.js"
require("dotenv").config()

// REST version(Value = default : 9)
const REST = new REST({ version: "9" }).setToken(process.env.TOKEN)

try {
    console.log()
} catch (error) {
    
}