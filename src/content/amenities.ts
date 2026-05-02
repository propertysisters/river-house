export type AmenityIcon =
	| "wifi"
	| "temperature"
	| "bulb"
	| "alert"
	| "kitchen"
	| "caravan"
	| "tv"
	| "grill"
	| "campfire"
	| "hottub"
	| "chair";

export type Amenity = {
	id: string;
	icon: AmenityIcon;
	title: string;
	summary: string;
	body: string[];
};

export const amenities: Amenity[] = [
	{
		id: "internet",
		icon: "wifi",
		title: "Internet",
		summary: "Wifi network and password.",
		body: [
			"The wifi reaches the entire house and the deck. If signal is weak in the bunk house, restart the router (utility room) and try again.",
		],
	},
	{
		id: "climate",
		icon: "temperature",
		title: "Heating & Cooling",
		summary: "Heat pump thermostat plus a remote-controlled gas fireplace in the great room.",
		body: [
			"Heat pump: set the temperature on the wall thermostat. We typically run heating around 68°F and cooling around 72°F — adjust to taste.",
			"Heads up: the fireplace heats the great room well, but it can prevent the heat pump's forced air from running, which may leave bedrooms cooler in cold weather.",
		],
	},
	{
		id: "lighting",
		icon: "bulb",
		title: "Lighting",
		summary: "Dimmers, exterior switches, and low-voltage deck lights.",
		body: [
			"The great room, kitchen, master bedroom, and breakfast bar are on dimmers. The great room dimmer is near the door to the master. If rooms feel dark, check the dimmers are all the way up.",
			"River-side exterior lights: switch is by the sliding glass doors. Driveway-side light is on a motion detector, with a switch near the entry door of the utility room.",
			"Low-voltage lights run along the base of the deck. Unplug them near the main slider if you'd like to enjoy the stars.",
		],
	},
	{
		id: "emergency",
		icon: "alert",
		title: "Emergency Utility Shutoffs",
		summary: "Where to find the water, electrical, and propane shutoffs.",
		body: [
			"Water: whole-house shutoff is in the utility/laundry room closet. It's low on the wall next to the water heater.",
			"Electrical: breaker box is in the middle bedroom, on the mountain wall. All breakers are labeled.",
			"Propane: shutoff valve is on top of the tank, on the other side of the walkway off the master bedroom and next to the river-facing RV pad. The fireplace also has its own accessible valve.",
			"Power outage: flashlights, a lantern, and candles are on the shelf in the utility closet. The lighter is in the second drawer down to the left of the oven. Be careful with candles.",
			"The gas fireplace will run without electricity. Set the hallway thermostat to your desired temperature. If you use the emergency supplies, please return them to their spot for the next guest.",
		],
	},
	{
		id: "kitchen",
		icon: "kitchen",
		title: "Kitchen",
		summary: "Fully stocked with a few extras. A couple of care notes.",
		body: [
			"You'll find all the basics plus a few extras. Hand-wash the pots, pans, and bakeware so their finishes last longer. The bakeware is newer and non-stick (no greasing needed).",
			"Small appliances available: blender, rice cooker, waffle maker. If you use one, please clean it before putting it away. The next guest will thank you!",
		],
	},
	{
		id: "rv",
		icon: "caravan",
		title: "RV Pad",
		summary: "Hookups available next to the bunk house.",
		body: [
			"Water, power, and septic hookups are next to the concrete pad along the bunk house. We can provide additional info if you need it.",
			"A second RV pad by the home has power hookups only.",
		],
	},
	{
		id: "tvs",
		icon: "tv",
		title: "TVs",
		summary: "Amazon Fire Stick on every TV — sign in to your streaming apps.",
		body: [
			"Both TVs (great room and primary bedroom) have an Amazon Fire Stick. Use any popular streaming app, Netflix, Prime, Hulu, by signing in with your own credentials.",
			"Don't forget to sign out before you leave.",
		],
	},
	{
		id: "bbq",
		icon: "grill",
		title: "Gas Barbecue",
		summary: "Propane grill with tools in the kitchen drawer.",
		body: [
			"Instructions are printed on the barbecue itself. Tools are in the kitchen drawer.",
			"We try to keep the propane canister filled. If it's empty, let us know and we'll exchange it.",
			"Please clean the grill with the brush after use.",
		],
	},
	{
		id: "firepit",
		icon: "campfire",
		title: "Firepit",
		summary: "Approved firepit. Check for burn bans before lighting.",
		body: [
			"First: check for a burn ban. The Lewis County website, the Packwood Post Office, or Blanton's Market will all have it posted.",
			"This is an approved firepit, so it can sometimes be used during partial burn bans, but never during a total burn ban.",
			"Firewood and fire starter are available in town at Blanton's or the lot in front of Skate Creek Bridge. An axe and hatchet for splitting are in the utility closet.",
			"Roasting sticks for marshmallows or hot dogs are in the deck box on the hot-tub side of the home. Matches are in the small drawer to the left of the kitchen sink.",
			"Watch the fire at all times, especially in wind. Keep chairs and other items a safe distance away. Make sure the fire is out before you leave and don't leave it unattended.",
		],
	},
	{
		id: "hottub",
		icon: "hottub",
		title: "Hot Tub",
		summary: "Rinse before you soak. Cover goes back on when you're done.",
		body: [
			"Rinse off before getting in. Unclip the two cover straps, fold that end of the cover onto the other side of the cover sitting on the tub, then slide it into the holder on the forest side. Dust off feet before climbing in.",
			"A skimmer rests against the home — use it to remove any pine needles or debris.",
			"Please don't bring glass into the hot tub.",
			"When you're done, return the cover and clip it in place.",
		],
	},
	{
		id: "eggchairs",
		icon: "chair",
		title: "Hanging Egg Chairs",
		summary: "250 lb weight limit. Gentle motion only, not swings.",
		body: [
			"Weight limit is 250 lbs. Generally one person at a time (an adult and a small child is fine).",
			"These are hanging chairs, not swings. They're designed for gentle motion only.",
			"Adjust the height with the carabiner that connects the chain to the stand.",
		],
	},
];
