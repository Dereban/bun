/*
This file can be hot-loaded into a running server with `node server/kill.js`.
 */

this.hot = {
// User feedback email
	EMAIL: ,
	TITLES: {
		bun: "/bun/ - Baked Goods",
		lang: "/lang/ - Language Learning",
		gen: "/gen/ - General topic threads",
		coffee: "/coffee/ - Break",
		buni: "/B.U.N.I./ - AI",
		himitsu: "/himitsu/ - Our secret~",
		bread: "/bread/ - Lewd things",
		mochi: "/mochi/ - Staff 2.0"	},
// Default theme to use
	DEFAULT_CSS: 'moe',
/*
 * File names of the images to use as banners inside the ./www/banners
 * Example: ['banner01.png', 'banner02.gif', 'banner03.jpg'] or null
 */
	BANNERS: ['banner-0.gif', 'banner-1.png', 'banner-2.gif',
		'banner-3.jpg', 'banner-4.png', 'banner-5.png',
		'banner-6.png', 'banner-7.png', 'banner-8.gif',
		'banner-9.png', 'banner-10.png', 'banner-11.gif',
		'banner-12.png', 'banner-13.png', 'banner-14.gif',
		'banner-15.png', 'banner-16.png', 'banner-17.gif',
		'banner-18.png', 'banner-19.png', 'banner-20.png',
		'banner-21.gif', 'banner-22.png', 'banner-23.gif',
		'banner-24.gif', 'banner-25.png', 'banner-26.png',
		'banner-27.png', 'banner-28.png', 'banner-29.png',
		'banner-30.png', 'banner-31.png', 'banner-32.png',
		'banner-33.jpg', 'banner-34.png', 'banner-35.png', 
		'banner-36.png', 'banner-37.png', 'banner-38.jpg',
		'banner-39.jpg'],

// Instead of redirecting to the default board serve a frontpage to the
// user, when navigating to '/'.Must be path pointing to a regular HTML
// document or null. Example: 'www/frontpage.html'
	frontpage: null,

	THREADS_PER_PAGE: 10,
// Replies to display under each thread on the board's root page
	ABBREVIATED_REPLIES: 5,
/*
 Default number of posts to display, when thread is expanded with the "Last N"
 link
 */
	THREAD_LAST_N: 100,
	SUBJECT_MAX_LENGTH: 50,
	EXCLUDE_REGEXP: /[\u2000-\u200f\u202a-\u202f\u205f-\u206f]+/g,
	SAGE_ENABLED: true,
// Disable names and  for new posts
	forced_anon: false,
// Boards that won't be displayed in the banner board navigation
	hidden_boards: ['coffee', 'himitsu', 'bread', 'buni', 'moe'],
// Titles for staff that will be displayed in their posts' headers
	staff_aliases: {
		admin: 'Admin',
		moderator: 'Cutie',
		dj: 'Princess',
		janitor: 'Meido'
	},
	SPECIAL_TRIPCODES: {
		kyubey: "／人◕ ‿‿ ◕人＼"
	},
/*
 Information to display in the top banner. Accepts HTML. Is overriden by
 Y.set_banner()
 */
	BANNERINFO: '',
// Planned event schedule to display in the banner's Schedule list
	SCHEDULE: [
		'Mon', 'Take it easy', null,
		'Tue', 'Take it easy', null,
		'Wed', 'Take it easy', null,
		'Thu', 'Take it easy', null,
		'Fri', 'Take it easy', null,
		'Sat', 'Filter Friday', '01:00',
		'Sun', 'Take it easy', null
	],
// Entries for the banner's FAQ list
	FAQ: [
		'Lets keep /bun/ a comfy site for everyone',
		'If this is your first time here please read the <a href="http://daijoubu.org/rules/"'
			+ ' target="_blank">rules.</a>',
		'<hr>',
		'Upload size limit is 30 MB',
		'Accepted upload file types: JPG, JPEG, PNG, APNG, GIF, WEBM, SVG,'
			+ ' PDF, MP3(must have cover art)',
		'<hr>',
		'Click the small box in the bottom right of your post to use a spoiler',
		'Hash commands: ',
		'#&#60;number of dice(1-10, optional)&#62;d&#60;dice sides(1-100)&#62;'
			+ ' - Roll dice',
		'#flip - Coinflip',
		'#8ball - An 8ball',
		'#q - Print r/a/dio song queue',
		'#sw&#60;hours(optional)&#62;:&#60;minutes&#62;:&#60;seconds&#62;[+-]'
			+ '&#60;offset seconds(optional)&#62 - Syncronised duration timer',
		'&emsp;A positive offset adds a countdown. A negative offset starts'
			+ ' the timer n seconds into the episode.',
		'<hr>',
		'Source code repository: <a href="https://github.com/bakape/doushio"'
			+ ' target="_blank">github.com/bakape/meguca</a>',
		'<hr>',
		' <a href="http://daijoubu.org:8123/"'+ ' target="_blank">Our minecraft map</a>',
		'<hr>',
		' <a href="https://discord.gg/Ea5NyPq"'+ ' target="_blank">Our discord channel</a>',
		'Only used for voice chat',
		'<hr>',
		'Our own radio',
		'<a><audio id="player" controls><source src="http://daijoubu.org:48765/radio.ogg"></audio></a>',
		 '<a href="http://daijoubu.org:48765/"'
			+ ' target="_blank">Radio status</a>'
	],
// Extra JS script to load on all clients. Set to a file path or null.
	inject_js: null,
/*
 Word replacament filter. {p: /foo/, r: 'bar'} Pattern must not contain spaces
 or newlines
 */
	FILTER: [{p: /Latvian+/, r: 'Faggot'},  {p: /latvian+/, r: 'faggot'},  {p: /LATVIAN+/, r: 'FAGGOT'}],
/*
 Array of answers for the 8ball random wisdom dispenser. To use, type "#8ball"
 in post, followed by enter.
 */
	EIGHT_BALL: [
		"yes",
		"no",
		"maybe~",
		"shouganai",
		"Hell yeah, motherfucker!",
		"how am i supposed to know? i'm just a RNG machine",
		'ara ara~',
		"that is my fetish",
		"anta bwaka?",
		"plop~",
		"no u",
		"don't be SILLY~",
		"that's silly",
		"no bully!",
		"rawwwwwwwwwwwwwr~",
		"wow rude"
	],
/*
 Local http://loli.dance/ implementation. Videos not included in git tree.
 Place illya.webm and illya.mp4 into the www directory, if you want this.
 */
	ILLYA_DANCE: false
};
