import type { Config } from 'tailwindcss';
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...fontFamily.sans],
				mono: ['Martian Mono Variable', ...fontFamily.mono],
			},

		}
	},

	plugins: []
} satisfies Config;
