import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import React from 'react';

const styles = {
	img: {
		width: "20.1%",
		height: "10.2%"
	},
};

export const BookRow = ({ rowNumber, title, imageLink, link, highlight }) => {

	// Scroll to the top of UI when user selects an entry
	const click = () => {
		// console.log(highlight, rowNumber);
		highlight({
			highlight: rowNumber
		})
		Scroll.animateScroll.scrollTo(200);
	}

	return (
		<div>
			<div onClick={click} className="list-group-item">
				<img src={"//play.fisher-price.com" + imageLink} alt={title} style={styles.img} />
				<br />
				<span>{title}</span>
			</div>
			<br />
		</div>
	)
}

BookRow.propTypes = {
	title: PropTypes.string,
	imageLink: PropTypes.string,
	link: PropTypes.string
}