export function hexToRGB(hex) {
	hex = hex.replace('#', '');
	const aRgbHex = hex.match(/.{1,2}/g);
	const a =  parseInt(aRgbHex[0], 16);
	const b =  parseInt(aRgbHex[1], 16);
  const c = parseInt(aRgbHex[2], 16);

  return `rgb(${a}, ${b}, ${c})`;
}

export function setLocation(location) {
	const oldWindowLocation = window.location;
	delete window.location;

	window.location = Object.defineProperties(
		// start with an empty object on which to define properties
		{},
		{
			// grab all of the property descriptors for the
			// `jsdom` `Location` object
			...Object.getOwnPropertyDescriptors(oldWindowLocation),
			href: {
				configurable: true,
				value: location,
			},
			pathname: {
				configurable: true,
				value: location.slice(location.lastIndexOf('/'))
			}
		},
	) 
}