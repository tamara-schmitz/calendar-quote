function getRandomElementfromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
const backgroundColors = [
    "#b00b69", //boobs :3
    "#9B5DE5", //purple
    "#FF006E", //red
    "#0C322C", //pine green
    "#30BA78", //jungle green
    "#192072", //midnight blue
    "#2453FF", //waterhole blue
    "#FE7C3F"  //Persimmon
];

// A quote is built from three parts: beginning, middle and end-
const beginning_quote = [
    "According to studies you should",
    "Anyone can",
    "As an average human you should",
    "At your age you should",
    "Everyone should",
    "I think you should",
    "It might not be a bad idea to",
    "It would be great if you could",
    "Like anyone else you should",
    "People like you should",
    "Under some circumstance you must",
    "You are allowed to",
    "Your inner child wants you to",
    "Your subconciousness wants you to",
    "Your mum would be glad to see you",
    "Seize your moment and",
    "Get out of your chair to",
    "Maybe it is time to",
    "Sometimes it's just nice to",
    "Perhaps you would enjoy to",
    "You know the rules, so",
    "But next time 'round, I'm gonna",
    "Whenever you need somebody, go",
    "You don't have to say you want to",
    "It's much too late for you to",
    "Your heart's been aching to",
    "You're too shy to say that you want to",
    "Inside, we both know what's been going on when you",
    "Consider:",
    "What if you",
    "Cats should",
    "Whenever you feel eepy",
    "A lil snoozer may want to"
]

//an activity
const middle_quote = [
    "bake a cake",
    "build a sand castle",
    "call a friend",
    "cook",
    "dance",
    "do yoga",
    "go to the cinema",
    "meditate",
    "paint a picture",
    "pick up trash",
    "play video games",
    "relax",
    "sing a folk song",
    "sleep",
    "take a nap",
    "take your time",
    "visit an animal sanctuary",
    "watch a movie",
    "write a love poem",
    "be kind to a stranger",
    "compliment someone's achievement",
    "eat your favourite dish",
    "gift your neighbour a leftover",
    "drink a warm cup of coffee",
    "take a stroll",
    "tell someone how you are feeling",
    "give it up",
    "spend some time with me",
    "change your ways",
    "do a full commitment",
    "know what's been going on",
    "tell someone how you're feeling",
    "make them understand",
    "keep holding on",
    "care about things that people say",
    "help out a colleague",
    "share your life experience and advice",
    "meow",
    "be a cat",
    "give a lil cat some pat pats",
    "meowing in the office",
    "get tuckered into a comfy bed and be a lil snoozer"
]

// time, place or adverb
const end_quote = [
    "24/7",
    "anytime",
    "at sunrise",
    "at the train station",
    "at work",
    "at your birthday",
    "five times a week",
    "in the furniture store",
    "in the church",
    "in the moonlight",
    "in the rain",
    "next week",
    "now",
    "on mondays",
    "outside",
    "tomorrow",
    "in the morning",
    "at lunchtime",
    "for your favourite holiday",
    "gently",
    "ocassionally",
    "seriously",
    "smoothly",
    "without any doubts",
    "the best way you can",
    "in all honesty",
    "whenever you need somebody",
    "when you need someone to lean on",
    "each and every day",
    "is what I'm thinking of",
    "once you know what's been going on",
    "as little treat 🥺",
    "for your conscience",
    "on caturday"
];

function getRandomQuote() {
    var quote = getRandomElementfromArray(beginning_quote).trim() + ' '
        + getRandomElementfromArray(middle_quote).trim();
    if (Math.random() < 0.42) {
        quote += ' ' + getRandomElementfromArray(end_quote).trim();
    }
    quote += '.';
    return quote;
}

document.body.style.background = getRandomElementfromArray(backgroundColors);

document.querySelector("#quote").innerHTML = getRandomQuote();
