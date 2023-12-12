import { BrowserRouter } from "react-router-dom"
import Router from "./routes"
import { HelmetProvider } from "react-helmet-async"
import { SettingsProvider } from "./components/settings"
import ThemeProvider from "./theme"

function App() {

  return (
    <>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ThemeProvider>
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </>
  )
}

export default App
