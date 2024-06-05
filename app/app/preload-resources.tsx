'use client';
import ReactDom from 'react-dom';

export function PreloadResources() {
	ReactDom.preload('./sprite.svg', {
		as: 'image',
	});

	return null;
}
