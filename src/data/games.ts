export interface Game {
  id: string;             // 游戏id（或英文小写名）
  title: string;         // 游戏名称
  cover: string;         // 静态封面
  hoverCover?: string;   // 鼠标悬停动画（webm/gif/mp4）
  description: string;   // 游戏简介
  tags: string[];       // 游戏标签或类别
  developer: string;    // 游戏开发者
  iframeUrl: string;     // 内嵌iframe地址
  size?: 'normal' | 'large';
}

// 示例数据（20个，100+请用爬虫脚本补全）
export const games: Game[] = [
  {
    "id": "skgia4x0l",
    "title": "Pai Gow Poker",
    "cover": "https://static.gamezop.com/SkGIa4X0l/cover.jpg",
    "hoverCover": "",
    "description": "The best Pai Gow Poker online! Bring out your high hands and low hands, and beat the dealer.",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkGIa4X0l",
    "size": "normal"
  },
  {
    "id": "syqzs6nzuew",
    "title": "The Sea Lion Act",
    "cover": "https://static.gamezop.com/SyQZs6nzueW/cover.jpg",
    "hoverCover": "",
    "description": "Here's a circus sea lion with a twitchy nose: balance as many objects on the beam as you can!",
    "tags": [
      "Logic",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyQZs6nzueW",
    "size": "normal"
  },
  {
    "id": "s1ne12tqqch",
    "title": "Dunk Shot",
    "cover": "https://static.gamezop.com/S1Ne12TQqCH/cover.jpg",
    "hoverCover": "",
    "description": "Pull, aim, shoot! Jump from hoop to hoop and make a high score. Unlock new balls from the stars you collect!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1Ne12TQqCH",
    "size": "normal"
  },
  {
    "id": "r10-nlt86bx",
    "title": "Rope Ninja",
    "cover": "https://static.gamezop.com/r10-NLT86bx/cover.jpg",
    "hoverCover": "",
    "description": "Time to show your ninja skills and catch as many birds as you can. Mind the coins you can collect!",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r10-NLT86bx",
    "size": "normal"
  },
  {
    "id": "rkplk2t7qar",
    "title": "Solitaire Gold",
    "cover": "https://static.gamezop.com/rkPlk2T7qAr/cover.jpg",
    "hoverCover": "",
    "description": "Solitaire Gold follows classic Solitaire rules: the catch is you only get 5 mins to play. The sooner you finish, the bigger the bonus you receive! Come, give it a try!",
    "tags": [
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkPlk2T7qAr",
    "size": "normal"
  },
  {
    "id": "n1szfo1fwqg",
    "title": "Grumpy Gorilla",
    "cover": "https://static.gamezop.com/N1sZfO1fWqg/cover.jpg",
    "hoverCover": "",
    "description": "This beast is addicted to chopping trees. Ensure he's on the right side else he'd bang his head!",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/N1sZfO1fWqg",
    "size": "normal"
  },
  {
    "id": "bj8wb8j7ilx",
    "title": "Soccer Jerks",
    "cover": "https://static.gamezop.com/BJ8Wb8j7ILx/cover.jpg",
    "hoverCover": "",
    "description": "Here's the dumbest soccer game ever! How well can you play without turning around?",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJ8Wb8j7ILx",
    "size": "normal"
  },
  {
    "id": "nkxfojm-qg",
    "title": "Fidgety Frog",
    "cover": "https://static.gamezop.com/NkxfOJM-qg/cover.jpg",
    "hoverCover": "",
    "description": "The frog breaks wind to rise above bars. Help him go higher without getting smashed to smithereens!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/NkxfOJM-qg",
    "size": "normal"
  },
  {
    "id": "41fzfdyg-5x",
    "title": "1212!",
    "cover": "https://static.gamezop.com/41FZfdyG-5x/cover.jpg",
    "hoverCover": "",
    "description": "Don't let the grid fill up! Fit all the pieces in this brain challenging puzzle game!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/41FZfdyG-5x",
    "size": "normal"
  },
  {
    "id": "ryrwrdanpf",
    "title": "Dodgy",
    "cover": "https://static.gamezop.com/ryRWrDaNPF/cover.jpg",
    "hoverCover": "",
    "description": "Dodge the incoming fireballs as they come hurling towards you from all four directions!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ryRWrDaNPF",
    "size": "normal"
  },
  {
    "id": "sjgx126qc0h",
    "title": "Sudoku Classic",
    "cover": "https://static.gamezop.com/SJgx126Qc0H/cover.jpg",
    "hoverCover": "",
    "description": "Gamezop brings to you one of the most popular brain games - Sudoku! fill a 9×9 grid with numbers so that each row, column and 3×3 section contain all of the digits between 1 and 9.",
    "tags": [
      "Number",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJgx126Qc0H",
    "size": "normal"
  },
  {
    "id": "hj-72ifxyg",
    "title": "Stay On The Road",
    "cover": "https://static.gamezop.com/HJ-72IFXyg/cover.jpg",
    "hoverCover": "",
    "description": "A single track, coins to collect, and difficult corners to drift on and save the driver's life.",
    "tags": [
      "Racing",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJ-72IFXyg",
    "size": "normal"
  },
  {
    "id": "sjxvafjp51q",
    "title": "Nosedive",
    "cover": "https://static.gamezop.com/SJXVafJP51Q/cover.jpg",
    "hoverCover": "",
    "description": "They say death is inevitable. But isn't it all about how long you can survive? You are in a plane crashing towards land - survive as long as you can.",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJXVafJP51Q",
    "size": "normal"
  },
  {
    "id": "b1jzwuoxuie",
    "title": "Valley of Terror",
    "cover": "https://static.gamezop.com/B1jZWUoXUIe/cover.jpg",
    "hoverCover": "",
    "description": "A group of zombies is out on the streets. Your task is to clean them up and guard your town.",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1jZWUoXUIe",
    "size": "normal"
  },
  {
    "id": "hkrmtzjdck7",
    "title": "Rollout",
    "cover": "https://static.gamezop.com/HkRMTzJDck7/cover.jpg",
    "hoverCover": "",
    "description": "Steer away from obstacles in this highway in the sky. This is sure to remind you of a few classics!",
    "tags": [
      "3D",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkRMTzJDck7",
    "size": "normal"
  },
  {
    "id": "ry3vtunu",
    "title": "Battle Fish",
    "cover": "https://static.gamezop.com/ry3vtunu/cover.jpg",
    "hoverCover": "",
    "description": "Grow fish to convert monsters into friends! Addictive arcade game with funny sea creatures.",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ry3vtunu",
    "size": "normal"
  },
  {
    "id": "rjxlrtbwd4",
    "title": "Pumpkin Smasher",
    "cover": "https://static.gamezop.com/rJXlRtBWd4/cover.jpg",
    "hoverCover": "",
    "description": "Your object is simple: tap on flying pumpkins to smash them up into pieces but avoid bombs.",
    "tags": [
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJXlRtBWd4",
    "size": "normal"
  },
  {
    "id": "ryn9egaqa",
    "title": "Slap Fest",
    "cover": "https://static.gamezop.com/ryN9EGAQa/cover.jpg",
    "hoverCover": "",
    "description": "Attack! Retreat! Slap! Be quick and make your opponent scream in pain.",
    "tags": [
      "Crazy",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ryN9EGAQa",
    "size": "normal"
  },
  {
    "id": "xusi73wi5",
    "title": "From Nerd to School Popular",
    "cover": "https://static.gamezop.com/XuSI73Wi5/cover.jpg",
    "hoverCover": "",
    "description": "Dress up and style: from nerd to cool! In this game, you set the rules. Transform your look, be all the rage, from school outcast to center stage!",
    "tags": [
      "Adventure",
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/XuSI73Wi5",
    "size": "normal"
  },
  {
    "id": "bkxw1a__",
    "title": "Jimbo Jump",
    "cover": "https://static.gamezop.com/BkXW1a__/cover.jpg",
    "hoverCover": "",
    "description": "Jump from floor to floor, avoid the ghosts! How high can you climb in this endless game?",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BkXW1a__",
    "size": "normal"
  },
  {
    "id": "bkozyhpmc0h",
    "title": "Hop Kangaroo Hop",
    "cover": "https://static.gamezop.com/Bkozyhpmc0H/cover.jpg",
    "hoverCover": "",
    "description": "The Kangaroo is so plump, and it needs to cross the swamp, so it's time to Hop, Skip'n Jump, let's go thump thump thump!",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Bkozyhpmc0H",
    "size": "normal"
  },
  {
    "id": "hjkwbuj788l",
    "title": "Clay Pigeon: Tap and Shoot",
    "cover": "https://static.gamezop.com/HJKWbUj788l/cover.jpg",
    "hoverCover": "",
    "description": "Here's your chance to control a professional sniper and aim skeets in a shooting challenge.",
    "tags": [
      "Shooting"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJKWbUj788l",
    "size": "normal"
  },
  {
    "id": "skqwnwnbk",
    "title": "Flexi Snake",
    "cover": "https://static.gamezop.com/SkQwnwnbK/cover.jpg",
    "hoverCover": "",
    "description": "It's like the old-school snake but super flexi! If you're a snake game fan, this HTML5 game will delight you!",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkQwnwnbK",
    "size": "normal"
  },
  {
    "id": "hy2xakhb_v",
    "title": "Troll Boxing",
    "cover": "https://static.gamezop.com/Hy2xAKHb_V/cover.jpg",
    "hoverCover": "",
    "description": "Trolls are taking to the ring for a Championship! Jump right into the action in this boxing game.",
    "tags": [
      "Crazy",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Hy2xAKHb_V",
    "size": "normal"
  },
  {
    "id": "rkwfy2pxq0r",
    "title": "Fruit Chop",
    "cover": "https://static.gamezop.com/rkWfy2pXq0r/cover.jpg",
    "hoverCover": "",
    "description": "Swipe the screen to chop fruits but don't hit the bombs! So unsheathe your sword and get ready to play the most fun fruit slice game online.",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkWfy2pXq0r",
    "size": "normal"
  },
  {
    "id": "hkswia3f_g-",
    "title": "Coin Grab",
    "cover": "https://static.gamezop.com/HkSWia3f_g-/cover.jpg",
    "hoverCover": "",
    "description": "Little piggy has found himself in Bitcoinland! Help him hoof through the levels by collecting all coins.",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkSWia3f_g-",
    "size": "normal"
  },
  {
    "id": "hk2yhp7cch",
    "title": "Tic Tac Toe 11",
    "cover": "https://static.gamezop.com/Hk2yhp7cCH/cover.jpg",
    "hoverCover": "",
    "description": "Here's a Tic Tac Toe game with a twist! Play in a 11x11 grid, and match 5 to win - vertically, horizontally or diagonally! Create your own tricks to beat the opponent!",
    "tags": [
      "Puzzle",
      "Board"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Hk2yhp7cCH",
    "size": "normal"
  },
  {
    "id": "hjt46gkpcy7",
    "title": "Tower Twist",
    "cover": "https://static.gamezop.com/HJT46GkPcy7/cover.jpg",
    "hoverCover": "",
    "description": "Navigate the gaps as your fall through this helix tower labyrinth - time's limited, let's see how much you can score!",
    "tags": [
      "3D",
      "Arcade",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJT46GkPcy7",
    "size": "normal"
  },
  {
    "id": "hyzmutvqre",
    "title": "Where's the Ace?",
    "cover": "https://static.gamezop.com/HyZMUTVQRe/cover.jpg",
    "hoverCover": "",
    "description": "Don't let the lady out of sight, or you'll lose the game. How attentive are you?",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HyZMUTVQRe",
    "size": "normal"
  },
  {
    "id": "r1k-j3tq5ar",
    "title": "Word Finder",
    "cover": "https://static.gamezop.com/r1K-J3TQ5Ar/cover.jpg",
    "hoverCover": "",
    "description": "This is a classic word-finder game where you have to find as many words as you can in a grid of letters. Use your brains and start finding! You get points for every word you find.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1K-J3TQ5Ar",
    "size": "normal"
  },
  {
    "id": "sjghvtd2_",
    "title": "Drop Me",
    "cover": "https://static.gamezop.com/SJghvtd2_/cover.jpg",
    "hoverCover": "",
    "description": "Help cute creatures to climb into their tubes in this colourfully cute puzzle game for young and old.",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJghvtd2_",
    "size": "normal"
  },
  {
    "id": "syteia3foez",
    "title": "Cowboy vs. Martians",
    "cover": "https://static.gamezop.com/SyTeia3fOeZ/cover.jpg",
    "hoverCover": "",
    "description": "Here's what a typical day in Texas would look like if the Martians landed on Earth! Shoot 'em all!",
    "tags": [
      "Shooting"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyTeia3fOeZ",
    "size": "normal"
  },
  {
    "id": "sj8x6zypcyx",
    "title": "Saloon Robbery",
    "cover": "https://static.gamezop.com/SJ8X6zyPcyX/cover.jpg",
    "hoverCover": "",
    "description": "Stop the saloon robbery by dropping the wild outlaws one by one, but beware of the hostage situation and lookout for cool bonuses!",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJ8X6zyPcyX",
    "size": "normal"
  },
  {
    "id": "h1iepmjp917",
    "title": "Plane Fight",
    "cover": "https://static.gamezop.com/H1IEpMJP917/cover.jpg",
    "hoverCover": "",
    "description": "Collide with your enemy and push their blocks on to the bomb before they kill you. Bring out the fighter pilot in you!",
    "tags": [
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1IEpMJP917",
    "size": "normal"
  },
  {
    "id": "hkh7azyv9km",
    "title": "Junior Chess",
    "cover": "https://static.gamezop.com/Hkh7azyv9km/cover.jpg",
    "hoverCover": "",
    "description": "Sit back, relax and enjoy a game of chess with interesting characters! Fight the Red King with the Blue King and show off your chess moves!",
    "tags": [
      "Sports",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Hkh7azyv9km",
    "size": "normal"
  },
  {
    "id": "skyrbo1b",
    "title": "Oh Yes",
    "cover": "https://static.gamezop.com/SkyRBO1b/cover.jpg",
    "hoverCover": "",
    "description": "It is a little logic game where you have to fill the grid with either red or blue tiles.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkyRBO1b",
    "size": "normal"
  },
  {
    "id": "rju76zkd917",
    "title": "Algerian Solitaire",
    "cover": "https://static.gamezop.com/rJu76zkD917/cover.jpg",
    "hoverCover": "",
    "description": "Play the timeless Solitaire game in an Algerian desert setting! This version of Solitaire has 2 decks for double the challenge and double the punch!",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJu76zkD917",
    "size": "normal"
  },
  {
    "id": "s1jfkub9nr",
    "title": "Foot Chinko",
    "cover": "https://static.gamezop.com/S1JfKuB9nR/cover.jpg",
    "hoverCover": "",
    "description": "This blend of soccer and physics is an absolute delight that features world's top tournaments.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1JfKuB9nR",
    "size": "normal"
  },
  {
    "id": "skz4pzkdqyx",
    "title": "Escape Run",
    "cover": "https://static.gamezop.com/Skz4pzkDqyX/cover.jpg",
    "hoverCover": "",
    "description": "Help the mountain man escape the eyes of media while he peacefully runs in the cold. Collect fruits to buy power-ups for the escape!",
    "tags": [
      "Crazy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Skz4pzkDqyX",
    "size": "normal"
  },
  {
    "id": "byrkh6xcab",
    "title": "Car Flip",
    "cover": "https://static.gamezop.com/ByRkh6XcAB/cover.jpg",
    "hoverCover": "",
    "description": "Drive a car on the road: change lanes as obstacles come your way. How hard can it be? Play Car Flip to find out.",
    "tags": [
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ByRkh6XcAB",
    "size": "normal"
  },
  {
    "id": "b1jbam1d9y7",
    "title": "Colour Chase",
    "cover": "https://static.gamezop.com/B1JBaM1D9y7/cover.jpg",
    "hoverCover": "",
    "description": "See beautiful landscapes unfold as you navigate the twists and turns of these endless roads: just make sure you only clash with balls of your own colour.",
    "tags": [
      "3D",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1JBaM1D9y7",
    "size": "normal"
  },
  {
    "id": "skrwoangox",
    "title": "Catch-a-pult",
    "cover": "https://static.gamezop.com/SkRWoanGOx/cover.jpg",
    "hoverCover": "",
    "description": "Catapult the balls from one launcher to another. Rebounds bring extra points!",
    "tags": [
      "Logic",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkRWoanGOx",
    "size": "normal"
  },
  {
    "id": "nj3xgoyfb5l",
    "title": "Tricky Trip",
    "cover": "https://static.gamezop.com/NJ3xGOyfb5l/cover.jpg",
    "hoverCover": "",
    "description": "Tap to build bridges to get the car moving. But wait! It can't be that simple, can it? Length is key!",
    "tags": [
      "Logic",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/NJ3xGOyfb5l",
    "size": "normal"
  },
  {
    "id": "rewfekcon",
    "title": "Gun Master",
    "cover": "https://static.gamezop.com/REwFeKcoN/cover.jpg",
    "hoverCover": "",
    "description": "Wipe clean the Gangster infested Central Tower! One Shot, One Kill, that's how you make them cower!",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/REwFeKcoN",
    "size": "normal"
  },
  {
    "id": "rkxgk1_l",
    "title": "Monster Wants Candy",
    "cover": "https://static.gamezop.com/rkXGK1_L/cover.jpg",
    "hoverCover": "",
    "description": "Could you help the monster avoid the bombs and snag lots of sweets in this point and click game?",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkXGK1_L",
    "size": "normal"
  },
  {
    "id": "hjskh679cr",
    "title": "Enchanted Waters",
    "cover": "https://static.gamezop.com/HJskh679Cr/cover.jpg",
    "hoverCover": "",
    "description": "Time is of the essence in this riveting maze runner where one wrong step can make you fall into the endless lake! Time your jumps perfectly to get through the maze without plummeting into the endless lake!",
    "tags": [
      "3D",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJskh679Cr",
    "size": "normal"
  },
  {
    "id": "xxembtjs1",
    "title": "Merge The Gems",
    "cover": "https://static.gamezop.com/XxembtJs1/cover.jpg",
    "hoverCover": "",
    "description": "Time's running out, the mine's falling down; merge the gems now, or the miner's gonna drown!",
    "tags": [
      "Number",
      "Logic",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/XxembtJs1",
    "size": "normal"
  },
  {
    "id": "6teyzgxz2",
    "title": "Soccer Wizard",
    "cover": "https://static.gamezop.com/6tEYzgxz2/cover.jpg",
    "hoverCover": "",
    "description": "Bring out the soccer pro, play it like a wizard. Unleash a volley of goals, rain it like a blizzard!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/6tEYzgxz2",
    "size": "normal"
  },
  {
    "id": "bkdjhtx50b",
    "title": "Bowling Stars",
    "cover": "https://static.gamezop.com/BkdJhTX50B/cover.jpg",
    "hoverCover": "",
    "description": "Enjoy the best Bowling game online — compete with thousands of players! Let's see how many pins you can knock down!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BkdJhTX50B",
    "size": "normal"
  },
  {
    "id": "soluze45d",
    "title": "Flames & Fortune",
    "cover": "https://static.gamezop.com/sOlUZe45d/cover.jpg",
    "hoverCover": "",
    "description": "Survive the dungeon and defend with might. The powers you use must shine so bright! Choose your cards, let your powers unfold; defeat the foes, and gather all the gold!",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/sOlUZe45d",
    "size": "normal"
  },
  {
    "id": "bjzgtmjv91q",
    "title": "Gerbil Jump",
    "cover": "https://static.gamezop.com/BJzGTMJv91Q/cover.jpg",
    "hoverCover": "",
    "description": "Take the Gerbil to new heights: don't rush or you will fall off the buildings!",
    "tags": [
      "Crazy",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJzGTMJv91Q",
    "size": "normal"
  },
  {
    "id": "rjjmvia8p-x",
    "title": "Sticky Goo",
    "cover": "https://static.gamezop.com/rJJMVIa8p-x/cover.jpg",
    "hoverCover": "",
    "description": "Creepy spiders and bleak platforms leave no room for error as you set out to save your love!",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJJMVIa8p-x",
    "size": "normal"
  },
  {
    "id": "skrzzuoxi8g",
    "title": "Jello Go Round",
    "cover": "https://static.gamezop.com/SkRZZUoXI8g/cover.jpg",
    "hoverCover": "",
    "description": "Change shapes and colors as Mr. Jello goes around the world eating little jelly cubes!",
    "tags": [
      "Casual",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkRZZUoXI8g",
    "size": "normal"
  },
  {
    "id": "rjswv8aia-l",
    "title": "Jelly Doods",
    "cover": "https://static.gamezop.com/rJsWV8aIa-l/cover.jpg",
    "hoverCover": "",
    "description": "Combine jelly shapes of the same color by sliding the jellies together. Use fewest possible moves.",
    "tags": [
      "Logic",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJsWV8aIa-l",
    "size": "normal"
  },
  {
    "id": "hk3bj6nmdgb",
    "title": "Laser Locked",
    "cover": "https://static.gamezop.com/Hk3bj6nMdgb/cover.jpg",
    "hoverCover": "",
    "description": "Rotate the discs to match faces of the same color. You clear a level when the laser connects all discs!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Hk3bj6nMdgb",
    "size": "normal"
  },
  {
    "id": "bk9mjhpx5ar",
    "title": "Witch Flight",
    "cover": "https://static.gamezop.com/Bk9MJhpX5Ar/cover.jpg",
    "hoverCover": "",
    "description": "The night is dark and it's raining on Halloween night, let's bust some pumpkins to get our Witch a swishing Flight!",
    "tags": [
      "Shooting",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Bk9MJhpX5Ar",
    "size": "normal"
  },
  {
    "id": "skjf58ouf0",
    "title": "Dribble Kings",
    "cover": "https://static.gamezop.com/SkJf58Ouf0/cover.jpg",
    "hoverCover": "",
    "description": "Run and find the best trajectory to dodge obstacles. Don't let those quarterbacks take the ball!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkJf58Ouf0",
    "size": "normal"
  },
  {
    "id": "s1wrpf1v5ym",
    "title": "Box Crush",
    "cover": "https://static.gamezop.com/S1Wrpf1v5ym/cover.jpg",
    "hoverCover": "",
    "description": "Clear rows and columns before the numbers get to 0. Keep an eye on the progress bar to unlock special power ups!",
    "tags": [
      "Number",
      "Logic",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1Wrpf1v5ym",
    "size": "normal"
  },
  {
    "id": "r1xm38fqkl",
    "title": "Alien Kindergarten",
    "cover": "https://static.gamezop.com/r1Xm38FQkl/cover.jpg",
    "hoverCover": "",
    "description": "Puzzle game in which you play an alien mom hatching slimy, oozing eggs across several levels.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1Xm38FQkl",
    "size": "normal"
  },
  {
    "id": "cg8ebump7",
    "title": "Hill Top Tanks",
    "cover": "https://static.gamezop.com/Cg8EBuMp7/cover.jpg",
    "hoverCover": "",
    "description": "Conflicts have reached the literal peaks, hill tops are stationed with Tanks so sleek. This war will be won by super fast streak, not by someone weak or meek.",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Cg8EBuMp7",
    "size": "normal"
  },
  {
    "id": "s1jxamjdqjx",
    "title": "Cubes Got Moves",
    "cover": "https://static.gamezop.com/S1JXaMJDqJX/cover.jpg",
    "hoverCover": "",
    "description": "Roll over the cubes to their right spots. Cubes have different faces - put the correct faces on the correct spots to win.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1JXaMJDqJX",
    "size": "normal"
  },
  {
    "id": "h1an6fkwqj7",
    "title": "Bubble Wipeout",
    "cover": "https://static.gamezop.com/H1AN6fkwqJ7/cover.jpg",
    "hoverCover": "",
    "description": "Shoot down as many bubbles as you can - aim, match, shoot and burst the same colored bubbles. There is a timer to watch out for!",
    "tags": [
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1AN6fkwqJ7",
    "size": "normal"
  },
  {
    "id": "b1smafkp5kq",
    "title": "Holiday Cheer",
    "cover": "https://static.gamezop.com/B1SmafkP5kQ/cover.jpg",
    "hoverCover": "",
    "description": "Fly over snowy landscapes as Santa, delivering presents to houses. Be careful, Santa must have a gift for each house!",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1SmafkP5kQ",
    "size": "normal"
  },
  {
    "id": "syeqtzyw91x",
    "title": "Exoplanet Express",
    "cover": "https://static.gamezop.com/SyEQTzyw91X/cover.jpg",
    "hoverCover": "",
    "description": "How difficult can carrying cargo be? Find out in this surprisingly challenging space game! Keep in mind: fuel is limited and damages unaffordable.",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyEQTzyw91X",
    "size": "normal"
  },
  {
    "id": "4kzgf_1z-9l",
    "title": "Lane Battles",
    "cover": "https://static.gamezop.com/4kZgf_1z-9l/cover.jpg",
    "hoverCover": "",
    "description": "Wrong-way driver on your lane? Be quick with the lane changes for you blink and you miss!",
    "tags": [
      "Racing"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/4kZgf_1z-9l",
    "size": "normal"
  },
  {
    "id": "syizjp3gulz",
    "title": "Black Jack Grid",
    "cover": "https://static.gamezop.com/SyIZjp3GulZ/cover.jpg",
    "hoverCover": "",
    "description": "Here's Black Jack with a puzzling twist. Arrange cards horizontally and vertically to bring their sum to 21!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyIZjp3GulZ",
    "size": "normal"
  },
  {
    "id": "skhljt2fdgb",
    "title": "Ludo With Friends",
    "cover": "https://static.gamezop.com/SkhljT2fdgb/cover.jpg",
    "hoverCover": "",
    "description": "Here's the best multiplayer Ludo game! Play with your friends or with thousands of other players online.",
    "tags": [
      "Board",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkhljT2fdgb",
    "size": "normal"
  },
  {
    "id": "h1pbzuoxiul",
    "title": "Save Your Pinky",
    "cover": "https://static.gamezop.com/H1pbZUoXIUl/cover.jpg",
    "hoverCover": "",
    "description": "Aim the knife between your fingers in this game. No margin for error: inaccuracy causes pain.",
    "tags": [
      "Crazy",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1pbZUoXIUl",
    "size": "normal"
  },
  {
    "id": "on1jvcbbn",
    "title": "Animal Connection",
    "cover": "https://static.gamezop.com/on1jVCbBn/cover.jpg",
    "hoverCover": "",
    "description": "Scattered in the crowd, far from their family: deep in the jungle, the animals look jittery. Help them to find their connection, and they'll go home happily!",
    "tags": [
      "Shooting",
      "Puzzle",
      "Board"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/on1jVCbBn",
    "size": "normal"
  },
  {
    "id": "umfd7yvmd",
    "title": "Viking Siege",
    "cover": "https://static.gamezop.com/Umfd7yvMd/cover.jpg",
    "hoverCover": "",
    "description": "Skol! Skol! Skol! Vikings Roll Roll Roll! Stand by the Odin's word'n punch a Hole Hole Hole... No one's gonna cross your land, let them growl growl growl! Not the Elve, not the Dwarf, not even the Troll Troll Troll!",
    "tags": [
      "Tower Defense",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Umfd7yvMd",
    "size": "normal"
  },
  {
    "id": "syo94ga7p",
    "title": "Super Goalie Auditions",
    "cover": "https://static.gamezop.com/SyO94GA7p/cover.jpg",
    "hoverCover": "",
    "description": "Ten different levels with increasing difficulty to test your super reflexes as a goalkeeper.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyO94GA7p",
    "size": "normal"
  },
  {
    "id": "ry8ryrwu4",
    "title": "Evil Wyrm",
    "cover": "https://static.gamezop.com/ry8RYrWu4/cover.jpg",
    "hoverCover": "",
    "description": "Move carefully, find gems, and exit before the fire-spitting Wyrm can obliterate your existence!",
    "tags": [
      "Casual",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ry8RYrWu4",
    "size": "normal"
  },
  {
    "id": "sjxbw8smuux",
    "title": "Quack Hunt",
    "cover": "https://static.gamezop.com/SJXbW8smUUx/cover.jpg",
    "hoverCover": "",
    "description": "Move the scope and shoot the ducks before they fly away from the screen!",
    "tags": [
      "Shooting"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJXbW8smUUx",
    "size": "normal"
  },
  {
    "id": "rjwx-kadu",
    "title": "Salazar",
    "cover": "https://static.gamezop.com/rJWX-kadu/cover.jpg",
    "hoverCover": "",
    "description": "This wise wizard is trying to create a powerful new artifact but needs your help in seeing it through!",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJWX-kadu",
    "size": "normal"
  },
  {
    "id": "sjz7-ktud",
    "title": "Submarine Dash",
    "cover": "https://static.gamezop.com/SJz7-kTud/cover.jpg",
    "hoverCover": "",
    "description": "Dive into an underwater world full of beauty where you can collect coins too... just a little bit of danger.",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJz7-kTud",
    "size": "normal"
  },
  {
    "id": "s14vrk8b",
    "title": "Pixel Zombies",
    "cover": "https://static.gamezop.com/S14VrK8B/cover.jpg",
    "hoverCover": "",
    "description": "The zombie invasion just hit London. Smash every zombie but don't kill civilians in this zombie game.",
    "tags": [
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S14VrK8B",
    "size": "normal"
  },
  {
    "id": "hjxei0j",
    "title": "Cyberfusion",
    "cover": "https://static.gamezop.com/HJXei0j/cover.jpg",
    "hoverCover": "",
    "description": "Numbers merge to make higher numbers, stars blast when merged. The best match-3 HTML5 game!",
    "tags": [
      "Number",
      "Puzzle",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJXei0j",
    "size": "normal"
  },
  {
    "id": "nr1p9rmbi",
    "title": "Harbor Dash",
    "cover": "https://static.gamezop.com/Nr1P9rmbi/cover.jpg",
    "hoverCover": "",
    "description": "Navigate the waters, chart your course; dock your boats with skill and force! Unlock new regions, face the test, conquer the waves and be the best!",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Nr1P9rmbi",
    "size": "normal"
  },
  {
    "id": "skklaysbue",
    "title": "Snack Time",
    "cover": "https://static.gamezop.com/SkKlAYSbuE/cover.jpg",
    "hoverCover": "",
    "description": "It's snack time and there's only one rule: eat! Solve the puzzles to feed porky in this HTML5 game.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkKlAYSbuE",
    "size": "normal"
  },
  {
    "id": "hyv_nm-kk",
    "title": "Super Sprint",
    "cover": "https://static.gamezop.com/HyV_Nm-kK/cover.jpg",
    "hoverCover": "",
    "description": "Sprint and jump over spikes, obstacles, springs, and lasers. Run as long as you can in this HTML5 game.",
    "tags": [
      "Sports",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HyV_Nm-kK",
    "size": "normal"
  },
  {
    "id": "syxun7w1f",
    "title": "Rocket Man",
    "cover": "https://static.gamezop.com/SyXuN7W1F/cover.jpg",
    "hoverCover": "",
    "description": "Rush through the maze before your fuel runs out. Fly as long as you can in this endless game.",
    "tags": [
      "Sports",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyXuN7W1F",
    "size": "normal"
  },
  {
    "id": "nj8gguymz5e",
    "title": "Pie Attack",
    "cover": "https://static.gamezop.com/NJ8gGuyMZ5e/cover.jpg",
    "hoverCover": "",
    "description": "Shoot the bad guys that are occupying the tower. Take them down and be mindful of the civilians.",
    "tags": [
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/NJ8gGuyMZ5e",
    "size": "normal"
  },
  {
    "id": "rkmj2axccs",
    "title": "Minesweeper Classic",
    "cover": "https://static.gamezop.com/rkmJ2aXcCS/cover.jpg",
    "hoverCover": "",
    "description": "The good old Minesweeper is here! The rule of the game is simple, the number on a block shows the number of mines adjacent to it and you have to flag all the mines. Can you do it?",
    "tags": [
      "Number",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkmJ2aXcCS",
    "size": "normal"
  },
  {
    "id": "bjrmi6e7rl",
    "title": "Twin Hop",
    "cover": "https://static.gamezop.com/BJrMI6E7Rl/cover.jpg",
    "hoverCover": "",
    "description": "This Jumper must always be the same color as the pillar it wants to jump on. Can you keep up?",
    "tags": [
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJrMI6E7Rl",
    "size": "normal"
  },
  {
    "id": "bkzmafypqjm",
    "title": "Cricket Gunda",
    "cover": "https://static.gamezop.com/BkzmafyPqJm/cover.jpg",
    "hoverCover": "",
    "description": "You've got 3 wickets and an audience to impress! Go at it! Make as many runs as you can. Be careful of the bombs and eggs?!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BkzmafyPqJm",
    "size": "normal"
  },
  {
    "id": "sy64_wbu",
    "title": "Punch Heroes",
    "cover": "https://static.gamezop.com/Sy64_WbU/cover.jpg",
    "hoverCover": "",
    "description": "Karate out the enemies of our lone warrior fighting in the middle. But one miss and it's all over!",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Sy64_WbU",
    "size": "normal"
  },
  {
    "id": "lzfg1zsv5",
    "title": "Ellie Summer Spa Beauty Salon",
    "cover": "https://static.gamezop.com/lzFg1zsV5/cover.jpg",
    "hoverCover": "",
    "description": "Ellie Summer Spa: a soothing shore where beauty and joy are yours to explore! With gentle care, her glow will bloom. Play to find a sweet escape in a sunlit room!",
    "tags": [
      "Adventure",
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/lzFg1zsV5",
    "size": "normal"
  },
  {
    "id": "b1gbjphf_gz",
    "title": "Saucer Dodge",
    "cover": "https://static.gamezop.com/B1Gbjphf_gZ/cover.jpg",
    "hoverCover": "",
    "description": "Wade through space and keep your space ship away from flying saucers.",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1Gbjphf_gZ",
    "size": "normal"
  },
  {
    "id": "sjcrysbu4",
    "title": "Jelly Bears",
    "cover": "https://static.gamezop.com/SJcRYSbu4/cover.jpg",
    "hoverCover": "",
    "description": "Match bears of the same color to clear the level. P.S. Don't play this game when you are hungry.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJcRYSbu4",
    "size": "normal"
  },
  {
    "id": "nym_jgwcx",
    "title": "2048",
    "cover": "https://static.gamezop.com/NyM_JGWcx/cover.jpg",
    "hoverCover": "",
    "description": "Slide tiles in any direction in this mathematical puzzle game to make identical digits converge.",
    "tags": [
      "Number",
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/NyM_JGWcx",
    "size": "normal"
  },
  {
    "id": "8wgtd7tlh",
    "title": "Tower Buster",
    "cover": "https://static.gamezop.com/8WGtd7TLH/cover.jpg",
    "hoverCover": "",
    "description": "The war is here. It's the need of the hour. Block by block, tower after tower, it's time you prove your tank's dominance & power!",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/8WGtd7TLH",
    "size": "normal"
  },
  {
    "id": "b1gbpzjwqjq",
    "title": "Pirate Hunt",
    "cover": "https://static.gamezop.com/B1gBpzJwqJQ/cover.jpg",
    "hoverCover": "",
    "description": "Protect your waters from the notorious pirates by hunting them one by one, but spare the hostages and keep an eye out for the bonus!",
    "tags": [
      "Shooting",
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1gBpzJwqJQ",
    "size": "normal"
  },
  {
    "id": "xqo4nz6kt",
    "title": "Chef Tycoon",
    "cover": "https://static.gamezop.com/xqO4nZ6Kt/cover.jpg",
    "hoverCover": "",
    "description": "Chef Tycoon, a game so fine: Cook, and manage, and endlessly dine! Delight customers with dishes divine. Play now, let your success shine!",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/xqO4nZ6Kt",
    "size": "normal"
  },
  {
    "id": "byqxjnp7qrb",
    "title": "ZUNO",
    "cover": "https://static.gamezop.com/ByQxJnp7qRB/cover.jpg",
    "hoverCover": "",
    "description": "Just Skip, Reverse, Draw and go Wild to get rid of your last card, And don't wait to jab ZUNO, or else your opponents will make your life hard!",
    "tags": [
      "Board",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ByQxJnp7qRB",
    "size": "normal"
  },
  {
    "id": "ske-ctbbdv",
    "title": "Zoo Pinball",
    "cover": "https://static.gamezop.com/Ske-CtBbdV/cover.jpg",
    "hoverCover": "",
    "description": "Here's how they play pinball in the jungle. How long can you prevent your silver balls past the flippers?",
    "tags": [
      "Board",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Ske-CtBbdV",
    "size": "normal"
  },
  {
    "id": "rkaxtzkd5kx",
    "title": "Chess Grandmaster",
    "cover": "https://static.gamezop.com/rkAXTzkD5kX/cover.jpg",
    "hoverCover": "",
    "description": "A chess game for everyone: from beginners to experts! Choose between 3 difficulty modes, or directly pick from over 1100+ challenges to solve within a limited set of moves!",
    "tags": [
      "Board",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkAXTzkD5kX",
    "size": "normal"
  },
  {
    "id": "bj-zst2zoez",
    "title": "One More Flight",
    "cover": "https://static.gamezop.com/BJ-ZsT2zOeZ/cover.jpg",
    "hoverCover": "",
    "description": "Can you fly through the obstacles the first time, or will you need one more flight?",
    "tags": [
      "Racing",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJ-ZsT2zOeZ",
    "size": "normal"
  },
  {
    "id": "bjm9vfcmp",
    "title": "Watch The Walls",
    "cover": "https://static.gamezop.com/BJm9VfCmp/cover.jpg",
    "hoverCover": "",
    "description": "Little bee needs your help in avoiding the spikes as she makes her way inside a massive beehive.",
    "tags": [
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJm9VfCmp",
    "size": "normal"
  },
  {
    "id": "hkbwwmufoye",
    "title": "Terra Infirma",
    "cover": "https://static.gamezop.com/HkBWwMUFOye/cover.jpg",
    "hoverCover": "",
    "description": "Skate without falling over as the Earth moves beneath you! Swipe up and down as fast as you can.",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkBWwMUFOye",
    "size": "normal"
  },
  {
    "id": "n1tgz_kzw5x",
    "title": "Aliens Attack",
    "cover": "https://static.gamezop.com/N1tgz_kzW5x/cover.jpg",
    "hoverCover": "",
    "description": "Blast extraterrestrials out of the sky in this action game! Be careful of the Boss Fights!",
    "tags": [
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/N1tgz_kzW5x",
    "size": "normal"
  },
  {
    "id": "sjx7tgkdq1x",
    "title": "Pop Soap",
    "cover": "https://static.gamezop.com/SJX7TGkDq1X/cover.jpg",
    "hoverCover": "",
    "description": "Classic Match-3 game in Endless Mode and an Achievements mode! Remember, if there's 2 or more of the same kind, you can burst them!",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJX7TGkDq1X",
    "size": "normal"
  },
  {
    "id": "h1hgyn6xqas",
    "title": "Carrom Hero",
    "cover": "https://static.gamezop.com/H1Hgyn6XqAS/cover.jpg",
    "hoverCover": "",
    "description": "Here's the most fun Carrom game online! Play against thousands of players in 2 unique modes: Freestyle and Professional!",
    "tags": [
      "Board",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1Hgyn6XqAS",
    "size": "normal"
  },
  {
    "id": "sklmw1ad_",
    "title": "Let Me Grow",
    "cover": "https://static.gamezop.com/SklmW1ad_/cover.jpg",
    "hoverCover": "",
    "description": "Control the water flow to make sure all flowers remain hydrated in this amazing puzzle game.",
    "tags": [
      "Logic",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SklmW1ad_",
    "size": "normal"
  },
  {
    "id": "rybx12amqcb",
    "title": "Don't Touch the Walls",
    "cover": "https://static.gamezop.com/rybx12amqCB/cover.jpg",
    "hoverCover": "",
    "description": "Be quick with your moves and navigate the maze without touching the walls! The longer you play without touching any of the walls, the more you score. Watch out for the turns!",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rybx12amqCB",
    "size": "normal"
  },
  {
    "id": "r1ozpmkd5jm",
    "title": "Kickin It",
    "cover": "https://static.gamezop.com/r1ozpMkD5Jm/cover.jpg",
    "hoverCover": "",
    "description": "Kick it left, kick it right. Kick where you want, just don't let the ball hit the ground, alright?",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1ozpMkD5Jm",
    "size": "normal"
  },
  {
    "id": "skkv6mjd51q",
    "title": "Mafia Billiard Tricks",
    "cover": "https://static.gamezop.com/SkkV6MJD51Q/cover.jpg",
    "hoverCover": "",
    "description": "Face off against a mafia boss after each challenge in this 8 ball pool game. Beat all 8 bosses to complete the game! From a street rookie to a mafia lord - here's your chance!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkkV6MJD51Q",
    "size": "normal"
  },
  {
    "id": "h1pjn6mqar",
    "title": "Knife Flip",
    "cover": "https://static.gamezop.com/H1PJn6mqAr/cover.jpg",
    "hoverCover": "",
    "description": "You have to make the Knife flip from pillar to post! The objective of the game is simple: don't fall down.",
    "tags": [
      "3D",
      "Puzzle",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1PJn6mqAr",
    "size": "normal"
  },
  {
    "id": "bydcys-on",
    "title": "Greedy Gnomes",
    "cover": "https://static.gamezop.com/BydCYS-ON/cover.jpg",
    "hoverCover": "",
    "description": "Your aim is to make a column, row, or diagonal of at least four rubies in this multiplayer game.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BydCYS-ON",
    "size": "normal"
  },
  {
    "id": "s1-bxxi39",
    "title": "Monsterjong",
    "cover": "https://static.gamezop.com/S1-bxXI39/cover.jpg",
    "hoverCover": "",
    "description": "Eliminate all pieces of monsters from the board in this solitaire game, Monsterjong.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1-bxXI39",
    "size": "normal"
  },
  {
    "id": "s1clo6hmdeb",
    "title": "Jumpy Ape Joe",
    "cover": "https://static.gamezop.com/S1Clo6hMdeb/cover.jpg",
    "hoverCover": "",
    "description": "Help Joe eat up all the bananas! Don't forget to keep an eye out for that ticking timer.",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1Clo6hMdeb",
    "size": "normal"
  },
  {
    "id": "sykgdfukokg",
    "title": "Traffic Command",
    "cover": "https://static.gamezop.com/SykGDfUKOkg/cover.jpg",
    "hoverCover": "",
    "description": "The city crossing sees some insane traffic. Navigate the cars carefully without letting any crash.",
    "tags": [
      "Casual",
      "Racing",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SykGDfUKOkg",
    "size": "normal"
  },
  {
    "id": "rjybo6nfdgb",
    "title": "Ship It Up!",
    "cover": "https://static.gamezop.com/rJybo6nfdgb/cover.jpg",
    "hoverCover": "",
    "description": "How far can you take the boxes? Make bridges between islands, avoid the watchtowers!",
    "tags": [
      "Logic",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJybo6nfdgb",
    "size": "normal"
  },
  {
    "id": "byawpflydjx",
    "title": "Trap & Kill Virus",
    "cover": "https://static.gamezop.com/ByAWPfLYdJx/cover.jpg",
    "hoverCover": "",
    "description": "Kill the virus by capturing areas of the screen. Beware, they multiply fast. Don't go too close or you die.",
    "tags": [
      "Casual",
      "Logic",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ByAWPfLYdJx",
    "size": "normal"
  },
  {
    "id": "b1pmip4xce",
    "title": "Sway Bay",
    "cover": "https://static.gamezop.com/B1PMIp4XCe/cover.jpg",
    "hoverCover": "",
    "description": "Jump from stump to stump, but keep an eye out. The jungle ropes aren't known to be forgiving!",
    "tags": [
      "Casual",
      "Logic",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1PMIp4XCe",
    "size": "normal"
  },
  {
    "id": "rkwcybzuv",
    "title": "Furious Speed",
    "cover": "https://static.gamezop.com/rkwCYBZuV/cover.jpg",
    "hoverCover": "",
    "description": "Your goal is to get as far as you can. Give the cops a bad time as they try and find their way to you!",
    "tags": [
      "Racing"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkwCYBZuV",
    "size": "normal"
  },
  {
    "id": "rjwyhp79rs",
    "title": "Snakes & Ladders",
    "cover": "https://static.gamezop.com/rJWyhp79RS/cover.jpg",
    "hoverCover": "",
    "description": "Ladders take you up, and snakes bring you down. Be the first to get to 100 to win!",
    "tags": [
      "Board",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJWyhp79RS",
    "size": "normal"
  },
  {
    "id": "rjdlakhbdv",
    "title": "Sir Bottomtight",
    "cover": "https://static.gamezop.com/rJDlAKHbdV/cover.jpg",
    "hoverCover": "",
    "description": "Run through the jungle, jump over bottomless pits, and fight with evil cannibals in this action game.",
    "tags": [
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJDlAKHbdV",
    "size": "normal"
  },
  {
    "id": "rjsl0ksbun",
    "title": "Swipe Art Puzzle",
    "cover": "https://static.gamezop.com/rJsl0KSbuN/cover.jpg",
    "hoverCover": "",
    "description": "Move the pieces to recreate some super famous paintings made by old masters in this HTML5 game.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJsl0KSbuN",
    "size": "normal"
  },
  {
    "id": "h1wmafkp9jq",
    "title": "Tic Tac Toe",
    "cover": "https://static.gamezop.com/H1WmafkP9JQ/cover.jpg",
    "hoverCover": "",
    "description": "Play the classic Tic Tac Toe online! Play in 3 difficulty modes or challenge thousands of other players online!",
    "tags": [
      "Board",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1WmafkP9JQ",
    "size": "normal"
  },
  {
    "id": "syjafr-de",
    "title": "Jom Jom Jump",
    "cover": "https://static.gamezop.com/SyjAFr-dE/cover.jpg",
    "hoverCover": "",
    "description": "Help the tiny monster jump higher from platform to platform. Try to eat all apples in this endless game.",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyjAFr-dE",
    "size": "normal"
  },
  {
    "id": "syfcnzax6",
    "title": "Shade Shuffle",
    "cover": "https://static.gamezop.com/SyFcNzAX6/cover.jpg",
    "hoverCover": "",
    "description": "Balance between the right and the left wheels so that their colours match with the balls.",
    "tags": [
      "Logic",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyFcNzAX6",
    "size": "normal"
  },
  {
    "id": "b1fspmkp51m",
    "title": "Bottle Shoot",
    "cover": "https://static.gamezop.com/B1fSpMkP51m/cover.jpg",
    "hoverCover": "",
    "description": "Bring out the cowboy in you and keep a level head while you shoot down as many bottles as you can. Keep an eye out for the red ones!",
    "tags": [
      "Shooting",
      "Action",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1fSpMkP51m",
    "size": "normal"
  },
  {
    "id": "hjd9vmrqa",
    "title": "Astro Knot",
    "cover": "https://static.gamezop.com/HJD9VMRQa/cover.jpg",
    "hoverCover": "",
    "description": "Poor creature is stranded on unexplored land. Hop along to explore a beautiful galactic setup!",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJD9VMRQa",
    "size": "normal"
  },
  {
    "id": "syszvgut_ye",
    "title": "Snappy Spy",
    "cover": "https://static.gamezop.com/SysZvGUt_ye/cover.jpg",
    "hoverCover": "",
    "description": "Switch gravity with a touch and avoid obstacles. Remember to get some sushi for extra points!",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SysZvGUt_ye",
    "size": "normal"
  },
  {
    "id": "ejoezu1mwqg",
    "title": "Rock the Dock",
    "cover": "https://static.gamezop.com/EJoezu1MWqg/cover.jpg",
    "hoverCover": "",
    "description": "Stack the containers on the ship to accommodate most number of containers; try being perfect.",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/EJoezu1MWqg",
    "size": "normal"
  },
  {
    "id": "h1lzem8hq",
    "title": "Juicy Dash",
    "cover": "https://static.gamezop.com/H1lZem8hq/cover.jpg",
    "hoverCover": "",
    "description": "Juicy, tasty, match-3 madness. Prove your skills and match as many fruits as possible.",
    "tags": [
      "Logic",
      "Board"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1lZem8hq",
    "size": "normal"
  },
  {
    "id": "pgf1q7l1s",
    "title": "Mahjong At Home: Aloha Edition",
    "cover": "https://static.gamezop.com/pGF1Q7l1s/cover.jpg",
    "hoverCover": "",
    "description": "Under the palm trees, see the tiles align; match them quick and you're doing fine! Gentle waves and islands glow: feel the vibe, let Mahjong flow!",
    "tags": [
      "Board",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/pGF1Q7l1s",
    "size": "normal"
  },
  {
    "id": "yr4tqjhlr",
    "title": "Blaze Rider",
    "cover": "https://static.gamezop.com/yr4TqJhLr/cover.jpg",
    "hoverCover": "",
    "description": "Set the road on fire, melt the tar with the heat of your tire, Blaze Rider is on the prowl, and it's time for enemies to just retire.",
    "tags": [
      "Racing"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/yr4TqJhLr",
    "size": "normal"
  },
  {
    "id": "h1egu64xrg",
    "title": "High or Low",
    "cover": "https://static.gamezop.com/H1eGU64XRg/cover.jpg",
    "hoverCover": "",
    "description": "It's a game of luck! What do you instincts say - will it be a high card, or a low card? ",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1eGU64XRg",
    "size": "normal"
  },
  {
    "id": "4jcziv3xwql",
    "title": "Rafting Adventure",
    "cover": "https://static.gamezop.com/4JcZiV3XWql/cover.jpg",
    "hoverCover": "",
    "description": "Prevent the young man from slamming into the shores of this gorgeous but deadly canyon.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/4JcZiV3XWql",
    "size": "normal"
  },
  {
    "id": "sy6b98udz0",
    "title": "Cuby Dash",
    "cover": "https://static.gamezop.com/Sy6b98udz0/cover.jpg",
    "hoverCover": "",
    "description": "Here's a snake that likes... carrots! Swiftly move left and right, collect as many carrots as you can!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Sy6b98udz0",
    "size": "normal"
  },
  {
    "id": "b1mxhufqke",
    "title": "Tower Loot",
    "cover": "https://static.gamezop.com/B1MXhUFQke/cover.jpg",
    "hoverCover": "",
    "description": "Remove wooden objects off the game board to get a treasure chest next to the magician.",
    "tags": [
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1MXhUFQke",
    "size": "normal"
  },
  {
    "id": "jvhrznwly",
    "title": "Mahjong At Home: Scandinavian Edition",
    "cover": "https://static.gamezop.com/JVhRZNwly/cover.jpg",
    "hoverCover": "",
    "description": "Enjoy the calming beauty of Mahjong set in a Scandinavian landscape, with relaxing puzzles, serene Nordic backdrops, and a peaceful atmosphere for every match.",
    "tags": [
      "Puzzle",
      "Board"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/JVhRZNwly",
    "size": "normal"
  },
  {
    "id": "hjee0yhz_e",
    "title": "Penguin Skip",
    "cover": "https://static.gamezop.com/HJee0YHZ_E/cover.jpg",
    "hoverCover": "",
    "description": "Collect as may fish as possible but avoid falling in the icy cold water. Hop your way to endless fun.",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJee0YHZ_E",
    "size": "normal"
  },
  {
    "id": "h13-z8sqilx",
    "title": "Blackjack 21 Pro",
    "cover": "https://static.gamezop.com/H13-Z8sQILx/cover.jpg",
    "hoverCover": "",
    "description": "The best Blackjack game online! Score more than your opponent but keep under 21 to win!",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H13-Z8sQILx",
    "size": "normal"
  },
  {
    "id": "rkybnltit-x",
    "title": "Knight Ride",
    "cover": "https://static.gamezop.com/rkYbNLTIT-x/cover.jpg",
    "hoverCover": "",
    "description": "The canon's loaded and the knight's ready! Bounce through your flight while avoiding the onslaught of monsters.",
    "tags": [
      "Tower Defense",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkYbNLTIT-x",
    "size": "normal"
  },
  {
    "id": "bk4ml6470x",
    "title": "Odd One Out",
    "cover": "https://static.gamezop.com/Bk4ML6470x/cover.jpg",
    "hoverCover": "",
    "description": "Jump the good guys to safety, dump the evil ones to death. Watch out for the timer!",
    "tags": [
      "Casual",
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Bk4ML6470x",
    "size": "normal"
  },
  {
    "id": "r1zg1h6m90h",
    "title": "Candy Fiesta",
    "cover": "https://static.gamezop.com/r1zG1h6m90H/cover.jpg",
    "hoverCover": "",
    "description": "Merge delicious candies and unlock beautiful new combos! Candy Fiesta is a delicious match-three puzzle game loved by millions!",
    "tags": [
      "Board",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1zG1h6m90H",
    "size": "normal"
  },
  {
    "id": "ejag_jfw9l",
    "title": "Groovy Ski",
    "cover": "https://static.gamezop.com/EJaG_JfW9l/cover.jpg",
    "hoverCover": "",
    "description": "Ski down the most dangerous slopes without hitting the roadblocks in this endless HTML5 game.",
    "tags": [
      "Casual",
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/EJaG_JfW9l",
    "size": "normal"
  },
  {
    "id": "sjmb7qtb",
    "title": "Ooltaa",
    "cover": "https://static.gamezop.com/SJMB7qTb/cover.jpg",
    "hoverCover": "",
    "description": "Defend your base against the incoming enemy horde. Be sure to tap right to kill the filth!",
    "tags": [
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJMB7qTb",
    "size": "normal"
  },
  {
    "id": "hkxqnltmje",
    "title": "Rabbit Punch",
    "cover": "https://static.gamezop.com/HkxQnLtmJe/cover.jpg",
    "hoverCover": "",
    "description": "Punch rabbits as they come out of the magician's hat. DON'T punch the magicians. Speed is key!",
    "tags": [
      "Casual",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkxQnLtmJe",
    "size": "normal"
  },
  {
    "id": "hjem-lsqi8x",
    "title": "Cuby Zap",
    "cover": "https://static.gamezop.com/HJeM-LsQI8x/cover.jpg",
    "hoverCover": "",
    "description": "Shoot the red cubes until your lives run out. But be careful: don't shoot the blue ones!",
    "tags": [
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJeM-LsQI8x",
    "size": "normal"
  },
  {
    "id": "4ykgm_yzbcg",
    "title": "Rescue Juliet",
    "cover": "https://static.gamezop.com/4ykgM_yzbcg/cover.jpg",
    "hoverCover": "",
    "description": "Help Romeo find his way to Juliet in this puzzle game. Love and mind games have an old connect!",
    "tags": [
      "Puzzle",
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/4ykgM_yzbcg",
    "size": "normal"
  },
  {
    "id": "sjrx12txcrh",
    "title": "Ludo Dash",
    "cover": "https://static.gamezop.com/SJRX12TXcRH/cover.jpg",
    "hoverCover": "",
    "description": "A lightning fast ludo game with a rapid fire twist! No more waiting for 6 on the cice, but... blink and you miss!",
    "tags": [
      "Board",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJRX12TXcRH",
    "size": "normal"
  },
  {
    "id": "ryjgkht7qab",
    "title": "Bubble Smash",
    "cover": "https://static.gamezop.com/ryJGkhT7qAB/cover.jpg",
    "hoverCover": "",
    "description": "Aim and Shoot to Merge and Fuse! Don't let the Bubbles touch ground, or you'll lose!",
    "tags": [
      "Puzzle",
      "Number"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ryJGkhT7qAB",
    "size": "normal"
  },
  {
    "id": "hyim86vxae",
    "title": "Hats Off",
    "cover": "https://static.gamezop.com/HyIM86VXAe/cover.jpg",
    "hoverCover": "",
    "description": "Flip the players' hats and land them back on their heads. Hat throw shots are fun!",
    "tags": [
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HyIM86VXAe",
    "size": "normal"
  },
  {
    "id": "yvywagbq6",
    "title": "Bubble Shooter Classic",
    "cover": "https://static.gamezop.com/yVywAGBQ6/cover.jpg",
    "hoverCover": "",
    "description": "Match the colors, make them pop, burst the bubbles and watch them drop! The more bubbles that fall, the more points you get; here's a Bubble Shooter Classic — the best one yet!",
    "tags": [
      "Strategy",
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/yVywAGBQ6",
    "size": "normal"
  },
  {
    "id": "b1pfyhpq5ar",
    "title": "Shape Smash",
    "cover": "https://static.gamezop.com/B1PfyhpQ5Ar/cover.jpg",
    "hoverCover": "",
    "description": "A stream of orbs, a trail of destruction. Smash those blocks to unleash the resurrection!",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1PfyhpQ5Ar",
    "size": "normal"
  },
  {
    "id": "rkhuvq-1k",
    "title": "Illuminate",
    "cover": "https://static.gamezop.com/rkHuVQ-1K/cover.jpg",
    "hoverCover": "",
    "description": "Light up your brains and every room with a limited amount of lamps and reflectors in this puzzle game.",
    "tags": [
      "Logic",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkHuVQ-1K",
    "size": "normal"
  },
  {
    "id": "s1vz-ljquul",
    "title": "Fizz Fuss",
    "cover": "https://static.gamezop.com/S1VZ-LjQUUl/cover.jpg",
    "hoverCover": "",
    "description": "Is bartending on your bucket-list? Now's your chance! Serve your customers well.",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1VZ-LjQUUl",
    "size": "normal"
  },
  {
    "id": "b1hcysbdn",
    "title": "Let's Go Fishing",
    "cover": "https://static.gamezop.com/B1hCYSbdN/cover.jpg",
    "hoverCover": "",
    "description": "Become a fishing master by capturing maximum number of yummy fish in this adventure game.",
    "tags": [
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1hCYSbdN",
    "size": "normal"
  },
  {
    "id": "rkxmv8ti6wg",
    "title": "Zombies Can't Jump 2",
    "cover": "https://static.gamezop.com/rkxMV8TI6Wg/cover.jpg",
    "hoverCover": "",
    "description": "Help the Mexican gunfighters Pedro and Juana to survive the attacks of bloodthirsty zombies.",
    "tags": [
      "Shooting",
      "Action",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkxMV8TI6Wg",
    "size": "normal"
  },
  {
    "id": "vjogoygb9l",
    "title": "Flying School",
    "cover": "https://static.gamezop.com/VJOGOyGb9l/cover.jpg",
    "hoverCover": "",
    "description": "Help cute birds learn to fly. Drag and aim to make them fly from one nest to the other.",
    "tags": [
      "Logic",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/VJOGOyGb9l",
    "size": "normal"
  },
  {
    "id": "hyckrwd4",
    "title": "Basketball Master",
    "cover": "https://static.gamezop.com/HyCKrWd4/cover.jpg",
    "hoverCover": "",
    "description": "In this sports skill game, you can see the trajectory of each shot. Aim for the center of the hoop.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HyCKrWd4",
    "size": "normal"
  },
  {
    "id": "bjdz-8ixull",
    "title": "Nut Physics",
    "cover": "https://static.gamezop.com/BJdZ-8iXULl/cover.jpg",
    "hoverCover": "",
    "description": "It's winter time and a cute squirrel is gathering nuts to combat the cold. Can you help her?",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJdZ-8iXULl",
    "size": "normal"
  },
  {
    "id": "s1_v6gyp5ym",
    "title": "Basket Champs",
    "cover": "https://static.gamezop.com/S1_V6GyP5ym/cover.jpg",
    "hoverCover": "",
    "description": "Take part in this classical free shots tournament and lead your team to victory. Each round is more thrilling than the last!",
    "tags": [
      "Sports",
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1_V6GyP5ym",
    "size": "normal"
  },
  {
    "id": "rkwemi2q",
    "title": "Fancy Diver",
    "cover": "https://static.gamezop.com/rkWemI2q/cover.jpg",
    "hoverCover": "",
    "description": "Swim from the ocean up to the water surface! Make way by removing groups of matching blocks!",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkWemI2q",
    "size": "normal"
  },
  {
    "id": "p7hojyf4o",
    "title": "Rampage Racer",
    "cover": "https://static.gamezop.com/p7HOjYF4O/cover.jpg",
    "hoverCover": "",
    "description": "Get on a high speed rush through the traffic. Evade obstacles to break your own record!",
    "tags": [
      "Racing",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/p7HOjYF4O",
    "size": "normal"
  },
  {
    "id": "mfuw6hsxp",
    "title": "Templok",
    "cover": "https://static.gamezop.com/mfuw6HsxP/cover.jpg",
    "hoverCover": "",
    "description": "Who are you, oh mysterious traveler? Are you the chosen one, the destined Unraveler? Chasing secrets of Templok: the Sunken City so spectacular? Line up the jumbled gems, to smash them with your Excalibur!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/mfuw6HsxP",
    "size": "normal"
  },
  {
    "id": "h1wzaf1wqyq",
    "title": "Hipster Tennis",
    "cover": "https://static.gamezop.com/H1Wzaf1wqyQ/cover.jpg",
    "hoverCover": "",
    "description": "With rackets in hand and a grin on your face, Hipster Tennis is the perfect place.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1Wzaf1wqyQ",
    "size": "normal"
  },
  {
    "id": "rkt7tzjv9k7",
    "title": "Battleships Armada",
    "cover": "https://static.gamezop.com/rkt7TzJv9k7/cover.jpg",
    "hoverCover": "",
    "description": "Deploy your fleet carefully and scan the seas in search of your rival's ships. Bomb the fleet before yours gets bombed!",
    "tags": [
      "Shooting",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkt7TzJv9k7",
    "size": "normal"
  },
  {
    "id": "skf7yhp7q0b",
    "title": "Darts",
    "cover": "https://static.gamezop.com/SkF7yhp7q0B/cover.jpg",
    "hoverCover": "",
    "description": "It's time to reveal the master of Darts! Focus, Aim, Precision... Bullseye!",
    "tags": [
      "Shooting"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SkF7yhp7q0B",
    "size": "normal"
  },
  {
    "id": "b19eafjp9jx",
    "title": "Spinning Shooter",
    "cover": "https://static.gamezop.com/B19EafJP9JX/cover.jpg",
    "hoverCover": "",
    "description": "Test your marksmanship by shooting down boxes that come your way. Beware of surprises!",
    "tags": [
      "Shooting",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B19EafJP9JX",
    "size": "normal"
  },
  {
    "id": "qpcvkahi1",
    "title": "Ninja Speed Runner",
    "cover": "https://static.gamezop.com/QPcVkaHi1/cover.jpg",
    "hoverCover": "",
    "description": "It's time to test your Ninja Running Skills! Dash through enemy territory as far as you can... ohh and don't get hit by their Shurikens!",
    "tags": [
      "Crazy",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/QPcVkaHi1",
    "size": "normal"
  },
  {
    "id": "syfxj3a75cr",
    "title": "Kingdom Fight",
    "cover": "https://static.gamezop.com/SyfxJ3a75Cr/cover.jpg",
    "hoverCover": "",
    "description": "Monsters are coming in. Use arrows, electric bolts, fire catapults, and time warpers - build a defense for your kingdom. New maps every day!",
    "tags": [
      "Tower Defense",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyfxJ3a75Cr",
    "size": "normal"
  },
  {
    "id": "plqttp9ei",
    "title": "Slide And Divide",
    "cover": "https://static.gamezop.com/PLQTtp9Ei/cover.jpg",
    "hoverCover": "",
    "description": "Place it up, place it down, place it on the side. If you've found the number right, just Slide And Divide!",
    "tags": [
      "Number",
      "Logic",
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/PLQTtp9Ei",
    "size": "normal"
  },
  {
    "id": "rk-rtrb_v",
    "title": "Blackbeard's Island",
    "cover": "https://static.gamezop.com/rk-Rtrb_V/cover.jpg",
    "hoverCover": "",
    "description": "Help Blackbeard collect gold but beware of the enemies on the way in this logic game.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rk-Rtrb_V",
    "size": "normal"
  },
  {
    "id": "hjp4afkvqjq",
    "title": "City Cricket",
    "cover": "https://static.gamezop.com/HJP4afkvqJQ/cover.jpg",
    "hoverCover": "",
    "description": "Pick your city, bring out your batting gloves and show your Cricket skills. Let's see you chase that target!",
    "tags": [
      "Sports",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJP4afkvqJQ",
    "size": "normal"
  },
  {
    "id": "hje-oa2z_l-",
    "title": "Mirror Me",
    "cover": "https://static.gamezop.com/HJE-oa2z_l-/cover.jpg",
    "hoverCover": "",
    "description": "Mirror Me is a relaxing puzzle game that exercises your brain. You have to reflect symmetric shapes for the patterns shown.",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJE-oa2z_l-",
    "size": "normal"
  },
  {
    "id": "sk1wyn6xqrh",
    "title": "Foosball Kick",
    "cover": "https://static.gamezop.com/Sk1Wyn6XqRH/cover.jpg",
    "hoverCover": "",
    "description": "Foosball with a twist: use the red player when the ball is red and the yellow player when the ball is yellow. Sounds simple? Let's see you score 20 in the game!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Sk1Wyn6XqRH",
    "size": "normal"
  },
  {
    "id": "waqryduja",
    "title": "Football Kickoff",
    "cover": "https://static.gamezop.com/WaQryduJa/cover.jpg",
    "hoverCover": "",
    "description": "Close your eyes, hear the crowds roar: the goal is ahead, your heart wants more! Focus on your target, let the winds soar; remember your destiny to be a legend, to be a lore!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/WaQryduJa",
    "size": "normal"
  },
  {
    "id": "v1izg_1f-qg",
    "title": "Sheep Stacking",
    "cover": "https://static.gamezop.com/V1IZG_1f-qg/cover.jpg",
    "hoverCover": "",
    "description": "It's time to stack some sheep! Drop them right and create the highest possible tower!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/V1IZG_1f-qg",
    "size": "normal"
  },
  {
    "id": "bjsmagjw91m",
    "title": "Happy Kittens Puzzle",
    "cover": "https://static.gamezop.com/BJsmaGJw91m/cover.jpg",
    "hoverCover": "",
    "description": "All you have to do is keep the kittens happy. Be mindful, tapping on one cat changes the mood of all surrounding cats!",
    "tags": [
      "Puzzle",
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJsmaGJw91m",
    "size": "normal"
  },
  {
    "id": "bj9ze86i6wg",
    "title": "Aqua Thief",
    "cover": "https://static.gamezop.com/BJ9ZE86I6Wg/cover.jpg",
    "hoverCover": "",
    "description": "Dive into hours of fun as you help Aqua Thief in his quest to capture the underwater treasure!",
    "tags": [
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJ9ZE86I6Wg",
    "size": "normal"
  },
  {
    "id": "sj3-elt8p-x",
    "title": "Jelly Slice",
    "cover": "https://static.gamezop.com/SJ3-ELT8p-x/cover.jpg",
    "hoverCover": "",
    "description": "Slice the Jelly so that each slice contains only one star! Get 3 stars for maximum rewards.",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJ3-ELT8p-x",
    "size": "normal"
  },
  {
    "id": "rj57amjdcjm",
    "title": "Go Chicken Go",
    "cover": "https://static.gamezop.com/rJ57aMJDcJm/cover.jpg",
    "hoverCover": "",
    "description": "There's a group of chickens that need to cross the road, and they need to do that quick. Just try and avoid blood!",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJ57aMJDcJm",
    "size": "normal"
  },
  {
    "id": "sy6ryb-u4",
    "title": "Little Bouncing Guys",
    "cover": "https://static.gamezop.com/Sy6RYB-u4/cover.jpg",
    "hoverCover": "",
    "description": "Hop, jump, and bounce over obstacles and collect the purple star boxes in each level of this game.",
    "tags": [
      "Crazy",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Sy6RYB-u4",
    "size": "normal"
  },
  {
    "id": "s1a0fbwue",
    "title": "Minigolf Kingdom",
    "cover": "https://static.gamezop.com/S1A0FBWuE/cover.jpg",
    "hoverCover": "",
    "description": "Make sure the ball gets into the hole as quick as possible. You get limited chances in this golf game.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1A0FBWuE",
    "size": "normal"
  },
  {
    "id": "rkb--io78ux",
    "title": "Tiny Tripper",
    "cover": "https://static.gamezop.com/rkb--Io78Ux/cover.jpg",
    "hoverCover": "",
    "description": "The little trippers are out on an adventure. Change shapes and colors as you spiral across beautiful planetary landscapes.",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rkb--Io78Ux",
    "size": "normal"
  },
  {
    "id": "sj2ogpin",
    "title": "Dodge Bot",
    "cover": "https://static.gamezop.com/SJ2OGpIn/cover.jpg",
    "hoverCover": "",
    "description": "Run along the surface dodging the attack of the bots; hovering over them brings no laurels!",
    "tags": [
      "Casual",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SJ2OGpIn",
    "size": "normal"
  },
  {
    "id": "h1tbvua8awe",
    "title": "Pebble Boy",
    "cover": "https://static.gamezop.com/H1TbVUa8aWe/cover.jpg",
    "hoverCover": "",
    "description": "Hungry dragons have caged the birds of the realm. Join Pebble Boy, the Orc, to set them free.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1TbVUa8aWe",
    "size": "normal"
  },
  {
    "id": "bjaqnmc7t",
    "title": "Alfy",
    "cover": "https://static.gamezop.com/BJAqNMC7T/cover.jpg",
    "hoverCover": "",
    "description": "This warrior wants be a legendary forest spirit. Step into this magical world of the fern flower.",
    "tags": [
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJAqNMC7T",
    "size": "normal"
  },
  {
    "id": "hktqjhtxqrs",
    "title": "Boulder Blast",
    "cover": "https://static.gamezop.com/HkTQJhTXqRS/cover.jpg",
    "hoverCover": "",
    "description": "Keep shooting the boulders that fall from the skies. Use coins to upgrade your cannons as you level up. How many levels can you survive?",
    "tags": [
      "Shooting",
      "Action",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkTQJhTXqRS",
    "size": "normal"
  },
  {
    "id": "h1tz6z1dqym",
    "title": "Bouncy",
    "cover": "https://static.gamezop.com/H1Tz6z1Dqym/cover.jpg",
    "hoverCover": "",
    "description": "Bounce off the platforms and make as many jumps as you can in this amazing 3D game!",
    "tags": [
      "3D",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1Tz6z1Dqym",
    "size": "normal"
  },
  {
    "id": "ycvafcl0i",
    "title": "Panda Tropical Wedding Story",
    "cover": "https://static.gamezop.com/YCVAFCL0i/cover.jpg",
    "hoverCover": "",
    "description": "The Bride is here with the theme you set, for the cute panda wedding - this day she won't forget. Adorned with blooms so bright and a vibe so right, her dream makeover is a pure delight.",
    "tags": [
      "Adventure",
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/YCVAFCL0i",
    "size": "normal"
  },
  {
    "id": "bkpeakrw_e",
    "title": "Veggi Rabbit",
    "cover": "https://static.gamezop.com/BkpeAKrW_E/cover.jpg",
    "hoverCover": "",
    "description": "Cute bunny is a great chap but has one problem: can only eat fruits if in a set of 3! Help at will!",
    "tags": [
      "Puzzle"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BkpeAKrW_E",
    "size": "normal"
  },
  {
    "id": "4y6efoyf-5g",
    "title": "Bouncing Beasts",
    "cover": "https://static.gamezop.com/4y6efOyf-5g/cover.jpg",
    "hoverCover": "",
    "description": "Help the animals hop from one twig to the other, without letting the rings touch the wood!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/4y6efOyf-5g",
    "size": "normal"
  },
  {
    "id": "b1mfia4qcg",
    "title": "Spider Solitaire",
    "cover": "https://static.gamezop.com/B1MfIa4QCg/cover.jpg",
    "hoverCover": "",
    "description": "Get bitten by the solitaire bug and see if you can master this classic card game.",
    "tags": [
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1MfIa4QCg",
    "size": "normal"
  },
  {
    "id": "pdizyznae",
    "title": "Dragon Annihilation",
    "cover": "https://static.gamezop.com/PdIZyZNAe/cover.jpg",
    "hoverCover": "",
    "description": "These dragons from hell, under the witch's spell, are going to destroy the village you dwell! The only way to repel, is to show them the power of your shell!",
    "tags": [
      "Tower Defense",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/PdIZyZNAe",
    "size": "normal"
  },
  {
    "id": "s1kgwuim8ux",
    "title": "Shadow Run",
    "cover": "https://static.gamezop.com/S1kGWUim8Ux/cover.jpg",
    "hoverCover": "",
    "description": "Guide the ninja to move swiftly between pointed obstacles and climb reach great heights!",
    "tags": [
      "Casual",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/S1kGWUim8Ux",
    "size": "normal"
  },
  {
    "id": "r1zcfbzdv",
    "title": "Defense of Karmax 3",
    "cover": "https://static.gamezop.com/r1zCFBZdV/cover.jpg",
    "hoverCover": "",
    "description": "In this HTML5 game, Captain Rogers is a hero defending the galaxy against the alien invasion.",
    "tags": [
      "Tower Defense",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1zCFBZdV",
    "size": "normal"
  },
  {
    "id": "bygqefcxa",
    "title": "Falling Through",
    "cover": "https://static.gamezop.com/ByGqEfCXa/cover.jpg",
    "hoverCover": "",
    "description": "In this addictive game, smartly find the nearest gaps for the ball to pass through. Be quick!",
    "tags": [
      "Logic",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ByGqEfCXa",
    "size": "normal"
  },
  {
    "id": "h1abja2m_eb",
    "title": "Hex Burst",
    "cover": "https://static.gamezop.com/H1abja2M_eb/cover.jpg",
    "hoverCover": "",
    "description": "Burst as many hexagons as you can - just don't kill the snake.",
    "tags": [
      "Number",
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1abja2M_eb",
    "size": "normal"
  },
  {
    "id": "r1z13axqab",
    "title": "Flappy Foot Chinko",
    "cover": "https://static.gamezop.com/r1z13aXqAB/cover.jpg",
    "hoverCover": "",
    "description": "Dribble the football through the adventures of this game: through fielders and defenders, through pigs and electric poles! Just don't lose!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1z13aXqAB",
    "size": "normal"
  },
  {
    "id": "r1xzj62moe-",
    "title": "Aquatic Rescue",
    "cover": "https://static.gamezop.com/r1xZj62MOe-/cover.jpg",
    "hoverCover": "",
    "description": "Tickle your brains as your find the best way to rescue these little water creatures from their bubbles!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1xZj62MOe-",
    "size": "normal"
  },
  {
    "id": "h15qk3pq5ch",
    "title": "Hoopball Legends",
    "cover": "https://static.gamezop.com/H15Qk3pQ5CH/cover.jpg",
    "hoverCover": "",
    "description": "Get the ball through the hoops, get the max score in your group or keep trying in a loop!",
    "tags": [
      "3D",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H15Qk3pQ5CH",
    "size": "normal"
  },
  {
    "id": "sk728yxjx",
    "title": "Pixel Slime",
    "cover": "https://static.gamezop.com/Sk728YXJx/cover.jpg",
    "hoverCover": "",
    "description": "Help this slimy green blob to jump over spikes and gaps to reach the exit in each level!",
    "tags": [
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Sk728YXJx",
    "size": "normal"
  },
  {
    "id": "nzi2gczfn",
    "title": "Ellie Bachelorette Party",
    "cover": "https://static.gamezop.com/NzI2gCZFn/cover.jpg",
    "hoverCover": "",
    "description": "Dress up Ellie in sparkle and style! For it's her bachelorette bash, best make it worthwhile. Gowns, jewels, and heels to play: celebrate her special day in the most glamorous way!",
    "tags": [
      "Adventure",
      "Casual"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/NzI2gCZFn",
    "size": "normal"
  },
  {
    "id": "bjlmwguy_yl",
    "title": "Sheriff's Wrath",
    "cover": "https://static.gamezop.com/BJlMwGUY_yl/cover.jpg",
    "hoverCover": "",
    "description": "How dare these dacoits wreak havoc in your county! Pull out your gun and shoot those goons down.",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJlMwGUY_yl",
    "size": "normal"
  },
  {
    "id": "bjlg94za76",
    "title": "Zigzag Clash",
    "cover": "https://static.gamezop.com/BJlg94zA76/cover.jpg",
    "hoverCover": "",
    "description": "Colourful and modern snake game with snazzier enemies and much cooler movements!",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJlg94zA76",
    "size": "normal"
  },
  {
    "id": "bk9yntqqcb",
    "title": "Archery Champs",
    "cover": "https://static.gamezop.com/Bk9ynTQqCB/cover.jpg",
    "hoverCover": "",
    "description": "Here's the most fun online archery game for you! Play against thousands of online players 1 on 1. Choose from multiple bows, arrows, and sights as you go for the bullseye!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Bk9ynTQqCB",
    "size": "normal"
  },
  {
    "id": "hjy4pfjp9jq",
    "title": "Table Tennis Shots",
    "cover": "https://static.gamezop.com/HJY4pfJP9JQ/cover.jpg",
    "hoverCover": "",
    "description": "Try your best to keep the ball on the paddle for as long as you can and look out for surprises that will help you on the way to achieve the highest score!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HJY4pfJP9JQ",
    "size": "normal"
  },
  {
    "id": "h1be5ef0qp",
    "title": "Vegetables vs. Chef",
    "cover": "https://static.gamezop.com/H1be5Ef0Qp/cover.jpg",
    "hoverCover": "",
    "description": "Rumour has it that the unforgiving blade has been chopping veggies for years. Break its momentum.",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1be5Ef0Qp",
    "size": "normal"
  },
  {
    "id": "zmxz8lnrp",
    "title": "Spell Wizard",
    "cover": "https://static.gamezop.com/zMxz8LNrp/cover.jpg",
    "hoverCover": "",
    "description": "Pitch your vocabulary and see how many words can you reveal with your spelling wizardry! No time limit, but don't look around.",
    "tags": [
      "Puzzle",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/zMxz8LNrp",
    "size": "normal"
  },
  {
    "id": "bkqts_1b",
    "title": "Oh No",
    "cover": "https://static.gamezop.com/BkqTS_1b/cover.jpg",
    "hoverCover": "",
    "description": "Fill red and blue dots to solve puzzles! The challenge is to determine the color of every piece.",
    "tags": [
      "Number"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BkqTS_1b",
    "size": "normal"
  },
  {
    "id": "syn0kswuv",
    "title": "Crazy Pizza",
    "cover": "https://static.gamezop.com/SyN0KSWuV/cover.jpg",
    "hoverCover": "",
    "description": "It's another busy night at the pizzeria. Match 3 or more pizzas to prosper in this strategy game.",
    "tags": [
      "Crazy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/SyN0KSWuV",
    "size": "normal"
  },
  {
    "id": "byvovqzkk",
    "title": "Skill Shot",
    "cover": "https://static.gamezop.com/ByvOVQZkK/cover.jpg",
    "hoverCover": "",
    "description": "Blast from barrel to barrel avoiding the yellow critters, reach as high as you can.",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ByvOVQZkK",
    "size": "normal"
  },
  {
    "id": "hkww3v3-f",
    "title": "Fly Safe",
    "cover": "https://static.gamezop.com/Hkww3v3-F/cover.jpg",
    "hoverCover": "",
    "description": "A fast-dodging, easy to play but hard to master bird game. Collect as many coins as possible.",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Hkww3v3-F",
    "size": "normal"
  },
  {
    "id": "r1u7j3tmqcs",
    "title": "Hero Archer",
    "cover": "https://static.gamezop.com/r1u7J3TmqCS/cover.jpg",
    "hoverCover": "",
    "description": "How good are you with a bow and arrows? Strike down fruits from over people's heads to find out in this beautiful game!",
    "tags": [
      "Sports",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1u7J3TmqCS",
    "size": "normal"
  },
  {
    "id": "b1h5nfcxa",
    "title": "Homerun Hit",
    "cover": "https://static.gamezop.com/B1H5NfCXa/cover.jpg",
    "hoverCover": "",
    "description": "Step up to the plate for a great baseball batting experience. Be careful, 10 strikes and you lose.",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1H5NfCXa",
    "size": "normal"
  },
  {
    "id": "ejnzu1fb9g",
    "title": "Crunching Ninjas",
    "cover": "https://static.gamezop.com/EJnzu1fb9g/cover.jpg",
    "hoverCover": "",
    "description": "Choose your ninja and collect and munch on the delicious crunchy apples in this endless game.",
    "tags": [
      "Crazy",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/EJnzu1fb9g",
    "size": "normal"
  },
  {
    "id": "b1slrfrwun",
    "title": "Robotion",
    "cover": "https://static.gamezop.com/B1SlRFrWuN/cover.jpg",
    "hoverCover": "",
    "description": "Rusty robots work in sets of two and are too old to move. Connect the right pair across 100s of levels!",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/B1SlRFrWuN",
    "size": "normal"
  },
  {
    "id": "hfpoimyqy",
    "title": "Merge Mania",
    "cover": "https://static.gamezop.com/hfPOimYqY/cover.jpg",
    "hoverCover": "",
    "description": "Zap those numbers by pitting them against one another! Let's see how much you score in this race against time!",
    "tags": [
      "Number",
      "Logic",
      "Puzzle",
      "Strategy",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/hfPOimYqY",
    "size": "normal"
  },
  {
    "id": "rk7g6mkvcym",
    "title": "Street Dunkies",
    "cover": "https://static.gamezop.com/rk7G6Mkvcym/cover.jpg",
    "hoverCover": "",
    "description": "Swing your arms and dunk away! Use the ball to bounce yourself. Play short and quick street basketball matches with beautiful characters and backdrops!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rk7G6Mkvcym",
    "size": "normal"
  },
  {
    "id": "mkzzw9nxw",
    "title": "Fruity Fiesta",
    "cover": "https://static.gamezop.com/mKZZW9NXW/cover.jpg",
    "hoverCover": "",
    "description": "It's time for a juicy, jivy Fiesta of Fruits. Merge the fruits to get the elusive Melons. Collect them all to become the fruit baron!",
    "tags": [
      "Casual",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/mKZZW9NXW",
    "size": "normal"
  },
  {
    "id": "uyiznuaya",
    "title": "Blazing Blades",
    "cover": "https://static.gamezop.com/UYiznUAya/cover.jpg",
    "hoverCover": "",
    "description": "It's time to set the stage on fire with the blaze of your Blades! Let's see how many boards you can smash without a miss?!",
    "tags": [
      "Shooting",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/UYiznUAya",
    "size": "normal"
  },
  {
    "id": "wmm3ydfjc",
    "title": "Pizza Dash",
    "cover": "https://static.gamezop.com/wMm3YDfJC/cover.jpg",
    "hoverCover": "",
    "description": "Pizza parties all around, dash through the traffic and deliver them time bound!",
    "tags": [
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/wMm3YDfJC",
    "size": "normal"
  },
  {
    "id": "hko-wf8f_jx",
    "title": "Jumpy: The First Jumper",
    "cover": "https://static.gamezop.com/HkO-wf8F_Jx/cover.jpg",
    "hoverCover": "",
    "description": "Dodge all the random spikes that get in your way to become the best jumper known to early men!",
    "tags": [
      "Crazy",
      "Adventure"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/HkO-wf8F_Jx",
    "size": "normal"
  },
  {
    "id": "r1z-eq8nq",
    "title": "Road Safety",
    "cover": "https://static.gamezop.com/r1z-eQ8nq/cover.jpg",
    "hoverCover": "",
    "description": "Help people across the streets, watch out for gaps in traffic and make sure nobody gets hit by cars.",
    "tags": [
      "Racing",
      "Crazy",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1z-eQ8nq",
    "size": "normal"
  },
  {
    "id": "ry6bwfut_jg",
    "title": "Savage Revenge",
    "cover": "https://static.gamezop.com/ry6bwfUt_Jg/cover.jpg",
    "hoverCover": "",
    "description": "Help the savage run away from the castle dungeon! But be careful of the many lurking dangers!",
    "tags": [
      "Casual",
      "Action"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ry6bwfUt_Jg",
    "size": "normal"
  },
  {
    "id": "rt5ytrd0m",
    "title": "Kingdom Fight 2.0",
    "cover": "https://static.gamezop.com/Rt5ytrd0m/cover.jpg",
    "hoverCover": "",
    "description": "A battle so awesome: we came with chapter two. The army of the undead just wants to get through. Slow them down, fry them up, let them take the arrows you spew!",
    "tags": [
      "Tower Defense",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Rt5ytrd0m",
    "size": "normal"
  },
  {
    "id": "r1fl9vzrx6",
    "title": "Pirate's Pillage! Aye! Aye!",
    "cover": "https://static.gamezop.com/r1fl9VzRX6/cover.jpg",
    "hoverCover": "",
    "description": "A notorious pirate is out for his pot of gold. Help him outsmart his enemies and take the riches!",
    "tags": [
      "Crazy",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1fl9VzRX6",
    "size": "normal"
  },
  {
    "id": "r1xzyhtq50r",
    "title": "Dunk Draw",
    "cover": "https://static.gamezop.com/r1xZyhTQ50r/cover.jpg",
    "hoverCover": "",
    "description": "Draw lines and make sure the balls fall in the right hoops. Be quick, you have to act fast or you lose.",
    "tags": [
      "Puzzle",
      "Sports",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/r1xZyhTQ50r",
    "size": "normal"
  },
  {
    "id": "bj9bvzikdjl",
    "title": "Brick Plunge",
    "cover": "https://static.gamezop.com/BJ9bvzIKdJl/cover.jpg",
    "hoverCover": "",
    "description": "Are you nostalgic of the timeless brick arranging game? Who isn't? You are in the right place!",
    "tags": [
      "Casual",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/BJ9bvzIKdJl",
    "size": "normal"
  },
  {
    "id": "rytkntx5as",
    "title": "Snake King",
    "cover": "https://static.gamezop.com/ryTknTX5AS/cover.jpg",
    "hoverCover": "",
    "description": "Snake King is a fun and easy game with a simple objective: take control of more and more territory by beating other snakes!",
    "tags": [
      "Crazy",
      "Arcade"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/ryTknTX5AS",
    "size": "normal"
  },
  {
    "id": "bk25ezr7t",
    "title": "Slit Sight",
    "cover": "https://static.gamezop.com/Bk25EzR7T/cover.jpg",
    "hoverCover": "",
    "description": "Fun precision game where you have to shoot a ball without touching the spinning obstacles.",
    "tags": [
      "Logic"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/Bk25EzR7T",
    "size": "normal"
  },
  {
    "id": "hgempp8sc",
    "title": "Pool Master",
    "cover": "https://static.gamezop.com/hgempP8Sc/cover.jpg",
    "hoverCover": "",
    "description": "Get ready to play the most exciting Pool game ever! With modes like Classic, Time Trial, and Practice Mode, your fun will end never.",
    "tags": [
      "Sports",
      "Board",
      "Featured"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/hgempP8Sc",
    "size": "normal"
  },
  {
    "id": "h1cwk36mq0s",
    "title": "Crossbar Shots",
    "cover": "https://static.gamezop.com/H1CWk36mq0S/cover.jpg",
    "hoverCover": "",
    "description": "Aim the football at the crossbar - how hard can it be, right? Try scoring 100 in this game to find out!",
    "tags": [
      "Sports"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/H1CWk36mq0S",
    "size": "normal"
  },
  {
    "id": "rjywckhbon",
    "title": "Yummy Taco",
    "cover": "https://static.gamezop.com/rJyWCKHbON/cover.jpg",
    "hoverCover": "",
    "description": "Nobody said that running a taco shop would be easy. Can you keep all of your customers happy?",
    "tags": [
      "Crazy",
      "Strategy"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/rJyWCKHbON",
    "size": "normal"
  },
  {
    "id": "wirrqjva7",
    "title": "Hyperdrive Swinger",
    "cover": "https://static.gamezop.com/wIRrQjVa7/cover.jpg",
    "hoverCover": "",
    "description": "Slingshot your car in the corners and drift like a pro. Avoid crashing into the walls and score perfect turns that reward more points. Become the Drift King in this addictive and engaging take on drifting!",
    "tags": [
      "Racing"
    ],
    "developer": "",
    "iframeUrl": "https://4665.play.gamezop.com/g/wIRrQjVa7",
    "size": "normal"
  }
]