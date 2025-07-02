import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/main-layout"
import { routes } from "./routes"

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ comp: Page, path }: { comp: React.ComponentType, path?: string }, index) => (
          <Route
            key={index}
            index={!path ? true : false}
            path={path}
            element={<Page />} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
