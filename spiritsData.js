const S3_VARIANTS = [
  "Normal", "Gold", "Gummy", "Galaxy", "Holofoil", "Cube", "Gem", "Quack"
];

const S4_VARIANTS = [
  "Normal", "Gold", "Cheat Master", "Hacker"
];

const SPIRITS_DATA = {
  S3: [
    {
      id: "water",
      name: "Water",
      rarity: "Rare",
      desc_sprite: "Replenish shields while standing in water!",
      desc_level: "Increases shield gain rate with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Gem": "Available", "Quack": "Available"
      }
    },
    {
      id: "earth",
      name: "Earth",
      rarity: "Rare",
      desc_sprite: "Gain bonus movement speed while crouching!",
      desc_level: "Increases crouch speed with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Cube": "Available", "Gem": "Available", "Quack": "Available"
      }
    },
    {
      id: "fire",
      name: "Fire",
      rarity: "Rare",
      desc_sprite: "Your attacks ignite enemies on fire!",
      desc_level: "Increases fire burn duration with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Cube": "Available", "Quack": "Available"
      }
    },
    {
      id: "duck",
      name: "Duck",
      rarity: "Epic",
      desc_sprite: "Quack loudly to distract nearby enemies!",
      desc_level: "Increases distraction radius with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Gem": "Available"
      }
    },
    {
      id: "ghost",
      name: "Ghost",
      rarity: "Epic",
      desc_sprite: "Become translucent and quieter while moving!",
      desc_level: "Reduces footstep sound further with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "dream",
      name: "Dream",
      rarity: "Legendary",
      desc_sprite: "Slowly regenerate health over time when low on HP!",
      desc_level: "Increases regen threshold and speed with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Cube": "Available"
      }
    },
    {
      id: "dracula",
      name: "Dracula",
      rarity: "Epic",
      desc_sprite: "Siphon health upon eliminating an opponent!",
      desc_level: "Increases siphon amount with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Gem": "Available"
      }
    },
    {
      id: "punk",
      name: "Punk",
      rarity: "Legendary",
      desc_sprite: "Explosive attacks have larger blast radiuses!",
      desc_level: "Increases explosive damage area with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Cube": "Available"
      }
    },
    {
      id: "king",
      name: "King",
      rarity: "Mythic",
      desc_sprite: "Command respect! Nearby teammates receive damage resistance.",
      desc_level: "Increases teammate damage reduction with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "burnt_peanut",
      name: "Burnt Peanut",
      rarity: "Mythic",
      desc_sprite: "Nutty mayhem! Spawns crunchy shield snacks when taking damage.",
      desc_level: "Increases snack drop rate with each Level Up!",
      variants: {
        "Normal": "Available"
      }
    },
    {
      id: "zero_point",
      name: "Zero Point",
      rarity: "Mythic",
      desc_sprite: "Zero point energy dash available on jump!",
      desc_level: "Reduces dash cooldown with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Cube": "Available", "Gem": "Available", "Quack": "Available"
      }
    },
    {
      id: "fishy",
      name: "Fishy",
      rarity: "Rare",
      desc_sprite: "Swim like a fish with boosted underwater mobility!",
      desc_level: "Increases swim speed with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Cube": "Available"
      }
    },
    {
      id: "striker",
      name: "Striker",
      rarity: "Epic",
      desc_sprite: "First strike deal massive damage to fresh targets!",
      desc_level: "Increases initial strike bonus damage with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "aura",
      name: "Aura",
      rarity: "Epic",
      desc_sprite: "Radiate a soothing energy that heals nearby allies.",
      desc_level: "Increases aura radius and healing output with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Gem": "Available"
      }
    },
    {
      id: "boss",
      name: "Boss",
      rarity: "Legendary",
      desc_sprite: "Deal increased damage against structures and vehicles!",
      desc_level: "Increases structure damage multiplier with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Cube": "Available"
      }
    },
    {
      id: "neon_reaper",
      name: "Neon Reaper",
      rarity: "Mythic",
      desc_sprite: "Harvest soul fragments from fallen foes for temporary damage boosts.",
      desc_level: "Increases damage stack cap with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Cube": "Available", "Gem": "Available"
      }
    },
    {
      id: "fox",
      name: "Fox",
      rarity: "Rare",
      desc_sprite: "Cunning speed! Sprint faster after opening chests.",
      desc_level: "Increases sprint boost duration with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "seven",
      name: "Seven",
      rarity: "Legendary",
      desc_sprite: "Advanced armor plating reduces incoming headshot damage.",
      desc_level: "Increases headshot damage reduction with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "batman",
      name: "Batman",
      rarity: "Mythic",
      desc_sprite: "Glide silently and deploy smoke stealth when taking sudden fire.",
      desc_level: "Reduces stealth deploy cooldown with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available", "Cube": "Available"
      }
    },
    {
      id: "vini_jr",
      name: "Vini Jr.",
      rarity: "Mythic",
      desc_sprite: "Exceptional agility! Slide and jump with rapid recovery.",
      desc_level: "Increases movement fluidity and speed with each Level Up!",
      variants: {
        "Normal": "Available"
      }
    },
    {
      id: "pollo",
      name: "Pollo",
      rarity: "Mythic",
      desc_sprite: "Cluck loud and bounce high with reduced fall impact!",
      desc_level: "Increases jump height boost with each Level Up!",
      variants: {
        "Normal": "Available"
      }
    },
    {
      id: "peely",
      name: "Peely",
      rarity: "Legendary",
      desc_sprite: "Slippery defense! Leave a banana peel trap when downed.",
      desc_level: "Increases peel trap radius with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Holofoil": "Available"
      }
    },
    {
      id: "llama",
      name: "Llama",
      rarity: "Legendary",
      desc_sprite: "Loot pinata! Increase ammo yields from all sources.",
      desc_level: "Increases extra ammo drop chance with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Gummy": "Available",
        "Galaxy": "Available", "Gem": "Available"
      }
    },
    {
      id: "john_wick",
      name: "John Wick",
      rarity: "Mythic",
      desc_sprite: "Tactical focus: faster weapon reload and swap speeds.",
      desc_level: "Increases weapon handling speed with each Level Up!",
      variants: {
        "Normal": "Available"
      }
    }
  ],

  S4: [
    {
      id: "adventurer",
      name: "Adventurer",
      rarity: "Rare",
      desc_sprite: "Exploration bonus! Reveal nearby chests through walls.",
      desc_level: "Increases treasure detection radius with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "jonesy",
      name: "Jonesy",
      rarity: "Rare",
      desc_sprite: "Classic survivalist! Gain bonus health on eliminations.",
      desc_level: "Increases bonus health gain with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "8bit",
      name: "8 Bit",
      rarity: "Rare",
      desc_sprite: "Retro power! Spawns retro pixel health drops upon taking hit.",
      desc_level: "Increases pixel healing value with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "killswitch",
      name: "Killswitch",
      rarity: "Epic",
      desc_sprite: "Disrupt enemy tech when breaking shields nearby.",
      desc_level: "Increases tech disruption duration with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "sonic",
      name: "Sonic",
      rarity: "Epic",
      desc_sprite: "Supersonic sprint speed boost after taking damage!",
      desc_level: "Increases sprint boost speed with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "tails",
      name: "Tails",
      rarity: "Epic",
      desc_sprite: "Twin-tail flight glide capability on double jump!",
      desc_level: "Increases glide duration with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "shadow",
      name: "Shadow",
      rarity: "Epic",
      desc_sprite: "Chaos control boost to dodge incoming fire.",
      desc_level: "Increases dodge chance with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "jackrabbit",
      name: "JackRabbit",
      rarity: "Legendary",
      desc_sprite: "Rapid mobility! Jump higher and sprint faster.",
      desc_level: "Increases mobility multiplier with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "crown",
      name: "Crown",
      rarity: "Mythic",
      desc_sprite: "Victory crown aura boosts overall team damage output.",
      desc_level: "Increases team damage buff with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "klombo",
      name: "Klombo",
      rarity: "Mythic",
      desc_sprite: "Klombo stomp impact deals massive area splash damage.",
      desc_level: "Increases stomp splash radius with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "storm_scout",
      name: "Storm Scout",
      rarity: "Rare",
      desc_sprite: "Storm circle prediction and storm damage reduction.",
      desc_level: "Increases storm damage resistance with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "xray",
      name: "X Ray",
      rarity: "Legendary",
      desc_sprite: "Periodically mark enemies in an area around you.",
      desc_level: "Mark more often and in a larger radius with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "overshield",
      name: "Overshield",
      rarity: "Rare",
      desc_sprite: "Grants overshield, scaling with level.",
      desc_level: "",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "onigiri",
      name: "Onigiri",
      rarity: "Rare",
      desc_sprite: "Applies Overdrive after eating or drinking a Consumable.",
      desc_level: "Overdrive lasts longer with each Level Up!",
      variants: {
        "Normal": "Available", "Gold": "Available", "Cheat Master": "Available", "Hacker": "Available"
      }
    },
    {
      id: "megaman",
      name: "Megaman",
      rarity: "Rare",
      desc_sprite: "Slip and slide around with reduced friction while Sliding.",
      desc_level: "Slide farther with each Level Up!",
      variants: {
        "Normal": "Available",
        "Gold": "Not Exist",
        "Cheat Master": "Not Exist",
        "Hacker": "Not Exist"
      }
    }
  ]
};