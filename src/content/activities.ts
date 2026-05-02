export type Activity = {
	title: string;
	body: string;
	link?: { label: string; url: string };
};

export const safetyNote =
	"A note before you head out: the riverfront is rocky and the river along the property is fast. Use caution accessing the river and always supervise children near the water.";

export const activities: Activity[] = [
	{
		title: "Wildlife watching",
		body: "No guarantees, but these have all been spotted from the home: elk, deer, coyotes, raccoons, beavers, bald eagles, golden eagles, osprey, blue herons, hawks, turkey vultures, ducks, geese, and bats. Eagles, osprey, herons, and kingfishers have all been seen catching fish from the home. Bears have been spotted nearby — but not at the house yet.",
	},
	{
		title: "Stargazing",
		body: "The deck and firepit have the best sky visibility — pour something warm and look up.",
	},
	{
		title: "Morning soak",
		body: "A dip in the hot tub at sunrise with a cup of coffee, watching the property slowly light up, is one of the best ways to start the day here.",
	},
	{
		title: "Float the river",
		body: "You can put in at the SW end of the property where it meets the river (the slower section to the far right when looking off the deck) and float to Skate Creek Bridge. Leave a vehicle at the Cowlitz River Access Point first — there’s public parking.",
		link: { label: "Skate Creek Park info", url: "https://www.lewiscountywa.gov/" },
	},
	{
		title: "Hiking",
		body: "A binder of local trails is on the TV stand. Here’s a curated list of well-loved hikes nearby:",
		link: {
			label: "10 popular Packwood trails on AllTrails",
			url: "https://www.alltrails.com/us/washington/packwood",
		},
	},
	{
		title: "Fishing",
		body: "Packwood Lake is a local favorite. It’s a hike-in lake, but the hike is worth it.",
	},
	{
		title: "Need ideas?",
		body: "Message us through the hosting app — we’re happy to suggest hikes or activities tailored to what you’re looking for.",
	},
];
