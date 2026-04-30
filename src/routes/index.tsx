import {Button} from "@/components/ui/button"
import {createFileRoute} from "@tanstack/react-router"
import {Mail} from "lucide-react"

import {FaReact, FaNodeJs, FaGithub, FaGitAlt, FaDatabase} from "react-icons/fa"
import {
    SiVite,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
            {/* HERO */}
            <section className="space-y-5">
                <h1 className="text-3xl font-bold text-accent">
                    Hello,
                    <span className="text-foreground">
                        I'm Ramil R. Tacang Jr.
                    </span>
                </h1>

                {/* CONTACT */}
                <div className="text-sm text-gray-500 space-y-2">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=act.rtacangjr@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline">
                            act.rtacangjr@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaGithub size={16} />
                        <a
                            href="https://github.com/DevTacs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline">
                            github.com/DevTacs
                        </a>
                    </div>
                </div>

                <p className=" leading-relaxed text-foreground">
                    I’m a fresh graduate and a full-stack web developer
                    specializing in the MERN stack. I build responsive,
                    user-friendly applications and develop secure backend
                    systems with authentication, REST APIs, and database design.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-accent">
                    What I Can Do
                </h2>

                <ul className="list-disc list-inside space-y-1 text-foreground">
                    <li>Build full-stack web applications using MERN</li>
                    <li>Design and develop RESTful APIs</li>
                    <li>
                        Implement authentication and authorization (JWT,
                        HttpOnly Cookies)
                    </li>
                    <li>Manage databases (MongoDB, MSSQL)</li>
                    <li>Create responsive UI with React and Tailwind</li>
                </ul>
            </section>

            <section className="space-y-5">
                <h2 className="text-xl font-semibold text-accent">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-2 gap-8 text-foreground">
                    {/* FRONTEND */}
                    <div className="">
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                            Frontend
                        </h4>

                        <div className="flex gap-3 text-2xl">
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <FaReact className="text-blue-500 text-2xl" />
                                <span className="text-xs">React</span>
                            </Button>

                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <SiVite className="text-purple-500 text-2xl" />
                                <span className="text-xs">Vite</span>
                            </Button>

                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <SiTailwindcss className="text-sky-400 text-2xl" />
                                <span className="text-xs">Tailwind</span>
                            </Button>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                            Backend
                        </h4>

                        <div className="flex gap-3 text-2xl">
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <FaNodeJs className="text-green-600 text-2xl" />
                                <span className="text-xs">Node.js</span>
                            </Button>
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <SiExpress className="text-2xl" />
                                <span className="text-xs">Express</span>
                            </Button>
                        </div>
                    </div>

                    {/* DATABASE */}
                    <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                            Database
                        </h4>

                        <div className="flex gap-3 text-2xl">
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <SiMongodb className="text-green-500 text-2xl" />
                                <span className="text-xs">MongoDB</span>
                            </Button>
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <FaDatabase className="text-red-500 text-2xl" />
                                <span className="text-xs">MSSQL</span>
                            </Button>
                        </div>
                    </div>

                    {/* TOOLS */}
                    <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                            Tools
                        </h4>

                        <div className="flex gap-3 text-2xl">
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <FaGithub className="text-2xl" />
                                <span className="text-xs">GitHub</span>
                            </Button>
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <FaGitAlt className="text-orange-500 text-2xl" />
                                <span className="text-xs">Git</span>
                            </Button>
                            <Button className="cursor-pointer flex flex-col items-center gap-1 px-3 py-2">
                                <SiPostman className="text-orange-400 text-2xl" />
                                <span className="text-xs">Postman</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
