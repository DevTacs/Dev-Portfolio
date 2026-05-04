import {createFileRoute} from "@tanstack/react-router"

export const Route = createFileRoute("/projects/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="max-w-4xl mx-auto py-10 space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-accent">Projects</h1>
                <p className="text-gray-400">
                    A collection of full-stack applications I’ve built using
                    modern web technologies.
                </p>
            </div>

            {/* PROJECT CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-lg border border-gray-800 bg-[#111827] space-y-4 hover:border-gray-700 transition">
                    <a
                        className="text-xl font-semibold text-blue-400 underline"
                        href="https://aninet-client.onrender.com/anime/browse"
                        target="_blank">
                        AniNet - Anime Streaming App
                    </a>

                    {/* DESCRIPTION */}
                    <p className="text-gray-400 text-sm mt-2">
                        An anime streaming platform where users can watch videos
                        of their favorite animes together with their friends,
                        love ones and bookmark them for later.
                    </p>

                    {/* FEATURES + TECH */}
                    <div className="grid gap-4 text-sm">
                        <div>
                            <h4 className="font-medium text-gray-200 mb-2">
                                Features
                            </h4>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                <li>OAuth (Google + local authentication)</li>
                                <li>Search for animes</li>
                                <li>Bookmark anime</li>
                                <li>Responsive UI for mobile and desktop</li>
                                <li>Video embedding via external API</li>
                                <li>Watch together via invitation links</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-gray-200 mb-2">
                                Tech Stack
                            </h4>
                            <ul className="flex flex-wrap gap-2 text-gray-400">
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    React
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    TypeScript
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    Tailwind
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    Shadcn
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    Passport
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    Express
                                </li>
                                <li className="px-2 py-1 bg-[#0B0F19] rounded text-xs">
                                    MongoDB
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
