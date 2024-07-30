import React from 'react';
import './SubscribeBtn.css';
import youtubeBtn from './youtube-btn.png';

export default function SubscribeBtn() {
	return (
		<button className='subscribe-btn'>
			<img className='subscribe-img' src={youtubeBtn} alt='' />
			<span>Подписаться на канал</span>
		</button>
	);
}
