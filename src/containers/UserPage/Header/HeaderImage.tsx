import React from 'react';

const HeaderImage = function HeaderImage({ className }: { className: string }) {
	const isLoading = true;
	return <div className={className}>{!isLoading && <img src="#" />}</div>;
};

export default HeaderImage;
