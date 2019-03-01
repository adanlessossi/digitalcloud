import React from 'react';

const Footer = () => {
	return (
		<footer color='blue' className='font-small pt-4 mt-4'>
			<div className='footer-copyright text-center py-3'>
				<div>
					&copy; {new Date().getFullYear()} Copyright :{' '}
					<a href='http://digitalcloudservice.com/'> Digital Cloud Service </a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
