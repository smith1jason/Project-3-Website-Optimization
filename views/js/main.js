function getAdj(e) {
    switch (e) {
        case "dark":
            var t = ["dark", "morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", "morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", "dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
            return t;
        case "color":
            var n = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", "maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta", "chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", "raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
            return n;
        case "whimsical":
            var r = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing", "hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy", "cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", "brainwashed"];
            return r;
        case "shiny":
            var i = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", "starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy", "metallic"];
            return i;
        case "noisy":
            var s = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", "orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling", "yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", "humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
            return s;
        case "apocalyptic":
            var o = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", "radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying", "rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
            return o;
        case "insulting":
            var u = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", "gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous", "boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", "lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed", "disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", "horrible", "syncophantic", "unhelpful", "bootlicking"];
            return u;
        case "praise":
            var a = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful", "talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous", "dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", "noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", "majestic", "grand", "stunning"];
            return a;
        case "scientific":
            var f = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
            return f;
        default:
            var f = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", "innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", "extinct", "galactic"];
            return f
    }
}

function getNoun(e) {
    switch (e) {
        case "animals":
            var t = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", "wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", "raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", "gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", "hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", "butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", "rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
            return t;
        case "profession":
            var n = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic", "comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", "senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot", "priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
            return n;
        case "fantasy":
            var r = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", "knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", "tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
            return r;
        case "music":
            var i = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", "harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone", "bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor", "singer"];
            return i;
        case "horror":
            var s = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", "vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", "poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath", "fiend", "satanist", "moon", "fullMoon"];
            return s;
        case "gross":
            var o = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", "centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", "fluid", "moisture", "garbage", "trash", "bug"];
            return o;
        case "everyday":
            var u = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV", "book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen", "garden", "school", "wallet", "bottle"];
            return u;
        case "jewelry":
            var a = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", "anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin", "costume", "ornament", "treasure"];
            return a;
        case "places":
            var f = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood", "city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery", "shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
            return f;
        case "scifi":
            var l = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return l;
        default:
            var l = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", "computer", "future", "timeMachine", "wormHole", "timeTraveler", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars", "quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus", "universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
            return l
    }
}

function generator(e, t) {
    var n = getAdj(e);
    var r = getNoun(t);
    var i = parseInt(Math.random() * n.length);
    var s = parseInt(Math.random() * r.length);
    var o = "The " + n[i].capitalize() + " " + r[s].capitalize();
    return o
}

function randomName() {
    var e = parseInt(Math.random() * adjectives.length);
    var t = parseInt(Math.random() * nouns.length);
    return generator(adjectives[e], nouns[t])
}

function logAverageFrame(e) {
    var t = e.length;
    var n = 0;
    for (var r = t - 1; r > t - 11; r--) {
        n = n + e[r].duration
    }
    console.log("Average time to generate last 10 frames: " + n / 10 + "ms")
}

function updatePositions() {
    frame++;
    window.performance.mark("mark_start_frame");
    var e = document.querySelectorAll(".mover");
    for (var t = 0; t < e.length; t++) {
        var n = Math.sin(document.body.scrollTop / 1250 + t % 5);
        e[t].style.left = e[t].basicLeft + 100 * n + "px"
    }
    window.performance.mark("mark_end_frame");
    window.performance.measure("measure_frame_duration", "mark_start_frame", "mark_end_frame");
    if (frame % 10 === 0) {
        var r = window.performance.getEntriesByName("measure_frame_duration");
        logAverageFrame(r)
    }
}
var pizzaIngredients = {};
pizzaIngredients.meats = ["Pepperoni", "Sausage", "Fennel Sausage", "Spicy Sausage", "Chicken", "BBQ Chicken", "Chorizo", "Chicken Andouille", "Salami", "Tofu", "Bacon", "Canadian Bacon", "Proscuitto", "Italian Sausage", "Ground Beef", "Anchovies", "Turkey", "Ham", "Venison", "Lamb", "Duck", "Soylent Green", "Carne Asada", "Soppressata Picante", "Coppa", "Pancetta", "Bresola", "Lox", "Guanciale", "Chili", "Beef Jerky", "Pastrami", "Kielbasa", "Scallops", "Filet Mignon"];
pizzaIngredients.nonMeats = ["White Onions", "Red Onions", "Sauteed Onions", "Green Peppers", "Red Peppers", "Banana Peppers", "Ghost Peppers", "Habanero Peppers", "Jalapeno Peppers", "Stuffed Peppers", "Spinach", "Tomatoes", "Pineapple", "Pear Slices", "Apple Slices", "Mushrooms", "Arugula", "Basil", "Fennel", "Rosemary", "Cilantro", "Avocado", "Guacamole", "Salsa", "Swiss Chard", "Kale", "Sun Dried Tomatoes", "Walnuts", "Artichoke", "Asparagus", "Caramelized Onions", "Mango", "Garlic", "Olives", "Cauliflower", "Polenta", "Fried Egg", "Zucchini", "Hummus"];
pizzaIngredients.cheeses = ["American Cheese", "Swiss Cheese", "Goat Cheese", "Mozzarella Cheese", "Parmesean Cheese", "Velveeta Cheese", "Gouda Cheese", "Muenster Cheese", "Applewood Cheese", "Asiago Cheese", "Bleu Cheese", "Boursin Cheese", "Brie Cheese", "Cheddar Cheese", "Chevre Cheese", "Havarti Cheese", "Jack Cheese", "Pepper Jack Cheese", "Gruyere Cheese", "Limberger Cheese", "Manchego Cheese", "Marscapone Cheese", "Pecorino Cheese", "Provolone Cheese", "Queso Cheese", "Roquefort Cheese", "Romano Cheese", "Ricotta Cheese", "Smoked Gouda"];
pizzaIngredients.sauces = ["Red Sauce", "Marinara", "BBQ Sauce", "No Sauce", "Hot Sauce"];
pizzaIngredients.crusts = ["White Crust", "Whole Wheat Crust", "Flatbread Crust", "Stuffed Crust"];
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
};
var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];
var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];
var selectRandomMeat = function() {
    var e = pizzaIngredients.meats[Math.floor(Math.random() * pizzaIngredients.meats.length)];
    return e
};
var selectRandomNonMeat = function() {
    var e = pizzaIngredients.nonMeats[Math.floor(Math.random() * pizzaIngredients.nonMeats.length)];
    return e
};
var selectRandomCheese = function() {
    var e = pizzaIngredients.cheeses[Math.floor(Math.random() * pizzaIngredients.cheeses.length)];
    return e
};
var selectRandomSauce = function() {
    var e = pizzaIngredients.sauces[Math.floor(Math.random() * pizzaIngredients.sauces.length)];
    return e
};
var selectRandomCrust = function() {
    var e = pizzaIngredients.crusts[Math.floor(Math.random() * pizzaIngredients.crusts.length)];
    return e
};
var ingredientItemizer = function(e) {
    return "<li>" + e + "</li>"
};
var makeRandomPizza = function() {
    var e = "";
    var t = Math.floor(Math.random() * 4);
    var n = Math.floor(Math.random() * 3);
    var r = Math.floor(Math.random() * 2);
    for (var i = 0; i < t; i++) {
        e = e + ingredientItemizer(selectRandomMeat())
    }
    for (var i = 0; i < n; i++) {
        e = e + ingredientItemizer(selectRandomNonMeat())
    }
    for (var i = 0; i < r; i++) {
        e = e + ingredientItemizer(selectRandomCheese())
    }
    e = e + ingredientItemizer(selectRandomSauce());
    e = e + ingredientItemizer(selectRandomCrust());
    return e
};
var pizzaElementGenerator = function(e) {
    var t, n, r, i, s, o;
    t = document.createElement("div");
    n = document.createElement("div");
    r = document.createElement("img");
    i = document.createElement("div");
    t.classList.add("randomPizzaContainer");
    t.style.width = "33.33%";
    t.style.height = "325px";
    t.id = "pizza" + e;
    n.classList.add("col-md-6");
    r.src = "images/pizza.png";
    r.classList.add("img-responsive");
    n.appendChild(r);
    t.appendChild(n);
    i.classList.add("col-md-6");
    s = document.createElement("h4");
    s.innerHTML = randomName();
    i.appendChild(s);
    o = document.createElement("ul");
    o.innerHTML = makeRandomPizza();
    i.appendChild(o);
    t.appendChild(i);
    return t
};
var resizePizzas = function(e) {
    function t(e) {
        switch (e) {
            case "1":
                document.querySelector("#pizzaSize").innerHTML = "Small";
                return;
            case "2":
                document.querySelector("#pizzaSize").innerHTML = "Medium";
                return;
            case "3":
                document.querySelector("#pizzaSize").innerHTML = "Large";
                return;
            default:
                console.log("bug in changeSliderLabel")
        }
    }

    function n(e, t) {
        function s(e) {
            switch (e) {
                case "1":
                    return .25;
                case "2":
                    return .3333;
                case "3":
                    return .5;
                default:
                    console.log("bug in sizeSwitcher")
            }
        }
        var n = e.offsetWidth;
        var r = document.querySelector("#randomPizzas").offsetWidth;
        var i = n / r;
        var o = s(t);
        var u = (o - i) * r;
        return u
    }

    function r(e) {
        for (var t = 0; t < document.querySelectorAll(".randomPizzaContainer").length; t++) {
            var r = n(document.querySelectorAll(".randomPizzaContainer")[t], e);
            var i = document.querySelectorAll(".randomPizzaContainer")[t].offsetWidth + r + "px";
            document.querySelectorAll(".randomPizzaContainer")[t].style.width = i
        }
    }
    window.performance.mark("mark_start_resize");
    t(e);
    r(e);
    window.performance.mark("mark_end_resize");
    window.performance.measure("measure_pizza_resize", "mark_start_resize", "mark_end_resize");
    var i = window.performance.getEntriesByName("measure_pizza_resize");
    console.log("Time to resize pizzas: " + i[0].duration + "ms")
};
window.performance.mark("mark_start_generating");
for (var i = 2; i < 100; i++) {
    var pizzasDiv = document.getElementById("randomPizzas");
    pizzasDiv.appendChild(pizzaElementGenerator(i))
}
window.performance.mark("mark_end_generating");
window.performance.measure("measure_pizza_generation", "mark_start_generating", "mark_end_generating");
var timeToGenerate = window.performance.getEntriesByName("measure_pizza_generation");
console.log("Time to generate pizzas on load: " + timeToGenerate[0].duration + "ms");
var frame = 0;
window.addEventListener("scroll", updatePositions);
document.addEventListener("DOMContentLoaded", function() {
    var e = 8;
    var t = 256;
    for (var n = 0; n < 200; n++) {
        var r = document.createElement("img");
        r.className = "mover";
        r.src = "images/pizza.png";
        r.style.height = "100px";
        r.style.width = "73.333px";
        r.basicLeft = n % e * t;
        r.style.top = Math.floor(n / e) * t + "px";
        document.querySelector("#movingPizzas1").appendChild(r)
    }
    updatePositions()
})