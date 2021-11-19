import {
	hexToRGB, 
} from './../utils/testUtils.js';


/* ======================================= Tests ========================================== */
it('hexToRGB()', () => {
	const whiteHex = '#ffffff';
	const whiteRGB = 'rgb(255, 255, 255)'; 

	const test = hexToRGB(whiteHex);
	expect(test).toEqual(whiteRGB)
})
