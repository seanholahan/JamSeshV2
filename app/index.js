// exports
export * from "@penthouse/psystem"

// models
export * from "./models/LanguageData"
export * from "./models/CAuth"
export * from "./models/CData"
export * from "./models/CStorage"

// views
export * from "./views/Buttons"
export * from "./views/Images"
export * from "./views/Utility"

// controllers
export * from "./controllers/Root"
export * from "./controllers/NavBar"

export * from "./controllers/Home"


// imports
import "./index.scss"
import "@penthouse/psystem/PUtilityV2.css"
import { view, View, Root } from "./index.js"

document.body.appendChild(view(Root))
