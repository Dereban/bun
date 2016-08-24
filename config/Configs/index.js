module.exports = {
	LISTEN_PORT: 8000,
// Host address to listen on. Use null for localhost
	LISTEN_HOST: null,
// Debuging mode. Do not use in production
	DEBUG: false,
// Secure encryption salt. First 16 chars used for tripcode, mnemonics uses all 40
	SECURE_SALT: "[REDACTED]", /* [A-Za-z0-9]{40} */
// Relative path to serve websocket connections
	SOCKET_PATH: '/hana',
/*
 Absolute URL for client connections. Defaults to SOCKET_PATH. Only set this, if
 you are serving websockets from a different root address.
 */
	SOCKET_URL: 'http://daijoubu.org/hana',
// Honour X-Forwarded-For HTTP headers for client IP determination
	TRUST_X_FORWARDED_FOR: true,
/*
 Use internal HTTP server to serve these resources.It is recommended to serve
 the www directory with a dedicated webserver, like nginx, and set MEDIAURL
 in imager/config.js to the served directory's address.
 */
	SERVE_STATIC_FILES: true,
	SERVE_IMAGES: true,
// Not preferred; use nginx (or other's) gzipping
	GZIP: true,
/*
 Enable usage of the websocket protocol (otherwise only emulation). Disabling
 this increases connection speed, if behind restrictive proxies.
 */
	USE_WEBSOCKETS: true,

	REDIS_PORT: 6379,
	redis_database: 0,
	READ_ONLY: false,

	BOARDS: ['bun', 'gen', 'mochi', 'coffee', 'bread', 'buni', 'himitsu'],
	DEFAULT_BOARD: 'bun',
// Add links to the navigator menu to custom URLs. Also enables linking
// these in posts with `>>>/${board}/`.
	PSUEDO_BOARDS: [],
// Only enable in-post links, without adding to the board navigation bar
	link_boards: [
		['meguca', 'http://meguca.org/a/'], ['tea', 'http://chakai.org/tea/'], ['moe', 'http://www.doushio.com/moe/'],
		['magic', 'http://gensou.chakai.org/magic/'], ['tano', 'http://www.tanoshiine.info/radio/'], ['4chan', 'http://www.4chan.org/'],
		['mcmap', 'http://daijoubu.org:8123/'], ['rules', 'http://daijoubu.org/rules/'], ['ekustream', 'http://daijoubu.org/ekustream/']
	],

	MOD_BOARD: 'himitsu',
	STAFF_BOARD: 'mochi',
// Boards that are only active for one hour
// use time from 0-23
	TIMED_BOARD: 'coffee',
	BOARD_TIMEOUT: '20',

// Boards with disabled moderation
	containment_boards: [],

// Language settings. You can easily map more. See ./lang/
	LANGS: ['en_GB', 'pt_BR', 'es_ES'],
	DEFAULT_LANG: 'en_GB',

// Thread creation cooldown for the same IP in seconds
	THREAD_THROTTLE: 60,
// Posting speed throttling settings
	SHORT_TERM_LIMIT: 2000,
	LONG_TERM_LIMIT: 2000*20*12,
	NEW_POST_WORTH: 50,
	IMAGE_WORTH: 50,

// Number of pages per board
	PAGES: {
		bun: 5,
		gen: 5,
		coffee: 5,
		bread: 5,
		buni: 5,
		himitsu: 5,
		mochi: 5
	},
// Number of posts per thread, after which the thread stops bumping to the
// top of the board
	BUMP_LIMIT: {
		bun: 1000,
		gen: 1000,
		coffee: 1000,
		bread: 1000,
		buni: 1000,
		himitsu: 1000,
		mochi: 1000
	},
// Delete threads and their images, when they exceed the board's page limit
	PRUNE: false,

/*
 Doushio uses Mozilla's Persona system for staff authentication.
 Set login emails aliases, which will be used for logging, here.
 */
	staff: {
		admin: ,
		moderator: ,
		dj: ,
		janitor: 
	},
// You can log in/out by typing the following keyword in the email field
	LOGIN_KEYWORD: 'inaban',
// URL and domain of the website
	PERSONA_AUDIENCE: 'http://daijoubu.org:80',
	LOGIN_SESSION_TIME: 60*60*24*14,

// r/a/dio integration (https://r-a-d.io)
	RADIO: true,
// Missle Launcher
	PYU: false
};

// Source the other config files
require('underscore').extend(module.exports,
	require('./imager'),
	require('./report')
);
