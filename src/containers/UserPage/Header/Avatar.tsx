import React from 'react';

const Avatar = function Avatar({ className }: { className: string }) {
	const isLoading = true;
	return <div className={className}>{!isLoading && <img src="#" />}</div>;
};

export default Avatar;
