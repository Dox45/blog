
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-start max-w-2xl mx-auto px-6 py-12 font-sans">
            <main className="space-y-8">
                <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    Hi — welcome.
                </h1>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    I'm Chima Emmanuel.
                    This is my personal website. I use it to write about things that interest me, mostly technical ideas, experiments, and code. I code math sometimes, I guess.
                </p>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    Feel free to explore the <Link href="/blog" className="underline decoration-1 underline-offset-4 hover:text-foreground transition-colors">blog</Link>.
                </p>
            </main>
        </div>
    );
}
