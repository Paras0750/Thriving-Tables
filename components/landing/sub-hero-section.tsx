

// We help you attract new customers, build strong relationships, and deliver an exceptional dining experience. 

import WordRotate from "../ui/word-rotate";


// [Body 1]
// Is your restaurant struggling?
// Having trouble finding new customers?
// Need a break from constant stress?
// Want to increase revenue and profit?
// Worried about paying your bills?

const words = [
    "Is your restaurant struggling?",
    "Having trouble finding new customers?",
    "Need a break from constant stress?",
    "Want to increase revenue and profit?",
    "Worried about paying your bills?",
]
export default function SubHeroSection() {
    return (
        <section
            className="mt-60 text-center mx-auto max-w-[80rem] px-6 md:px-8"
        >
            <WordRotate
                className="text-4xl font-bold text-black dark:text-white"
                words={words}
            />
        </section>
    )
}
