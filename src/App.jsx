import { BrowserRouter } from "react-router-dom"
import Router from "./routes"
import { HelmetProvider } from "react-helmet-async"
import { SettingsProvider } from "./components/settings"

function App() {

  return (
    <>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </>
  )
}

export default App
