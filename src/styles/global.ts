import { createGlobalStyle } from "styled-components";

export const GlobaStyle = createGlobalStyle`
	:root {
		--background: #F0F2F5;
		--blue: #5429cc;
		--blue-light: #6933ff;
		--green: #33CC95;
		--red: #E52E4D;
		--shape: #FFFFFF;
		--title: #363f5f;
		--text: #969CB2;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		background-color: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: "Poppins", sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;
	}

	[disable] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`

