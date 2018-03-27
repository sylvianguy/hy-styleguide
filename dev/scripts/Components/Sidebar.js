import React from 'react';

const Sidebar = ({ info }) => {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, subHeadingStyle, textTransform, bodyFont, labelText } = info;
  return (
    <section className="rightside">
      <h4
        style={{
          color: `#${headerText}`,
          fontFamily: mainHeading
        }}>
        Forms & Buttons</h4>
      <form action="">
        <h6
          style={{
            color: `#${bodyText}`
          }}>
          Form Label Heading Six</h6>
        <input name="firstname" type="text" style={{ fontFamily: placeholderText }} placeholder="input area" />
        <h6
          style={{
            color: `#${bodyText}`,
            textTransform: textTransform
          }}>
          Form Label Heading Six</h6>
        <input name="firstname" type="text" placeholder="input area" />
        <h6
          style={{
            color: `#${bodyText}`,
            textTransform: textTransform
          }}>Form Label Heading Six</h6>
        <label
          style={{
            color: `#${bodyText}`
          }} className="container">Radio Button
				          <input type="checkbox" defaultChecked="checked" />
          <span
            style={{
              background: `#${footerBar}`
            }} className="checkmark"></span>
        </label>
        <label
          style={{
            color: `#${bodyText}`
          }} className="container">Radio Button
                  <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <label
          style={{
            color: `#${bodyText}`
          }}
          className="container">Radio Button
                  <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <button
          style={{
            background: `#${accent}`
          }}
          type="button">Button</button>
      </form>
    </section>
  )
}

export default Sidebar;