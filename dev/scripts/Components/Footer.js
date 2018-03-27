import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ location, info, getRandomStyle }) => {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, subHeadingStyle, textTransform, bodyFont, labelText } = info;

  if(location.pathname !== '/') {
    return (
      <footer style={{ background: `#${footerBar}` }}>
        <Link to="/" className="save">Home</Link>
      </footer>
    )
  } else {
    return (
      <footer style={{ background: `#${footerBar}` }}>
        <span>Click to Change</span>
        <button value="fonts" onClick={getRandomStyle} type="button">Fonts</button>
        <button value="colors" onClick={getRandomStyle} type="button">Colours</button> <button type="button">Extras</button>
        <button type="button">All</button>
  
        <Link to={`/styleguide/${topBar}/${footerBar}/${accent}/${bodyText}/${background}/${borders}/${headerText}/${buttonText}/${mainHeading}/${subHeading}/${placeholderText}/${subHeadingStyle}/${textTransform}/${bodyFont}/${labelText}`} className="save">Save</Link>
  
      </footer>
    )
  }
}

export default Footer;