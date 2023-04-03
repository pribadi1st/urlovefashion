import { ReactNode } from "react"
import Navbar from "./navbar"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <header></header>
            <main>
                <Navbar />
                {children}
            </main>
            <footer></footer>
        </div>
    )
}

export default Layout