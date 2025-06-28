import { Movie } from '../types';

export const movies: {
  action: Movie[];
  comedy: Movie[];
  scifi: Movie[];
  romance: Movie[];
} = {
  action: [
    {
      id: 'mad-max',
      title: 'Mad Max: Fury Road',
      genre: 'Action',
      year: 2015,
      director: 'George Miller',
      posterUrl: 'https://img.seriebox.com/films/24/24680/affich_24680_2.jpg',
      description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
      rating: 8.1,
      cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult']
    },
    {
      id: 'edge-of-tomorrow',
      title: 'Edge of Tomorrow',
      genre: 'Action',
      year: 2014,
      director: 'Doug Liman',
      posterUrl: 'https://image.tmdb.org/t/p/original/hsLUdxUvMxaWWsQnnX8s7Wt9f1n.jpg',
      description: 'A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.',
      rating: 7.9,
      cast: ['Tom Cruise', 'Emily Blunt', 'Bill Paxton']
    },
    {
      id: 'fight-club',
      title: 'Fight Club',
      genre: 'Action',
      year: 1999,
      director: 'David Fincher',
      posterUrl: 'https://image.tmdb.org/t/p/original/8dR7Jd7DOEhU8cZ734Va17NRoZ2.jpg',
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      rating: 8.8,
      cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter']
    },
    {
      id: 'wrath-of-man',
      title: 'Wrath of Man',
      genre: 'Action',
      year: 2021,
      director: 'Guy Ritchie',
      posterUrl: 'https://thereelbits.com/wp-content/uploads/2021/05/wrath-of-man-poster.jpeg',
      description: 'The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.',
      rating: 7.1,
      cast: ['Jason Statham', 'Holt McCallany', 'Josh Hartnett']
    },
    {
      id: 'operation-fortune',
      title: 'Operation Fortune: Ruse de Guerre',
      genre: 'Action',
      year: 2023,
      director: 'Guy Ritchie',
      posterUrl: 'https://image.tmdb.org/t/p/original/2eM1odXVzrtG4Udu2Q5sb6newHP.jpg',
      description: 'Special agent Orson Fortune and his team of operatives recruit one of Hollywood\'s biggest movie stars to help them on an undercover mission.',
      rating: 6.7,
      cast: ['Jason Statham', 'Aubrey Plaza', 'Josh Hartnett']
    },
    {
      id: 'the-gentlemen',
      title: 'The Gentlemen',
      genre: 'Action',
      year: 2019,
      director: 'Guy Ritchie',
      posterUrl: 'https://image.tmdb.org/t/p/original/9Yt2UAgZ0T5tm74pxiZdF6mN31U.jpg',
      description: 'An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.',
      rating: 7.8,
      cast: ['Matthew McConaughey', 'Charlie Hunnam', 'Michelle Dockery']
    },
    {
      id: 'the-covenant',
      title: 'Guy Ritchie\'s The Covenant',
      genre: 'Action',
      year: 2023,
      director: 'Guy Ritchie',
      posterUrl: 'https://image.tmdb.org/t/p/original/Pm1BXOqNeI1geE9KGYrNZdrKIQ.jpg',
      description: 'During the war in Afghanistan, a local interpreter risks his own life to carry an injured American soldier across miles of grueling terrain.',
      rating: 7.6,
      cast: ['Jake Gyllenhaal', 'Dar Salim', 'Antony Starr']
    },
    {
      id: 'ministry-of-ungentlemanly-warfare',
      title: 'The Ministry of Ungentlemanly Warfare',
      genre: 'Action',
      year: 2024,
      director: 'Guy Ritchie',
      posterUrl: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/02/ministry-of-ungentlemanly-warfare-poster.jpg',
      description: 'The British military recruits a small group of highly skilled soldiers to strike against German forces behind enemy lines during World War II.',
      rating: 7.5,
      cast: ['Henry Cavill', 'Eiza González', 'Alan Ritchson']
    },
    {
      id: 'man-from-uncle',
      title: 'The Man from U.N.C.L.E.',
      genre: 'Action',
      year: 2015,
      director: 'Guy Ritchie',
      posterUrl: 'https://static0.colliderimages.com/wordpress/wp-content/uploads/2015/06/the_man_from_uncle_poster_2.jpg',
      description: 'In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization.',
      rating: 7.3,
      cast: ['Henry Cavill', 'Armie Hammer', 'Alicia Vikander']
    },
    {
      id: 'oblivion',
      title: 'Oblivion',
      genre: 'Action',
      year: 2013,
      director: 'Joseph Kosinski',
      posterUrl: 'https://picfiles.alphacoders.com/348/thumb-1920-348873.jpg',
      description: 'A veteran assigned to extract Earth\'s remaining resources begins to question what he knows about his mission and himself.',
      rating: 7.0,
      cast: ['Tom Cruise', 'Morgan Freeman', 'Olga Kurylenko']
    }
  ],
  comedy: [
    {
      id: 'grown-ups',
      title: 'Grown Ups',
      genre: 'Comedy',
      year: 2010,
      director: 'Dennis Dugan',
      posterUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdve6fd__VnirwAgD_cZWE6o8wQJ5jgOgQrIUVo6w0MeBZ-zpaWdT6g9__vLp3hEPAfnEI',
      description: 'After their high school basketball coach passes away, five good friends and former teammates reunite for a Fourth of July holiday weekend.',
      rating: 6.0,
      cast: ['Adam Sandler', 'Kevin James', 'Chris Rock']
    },
    {
      id: 'grown-ups-2',
      title: 'Grown Ups 2',
      genre: 'Comedy',
      year: 2013,
      director: 'Dennis Dugan',
      posterUrl: 'https://image.tmdb.org/t/p/original/itgIBlvgx5fG5kRqgYIt8mP9V43.jpg',
      description: 'After moving his family back to his hometown to be with his friends and their kids, Lenny finds out that between old bullies, new bullies, schizo bus drivers, drunk cops on skis, and four hundred costumed party crashers sometimes crazy follows you.',
      rating: 5.4,
      cast: ['Adam Sandler', 'Kevin James', 'Chris Rock']
    },
    {
      id: 'hangover',
      title: 'The Hangover',
      genre: 'Comedy',
      year: 2009,
      director: 'Todd Phillips',
      posterUrl: 'https://flxt.tmsimg.com/assets/p192248_p_v10_ap.jpg',
      description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.',
      rating: 7.7,
      cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis']
    },
    {
      id: 'hangover-2',
      title: 'The Hangover Part II',
      genre: 'Comedy',
      year: 2011,
      director: 'Todd Phillips',
      posterUrl: 'https://image.tmdb.org/t/p/original/evVI1EwaQa1Rg3lvnfCWbPWQFtN.jpg',
      description: 'Two years after the bachelor party in Las Vegas, Phil, Stu, Alan, and Doug jet to Thailand for Stu\'s wedding.',
      rating: 6.5,
      cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis']
    },
    {
      id: 'hangover-3',
      title: 'The Hangover Part III',
      genre: 'Comedy',
      year: 2013,
      director: 'Todd Phillips',
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8fe5e33685741399be60e285b074f745779460bb4529ba754c53b33fa8284133._RI_V_TTW_.jpg',
      description: 'When one of their own is kidnapped by an angry gangster, the Wolf Pack must track down Mr. Chow, who has escaped from prison and is on the run.',
      rating: 5.8,
      cast: ['Bradley Cooper', 'Ed Helms', 'Zach Galifianakis']
    },
    {
      id: 'old-school',
      title: 'Old School',
      genre: 'Comedy',
      year: 2003,
      director: 'Todd Phillips',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BZGZiNGEwNjQtNTMzOS00NDI3LWI2ZWQtMGQwMjEzNjExZjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      description: 'Three friends attempt to recapture their glory days by opening up a fraternity near their alma mater.',
      rating: 7.1,
      cast: ['Luke Wilson', 'Vince Vaughn', 'Will Ferrell']
    },
    {
      id: 'due-date',
      title: 'Due Date',
      genre: 'Comedy',
      year: 2010,
      director: 'Todd Phillips',
      posterUrl: 'https://images5.fanpop.com/image/photos/25300000/Due-Date-due-date-25392027-1280-1024.jpg',
      description: 'High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child\'s birth on time.',
      rating: 6.5,
      cast: ['Robert Downey Jr.', 'Zach Galifianakis', 'Michelle Monaghan']
    },
    {
      id: 'war-dogs',
      title: 'War Dogs',
      genre: 'Comedy',
      year: 2016,
      director: 'Todd Phillips',
      posterUrl: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12118906_p_v8_ae.jpg',
      description: 'Two young men exploit a little-known government initiative that allows small businesses to bid on U.S. Military contracts.',
      rating: 7.1,
      cast: ['Jonah Hill', 'Miles Teller', 'Ana de Armas']
    },
    {
      id: 'friends-with-benefits',
      title: 'Friends with Benefits',
      genre: 'Comedy',
      year: 2011,
      director: 'Will Gluck',
      posterUrl: 'https://image.tmdb.org/t/p/original/q4ZAmIIbe2LiLvhQT0q3e6pleYr.jpg',
      description: 'A young man and woman decide to take their friendship to the next level without becoming a couple, but soon discover that adding sex only leads to complications.',
      rating: 6.5,
      cast: ['Justin Timberlake', 'Mila Kunis', 'Patricia Clarkson']
    },
    {
      id: 'this-is-where-i-leave-you',
      title: 'This Is Where I Leave You',
      genre: 'Comedy',
      year: 2014,
      director: 'Shawn Levy',
      posterUrl: 'https://www.homesc.com/images/HomeSC/site/on-demand-movies/december-VOD-2014/this-is-where-i-leave-you.jpg',
      description: 'When their father passes away, four grown siblings are forced to return to their childhood home and live under the same roof together for a week.',
      rating: 6.6,
      cast: ['Jason Bateman', 'Tina Fey', 'Jane Fonda']
    }
  ],
  scifi: [
    {
      id: 'blade-runner',
      title: 'Blade Runner 2049',
      genre: 'Science Fiction',
      year: 2017,
      director: 'Denis Villeneuve',
      posterUrl: 'https://image.tmdb.org/t/p/original/jLul37v1NcF8XpdSEh4RHsmGocA.jpg',
      description: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
      rating: 8.0,
      cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas']
    },
    {
      id: 'arrival',
      title: 'Arrival',
      genre: 'Science Fiction',
      year: 2016,
      director: 'Denis Villeneuve',
      posterUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Video122/v4/9c/6a/c1/9c6ac14c-c67b-5457-8725-f454ccb9fee7/pr_source.lsr/1200x630bb.png',
      description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
      rating: 7.9,
      cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker']
    },
    {
      id: 'enemy',
      title: 'Enemy',
      genre: 'Science Fiction',
      year: 2013,
      director: 'Denis Villeneuve',
      posterUrl: 'https://es.web.img3.acsta.net/pictures/14/02/18/12/47/147704.jpg',
      description: 'A man seeks out his exact look-alike after spotting him in a movie.',
      rating: 6.9,
      cast: ['Jake Gyllenhaal', 'Mélanie Laurent', 'Sarah Gadon']
    },
    {
      id: 'the-creator',
      title: 'The Creator',
      genre: 'Science Fiction',
      year: 2023,
      director: 'Gareth Edwards',
      posterUrl: 'https://artofthemovies.co.uk/cdn/shop/files/IMG_4119_2_1200x1200.jpg?v=1695909822',
      description: 'Against the backdrop of a war between humans and artificial intelligence, a former soldier discovers the weapon that could end the war is an AI in the form of a young child.',
      rating: 7.1,
      cast: ['John David Washington', 'Gemma Chan', 'Ken Watanabe']
    },
    {
      id: 'no-one-will-save-you',
      title: 'No One Will Save You',
      genre: 'Science Fiction',
      year: 2023,
      director: 'Brian Duffield',
      posterUrl: 'https://ntvb.tmsimg.com/assets/p25298623_v_h8_aa.jpg?w=1280&h=720',
      description: 'A creative and talented young woman who has been alienated from her community must defend her home against extraterrestrial beings.',
      rating: 6.8,
      cast: ['Kaitlyn Dever', 'Elizabeth Kaluev', 'Zack Duhame']
    },
    {
      id: 'source-code',
      title: 'Source Code',
      genre: 'Science Fiction',
      year: 2011,
      director: 'Duncan Jones',
      posterUrl: 'https://xl.movieposterdb.com/11_07/2011/945513/xl_945513_a800d822.jpg',
      description: 'A soldier wakes up in someone else\'s body and discovers he\'s part of an experimental government program to find the bomber of a commuter train.',
      rating: 7.5,
      cast: ['Jake Gyllenhaal', 'Michelle Monaghan', 'Vera Farmiga']
    },
    {
      id: 'upgrade',
      title: 'Upgrade',
      genre: 'Science Fiction',
      year: 2018,
      director: 'Leigh Whannell',
      posterUrl: 'https://anygoodfilms.com/wp-content/uploads/2019/11/UPGRADE_BD_SLIPCASE_2D_PACKSHOT-696x884.jpg',
      description: 'Set in the near-future, technology controls nearly all aspects of life. But when the world of Grey, a self-labeled technophobe, is turned upside down, his only hope for revenge is an experimental computer chip implant.',
      rating: 7.5,
      cast: ['Logan Marshall-Green', 'Melanie Vallejo', 'Steve Danielsen']
    },
    {
      id: 'pacific-rim',
      title: 'Pacific Rim',
      genre: 'Science Fiction',
      year: 2013,
      director: 'Guillermo del Toro',
      posterUrl: 'https://im.indiatimes.in/content/2013/Jul/pr_1373602972_1373602976.jpg',
      description: 'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
      rating: 6.9,
      cast: ['Charlie Hunnam', 'Idris Elba', 'Rinko Kikuchi']
    },
    {
      id: 'tenet',
      title: 'Tenet',
      genre: 'Science Fiction',
      year: 2020,
      director: 'Christopher Nolan',
      posterUrl: 'https://image.tmdb.org/t/p/original/ylQRi3edixhzUiubw7LQP1YhI6W.jpg',
      description: 'Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      rating: 7.3,
      cast: ['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki']
    },
    {
      id: 'maze-runner',
      title: 'The Maze Runner',
      genre: 'Science Fiction',
      year: 2014,
      director: 'Wes Ball',
      posterUrl: 'https://vignette.wikia.nocookie.net/mazerunner/images/1/11/TMRposter-thomas.jpg/revision/latest/scale-to-width-down/2000?cb=20140916191237',
      description: 'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.',
      rating: 6.8,
      cast: ['Dylan O\'Brien', 'Kaya Scodelario', 'Will Poulter']
    }
  ],
  romance: [
    {
      id: 'anyone-but-you',
      title: 'Anyone But You',
      genre: 'Romance',
      year: 2023,
      director: 'Will Gluck',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BNDYzYzc0MDYtMGM2MC00YzNjLWJhMjYtYzJhMWViMjgxZTcwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
      description: 'After a great first date, Bea and Ben\'s fiery attraction turns ice cold - until they find themselves unexpectedly reunited at a destination wedding.',
      rating: 6.8,
      cast: ['Sydney Sweeney', 'Glen Powell', 'Alexandra Shipp']
    },
    {
      id: 'hitman',
      title: 'Hitman',
      genre: 'Romance',
      year: 2024,
      director: 'Richard Linklater',
      posterUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Hit_man_2024_film.jpg',
      description: 'A strait-laced professor falls for a student while working undercover as a hitman, leading to unexpected complications and revelations.',
      rating: 7.2,
      cast: ['Glen Powell', 'Adria Arjona', 'Austin Amelio']
    },
    {
      id: 'set-it-up',
      title: 'Set It Up',
      genre: 'Romance',
      year: 2018,
      director: 'Claire Scanlon',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTk0MDUyMzA1OF5BMl5BanBnXkFtZTgwNzA4NzE1NTM@._V1_FMjpg_UX1000_.jpg',
      description: 'Two corporate executive assistants hatch a plan to match-make their two bosses.',
      rating: 6.5,
      cast: ['Zoey Deutch', 'Glen Powell', 'Lucy Liu']
    },
    {
      id: 'why-him',
      title: 'Why Him?',
      genre: 'Romance',
      year: 2016,
      director: 'John Hamburg',
      posterUrl: 'https://image.tmdb.org/t/p/original/eezFoKz7bXgdbjeieeCYJFXPKSu.jpg',
      description: 'A holiday gathering threatens to go off the rails when Ned Fleming realizes that his daughter\'s Silicon Valley millionaire boyfriend is about to pop the question.',
      rating: 6.2,
      cast: ['James Franco', 'Bryan Cranston', 'Zoey Deutch']
    },
    {
      id: 'redeeming-love',
      title: 'Redeeming Love',
      genre: 'Romance',
      year: 2022,
      director: 'D.J. Caruso',
      posterUrl: 'https://m.media-amazon.com/images/S/pv-target-images/b40d3c314064a0c7f698aff4d32741e06917e308358e62e4da4938d8cb24fb61.jpg',
      description: 'Based on the bestselling novel by Francine Rivers, REDEEMING LOVE is a powerful story of relentless love and perseverance as a young couple\'s relationship clashes with the harsh realities of the California Gold Rush of 1850.',
      rating: 6.7,
      cast: ['Abigail Cowen', 'Tom Lewis', 'Nina Dobrev']
    },
    {
      id: 'lucky-one',
      title: 'The Lucky One',
      genre: 'Romance',
      year: 2012,
      director: 'Scott Hicks',
      posterUrl: 'https://media.senscritique.com/media/000020164302/source_big/The_Lucky_One.jpg',
      description: 'A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.',
      rating: 6.5,
      cast: ['Zac Efron', 'Taylor Schilling', 'Blythe Danner']
    },
    {
      id: 'love-and-other-drugs',
      title: 'Love and Other Drugs',
      genre: 'Romance',
      year: 2010,
      director: 'Edward Zwick',
      posterUrl: 'https://daenggassing.com/wp-content/uploads/2011/09/filmlove-and-other-drugs-8875-1440x900.jpg',
      description: 'A young woman suffering from Parkinson\'s befriends a drug rep working for Pfizer in 1990s Pittsburgh.',
      rating: 6.7,
      cast: ['Jake Gyllenhaal', 'Anne Hathaway', 'Oliver Platt']
    },
    {
      id: 'about-time',
      title: 'About Time',
      genre: 'Romance',
      year: 2013,
      director: 'Richard Curtis',
      posterUrl: 'https://www.moviehdwallpapers.com/wp-content/uploads/2014/01/About-Time-Poster.jpg',
      description: 'At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.',
      rating: 7.8,
      cast: ['Domhnall Gleeson', 'Rachel McAdams', 'Bill Nighy']
    },
    {
      id: 'the-choice',
      title: 'The Choice',
      genre: 'Romance',
      year: 2016,
      director: 'Ross Katz',
      posterUrl: 'https://images6.fanpop.com/image/photos/40000000/The-Choice-Poster-movie-trailers-40027084-1000-1500.jpg',
      description: 'Travis and Gabby first meet as neighbors in a small coastal town and wind up in a relationship that is tested by life\'s most defining events.',
      rating: 6.6,
      cast: ['Benjamin Walker', 'Teresa Palmer', 'Alexandra Daddario']
    },
    {
      id: '500-days-of-summer',
      title: '500 Days of Summer',
      genre: 'Romance',
      year: 2009,
      director: 'Marc Webb',
      posterUrl: 'https://www.kitareview.com/wp-content/uploads/2013/10/500days-of-summer-696x929.jpg',
      description: 'An offbeat romantic comedy about a woman who doesn\'t believe true love exists, and the young man who falls for her.',
      rating: 7.7,
      cast: ['Joseph Gordon-Levitt', 'Zooey Deschanel', 'Geoffrey Arend']
    }
  ]
};
