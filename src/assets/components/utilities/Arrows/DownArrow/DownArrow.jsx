import downArrow from '../img/downarrow.svg';
import './DownArrow.css';

export default function DownArrow() {
	return (
		<>
			<img className='down-arrow' src={downArrow} alt='arrow' />
		</>
	);
}
