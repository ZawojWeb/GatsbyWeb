import * as React from "react"
import Navigation from "../components/navigation"
import GlobalStyle from "../assets/style/globalstyle"

const MainLayout = ({children}) => (
  <>
    <GlobalStyle></GlobalStyle>
    <Navigation></Navigation>
    {children}
  </>
)



export default MainLayout
