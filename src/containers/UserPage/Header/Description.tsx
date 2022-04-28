import React from 'react';

const Description = function Description({ className }: { className: string }) {
	const isLoading = false;
	return (
		<div className={className}>
			{!isLoading && (
				<> Jgbcfybt. dgsgJgbcfybt. dgsgJgbcfybt. dgsgJgbcfybt. dgsg </>
			)}
		</div>
	);
};

export default Description;
