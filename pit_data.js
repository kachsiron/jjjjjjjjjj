var a = 'https://vignette.wikia.nocookie.net/sword-of-the-stars-the-pit/images/';
var G = 'https://raw.githubusercontent.com/kachsiron/kachsiron.github.io/master/imgs/canvas.png';
var Gurl = 'url("' + G + '")';
var IMG = new Image();
IMG.src = G;
IMG.style.display = 'none';
document.body.appendChild(IMG);
var C = {"Aggresive Antibiotics":[0,0],"Anti-Bodies":[-50,0],"Moldy Bread":[-100,0],"Infini Food":[-150,0],"Ancient Herbs":[-200,0],"Pineal Gland":[-250,0],"Giant Mitochondria":[-300,0],"Amino Goop":[-350,0],"Exotic Proteins":[-400,0],"Mutagens":[-450,0],"Anti-Venom":[-500,0],"Poison Gland":[-550,0],"Serum":[-600,0],"Bacon and Eggs":[-650,0],"Star-bacon":[-700,0],"Egg":[-750,0],"Baked Avian":[-800,0],"Scent Gland":[-850,0],"Avian Carcass":[-900,0],"Base Paste":[-950,0],"Fat Strips":[-1000,0],"Bone Slivers":[-1050,0],"Berserker Serum":[-1100,0],"Adrenal Sack":[-1150,0],"Bird of Feasting":[-1200,0],"Edible Roots":[-1250,0],"Apples":[-1300,0],"Morrigi Flavor Oils":[-1350,0],"Blandwich":[-1400,0],"Raw Meat":[-1450,0],"Rotten Cheese":[-1500,0],"Brain Soup":[-1550,0],"Hiver Brain Crystal":[-1600,0],"Brutella":[-1650,0],"Hofnuts":[-1700,0],"Melosian Chocolate":[-1750,0],"Brutwich":[-1800,0],"Tarka Warbread":[-1850,0],"Bugboy":[-1900,0],"Kirt'ch Grubs":[-1950,0],"Kutar Oatmix":[-2000,0],"Burnt Ribs":[-2050,0],"Ribs":[-2100,0],"Chocolate Fondue":[-2150,0],"Chocolate Eggs":[-2200,0],"Cluck L'orange":[-2250,0],"Nova Fruit":[-2300,0],"Cooked Meat":[-2350,0],"Counter Poison":[-2400,0],"Shrooms":[-2450,0],"M'kkosian Fungus Shards":[-2500,0],"Damper Patch":[-2550,0],"Deli Sotswich":[-2600,0],"TLC Salad":[-2650,0],"Dembo Jam":[-2700,0],"Laybliss Berries":[-2750,0],"Dermal Enzymes":[-2800,0],"Scale Cells":[-2850,0],"Dried Fruit":[-2900,0],"Bh'azhnazh Fruit":[-2950,0],"Egg Nog":[-3000,0],"Energy Drink":[-3050,0],"Primordial Soup":[-3100,0],"Epic Bacon Sotswich":[-3150,0],"Hero Sotswich":[-3200,0],"Faux Roast":[-3250,0],"Fungal Meat":[-3300,0],"Bindings":[-3350,0],"Fauxtato Salad":[-3400,0],"Lipid Optimizer":[-3450,0],"Fire and Ice Truffles":[-3500,0],"Ice Gems":[-3550,0],"Fondue":[-3600,0],"Safe Cheese":[-3650,0],"Force Field Belt":[-3700,0],"Stale Bread":[-3750,0],"Food Pellet":[-3800,0],"Fortifying Sandwich":[-3850,0],"Safe Meat":[-3900,0],"Grilled Cheese":[-3950,0],"Gronch Heart Elixir":[-4000,0],"Gronch Heart":[-4050,0],"Healing Salve":[-4100,0],"Hiver Cheese":[0,-50],"Hoolari Soup":[-50,-50],"Hoolari Gourd":[-100,-50],"Hum Gum":[-150,-50],"Sonic Nodule":[-200,-50],"Icedream Bar":[-250,-50],"Imperial Special":[-300,-50],"Ko'Grappa Stonecrab":[-350,-50],"Ku'Sulto Lobstercake":[-400,-50],"Maybe Back Ribs":[-450,-50],"Starbeque Sauce":[-500,-50],"Mitochondrial Stimulator":[-550,-50],"Chemo Slugs":[-600,-50],"Omni Gland":[-650,-50],"Neural Webbing":[-700,-50],"Acid Sack":[-750,-50],"Nutbutter":[-800,-50],"Omelette":[-850,-50],"Pheromone Bait":[-900,-50],"Disease Extract":[-950,-50],"Pit Stew":[-1000,-50],"Tainted Meat":[-1050,-50],"Powabar":[-1100,-50],"Zytokot Fungibar":[-1150,-50],"Protein Shake":[-1200,-50],"Pungent Meat":[-1250,-50],"Rib Sandwich":[-1300,-50],"Bread":[-1350,-50],"Roast Beast":[-1400,-50],"Sammich":[-1450,-50],"Seafood Platter":[-1500,-50],"Soylent Vines":[-1550,-50],"Wuuna Sea Cucumber":[-1600,-50],"Sks":[-1650,-50],"Sotswich":[-1700,-50],"Spider Pie":[-1750,-50],"Star Coffee":[-1800,-50],"Medicinal Nuts":[-1850,-50],"Star Fondue":[-1900,-50],"Chozanti Brie":[-1950,-50],"Steak N Shrooms":[-2000,-50],"Steroidal Enchancers":[-2050,-50],"Vitamins":[-2100,-50],"Steroidal Venom":[-2150,-50],"Stinkwich":[-2200,-50],"Stuffed Mushrooms":[-2250,-50],"Trail Mix":[-2300,-50],"Turkey Lasagna":[-2350,-50],"Leftovers":[-2400,-50],"Unspeakable Hoagie":[-2450,-50],"Lure":[-2500,-50],"Etthi Crystal":[-2550,-50],"Seismic Gloves":[-2600,-50],"Vibranite":[-2650,-50],"Composite Cloth":[-2700,-50],"AM Cells":[-2750,-50],"Quantum Capacitors":[-2800,-50],"Ablative Plate":[-2850,-50],"Shedding Carapace":[-2900,-50],"Electronic Parts":[-2950,-50],"Mine Trap":[-3000,-50],"Cyber Connectors":[-3050,-50],"Grenade":[-3100,-50],"Sparker":[-3150,-50],"Absorber Weave":[-3200,-50],"Scaleskin":[-3250,-50],"Superconductors":[-3300,-50],"Nano-Wire":[-3350,-50],"String Sinks":[-3400,-50],"Absorption Plate":[-3450,-50],"Absorption Scale":[-3500,-50],"Graphene Plates":[-3550,-50],"Chitin":[-3600,-50],"Adamantium Claws":[-3650,-50],"Adamantium Resin":[-3700,-50],"Living Steel Remnant":[-3750,-50],"Adamantium Sword":[-3800,-50],"Lightning Blade":[-3850,-50],"Unstable Isotopes":[-3900,-50],"Adrenal Implant":[-3950,-50],"Neural Transmitters":[-4000,-50],"Aykay Rifle":[-4050,-50],"Rifle Parts":[-4100,-50],"Structural Rods":[0,-100],"Welding Goo":[-50,-100],"Servos":[-100,-100],"Ballistic Repair Kit":[-150,-100],"Bio-Blaster":[-200,-100],"Energy Tap":[-250,-100],"Biocontroller":[-300,-100],"Photonic Amplifier":[-350,-100],"Blowdart Rifle":[-400,-100],"Bone":[-450,-100],"Compression Chamber":[-500,-100],"Myomer Bundles":[-550,-100],"Energy Cell":[-600,-100],"Blunderbuss":[-650,-100],"Duct Tape":[-700,-100],"Bone Dagger":[-750,-100],"Razorteeth":[-800,-100],"Bypass Circuit":[-850,-100],"Cybernetic Brain":[-900,-100],"Caltrops":[-950,-100],"Casing Fragments":[-1000,-100],"Chitin Plate Armor":[-1050,-100],"Cleaver Assault Rifle":[-1100,-100],"Assault Rifle":[-1150,-100],"Quantum Splitter":[-1200,-100],"Cleaver Auto Pistol":[-1250,-100],"Auto Pistol":[-1300,-100],"Cleaver Auto Rifle":[-1350,-100],"Auto Rifle":[-1400,-100],"Cleaver Auto-Shotgun":[-1450,-100],"Auto-Shotgun":[-1500,-100],"Cleaver Machine Pistol":[-1550,-100],"Machine Pistol":[-1600,-100],"Cleaver Mag Pistol":[-1650,-100],"Mag Pistol":[-1700,-100],"Cleaver Mag Rifle":[-1750,-100],"Mag Rifle":[-1800,-100],"Cleaver Scattergun":[-1850,-100],"Scattergun":[-1900,-100],"Cyber Scrambler":[-1950,-100],"Diagnostic Chip":[-2000,-100],"Logic Circuits":[-2050,-100],"Disruptor Plate":[-2100,-100],"Crusader Armor":[-2150,-100],"Reflex Micro-furnace":[-2200,-100],"Door Spike":[-2250,-100],"Punch Claw":[-2300,-100],"Shotgun Shells":[-2350,-100],"Emergency Teleporter":[-2400,-100],"Tachyon Capacitors":[-2450,-100],"Enduro Laser Carbine":[-2500,-100],"Laser Carbine":[-2550,-100],"Enduro Laser Pistol":[-2600,-100],"Laser Pistol":[-2650,-100],"Enduro Laser Rifle":[-2700,-100],"Laser Rifle":[-2750,-100],"Enduro Laser Sword":[-2800,-100],"Laser Sword":[-2850,-100],"Energy Backpack":[-2900,-100],"Energy System Tuner":[-2950,-100],"Gun Parts":[-3000,-100],"Optics":[-3050,-100],"Etthi Vessel":[-3100,-100],"Faux Tag":[-3150,-100],"Specimen Tag":[-3200,-100],"System Transponder":[-3250,-100],"Fear Lantern":[-3300,-100],"Firebomb":[-3350,-100],"Fuel Cell":[-3400,-100],"Flechette Rounds":[-3450,-100],"Rifle Rounds":[-3500,-100],"Utility Belt":[-3550,-100],"Reflex Micro-Furnace":[-3600,-100],"Goop Rounds":[-3650,-100],"Pistol Rounds":[-3700,-100],"Grav Boots":[-3750,-100],"Combat Boots":[-3800,-100],"Element X":[-3850,-100],"Hand Stunner":[-3900,-100],"Harmonic Resonator":[-3950,-100],"Adaptive Crystals":[-4000,-100],"Harpy Drone":[-4050,-100],"Combat Processors":[-4100,-100],"Heavy Cannon":[0,-150],"Cannon Parts":[-50,-150],"Heavy Silencer":[-100,-150],"Heavy Slug-thrower":[-150,-150],"Heavy Slugs":[-200,-150],"Molecular Neutronium":[-250,-150],"Shell Casings":[-300,-150],"Heavymag Assault Rifle":[-350,-150],"Heavymag Auto Pistol":[-400,-150],"Heavymag Auto Rifle":[-450,-150],"Heavymag Auto-Shotgun":[-500,-150],"Heavymag Gauss Pistol":[-550,-150],"Heavymag Gauss Rifle":[-600,-150],"Heavymag Machine Pistol":[-650,-150],"Heavymag Scattergun":[-700,-150],"High Calibre Rounds":[-750,-150],"High Explosive Rounds":[-800,-150],"Hinge Spike":[-850,-150],"Heavy Claw":[-900,-150],"Impact Armor":[-950,-150],"Improvised Exo Armor":[-1000,-150],"Neural Netting":[-1050,-150],"Improvised Lockpick":[-1100,-150],"Improvised Med-Kit":[-1150,-150],"Antibiotics":[-1200,-150],"Kinetic Plate":[-1250,-150],"Kinetic Scale":[-1300,-150],"Lifter Pack":[-1350,-150],"Sar":[-1400,-150],"Liquidator":[-1450,-150],"M'kkose Darter":[-1500,-150],"Neutronium Stormer":[-1550,-150],"Overload Rifle":[-1600,-150],"Poison Darts":[-1650,-150],"Injector Fangs":[-1700,-150],"Pulsar Pistol":[-1750,-150],"Pulse Resonator":[-1800,-150],"Softscreen":[-1850,-150],"Pulse Rifle":[-1900,-150],"Purifier":[-1950,-150],"Quantum Scan Helmet":[-2000,-150],"R G Special":[-2050,-150],"Rage Beam":[-2100,-150],"Razor Fists":[-2150,-150],"Regen Patch":[-2200,-150],"Med Patch":[-2250,-150],"Regen Plate":[-2300,-150],"Nurturing Embrace":[-2350,-150],"Rifle":[-2400,-150],"Rosetta Brain":[-2450,-150],"Pocket Tesseract":[-2500,-150],"Seismic Boots":[-2550,-150],"Sharpening Kit":[-2600,-150],"Silenced Auto Rifle":[-2650,-150],"Silenced Machine Pistol":[-2700,-150],"Silenced Pistol":[-2750,-150],"Silencer":[-2800,-150],"Siren":[-2850,-150],"Smart Assault Rifle":[-2900,-150],"Smart Auto Pistol":[-2950,-150],"Smart Auto Rifle":[-3000,-150],"Smart Laser Carbine":[-3050,-150],"Smart Laser Pistol":[-3100,-150],"Smart Laser Rifle":[-3150,-150],"Smart Machine Pistol":[-3200,-150],"Smart Mag Pistol":[-3250,-150],"Smart Mag Rifle":[-3300,-150],"Smart Rifle":[-3350,-150],"Sniper Rifle":[-3400,-150],"Spore Dagger":[-3450,-150],"Squawker Drone":[-3500,-150],"Targeting Dart":[-3550,-150],"Darts":[-3600,-150],"Targeting Helm":[-3650,-150],"Turret":[-3700,-150],"Turret Override":[-3750,-150],"Undead Abomination":[-3800,-150],"Undead Humanoid":[-3850,-150],"Undead Vermin":[-3900,-150],"Venom Sword":[-3950,-150],"Sword":[-4000,-150],"X-Rifle":[-4050,-150],"X-ray Transducer":[-4100,-150]};
var R = {
	"cooker": [{
			"skill": "Biotech",
			"value": 70,
			"desc": "Aggresive Antibiotics x2. Cures up to Lvl 4 Disease",
			"items": ["Aggresive Antibiotics", "Anti-Bodies", "Moldy Bread"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+100 food",
			"items": ["Infini Food", "Ancient Herbs", "Pineal Gland", "Giant Mitochondria"]
	}, {
			"skill": "Biotech",
			"value": 100,
			"desc": "+400% PSI Regeneration for 100 turns, deals 10 damage if used by human or tarka",
			"items": ["Amino Goop", "Pineal Gland", "Pineal Gland", "Exotic Proteins", "Mutagens"]
	}, {
			"skill": "Medical",
			"value": 50,
			"desc": "Anti-Venom x3. Cures up to 3 levels of Poison",
			"items": ["Anti-Venom", "Poison Gland", "Serum"]
	}, {
			"skill": "Biotech",
			"value": 65,
			"desc": "+85 food (+35 over ingredients)",
			"items": ["Bacon and Eggs", "Star-bacon", "Egg"]
	}, {
			"skill": "Biotech",
			"value": 65,
			"desc": "+135 food (+70 over ingredients), drops 1 Bone Slivers after consumption. Can not be made with EZ Cooker",
			"items": ["Baked Avian", "Scent Gland", "Avian Carcass"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "Protection vs Acid (Proteans, etc.) for 6 turns. Does not fade with time. Stacks with itself",
			"items": ["Base Paste", "Fat Strips", "Fat Strips", "Bone Slivers"]
	}, {
			"skill": "Biotech",
			"value": 110,
			"desc": "for 20 turns increases Speed by 1, might by 20, melee damage dealt by 100%, all damage taken by 50%, grants 1 additional attack per moment and causes Berserk for 20 turns. After expiring Slows character for 5 turns",
			"items": ["Berserker Serum", "Adrenal Sack", "Serum", "Pineal Gland", "Giant Mitochondria"]
	}, {
			"skill": "Biotech",
			"value": 100,
			"desc": "+300 food (+185 over ingredients), restores 100 health and 100 psi, +50 max food capacity, increases random stat (might/finesse/brains) by 1, leaves 1 Bone Slivers and 3 Leftovers after consumption. Can inflict unconscious state for 5-10 turns",
			"items": ["Bird of Feasting", "Avian Carcass", "Ancient Herbs", "Edible Roots", "Apples", "Morrigi Flavor Oils"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+120 food (+40 over ingredients) ",
			"items": ["Blandwich", "Moldy Bread", "Raw Meat", "Rotten Cheese"]
	}, {
			"skill": "Biotech",
			"value": 120,
			"desc": "+50 food and restores 50 Psi Points",
			"items": ["Brain Soup", "Pineal Gland", "Pineal Gland", "Hiver Brain Crystal", "Exotic Proteins", "Giant Mitochondria"]
	}, {
			"skill": "Biotech",
			"value": 105,
			"desc": "+110 food (same as ingredients), restores 80 health and 80 psi",
			"items": ["Brutella", "Hofnuts", "Hofnuts", "Melosian Chocolate"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+190 food (+10 over ingredients), restores 80 health and 80 psi",
			"items": ["Brutwich", "Brutella", "Tarka Warbread"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+145 food (+20 over ingredients), +120 food to Liir (+25 above ingredients), non-edible by humans",
			"items": ["Bugboy", "Kirt'ch Grubs", "Kutar Oatmix"]
	}, {
			"skill": "Biotech",
			"value": 85,
			"desc": "+65 food (+10 over ingredients), leaves 1 Bone after consumption",
			"items": ["Burnt Ribs", "Ribs"]
	}, {
			"skill": "Biotech",
			"value": 100,
			"desc": "+150 food (-170 below ingredients), restores 200 health, grants 500 experience",
			"items": ["Chocolate Fondue", "Chocolate Eggs", "Chocolate Eggs", "Bone Slivers", "Tarka Warbread", "Morrigi Flavor Oils"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+165 food (+40 over ingredients), Restores 60 health, leaves 1 Bone Slivers after consumption",
			"items": ["Cluck L'orange", "Avian Carcass", "Nova Fruit", "Nova Fruit"]
	}, {
			"skill": "Biotech",
			"value": 20,
			"desc": "+50 food (+20 over ingredients)",
			"items": ["Cooked Meat", "Raw Meat"]
	}, {
			"skill": "Biotech",
			"value": 115,
			"desc": "Completely cures Poison, but gives double hunger rate for 25 rounds",
			"items": ["Counter Poison", "Serum", "Shrooms", "M'kkosian Fungus Shards", "M'kkosian Fungus Shards"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "Cures 125 Radiation",
			"items": ["Damper Patch", "Giant Mitochondria", "Scent Gland"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+250 food (same as ingredients), +20 max food capacity",
			"items": ["Deli Sotswich", "TLC Salad", "Tarka Warbread"]
	}, {
			"skill": "Biotech",
			"value": 85,
			"desc": "+150 food (+50 over ingredients), boosts next Disease check",
			"items": ["Dembo Jam", "Laybliss Berries", "Laybliss Berries", "Laybliss Berries", "Laybliss Berries"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "Humans and Liir gain 45 natural Armor and are Slowed for 100 moments",
			"items": ["Dermal Enzymes", "Scale Cells", "Mutagens", "Exotic Proteins"]
	}, {
			"skill": "Biotech",
			"value": 65,
			"desc": "+75 food (same as ingredients), boosts next Disease check",
			"items": ["Dried Fruit", "Laybliss Berries", "Apples", "Bh'azhnazh Fruit"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "Egg Nog x2. +180 Food per Egg Nog, +360 food total (+310 over ingredients)",
			"items": ["Egg Nog", "Egg", "Egg", "Exotic Proteins"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+50 food, +1 Move & boosts health regeneration by 200% for 100 turns",
			"items": ["Energy Drink", "Exotic Proteins", "Giant Mitochondria", "Primordial Soup"]
	}, {
			"skill": "Biotech",
			"value": 130,
			"desc": "+450 food (+210 over base ingredients, or +50 over Sots + bacon), +15 food capacity",
			"items": ["Epic Bacon Sotswich", "Hero Sotswich", "Star-bacon", "Star-bacon", "Star-bacon", "Star-bacon"]
	}, {
			"skill": "Biotech",
			"value": 115,
			"desc": "+200 food (+50 over ingredients), restores 50 health",
			"items": ["Faux Roast", "Fungal Meat", "Fungal Meat", "Fungal Meat", "Bindings", "Bindings"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+190 food (+75 over ingredients), +30 maximum food capacity",
			"items": ["Fauxtato Salad", "Edible Roots", "Egg", "Lipid Optimizer"]
	}, {
			"skill": "Biotech",
			"value": 110,
			"desc": "+55 food (-20 below ingredients), immunity to cold for 100 turns, food consumption becomes 0 for for 100 turns",
			"items": ["Fire and Ice Truffles", "Ice Gems", "Nova Fruit", "Melosian Chocolate"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "+160 food (+40 over ingredients), restores 25 health",
			"items": ["Fondue", "Safe Cheese", "Safe Cheese", "Bone Slivers", "Stale Bread"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "Food Pellet x2. +35 food per pellet (70 food in total, +55 over ingredients)",
			"items": ["Food Pellet", "Fat Strips", "Primordial Soup"]
	}, {
			"skill": "Biotech",
			"value": 55,
			"desc": "+150 food (+30 over ingredients)",
			"items": ["Fortifying Sandwich", "Safe Cheese", "Safe Meat", "Stale Bread"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+90 food (+10 over ingredients)",
			"items": ["Grilled Cheese", "Stale Bread", "Safe Cheese"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "Gives you 200 food and gave me a temporary(?) +1 Fineness or +1 power each time",
			"items": ["Gronch Heart Elixir", "Gronch Heart", "Giant Mitochondria", "Scent Gland"]
	}, {
			"skill": "Biotech",
			"value": 85,
			"desc": "regenerates 10 health per turn for 20 turns",
			"items": ["Healing Salve", "Ancient Herbs", "Edible Roots"]
	}, {
			"skill": "Biotech",
			"value": 60,
			"desc": "+300 food (+110 over ingredients)",
			"items": ["Hero Sotswich", "Cooked Meat", "Hiver Cheese", "Tarka Warbread"]
	}, {
			"skill": "Biotech",
			"value": 70,
			"desc": "Hoolari Soup x3. +65 food, +30 maximum food capacity",
			"items": ["Hoolari Soup", "Hoolari Gourd", "Morrigi Flavor Oils"]
	}, {
			"skill": "Biotech",
			"value": 70,
			"desc": "Hum Gum x3. Cures Confusion, Berserk, Stun and Fear",
			"items": ["Hum Gum", "Exotic Proteins", "Sonic Nodule"]
	}, {
			"skill": "Biotech",
			"value": 110,
			"desc": "+35 food (-60 below ingredients), cures ALL statuses (Poison, Disease, Fear etc)",
			"items": ["Icedream Bar", "Ice Gems", "Ice Gems", "Laybliss Berries", "Bone Slivers"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "+200 food (+95 over ingredients), +1 might to Tarka male",
			"items": ["Imperial Special", "Ko'Grappa Stonecrab", "Ku'Sulto Lobstercake", "Bh'azhnazh Fruit"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+175 food (+35 food over base ingredients or +65 over Ribs and StarBeQue Sauce), 20% chance to increase Power by 1, leaves 1 Bone after consumption",
			"items": ["Maybe Back Ribs", "Starbeque Sauce", "Scent Gland", "Ribs", "Ribs"]
	}, {
			"skill": "Biotech",
			"value": 110,
			"desc": "+1 food, food Consumption becomes 0 for 150 turns",
			"items": ["Mitochondrial Stimulator", "Serum", "Giant Mitochondria", "Chemo Slugs", "Omni Gland"]
	}, {
			"skill": "Necro Tech",
			"value": 85,
			"desc": "",
			"items": ["Neural Webbing", "Raw Meat", "Acid Sack"]
	}, {
			"skill": "Biotech",
			"value": 105,
			"desc": "Nutbutter x3. +100 food per Nutbutter, +300 food total (+200 over ingredients), restores 100 health and 10 psi",
			"items": ["Nutbutter", "Hofnuts", "Hofnuts", "Morrigi Flavor Oils"]
	}, {
			"skill": "Biotech",
			"value": 65,
			"desc": "+105 food (+15 over ingredients)",
			"items": ["Omelette", "Safe Cheese", "Egg", "Egg"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "Grenade, causes Confusion and Berserk on Organics",
			"items": ["Pheromone Bait", "Disease Extract", "Scent Gland"]
	}, {
			"skill": "Biotech",
			"value": 105,
			"desc": "+300 food (+145 over ingredients), +1 to random stat (might/finesse/power/brain), can cause Lvl 6 Poison",
			"items": ["Pit Stew", "Ancient Herbs", "Edible Roots", "Tainted Meat", "Tainted Meat", "Fat Strips"]
	}, {
			"skill": "Biotech",
			"value": 105,
			"desc": "+40 food (-130 below ingredients), increases speed by 1 and gives 300% health regeneration for 50 turns",
			"items": ["Powabar", "Nutbutter", "Zytokot Fungibar", "Melosian Chocolate"]
	}, {
			"skill": "Biotech",
			"value": 115,
			"desc": "+55 food and 10% chance to gain +1 Might",
			"items": ["Protein Shake", "Egg", "Primordial Soup", "Raw Meat", "Exotic Proteins"]
	}, {
			"skill": "Biotech",
			"value": 40,
			"desc": "+60 food (+30 over ingredients)",
			"items": ["Pungent Meat", "Raw Meat", "Scent Gland"]
	}, {
			"skill": "Biotech",
			"value": 55,
			"desc": "+115 food (+25 over ingredients)",
			"items": ["Rib Sandwich", "Bread", "Burnt Ribs"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+220 food (+130 over ingredients)",
			"items": ["Roast Beast", "Bindings", "Bindings", "Raw Meat", "Raw Meat", "Raw Meat"]
	}, {
			"skill": "Biotech",
			"value": 55,
			"desc": "+75 food (+20 over ingredients)",
			"items": ["Sammich", "Bread", "Raw Meat"]
	}, {
			"skill": "Biotech",
			"value": 65,
			"desc": "Sammich x5. +55 food per sammich, +275 food total (+110 over ingredients)",
			"items": ["Sammich", "Bread", "Baked Avian"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+200 food, (+70 over ingredients), cures 150 Radiation and 3 levels of Poison",
			"items": ["Seafood Platter", "Ku'Sulto Lobstercake", "Soylent Vines", "Wuuna Sea Cucumber"]
	}, {
			"skill": "Biotech",
			"value": 85,
			"desc": "+180 (-110 below ingredients), restores 20 health and 20 psi",
			"items": ["Sks", "Nutbutter", "Dembo Jam", "Stale Bread"]
	}, {
			"skill": "Biotech",
			"value": 0,
			"desc": "+160 food (+40 over ingredients). Recipe can't fail",
			"items": ["Sotswich", "Cooked Meat", "Tarka Warbread"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+125 food (+15 over ingredients), cures up to 5 levels of Poison, Disease and Radiation",
			"items": ["Spider Pie", "Ko'Grappa Stonecrab", "Egg", "Kirt'ch Grubs"]
	}, {
			"skill": "Biotech",
			"value": 85,
			"desc": "+50 food (-20 below ingredients), cures ALL statuses (Poison, Disease, Fear etc), gives +1 move for 40 turns (stacks with Energy Drinks)",
			"items": ["Star Coffee", "Energy Drink", "Medicinal Nuts"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "+280 food (+20 over ingredients), restores 150 health",
			"items": ["Star Fondue", "Chozanti Brie", "Safe Cheese", "Tarka Warbread", "Bone Slivers", "Morrigi Flavor Oils"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "Ingredient",
			"items": ["Starbeque Sauce", "Nova Fruit", "Morrigi Flavor Oils", "Ancient Herbs", "Primordial Soup"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "+150 food (+90 over ingredients)",
			"items": ["Steak N Shrooms", "Raw Meat", "Shrooms", "Shrooms"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+1 Might if you pass Medical check of 60. 50% chance to drain 1 Brains if you fail check",
			"items": ["Steroidal Enchancers", "Exotic Proteins", "Mutagens", "Scent Gland", "Vitamins"]
	}, {
			"skill": "Biotech",
			"value": 120,
			"desc": "grants +50 might, +30 natural armour, -30 to all non-combat skills and +200 maximum HP for 100 turns. Inflicts lvl 2 Poison when effect ends",
			"items": ["Steroidal Venom", "Adrenal Sack", "Serum", "Poison Gland", "Scale Cells", "Chemo Slugs"]
	}, {
			"skill": "Biotech",
			"value": 75,
			"desc": "+150 food (+20 over ingredients), cures Confusion and Stun",
			"items": ["Stinkwich", "Moldy Bread", "Pungent Meat", "Chozanti Brie"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "+100 food (+30 over ingredients)",
			"items": ["Stuffed Mushrooms", "Stale Bread", "Shrooms", "Shrooms"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "+200 food (+10 food over ingredients), +40 food capacity, leaves 1 Bone Slivers after consumption",
			"items": ["TLC Salad", "Baked Avian", "Egg", "Lipid Optimizer"]
	}, {
			"skill": "Biotech",
			"value": 90,
			"desc": "+125 food (-10 over ingredients), restores a 10 Psi, cures up to 1 lvl of Poison and Disease",
			"items": ["Trail Mix", "Dried Fruit", "Melosian Chocolate", "Hofnuts"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "+200 food (+50 over ingredients)",
			"items": ["Turkey Lasagna", "Leftovers", "Leftovers", "Hiver Cheese"]
	}, {
			"skill": "Biotech",
			"value": 95,
			"desc": "+230 food (+60 over ingredients)",
			"items": ["Unspeakable Hoagie", "Tarka Warbread", "Fungal Meat", "Chozanti Brie"]
	}],
	"lab": [{
			"skill": "Necro Tech",
			"value": 90,
			"desc": "",
			"items": ["Lure", "Etthi Crystal", "Raw Meat", "Scent Gland", "Sonic Nodule"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Does 15x2 damage to doors and mechs",
			"items": ["Seismic Gloves", "Vibranite", "Composite Cloth", "AM Cells", "Sonic Nodule", "Quantum Capacitors"]
	}, {
			"skill": "Electronics",
			"value": 110,
			"desc": "Armor. 95 armor, 60 durability. Cannot be repaired. Makes Shedding Carapace wearable by Humans, Tarka and Zuul",
			"items": ["Ablative Plate", "Shedding Carapace", "Bindings", "Bindings", "Electronic Parts"]
	}, {
			"skill": "Traps",
			"value": 65,
			"desc": "Sets a Mine Trap on the floor. A good alternative if your Melee (Grenade) skill is much lower than your Traps skill",
			"items": ["Mine Trap", "Cyber Connectors", "Grenade", "Sparker"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Armor. 40 armor, 40 durability, 75% dmg reduction from energy and laser weapons",
			"items": ["Absorber Weave", "String Sinks", "Nano-Wire", "Superconductors", "Scaleskin", "Scaleskin"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Armor. Makes Absorption Scale wearable by Humans, Tarka, Hiver and Zuul. 30 armor, 30 durability, 50% dmg reduction from energy and laser weapons. Unlike Absorption Scale doesn't recharge energy weapons",
			"items": ["Absorption Plate", "Absorption Scale", "Graphene Plates", "Nano-Wire", "Chitin"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Melee Weapon, replaces Fists. 8 damage, 100 penetration. Cannot be used as a weapon by Liir",
			"items": ["Adamantium Claws", "Adamantium Resin", "Living Steel Remnant", "Cyber Connectors", "Nano-Wire"]
	}, {
			"skill": "Mechanical",
			"value": 115,
			"desc": "Blade Weapon. 9-15 AoE damage, 150 penetration, 200 durability",
			"items": ["Adamantium Sword", "Adamantium Resin", "Lightning Blade", "Unstable Isotopes", "Bindings"]
	}, {
			"skill": "Biotech",
			"value": 125,
			"desc": "If you pass Medical check of 115, Every time you kill an Organic monster you get 3 PSI Points (stack whit itself). Damage + Stunned and lose all past adrenal implant effects (PSI bonus per kill) if you fail check",
			"items": ["Adrenal Implant", "Mutagens", "Anti-Bodies", "Neural Transmitters", "Cyber Connectors"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "Rifle Weapon, breaks quickly but good for spending excess ammo. 6-10 damage, 50 penetration, 20 durability",
			"items": ["Aykay Rifle", "Rifle Parts", "Structural Rods", "Servos", "Welding Goo", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 75,
			"desc": "Repairs ballistic firearms. Effectiveness: 70%, 5 charges",
			"items": ["Ballistic Repair Kit", "Rifle Parts", "Electronic Parts", "Servos"]
	}, {
			"skill": "Biotech",
			"value": 125,
			"desc": "Pistol weapon, consumes 5 points from your food gauge instead of ammo. 10-13 damage, 80 penetration, 30 durability",
			"items": ["Bio-Blaster", "Energy Tap", "Biocontroller", "Omni Gland", "Photonic Amplifier", "Scaleskin"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Rifle Weapon. 3-6 damage (0 vs mecha), 40 penetration, 30 durability. Inflicts lvl 9 Poison. Uses Poison Darts as ammo",
			"items": ["Blowdart Rifle", "Bone", "Bindings", "Compression Chamber", "Myomer Bundles", "Energy Cell"]
	}, {
			"skill": "Mechanical",
			"value": 80,
			"desc": "Rifle Weapon, shotgun type. Breaks quickly but good for spending excess ammo. 30-35 damage, 20 penetration, 15 durability",
			"items": ["Blunderbuss", "Rifle Parts", "Compression Chamber", "Welding Goo", "Sparker", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 85,
			"desc": "Knife Weapon. 3-5 damage, 15 penetration, 10 health",
			"items": ["Bone Dagger", "Bone", "Bindings", "Razorteeth"]
	}, {
			"skill": "Electronics",
			"value": 70,
			"desc": "Bypass Circuit x2. +20% to next Electronics skill check. Multiple crafts are great to level Electronics",
			"items": ["Bypass Circuit", "Cybernetic Brain", "Electronic Parts"]
	}, {
			"skill": "Mechanical",
			"value": 80,
			"desc": "Caltrops x3. Grenade. Slows Organic movement by 1 in the area for 3 turns. 3 range, 2 damage, 5 penetration",
			"items": ["Caltrops", "Casing Fragments", "Bone Slivers", "Bone Slivers", "Bindings", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Armor. 80 armor, 180 durability",
			"items": ["Chitin Plate Armor", "Composite Cloth", "Chitin", "Chitin", "Chitin", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "",
			"items": ["Cleaver Assault Rifle", "Assault Rifle", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "consumes 1 ammo per 2 shots",
			"items": ["Cleaver Auto Pistol", "Auto Pistol", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 115,
			"desc": "",
			"items": ["Cleaver Auto Rifle", "Auto Rifle", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "",
			"items": ["Cleaver Auto-Shotgun", "Auto-Shotgun", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 115,
			"desc": "-5 Penetration, -1 Bio-Mod slot, +5 Clip Size, consumes 2 ammo per 3 shot volley",
			"items": ["Cleaver Machine Pistol", "Machine Pistol", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "-10 Penetration, -1 Bio-Mod slot, consumes 1 ammo per 2 shots",
			"items": ["Cleaver Mag Pistol", "Mag Pistol", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "-10 Penetration, -1 Bio-Mod slot, consumes 2 ammo per 3 shot volley",
			"items": ["Cleaver Mag Rifle", "Mag Rifle", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "-2 Damage, -10 Penetration, -1 Bio-Mod slot, consumes 5 ammo per 3 shot volley",
			"items": ["Cleaver Scattergun", "Scattergun", "Quantum Splitter", "Welding Goo"]
	}, {
			"skill": "Electronics",
			"value": 65,
			"desc": "Grenade which makes Mecha go Berserk",
			"items": ["Cyber Scrambler", "Cybernetic Brain", "Electronic Parts", "Energy Cell"]
	}, {
			"skill": "Computer",
			"value": 65,
			"desc": "Identifies a single random Bio mods. One use",
			"items": ["Diagnostic Chip", "Cybernetic Brain", "Logic Circuits"]
	}, {
			"skill": "Engineering",
			"value": 105,
			"desc": "",
			"items": ["Disruptor Plate", "Crusader Armor", "Composite Cloth", "Reflex Micro-furnace", "Duct Tape", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 60,
			"desc": "Use next to doors to cause large damage to them",
			"items": ["Door Spike", "Punch Claw", "Giant Mitochondria", "Shotgun Shells", "Shotgun Shells"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "Emergency Teleporter x2. Teleports to a random, possibly unexplored area on the current Floor",
			"items": ["Emergency Teleporter", "String Sinks", "Superconductors", "Tachyon Capacitors", "Quantum Capacitors", "Energy Cell"]
	}, {
			"skill": "Engineering",
			"value": 105,
			"desc": "-2 Damage, -5 Penetration, -1 Bio Mod Slot, Increased Ammo Capacity",
			"items": ["Enduro Laser Carbine", "Laser Carbine", "Quantum Capacitors", "Nano-Wire"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "+5 Ammo Capacity, -10 Penetration, -1 Bio Mod Slot",
			"items": ["Enduro Laser Pistol", "Laser Pistol", "Quantum Capacitors", "Nano-Wire"]
	}, {
			"skill": "Engineering",
			"value": 105,
			"desc": "-1 Bio Mod slot, -2 Damage, -10 Penetration, +15 Ammo Capacity",
			"items": ["Enduro Laser Rifle", "Laser Rifle", "Quantum Capacitors", "Nano-Wire"]
	}, {
			"skill": "Engineering",
			"value": 115,
			"desc": "-1 Bio Mod slot, -2 Damage, -10 Penetration, +5 Ammo Capacity",
			"items": ["Enduro Laser Sword", "Laser Sword", "Quantum Capacitors", "Nano-Wire"]
	}, {
			"skill": "Electronics",
			"value": 65,
			"desc": "Reloads most Rifle and Assault energy Weapons",
			"items": ["Energy Backpack", "Bindings", "Energy Cell", "Energy Cell", "Energy Cell", "Energy Cell"]
	}, {
			"skill": "Mechanical",
			"value": 75,
			"desc": "Repairs non-melee energy Weapons",
			"items": ["Energy System Tuner", "Gun Parts", "Electronic Parts", "Optics", "Superconductors"]
	}, {
			"skill": "Necro Tech",
			"value": 85,
			"desc": "",
			"items": ["Etthi Vessel", "Etthi Crystal", "Etthi Crystal", "Neural Webbing", "Sonic Nodule"]
	}, {
			"skill": "Electronics",
			"value": 105,
			"desc": "Lets you register as a lab specimen to security elements for 10 turns or until the player attacks",
			"items": ["Faux Tag", "Electronic Parts", "Electronic Parts", "Specimen Tag", "System Transponder"]
	}, {
			"skill": "Biotech",
			"value": 80,
			"desc": "",
			"items": ["Fear Lantern", "Hoolari Gourd", "Scent Gland", "Sparker", "Razorteeth"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Grenade which sets creatures on Fire",
			"items": ["Firebomb", "Fuel Cell", "Fuel Cell", "Sparker", "Bindings"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Converting Rifle Rounds x100 into Flechette Rounds x90",
			"items": ["Flechette Rounds", "Superconductors", "Rifle Rounds"]
	}, {
			"skill": "Engineering",
			"value": 120,
			"desc": "Belt",
			"items": ["Force Field Belt", "Utility Belt", "String Sinks", "Superconductors", "Reflex Micro-Furnace", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 60,
			"desc": "Goop Rounds x5. Reloads 3-P Restraint Gun",
			"items": ["Goop Rounds", "Pistol Rounds", "Pistol Rounds", "Exotic Proteins", "Giant Mitochondria"]
	}, {
			"skill": "Electronics",
			"value": 100,
			"desc": "Can walk over detected floor Traps and will not trigger undetected ones",
			"items": ["Grav Boots", "Combat Boots", "Superconductors", "Element X", "Energy Cell", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 85,
			"desc": "Standard grenade. Can be converted into a Mine Trap",
			"items": ["Grenade", "Casing Fragments", "Shotgun Shells", "Shotgun Shells", "Shotgun Shells", "Sparker"]
	}, {
			"skill": "Electronics",
			"value": 90,
			"desc": "Pistol weapon with Stun AoE",
			"items": ["Hand Stunner", "Gun Parts", "Energy Cell", "Electronic Parts", "Sonic Nodule"]
	}, {
			"skill": "Electronics",
			"value": 115,
			"desc": "Absorbs one Von Neumann Probe attack or Disintegration Bay backlash",
			"items": ["Harmonic Resonator", "Adaptive Crystals", "String Sinks", "Superconductors"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "",
			"items": ["Harpy Drone", "Photonic Amplifier", "Combat Processors", "Casing Fragments", "Reflex Micro-Furnace", "Element X"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Heavy Weapon which requires specialised Armor to use",
			"items": ["Heavy Cannon", "Adamantium Resin", "Cannon Parts", "Reflex Micro-Furnace", "Servos", "Superconductors"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "Used to craft Silenced Auto Rifle and Silenced Machine Pistol",
			"items": ["Heavy Silencer", "Rifle Parts", "Vibranite", "Scaleskin", "Scaleskin", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 70,
			"desc": "Assault Weapon. Uses crafted ammo",
			"items": ["Heavy Slug-thrower", "Mag Rifle", "Reflex Micro-Furnace", "Nano-Wire", "Superconductors"]
	}, {
			"skill": "Mechanical",
			"value": 85,
			"desc": "Heavy Slugs x15. Reloads Heavy Slug Thrower",
			"items": ["Heavy Slugs", "Element X", "Molecular Neutronium", "Shell Casings"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "",
			"items": ["Heavymag Assault Rifle", "Assault Rifle", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "+10 Clip Size, -5 Accuracy",
			"items": ["Heavymag Auto Pistol", "Auto Pistol", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "+8 Clip Size, -5 Accuracy, -1 Bio Mod Slot, +5 Durability",
			"items": ["Heavymag Auto Rifle", "Auto Rifle", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 100,
			"desc": "Increases clip to 30",
			"items": ["Heavymag Auto-Shotgun", "Auto-Shotgun", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Effect:",
			"items": ["Heavymag Gauss Pistol", "Mag Pistol", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "+5 durability, +5 accuracy, expanded magazine",
			"items": ["Heavymag Gauss Rifle", "Mag Rifle", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "",
			"items": ["Heavymag Machine Pistol", "Machine Pistol", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 105,
			"desc": "",
			"items": ["Heavymag Scattergun", "Scattergun", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 115,
			"desc": "Converting Rifle Rounds x100 into High Calibre Rounds x60",
			"items": ["High Calibre Rounds", "Shell Casings", "Rifle Rounds", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 100,
			"desc": "High Explosive Rounds x60",
			"items": ["High Explosive Rounds", "Shell Casings", "Grenade", "Grenade", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 60,
			"desc": "Use next to doors to inflict medium damage to them",
			"items": ["Hinge Spike", "Acid Sack", "Heavy Claw", "Shotgun Shells"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "Armor. 50 armor, 60 durability. Reduces Blunt and Balistic damage. Wearable by Humans, Hiver, Tarka and Zuul",
			"items": ["Impact Armor", "Adamantium Resin", "Scaleskin", "Scaleskin", "Bindings"]
	}, {
			"skill": "Engineering",
			"value": 140,
			"desc": "Armour. Crafted using Engineering check",
			"items": ["Improvised Exo Armor", "Neural Netting", "Neural Transmitters", "Structural Rods", "Reflex Micro-Furnace", "Myomer Bundles"]
	}, {
			"skill": "Mechanical",
			"value": 50,
			"desc": "Improvised Lockpick x3. +15% on next lockpicking checks. Single use. ",
			"items": ["Improvised Lockpick", "Bindings", "Bone Slivers", "Razorteeth"]
	}, {
			"skill": "Medical",
			"value": 75,
			"desc": "Similar to the standard Terran Med-Kit, restores health depending on your Medical skill",
			"items": ["Improvised Med-Kit", "Antibiotics", "Bindings", "Bone Slivers", "Serum"]
	}, {
			"skill": "Engineering",
			"value": 95,
			"desc": "",
			"items": ["Kinetic Plate", "Kinetic Scale", "Vibranite", "Nano-Wire", "Chitin"]
	}, {
			"skill": "Electronics",
			"value": 90,
			"desc": "Rifle Weapon, also an ingredients for other advanced recipes. ",
			"items": ["Laser Rifle", "Photonic Amplifier", "Rifle Parts", "Quantum Capacitors", "Superconductors", "Bindings"]
	}, {
			"skill": "Electronics",
			"value": 100,
			"desc": "+12 inventory. Only 1 Lifter pack can be equipped, but it does not take any equipment slot",
			"items": ["Lifter Pack", "Composite Cloth", "Element X", "Energy Cell", "Nano-Wire"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "Blade Weapon. Chance to Stun. Crafted using Engineering check. Can be found in all versions but only crafted starting with the Mindgames Expansion",
			"items": ["Lightning Blade", "Sar", "String Sinks", "Living Steel Remnant", "AM Cells", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Heavy Weapon with acid cone attack. Using Acid Sacks as ammo (1 Acid Sack giving 4 charges)",
			"items": ["Liquidator", "Rifle Parts", "Compression Chamber", "Servos", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "A darter that fires 2 darts that inflict the spore status in its targets (Using only 1 dart ammo per use, when shooting twice). Very useful against unarmored and low-armored targets due to spore status",
			"items": ["M'kkose Darter", "Rifle Parts", "Compression Chamber", "M'kkosian Fungus Shards", "Duct Tape", "Primordial Soup"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "+30 Durability, -2 Bio Mod Slots, +5 Damage, +60 Penetration. Using same shotgun ammo, but usable only with Brawler PBA or similar armours allowing usage of heavy weapons. Also has a knockback chance. Doesn't work in Gold Edition",
			"items": ["Neutronium Stormer", "Auto-Shotgun", "Molecular Neutronium", "Rifle Parts", "Servos", "Element X"]
	}, {
			"skill": "Engineering",
			"value": 95,
			"desc": "",
			"items": ["Overload Rifle", "Laser Rifle", "Superconductors", "Unstable Isotopes", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 95,
			"desc": "Converting Shotgun Shells x30 into Pistol Rounds x45",
			"items": ["Pistol Rounds", "Shell Casings", "Shotgun Shells", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Converting Rifle Rounds x100 into Pistol Rounds x110",
			"items": ["Pistol Rounds", "Heavy Claw", "Rifle Rounds", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 110,
			"desc": "Poison Darts x5",
			"items": ["Poison Darts", "Chemo Slugs", "Injector Fangs", "Poison Gland", "Poison Gland"]
	}, {
			"skill": "Engineering",
			"value": 95,
			"desc": "Multi-target. Pistol Weapon. Crafted using Engineering check",
			"items": ["Pulsar Pistol", "Adaptive Crystals", "Gun Parts", "String Sinks", "Quantum Capacitors", "Reflex Micro-Furnace"]
	}, {
			"skill": "Electronics",
			"value": 85,
			"desc": "Detects Floor Traps within 2 tiles for a short time. 5 charges",
			"items": ["Pulse Resonator", "Softscreen", "Cybernetic Brain", "Sonic Nodule"]
	}, {
			"skill": "Electronics",
			"value": 115,
			"desc": "Multi-target Rifle Weapon",
			"items": ["Pulse Rifle", "Laser Rifle", "Photonic Amplifier", "Superconductors", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 85,
			"desc": "Purifies basic food (see below). Used to craft Star Bacon",
			"items": ["Purifier", "Compression Chamber", "Fuel Cell", "Sparker"]
	}, {
			"skill": "Electronics",
			"value": 105,
			"desc": "Helmet. Permanently (360 degree) see through everything (except invisibility) in your maximum sight range (12 tiles)",
			"items": ["Quantum Scan Helmet", "Casing Fragments", "Optics", "Quantum Capacitors", "Electronic Parts"]
	}, {
			"skill": "Engineering",
			"value": 115,
			"desc": "Quantum Splitters x3",
			"items": ["Quantum Splitter", "Razorteeth", "Molecular Neutronium", "Nano-Wire"]
	}, {
			"skill": "Mechanical",
			"value": 55,
			"desc": "Armor which offers poor protection but has high durability. Better than nothing",
			"items": ["R G Special", "Duct Tape", "Duct Tape", "Duct Tape", "Bone Slivers", "Bone Slivers"]
	}, {
			"skill": "Electronics",
			"value": 100,
			"desc": "Single target Rifle Weapon which causes Berserk.Tip: Good source for Energy Backpacks. Save up ingredients. (Cyborg Hiver Queen can provide you with more rifle parts than you know what to do with if you let it spawn Hiver Workers). Craft when electronics is sufficiently high. Unload weapon and you have your Energy Backpack",
			"items": ["Rage Beam", "Rifle Parts", "Hiver Brain Crystal", "Sonic Nodule", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 80,
			"desc": "Melee Weapon. Grants 5-10 armor when equipped and replaces Fists",
			"items": ["Razor Fists", "Composite Cloth", "Razorteeth", "Bindings"]
	}, {
			"skill": "Medical",
			"value": 105,
			"desc": "Healing over time about 10 HP per turn (last 10 turns). Can't be created in gold edition",
			"items": ["Regen Patch", "Adrenal Sack", "Med Patch", "Giant Mitochondria"]
	}, {
			"skill": "Biotech",
			"value": 115,
			"desc": "makes the armor wearable for Human, Tarka and Hiver only, light armor, +2 healing ",
			"items": ["Regen Plate", "Nurturing Embrace", "Biocontroller", "Scaleskin", "Omni Gland"]
	}, {
			"skill": "Mechanical",
			"value": 80,
			"desc": "expand magazine +4, doesn't work in gold edition ",
			"items": ["Rifle", "Rifle", "Casing Fragments", "Duct Tape"]
	}, {
			"skill": "Mechanical",
			"value": 100,
			"desc": "Converting Shotgun Shells x30 into Rifle Rounds x25",
			"items": ["Rifle Rounds", "Shell Casings", "Shotgun Shells", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 115,
			"desc": "Converting High Calibre Rounds x60 into Rifle Rounds x70",
			"items": ["Rifle Rounds", "Heavy Claw", "High Calibre Rounds", "Bindings"]
	}, {
			"skill": "Electronics",
			"value": 75,
			"desc": "Bonus to next Decryption tasks, which includes Tesseract wells and Creation stations. ",
			"items": ["Rosetta Brain", "Softscreen", "Hiver Brain Crystal", "Logic Circuits", "Energy Cell"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "Belt. Increases carrying slots by 24 when equipped",
			"items": ["Pocket Tesseract", "Superconductors", "Quantum Capacitors", "Element X", "Energy Cell", "Bindings"]
	}, {
			"skill": "Engineering",
			"value": 110,
			"desc": "",
			"items": ["Seismic Boots", "Combat Boots", "Vibranite", "Sonic Nodule", "Reflex Micro-Furnace", "Superconductors"]
	}, {
			"skill": "Mechanical",
			"value": 65,
			"desc": "Repairs Hammers, Knives, Blades, and Crowbars. But not Spears. Has 5 uses, poor efficiency. ",
			"items": ["Sharpening Kit", "Heavy Claw", "Heavy Claw", "Razorteeth", "Razorteeth", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "Shell Casings x3 ",
			"items": ["Shell Casings", "Living Steel Remnant", "Heavy Claw"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "Converting Rifle Rounds x100 into Shotgun Shells x70",
			"items": ["Shotgun Shells", "Shell Casings", "Rifle Rounds", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "Converting Pistol Rounds x120 into Shotgun Shells x60",
			"items": ["Shotgun Shells", "Shell Casings", "Shell Casings", "Pistol Rounds", "Bindings"]
	}, {
			"skill": "Mechanical",
			"value": 70,
			"desc": "",
			"items": ["Silenced Auto Rifle", "Heavy Silencer", "Welding Goo", "Welding Goo", "Structural Rods"]
	}, {
			"skill": "Mechanical",
			"value": 70,
			"desc": "Good for using up excess pistol ammo. 3 shot volley using 5 ammo per volley. Magazine size: 25. ",
			"items": ["Silenced Machine Pistol", "Heavy Silencer", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 70,
			"desc": "",
			"items": ["Silenced Pistol", "Silencer", "Welding Goo"]
	}, {
			"skill": "Mechanical",
			"value": 90,
			"desc": "",
			"items": ["Silencer", "Gun Parts", "Bindings", "Bindings", "Bone"]
	}, {
			"skill": "Necro Tech",
			"value": 95,
			"desc": "",
			"items": ["Siren", "Etthi Vessel", "Pineal Gland", "Scent Gland", "Sonic Nodule"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "-10 durability, +20 accuracy, +5 penetration",
			"items": ["Smart Assault Rifle", "Assault Rifle", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 105,
			"desc": "-7 durability, +20 accuracy",
			"items": ["Smart Auto Pistol", "Auto Pistol", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "-10 durability, +20 accuracy, +5 penetration",
			"items": ["Smart Auto Rifle", "Auto Rifle", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "-7 durability, +20 accuracy, +5 penetration",
			"items": ["Smart Laser Carbine", "Laser Carbine", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "-5 durability, +20 accuracy, +5 penetration",
			"items": ["Smart Laser Pistol", "Laser Pistol", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "+20 Accuracy, +5 Penetration, -1 Bio Mod Slot, -8 Durability ",
			"items": ["Smart Laser Rifle", "Laser Rifle", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "",
			"items": ["Smart Machine Pistol", "Machine Pistol", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "-6 durability, +20 accuracy, +5 penetration",
			"items": ["Smart Mag Pistol", "Mag Pistol", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "",
			"items": ["Smart Mag Rifle", "Mag Rifle", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Computer",
			"value": 115,
			"desc": "",
			"items": ["Smart Rifle", "Rifle", "Combat Processors", "Nano-Wire", "Myomer Bundles"]
	}, {
			"skill": "Mechanical",
			"value": 70,
			"desc": "Rifle Weapon, allows a regular Rifle to tackle higher armor creatures",
			"items": ["Sniper Rifle", "Rifle", "Bindings", "Optics"]
	}, {
			"skill": "Mechanical",
			"value": 95,
			"desc": "Knife. Chance to inflict Spores",
			"items": ["Spore Dagger", "Bone", "M'kkosian Fungus Shards", "Bindings", "Bindings"]
	}, {
			"skill": "Engineering",
			"value": 100,
			"desc": "+15 bonus to ranged combat skills, 360 degree vision. 4 charges (rechargeable). 20 Turns per charge. Equip Location: Drone",
			"items": ["Squawker Drone", "Optics", "Neural Transmitters", "Casing Fragments", "Hiver Brain Crystal", "Element X"]
	}, {
			"skill": "Electronics",
			"value": 105,
			"desc": "Dart",
			"items": ["Targeting Dart", "Electronic Parts", "Specimen Tag", "Darts"]
	}, {
			"skill": "Electronics",
			"value": 95,
			"desc": "Helmet. +15 bonus to pistol, rifle, assault weapon and heavy weapon skills",
			"items": ["Targeting Helm", "Casing Fragments", "Optics", "Logic Circuits", "Bindings"]
	}, {
			"skill": "Engineering",
			"value": 90,
			"desc": "Creates a Mk1 Light Turret in your inventory (Bulky--size: about 2x3). Crafted using Engineering check",
			"items": ["Turret", "Auto Pistol", "Combat Processors", "Casing Fragments", "Welding Goo", "Optics"]
	}, {
			"skill": "Electronics",
			"value": 110,
			"desc": "Subverts the nearest turret to fight for you. ",
			"items": ["Turret Override", "Electronic Parts", "Energy Cell", "System Transponder"]
	}, {
			"skill": "Necro Tech",
			"value": 120,
			"desc": "",
			"items": ["Undead Abomination", "Etthi Vessel", "Raw Meat", "Ribs", "Hiver Brain Crystal", "Punch Claw"]
	}, {
			"skill": "Necro Tech",
			"value": 110,
			"desc": "",
			"items": ["Undead Humanoid", "Etthi Vessel", "Raw Meat", "Raw Meat", "Bone", "Heavy Claw"]
	}, {
			"skill": "Necro Tech",
			"value": 105,
			"desc": "",
			"items": ["Undead Vermin", "Etthi Crystal", "Bone Slivers", "Bindings", "Tainted Meat"]
	}, {
			"skill": "Mechanical",
			"value": 75,
			"desc": "Blade Weapon. Causes Lvl.5 Poison. -10 penetration, using Poison Glands as ammo",
			"items": ["Venom Sword", "Sword", "Poison Gland", "Poison Gland", "Poison Gland", "Duct Tape"]
	}, {
			"skill": "Electronics",
			"value": 115,
			"desc": "Rifle Weapon. Causes 75 Radiation. +5 Accuracy, +4 Damage, +30 Penetration, -10 Clip Size. Can penetrate almost everything and has a great damage parameters - best weapon to destroy heavily armoured targets with high HP",
			"items": ["X-Rifle", "Laser Rifle", "Photonic Amplifier", "X-ray Transducer", "Bindings"]
	}]
};
var I = {
	"cooker": ["Stale Bread", "Moldy Bread", "Tarka Warbread", "Bread", "Leftovers", "Pineal Gland", "Anti-Bodies", "Serum", "Exotic Proteins", "Primordial Soup", "Edible Roots", "Star-bacon", "Egg", "Chocolate Eggs", "Avian Carcass", "Baked Avian", "Hero Sotswich", "TLC Salad", "Tainted Meat", "Disease Extract", "Pungent Meat", "Cooked Meat", "Safe Meat", "Raw Meat", "Medicinal Nuts", "Hiver Brain Crystal", "Scale Cells", "Melosian Chocolate", "Brutella", "Dembo Jam", "Nutbutter", "Energy Drink", "Ice Gems", "Nova Fruit", "Bindings", "M'kkosian Fungus Shards", "Bone Slivers", "Laybliss Berries", "Fungal Meat", "Bh'azhnazh Fruit", "Apples", "Hofnuts", "Mutagens", "Starbeque Sauce", "Lipid Optimizer", "Zytokot Fungibar", "Vitamins", "Morrigi Flavor Oils", "Gronch Heart", "Adrenal Sack", "Omni Gland", "Hoolari Gourd", "Ko'Grappa Stonecrab", "Chemo Slugs", "Ku'Sulto Lobstercake", "Shrooms", "Sonic Nodule", "Scent Gland", "Acid Sack", "Poison Gland", "Ancient Herbs", "Soylent Vines", "Ribs", "Burnt Ribs", "Fat Strips", "Giant Mitochondria", "Kutar Oatmix", "Kirt'ch Grubs", "Hiver Cheese", "Rotten Cheese", "Chozanti Brie", "Safe Cheese", "Wuuna Sea Cucumber", "Dried Fruit"],
	"lab": ["Neural Netting", "Bone Slivers", "Bone", "Heavy Claw", "Punch Claw", "Injector Fangs", "Logic Circuits", "Reflex Micro-Furnace", "Energy Cell", "Composite Cloth", "Structural Rods", "Welding Goo", "Cybernetic Brain", "Superconductors", "Etthi Crystal", "Softscreen", "Fuel Cell", "Tachyon Capacitors", "System Transponder", "String Sinks", "Neural Webbing", "Antibiotics", "Myomer Bundles", "Bindings", "Serum", "Cyber Connectors", "Etthi Vessel", "Nano-Wire", "Omni Gland", "Vibranite", "M'kkosian Fungus Shards", "AM Cells", "Chemo Slugs", "Primordial Soup", "Chitin", "Quantum Splitter", "Hoolari Gourd", "Combat Processors", "Giant Mitochondria", "Quantum Capacitors", "Casing Fragments", "Hiver Brain Crystal", "Tainted Meat", "Shell Casings", "Poison Gland", "Pineal Gland", "Scaleskin", "Med Patch", "Specimen Tag", "Mutagens", "Living Steel Remnant", "Unstable Isotopes", "Molecular Neutronium", "Adaptive Crystals", "X-ray Transducer", "Element X", "Scent Gland", "Sparker", "Electronic Parts", "Neural Transmitters", "Adrenal Sack", "Anti-Bodies", "Ribs", "Raw Meat", "Energy Tap", "Photonic Amplifier", "Sonic Nodule", "Razorteeth", "Acid Sack", "Exotic Proteins", "Servos", "Adamantium Resin", "Auto Pistol", "Laser Pistol", "Mag Pistol", "Machine Pistol", "Auto-Shotgun", "Mag Rifle", "Scattergun", "Rifle", "Auto Rifle", "Assault Rifle", "Laser Carbine", "Laser Rifle", "Graphene Plates", "Silencer", "Heavy Silencer", "Duct Tape", "Compression Chamber", "Optics", "Biocontroller", "Gun Parts", "Rifle Parts", "Cannon Parts", "Combat Boots", "Utility Belt", "Sword", "Sar", "Lightning Blade", "Laser Sword", "Grenade", "High Calibre Rounds", "Darts", "Nurturing Embrace", "Absorption Scale", "Kinetic Scale", "Shedding Carapace", "Crusader Armor", "Pistol Rounds", "Shotgun Shells", "Rifle Rounds"]
}
