import { gsap } from 'gsap';
const startGsapHomeAnimation = (
	containerElClass,
	delayShowInfoElClass,
	delayShowBtnElClass
) => {
	const gsapTimeline = gsap.timeline();

	/* 
		(Wrong animation)When using build file for deployment, cause bug => when browser resize back to desktop, image show first then do hide and show!
		(First load is fine only happens when browser resize)

		(Correct animation)When using dev file(npm run serve), no bug => when browser resize back to desktop, image hide first then show!
		(First load is fine and browser resize is fine too)

	*/
	// gsapTimeline.fromTo(
	// 	`.${containerElClass}`,
	// 	{ xPercent: '-100' },
	// 	{
	// 		xPercent: '0',
	// 		duration: '1',
	// 		onComplete: () => {
	// 			gsapTimeline
	// 				.fromTo(
	// 					`.${delayShowInfoElClass}`,
	// 					{ display: 'none', opacity: '0' },
	// 					{ display: 'flex', opacity: '1', duration: 1 },
	// 					1.2
	// 				)
	// 				.fromTo(
	// 					`.${delayShowBtnElClass}`,
	// 					{ display: 'none', opacity: '0' },
	// 					{ display: 'block', opacity: '1', duration: 1 },
	// 					1.7
	// 				);
	// 		},
	// 	}
	// );

	gsapTimeline
		.fromTo(
			`.${containerElClass}`,
			{ transform: 'translateX(-100%)' },
			{
				transform: 'translateX(0)',
				duration: '1',
			}
		)
		.fromTo(
			`.${delayShowInfoElClass}`,
			{ display: 'none', opacity: '0' },
			{ display: 'flex', opacity: '1', duration: 1 },
			1.2
		)
		.fromTo(
			`.${delayShowBtnElClass}`,
			{ display: 'none', opacity: '0' },
			{ display: 'block', opacity: '1', duration: 1 },
			1.7
		);

	return gsapTimeline;
};

export { startGsapHomeAnimation };
