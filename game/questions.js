/**
 * The questions are stored in an array, 
 * and the one on a random index is used as the current question.
 */



const questions = [
    {
        question: "Whats 1+1?",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "4",
        answer: ["2"],
        image: ""
    },
    {
        question: "Whats the smallest prime number?",
        option1: "3",
        option2: "1",
        option3: "4",
        option4: "2",
        answer: ["2"],
        image: ""
    },
    {
        question: "Whats 1/8 in decimals?",
        option1: "0.125",
        option2: "0.4",
        option3: "0.115",
        option4: "0.120",
        answer: ["0.125"],
        image: ""
    },
    {
        question: "What is the Total of all angles in a triangle?",
        option1: "120",
        option2: "90",
        option3: "180",
        option4: "360",
        answer: ["180"],
        image: ""
    },
    {
        question: "What is this?",
        option1: "Kite",
        option2: "Diamond",
        option3: "Rhombus",
        option4: "Trapezium",
        answer: ["Diamond","Rhombus"],
        image: "../../Quizathon/assets/images/still/questionimage/rhombus.png"
    },
    {
        question: "What did Geoffrey Chaucer write?",
        option1: "York Tales",
        option2: "Lancaster Tales",
        option3: "Canturbury Tales",
        option4: "Winchester Tales",
        answer: ["Canturbury Tales"],
        image: ""
    },
    {
        question: "Who invades Earth in War of the Worlds?",
        option1: "The Morlocks",
        option2: "Dr. Moreau",
        option3: "The Selenites",
        option4: "The Martians",
        answer: ["The Martians"],
        image: ""
    },
    {
        question: "What is Ozymandias' title in the poem?",
        option1: "Lord of Lords",
        option2: "King of Kings",
        option3: "Master of Masters",
        option4: "The Great",
        answer: ["King of Kings"],
        image: ""
    },
    {
        question: "Who wrote Frankenstein?",
        option1: "Mary Shelly",
        option2: "Bram Stoker",
        option3: "Wilkie Collins",
        option4: "Charles Dickens",
        answer: ["Mary Shelly"],
        image: ""
    },
    {
        question: "What did this person write?",
        option1: "Tamburlaine",
        option2: "The Alchemist",
        option3: "Doctor Faustus",
        option4: "Othello",
        answer: ["Othello"],
        image: "../../Quizathon/assets/images/still/questionimage/shakespeare.jpg"
    },
    {
        question: "What transports water in plants?",
        option1: "Petals",
        option2: "Phloem",
        option3: "Xylem",
        option4: "Stoma",
        answer: ["Xylem"],
        image: ""
    },
    {
        question: "Which element is the most reactive?",
        option1: "Chromium",
        option2: "Xenon",
        option3: "Rubidium",
        option4: "Tin",
        answer: ["Rubidium"],
        image: ""
    },
    {
        question: "Which of these element is NOT a halogen?",
        option1: "Oxygen",
        option2: "Chlorine",
        option3: "Iodine",
        option4: "Astatine",
        answer: ["Oxygen"],
        image: ""
    },
    {
        question: "What is this element?",
        option1: "Phosphorus",
        option2: "Pottasium",
        option3: "Plutonium",
        option4: "Polonium",
        answer: ["Phosphorus"],
        image: "../../Quizathon/assets/images/still/questionimage/phosphorus.png"
    },
    {
        question: "Which of these is NOT an elementary particle?",
        option1: "Weird Quark",
        option2: "Photon",
        option3: "Higgs Boson",
        option4: "Muon",
        answer: ["Weird Quark"],
        image: ""
    },
    {
        question: "Which of these dinosaur is the largest?",
        option1: "Stegosaurus",
        option2: "Triceratops",
        option3: "Apatosaurus",
        option4: "T-Rex",
        answer: ["Apatosaurus"],
        image: ""
    },
    {
        question: "What is this planet?",
        option1: "Moon",
        option2: "Pluto",
        option3: "Mercury",
        option4: "Mars",
        answer: ["Mercury"],
        image: "../../Quizathon/assets/images/still/questionimage/mercury.jpg"
    },
    {
        question: "Whats the world's longest river?",
        option1: "Ganges",
        option2: "Thames",
        option3: "Nile",
        option4: "Ouse",
        answer: ["Nile"],
        image: ""
    },
    {
        question: "Whats formed when a river's meander is cut off?",
        option1: "Oxbow lake",
        option2: "Bog",
        option3: "Wash",
        option4: "Stream pool",
        answer: ["Oxbow lake"],
        image: ""
    },
    {
        question: "Which of these is NOT a name of a storm system?",
        option1: "Cyclone",
        option2: "Typhoon",
        option3: "Hurricane",
        option4: "Downburst",
        answer: ["Downburst"],
        image: ""
    },
    {
        question: "What is formed when a coastline arch collapses?",
        option1: "Slump",
        option2: "Spit",
        option3: "Stack",
        option4: "Sound",
        answer: ["Stack"],
        image: "../../Quizathon/assets/images/still/questionimage/hoy.jpg"
    },
    {
        question: "What country is this?",
        option1: "Croatia",
        option2: "Slovakia",
        option3: "Romania",
        option4: "Albania",
        answer: ["Croatia"],
        image: "../../Quizathon/assets/images/still/questionimage/croatia.png"
    },
    {
        question: "What country is this?",
        option1: "Mongolia",
        option2: "China",
        option3: "Turkmenistan",
        option4: "Oman",
        answer: ["Mongolia"],
        image: "../../Quizathon/assets/images/still/questionimage/mongolia.png"
    },
    {
        question: "What country is this?",
        option1: "Uganda",
        option2: "Kenya",
        option3: "Tanzania",
        option4: "Mozambique",
        answer: ["Uganda"],
        image: "../../Quizathon/assets/images/still/questionimage/uganda.png"
    },
    {
        question: "What country is this?",
        option1: "Panama",
        option2: "Costa Rica",
        option3: "Colombia",
        option4: "Honduras",
        answer: ["Panama"],
        image: "../../Quizathon/assets/images/still/questionimage/panama.png"
    },
    {
        question: "What country is this?",
        option1: "Argentina",
        option2: "Chile",
        option3: "Uruguay",
        option4: "Bolivia",
        answer: ["Argentina"],
        image: "../../Quizathon/assets/images/still/questionimage/argentina.png"
    },
    {
        question: "Who ruled Britain after Charles I?",
        option1: "Charles II",
        option2: "James VI",
        option3: "Oliver Cromwell",
        option4: "George I",
        answer: ["Oliver Cromwell"],
        image: ""
    },
    {
        question: "What document did King John sign in 1215?",
        option1: "Magnet Charter",
        option2: "Magna Carta",
        option3: "Declaration of rights",
        option4: "Rex Regina",
        answer: ["Magna Carta"],
        image: ""
    },
    {
        question: "Whats the currency of Australia?",
        option1: "Dollar",
        option2: "Pound",
        option3: "Euro",
        option4: "Gold",
        answer: ["Dollar"],
        image: ""
    },
    {
        question: "Which of these is NOT a moon of Jupiter?",
        option1: "Europa",
        option2: "Titan",
        option3: "Callisto",
        option4: "Ganymede",
        answer: ["Titan"],
        image: ""
    },
    {
        question: "What does the Roman numeral 'XIX' mean?",
        option1: "16",
        option2: "17",
        option3: "18",
        option4: "19",
        answer: ["19"],
        image: ""
    },
    {
        question: "Which of these is a constellation?",
        option1: "Procyon",
        option2: "Regulus",
        option3: "Triangulum",
        option4: "Acrux",
        answer: ["Triangulum"],
        image: ""
    },
    {
        question: "Who was the God of sea in Greek Mythology?",
        option1: "Neptune",
        option2: "Oceanus",
        option3: "Ceteus",
        option4: "Poseidon",
        answer: ["Poseidon"],
        image: ""
    },
    {
        question: "Who performed the 12 labours in Greek Mythology?",
        option1: "Heracles",
        option2: "Hercules",
        option3: "Perseus",
        option4: "Atlas",
        answer: ["Heracles","Hercules"],
        image: ""
    },
    {
        question: "How many US states starts with 'W'?",
        option1: "2",
        option2: "3",
        option3: "4",
        option4: "5",
        answer: ["4"],
        image: ""
    },
    {
        question: "Whats the currency of China?",
        option1: "Yen",
        option2: "Won",
        option3: "Yuan",
        option4: "Dollar",
        answer: ["Yuan"],
        image: ""
    },
    {
        question: "Who is NOT a 'Wind in the Willows' character?",
        option1: "Ratty",
        option2: "Catty",
        option3: "Mole",
        option4: "Mr Toad",
        answer: ["Catty"],
        image: ""
    },
    {
        question: "Who won the Battle of Bosworth Field?",
        option1: "Richard III",
        option2: "Henry VII",
        option3: "Edward V",
        option4: "Henry VI",
        answer: ["Henry VII"],
        image: ""
    },
    {
        question: "Whats the largest bone in humans?",
        option1: "Skull",
        option2: "Finger",
        option3: "Femur",
        option4: "Clavicle",
        answer: ["Femur"],
        image: ""
    },
    {
        question: "What city was divided by a wall from 1961?",
        option1: "Paris",
        option2: "Munich",
        option3: "Berlin",
        option4: "Zurich",
        answer: ["Berlin"],
        image: ""
    },
    {
        question: "How many sides does a rectangle have?",
        option1: "2",
        option2: "3",
        option3: "4",
        option4: "5",
        answer: ["4"],
        image: ""
    },
    {
        question: "Which of these is the same as D Sharp note?",
        option1: "E Flat",
        option2: "D Flat",
        option3: "E Sharp",
        option4: "F Sharp",
        answer: ["E Flat"],
        image: ""
    },
    {
        question: "Which of these is not the son of Osiris?",
        option1: "Set",
        option2: "Ra",
        option3: "Horus",
        option4: "Bastet",
        answer: ["Ra","Bastet"],
        image: ""
    },
    {
        question: "Whats represented by the Omega Symbol?",
        option1: "Resistance",
        option2: "Current",
        option3: "Voltage",
        option4: "Ampere",
        answer: ["Resistance"],
        image: ""
    },
    {
        question: "What angle measures 45 degrees?",
        option1: "Acute",
        option2: "Right",
        option3: "Obtuse",
        option4: "True",
        answer: ["Acute"],
        image: ""
    },
    {
        question: "Which dinosaur has 3 horns?",
        option1: "Triceratops",
        option2: "Ankylosaurus",
        option3: "Raptor",
        option4: "Stegosaurus",
        answer: ["Triceratops"],
        image: ""
    },
    {
        question: "Which of these oceans borders Spain?",
        option1: "Indian",
        option2: "Atlantic",
        option3: "Pacific",
        option4: "North",
        answer: ["Atlantic"],
        image: ""
    },
    {
        question: "What number does 'Kilo' stand for?",
        option1: "100",
        option2: "1,000",
        option3: "10,000",
        option4: "10",
        answer: ["1,000"],
        image: ""
    },
    {
        question: "Which of these is NOT an insect?",
        option1: "Spider",
        option2: "Dragonfly",
        option3: "Moth",
        option4: "Wasps",
        answer: ["Spider"],
        image: ""
    },
    {
        question: "What powers up Popeye?",
        option1: "Spinach",
        option2: "Lettuce",
        option3: "Cabbage",
        option4: "Soup",
        answer: ["Spinach"],
        image: ""
    },
    {
        question: "Who built the Great Pyramid?",
        option1: "Khufu",
        option2: "Tutankhamen",
        option3: "Ramesses II",
        option4: "Cleopatra",
        answer: ["Khufu"],
        image: "../../Quizathon/assets/images/still/questionimage/pyramid.jpg"
    },
    {
        question: "What kind of establishment is Freddy Fazbear's?",
        option1: "A pizzeria",
        option2: "An arcade",
        option3: "A Candy shop",
        option4: "Burger shop",
        answer: ["A pizzeria"],
        image: ""
    },
    {
        question: "What is promoised as a reward in Portal?",
        option1: "A Cake",
        option2: "A Pizza",
        option3: "An ice cream",
        option4: "A candy",
        answer: ["A Cake"],
        image: ""
    },
    {
        question: "How many suns does Tatooine have?",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "0",
        answer: ["2"],
        image: ""
    },
    {
        question: "Which of these is a Trigonometric function?",
        option1: "Sin",
        option2: "Cos",
        option3: "Set",
        option4: "Union",
        answer: ["Sin","Cos"],
        image: ""
    },
    {
        question: "What colour is the Central Line on the Tube Map?",
        option1: "Red",
        option2: "Green",
        option3: "Orange",
        option4: "Yellow",
        answer: ["Red"],
        image: ""
    },
    {
        question: "Which of these is a Mr. Men character?",
        option1: "Mr. Mean",
        option2: "Mr. Sneeze",
        option3: "Mr. Polite",
        option4: "Mr. Big",
        answer: ["Mr. Mean","Mr. Sneeze"],
        image: ""
    },
    {
        question: "Which of these birds is the smallest?",
        option1: "Hummingbird",
        option2: "Pigeon",
        option3: "Yellowhammer",
        option4: "Goldfinch",
        answer: ["Hummingbird"],
        image: ""
    },
    {
        question: "What was the Sega Mega Drive's other name?",
        option1: "Sega Genesis",
        option2: "Sega Saturn",
        option3: "Dreamcast",
        option4: "Game Gear",
        answer: ["Sega Genesis"],
        image: ""
    },
    {
        question: "What phrase was the origin of the Dandelion name?",
        option1: "Lion's Tooth",
        option2: "Lion's Mane",
        option3: "Lion's Dandruff",
        option4: "Lion's Flower",
        answer: ["Lion's Tooth"],
        image: "../../Quizathon/assets/images/still/questionimage/dandelion.jpg"
    },











]



