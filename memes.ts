export type Youtube = {
  v: string;
  start: number;
  end: number;
};

export type Meme = {
  date?: string;
  url: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  cite?: string;
  youtube?: Youtube;
  customHTML?: boolean;
  bbc?: {
    link: string;
  };
  alsoSee?: Item[];
  footnotes?: Item[];
};

export type Item = {
  text: string;
  link: string;
};

export const getLongTitle = (meme: Meme) => {
  const { title, bbc, youtube, customHTML } = meme;
  if (bbc) {
    return `${title} [2 mins video]`;
  } else if (youtube) {
    const start = youtube.start;
    const end = youtube.end;
    const length = end - start;
    const mins = Math.round(length / 60);
    const sec = length % 60;
    let denominator;
    if (mins > 1) {
      denominator = " mins";
    } else if (mins > 0) {
      denominator = " min";
    } else {
      denominator = " sec";
    }

    return `${title} [${mins ? mins + denominator : sec + denominator} video]`;
  } else {
    return title;
  }
};

const memes: Meme[] = [
  {
    url: "boris-johnsons-work-experience",
    title:
      "Is it just me? Or does Boris Johnson increasingly look like he's doing a lot of work experience in case he looses his job?",
    image:
      "https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2020/07/2.54703083-300x169.jpg",
    width: 300,
    height: 169,
    alt: "He should try being a professional politician next.",
    customHTML: true,
  },
  {
    url: "nanoseconds",
    title: "Nanoseconds",
    image: "https://img.youtube.com/vi/9eyFDBPk4Yw/0.jpg",
    width: 480,
    height: 360,
    alt: "Grace hopper on chat show Letterman (late night TV old footage) holds a peice of wire that demonstrates the maximum distance an electron can travel in a nanosecond.",
    youtube: {
      v: "lGTEUtS5H7I",
      start: 1 * 60 + 59,
      end: 2 * 60 + 26,
    },
  },
  {
    url: "this-lifestyle-is-inhumane",
    title: "This lifestyle is inhumane",
    image:
      "https://www.researchgate.net/figure/Something-somewhere-went-terribly-wrong-image-by-an-unknown-artist-Localoaf-2011_fig3_267398000/download",
    width: 578,
    height: 200,
    alt: "Pictures of the evolution of a human man, in a historical painted style, from hunched ape to standing naked hunter, back to man hunched over a computer naked.",
    youtube: {
      v: "agOdP2Bmieg",
      start: 13 * 60 + 5,
      end: 19 * 60 + 43,
    },
    caption:
      "‟this style of knowledge work, this lifestyle, is inhumane” - Bret Victor (ex-Apple inventor)",
    footnotes: [
      {
        text: "‟Something, somewhere went terribly wrong” image by an unknown artist (Localoaf, 2011) cited researchgate.net 2021",
        link: "https://www.researchgate.net/figure/Something-somewhere-went-terribly-wrong-image-by-an-unknown-artist-Localoaf-2011_fig3_267398000",
      },
      {
        text: "Full 1 hour talk video: The Humane Representation of Thought by Bret Victor",
        link: "https://www.youtube.com/watch?v=agOdP2Bmieg",
      },
      {
        text: "(He's an ex-Apple Human-Interface inventor in the Future-Interface Team)",
        link: "http://worrydream.com/#!/Apple",
      },
    ],
  },
  {
    url: "squeezed-apple",
    title: "Squeezed Apple",
    image: "https://img.youtube.com/vi/1s1uWo1_bzg/hqdefault.jpg",
    width: 1280,
    height: 720,
    alt: "Tim Cook being asked an uncomfortable question in a political house hearing about why developers can only sell apps throug the app store. Tim Looks like he's squeezing out a tough turd.",
    youtube: {
      v: "1s1uWo1_bzg",
      start: 1 * 60 * 60 + 14 * 60 + 6,
      end: 1 * 60 * 60 + 14 * 60 + 27,
    },
    caption: "Tim Cook squeezes one out",
    footnotes: [
      {
        text: "Beavis",
        link: "https://en.wikipedia.org/wiki/File:Beavis_BeavisandButtHead.png#/media/File:Beavis_BeavisandButtHead.png",
      },
    ],
  },
  {
    date: "2021-03-13T12:25:00.878Z",
    url: "good-news",
    title: "The world is actually getting better",
    image: "https://img.youtube.com/vi/jbkSRLYSojo/hq2.jpg",
    width: 480,
    height: 360,
    alt: "Animated graph showing the world is actually getting richer and healthier since presented by Hans Rosling.",
    youtube: {
      v: "jbkSRLYSojo",
      start: 2 * 60 + 49,
      end: 3 * 60 + 25,
    },
    caption: "Shame bad news sells",
    alsoSee: [
      {
        text: "Bill Gate's Favourite book of all time is Steven Pinker's 'Enlightenment Now'. There's a reason why. [3 min video]",
        link: "https://www.youtube.com/watch?v=ABVVDSgihYs",
      },
      {
        text: "Hans Rosling full talk on the best stats you've never seen [20 min video]",
        link: "https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen#t-215279",
      },
    ],
    footnotes: [
      {
        text: "Source",
        link: "https://www.bbc.co.uk/programmes/b00wgq0l",
      },
    ],
  },
  {
    date: "2021-02-17T12:56:57.878Z",
    url: "dissociation",
    title: "How I feel when filling out questionnaires",
    image: "https://img.youtube.com/vi/OqSg7WO4tT4/hq1.jpg",
    width: 480,
    height: 360,
    alt: "Tom Hanks in Saving Private Ryan - storming the beach in during D-Day spinning out in the chaos and stress.",
    youtube: {
      v: "OqSg7WO4tT4",
      start: 0,
      end: 0 * 60 + 13,
    },
    footnotes: [
      {
        text: "Video: Tom Hanks in Saving Private Ryan (1998) storming the beach during D-Day (Normandy in the second World War retaking France from the Nazis.) He's trying to anyway.",
        link: "https://www.imdb.com/title/tt0120815/",
      },
    ],
  },
  {
    url: "banter-is-classless",
    title: "Banter is classless",
    image: "https://img.youtube.com/vi/7QINKUsxiHA/hq2.jpg",
    width: 480,
    height: 360,
    alt: "An upper class woman from Chelsea has a date with a working class man from London. They both enjoy each other's 'banter'.",
    youtube: {
      v: "7QINKUsxiHA",
      start: 1 * 60 + 58,
      end: 2 * 60 + 22,
    },
    caption: "This sums up everything that is right and wrong about 'banter'",
  },
  {
    url: "how-many-computer-geeks-to-change-a-light-bulb",
    title: "How many computer geeks does it take to change a light bulb?",
    image: "https://i.imgflip.com/4reggs.jpg",
    width: 3024,
    height: 3024,
    alt: "Light bulb. Title reads: How many computer geeks does it take to change a light bulb? One, but I take days connecting it to the internet to save time flicking the switch. louiechristie.com © 2020",
    caption:
      "... one, but I take days connecting it to the internet to save time flicking the switch 💡",
  },
  {
    url: "home-working-space-saver-bed",
    title: "Home working space saver bed",
    image: "https://img.youtube.com/vi/UOHI8qdZkH8/hq1.jpg",
    width: 480,
    height: 360,
    alt: "Muppets sat on a murphy space saver hideaway bed. It folds up with them in it.",
    youtube: {
      v: "UOHI8qdZkH8",
      start: 2 * 60 + 2,
      end: 2 * 60 + 17,
    },
  },
  {
    url: "traditional-family",
    title: "Bill Hicks on traditional families leaves producer speechless",
    image: "https://img.youtube.com/vi/n-szFZ3s4tc/hq1.jpg",
    width: 480,
    height: 360,
    alt: "Bill Hicks in a pub, old film footage",
    youtube: {
      v: "n-szFZ3s4tc",
      start: 1 * 60,
      end: 2 * 60 + 37,
    },
  },
  {
    url: "finland-happy",
    title: "How the Finnish are world happiest",
    image: "https://img.youtube.com/vi/9FPU4F-Ajh8/0.jpg",
    width: 480,
    height: 360,
    alt: "Woman in hat and winter clothes (looks like skiing type clothes) sits at a table in the snow, she looks unhappy.",
    caption:
      "\"When you walk on the streets in Finland, people don't seem to be particularly happy, and I would actually think that might contribute positively to our sense of satisfaction... if you live among people where everyone's kind of like advertising their own happiness, like telling 'hey, look at me how happy I am' that might actually make you like more sad.\" - Frank Martela PhD Psychology, Aalto University",
    youtube: {
      v: "9FPU4F-Ajh8",
      start: 217,
      end: 240,
    },
  },
  {
    url: "face-masks",
    title: "If you feel that face masks don't protect you...",
    image: "https://img.youtube.com/vi/8IjXzadiNaA/0.jpg",
    width: 480,
    height: 360,
    alt: "World map with red dots all over it. USA is particularly covered in red dots. Title over the map in big letters reads 'THIS WEEK IN VIROLOGY #673 WAKE UP AND SMELL THE PANDEMIC'",
    caption:
      "‘... then the next time you have surgery tell your surgical team not to wear face masks’ - Vincent Racaniello, Professor of Immunology at Columbia University",
    youtube: {
      v: "8IjXzadiNaA",
      start: 8314,
      end: 8331,
    },
    footnotes: [
      {
        text: "As I was making this (during the 2020 pandemic) some fucking muppets interrupted selling door-to-door, one with a mask that didn't cover her nose. 😡",
        link: "https://twitter.com/louiechristie/status/1223012411172622340?s=20",
      },
    ],
  },
  {
    url: "wasting-your-life",
    title: "Wasting Your Life",
    image: "https://img.youtube.com/vi/TVlIbE0dSgQ/hq1.jpg",
    width: 480,
    height: 360,
    alt: "Alan Partridge taking a phone call while sitting on bed in a hotel bedroom. On the chest of draws in front of him is a portrait of David Hasselhoff",
    caption: "Alan Partridge talks to his son Fernando.",
    youtube: {
      v: "TVlIbE0dSgQ",
      start: 16,
      end: 25,
    },
  },
  {
    url: "valuable-lesson",
    title: "Valuable Lesson",
    image: "https://i.imgflip.com/447g00.jpg",
    width: 500,
    height: 500,
    alt: "Bearded man (Louie Christie) in a bubble bath smirking. Text reads: 'I learned a valuable lesson today... Don’t eat baked beans, before a bath'",
    caption:
      "I learned a valuable lesson today... Don’t eat baked beans, before a bath. 🛁 😬",
  },
  {
    url: "bob-monkhouses-joke-book",
    title: "Bob Monkhouse's Joke Book",
    image: "https://ichef.bbci.co.uk/images/ic/640x360/p08mm605.jpg",
    width: 640,
    height: 360,
    alt: "Black and white photo of young Bob Monkhouse. Bob is holding a phone and grinning inanely",
    bbc: {
      link: "https://www.bbc.co.uk/iplayer/episode/b00x9b7w/the-secret-life-of-bob-monkhouse#t=49m27s,",
    },
  },
  {
    url: "the-only-two-things-you-control",
    title: "The Only Two Things You Control",
    image: "https://img.youtube.com/vi/yAqijFxTvaM/hq3.jpg",
    width: 480,
    height: 360,
    alt: "Derren Brown with talking in a room with a bookcase behind him.",
    youtube: {
      v: "yAqijFxTvaM",
      start: 164,
      end: 230,
    },
  },
  {
    url: "resusci-annie-the-musical",
    title: "Resusci Annie The Musical",
    image: "https://img.youtube.com/vi/AZskwWOr5xs/hq3.jpg",
    width: 480,
    height: 360,
    alt: "A woman and a man on a stage. A title overlay says 'Anne is the most kissed face of all time'",
    youtube: {
      v: "AZskwWOr5xs",
      start: 444,
      end: 455,
    },
  },
  {
    url: "time-management",
    title: "Time Management",
    image:
      "https://www.louiechristie.com/images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1307.jpg",
    width: 1307,
    height: 980,
    alt: "A cube hessian storage box with post-it notes in corners. One says 'WIN WIN'",
    customHTML: true,
  },
  {
    url: "best-man",
    title: "Best Man",
    image: "https://img.youtube.com/vi/zFxzw7p5u8U/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "Rowan Atikinson in a shit, tie and black trousers on a stage.",
    youtube: {
      v: "zFxzw7p5u8U",
      start: 288,
      end: 306,
    },
  },
  {
    url: "leave",
    title: "Live video feed to brexit negotiations",
    image: "https://img.youtube.com/vi/M62SnbNizIM/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "'Zippy' puppet from TV show Rainbow",
    youtube: {
      v: "M62SnbNizIM",
      start: 273,
      end: 289,
    },
  },
  {
    url: "crazy",
    title: "Crazy",
    image: "https://img.youtube.com/vi/tbu9ZTLLefE/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "A wave in the sea with something on it.",
    youtube: {
      v: "tbu9ZTLLefE",
      start: 67,
      end: 79,
    },
    caption:
      "'The only thing I can think of that is more crazy than riding big waves would be to, you know, live in a city and work in an office building.'",
    cite: "Laird Hamilton, big wave surfer",
  },
  {
    url: "remote-working",
    title: "Remote Working ",
    image:
      "https://embedwistia-a.akamaihd.net/deliveries/d4e3c25ccb18b0bfba2caca8ba4f1b4c1cb5a037.jpg",
    width: 1280,
    height: 720,
    alt: "A man presenting a news type TV show with two guests on video link. Title reads 'TECH TALK - REMOTE WORKING'",
    customHTML: true,
  },
  {
    url: "😬",
    title: "😬",
    image: "https://img.youtube.com/vi/nbr1VUlH4Mg/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "Charlie Chaplain and a woman in a a bonnet walking down a long straight dusty country road.",
    youtube: {
      v: "nbr1VUlH4Mg",
      start: 94,
      end: 100,
    },
    caption:
      "Not sure exactly how you’re feeling? Nervous but also excited? 😬 Grimacing Face is perfect for communicating those mixed feelings",
    cite: "John Kelly, Senior Emoji Lexicographer at Emojipedia",
  },
  {
    url: "thinking",
    title: "Thinking Acting",
    image: "https://img.youtube.com/vi/XQzQRaQINns/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "Joey from Friends TV show in a classroom sat casually on a desk at the front of a blackboard. Students are watching.",
    youtube: {
      v: "XQzQRaQINns",
      start: 67,
      end: 90,
    },
  },
  {
    url: "rules",
    title: "Rules",
    image: "https://img.youtube.com/vi/fCjsUxbNmIs/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "Back to the future Delorean car with characters played by Michael J. Fox, Elisabeth Shue and Christopher Lloyd sat in the front. Christopher Lloyd is dressed as mad professor 'Doc' Brown and is wearing a futuristic silver sunglasses visor.",
    youtube: {
      v: "fCjsUxbNmIs",
      start: 110,
      end: 116,
    },
  },
  {
    url: "flowers",
    title: "Flowers",
    image: "https://img.youtube.com/vi/yKhOYvDRKrg/hqdefault.jpg",
    width: 480,
    height: 360,
    alt: "A buddhist monk in brown robes with a shaved head sits cross legged in front of flowers, and greenery",
    youtube: {
      v: "yKhOYvDRKrg",
      start: 36,
      end: 44,
    },
  },
];

export default memes;
