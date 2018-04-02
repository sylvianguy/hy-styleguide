import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ location, info, getRandomStyle, reload }) => {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, subHeadingStyle, textTransform, bodyFont, labelText, subStyle, subWeight, subTransform, bodyWeight, paraLineHeight, buttonTransform, buttonWeight } = info;

  if(location.pathname !== '/') {
    return (
      <footer style={{ background: `#${footerBar}` }}>
        {/* <Link to="/" className="save">Home</Link> */}
        <button className="button" onClick={reload}>Home</button>
      </footer>
    )
  } else {
    return (
      <footer style={{ background: `#${footerBar}` }}>
        <span>Click to Change</span>
        <button className="button" value="fonts" onClick={getRandomStyle} type="button">Fonts</button>
        <button className="button" value="colors" onClick={getRandomStyle} type="button">Colours</button> <button className="button" type="button">Extras</button>
        <button className="button" type="button">All</button>
  
        <Link to={`/styleguide/${topBar}/${footerBar}/${accent}/${bodyText}/${background}/${borders}/${headerText}/${buttonText}/${mainHeading}/${subHeading}/${placeholderText}/${subStyle}/${textTransform}/${bodyFont}/${labelText}/${subWeight}/${subTransform}/${bodyWeight}/${paraLineHeight}/${buttonTransform}/${buttonWeight}`} className="button save">Save</Link>


        
  
      </footer>
    )
  }
}

export default Footer;