export default function Icon(props) {
	function renderIcon() {
		switch (props.type) {
			case "arrow":
				return (
					<svg className="icon" data-type={props.type} data-lead={props.lead} data-rear={props.rear} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					     viewBox="0 0 26 20">
						<g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="3">
							<path d="M15 1l9 9-9 9M0 10h24"></path>
						</g>
					</svg>
				)
			case "linkedin":
				return (
					<svg className="icon" data-type={props.type} data-lead={props.lead} data-rear={props.rear} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
					     height="24"
					     viewBox="0 0 24 24">
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
					</svg>
				)
			case "twitter":
				return (
					<svg className="icon" data-type={props.type} data-lead={props.lead} data-rear={props.rear} aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					     viewBox="0 0 40 33">
						<path d="M40 4.262a16.384 16.384 0 01-4.713 1.291 8.22 8.22 0 003.608-4.54 16.44 16.44 0 01-5.212 1.992 8.193 8.193 0 00-5.99-2.592c-5.298 0-9.191 4.944-7.995 10.075C12.88 10.147 6.833 6.88 2.785 1.915.635 5.603 1.67 10.428 5.323 12.872a8.172 8.172 0 01-3.715-1.027c-.09 3.802 2.635 7.358 6.582 8.15a8.225 8.225 0 01-3.707.14 8.213 8.213 0 007.667 5.698A16.5 16.5 0 010 29.233a23.232 23.232 0 0012.58 3.687c15.237 0 23.845-12.868 23.325-24.41A16.708 16.708 0 0040 4.262z"></path>
					</svg>
				)
			case "github":
				return (
					<svg className="icon" data-type={props.type} data-lead={props.lead} data-rear={props.rear} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
					     height="24" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
					</svg>
				)
			case "mkk":
				return (
					<svg className="icon" data-type={props.type} data-lead={props.lead} data-rear={props.rear} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
					     viewBox="0 0 38.6 24">
						<g>
							<path d="M4.6,15.4l-4.5,7.7C-0.2,23.5,0.1,24,0.6,24h9.1c0.5,0,0.8-0.5,0.5-0.9l-4.5-7.7C5.5,14.9,4.9,14.9,4.6,15.4z"/>
							<path d="M23.8,22.6L23.8,22.6c-4.6,2.6-10.4,1.1-13-3.5L0.9,1.9C0.7,1.7,0.8,1.4,1,1.3l0,0c4.6-2.6,10.4-1.1,13,3.5L24,22
		C24.1,22.2,24.1,22.5,23.8,22.6z"/>
							<path d="M38.3,22.6L38.3,22.6c-4.6,2.6-10.4,1.1-13-3.5L15.4,1.9c-0.1-0.2-0.1-0.5,0.2-0.6l0,0c4.6-2.6,10.4-1.1,13,3.5L38.5,22
		C38.6,22.2,38.5,22.5,38.3,22.6z"/>
						</g>
					</svg>
				)
			default:
				return (
					<div>icon</div>
				)
		}
	}


	return (
		renderIcon()
	);
}