/**
 * 변수 모듈
 *
 * @author RWB
 * @since 2024.03.07 Thu 01:19:49
 */

export const icons = [
	'lottie-logo',
	'weather-broken-clouds',
	'weather-clear-sky',
	'weather-few-clouds',
	'weather-mist',
	'weather-night-broken-clouds',
	'weather-night-clear-sky',
	'weather-night-few-clouds',
	'weather-night-mist',
	'weather-night-rain',
	'weather-night-scattered-clouds',
	'weather-night-shower-rains',
	'weather-night-thunderstorm',
	'weather-rain',
	'weather-scattered-clouds',
	'weather-shower-rains',
	'weather-snow',
	'weather-thunderstorm',
	'web-development'
] as const;

export const basepath = import.meta.env.DEV ? '/lottie' : '/lottie/lottie';