import { allProjects } from 'contentlayer/generated'
import Link from 'next/link'

export const metadata = {
    title: 'Portfolio',
    description: 'My projects and work.',
}

export default function PortfolioPage() {
    return (
        <div className="max-w-5xl mx-auto py-10 px-6">
            <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allProjects.map((project) => (
                    <div key={project._id} className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden flex flex-col">
                        {project.image && (
                            <div className="bg-neutral-100 dark:bg-neutral-900 h-48 flex items-center justify-center text-neutral-400">
                                {/* Placeholder for actual image rendering given invalid path handling might be needed */}
                                <span className="text-sm">Image: {project.image}</span>
                            </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-1">
                                {project.description}
                            </p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-medium mt-auto inline-block">
                                    View Project &rarr;
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
