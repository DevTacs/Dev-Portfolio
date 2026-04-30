import * as React from "react"
import {Link, Outlet, createRootRoute} from "@tanstack/react-router"

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <header className="flex flex-row justify-around py-5 bg-background text-foreground border-b border-foreground">
                <h2 className="text-lg">Dev Portfolio</h2>
                <nav className="flex gap-15">
                    <Link
                        to="/"
                        activeProps={{
                            className: "text-accent font-semibold",
                        }}>
                        About
                    </Link>

                    <Link
                        to="/projects"
                        activeProps={{
                            className: "text-accent font-semibold",
                        }}>
                        Projects
                    </Link>
                </nav>
            </header>
            <div className="px-20 min-h-screen bg-background">
                <Outlet />
            </div>
        </React.Fragment>
    )
}
