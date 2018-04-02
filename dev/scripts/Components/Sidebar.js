import React from 'react';

const Sidebar = ({ info }) => {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, textTransform, bodyFont, labelText, labelTransform } = info;
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
            color: `#${bodyText}`,
            fontFamily: labelText,
            textTransform: labelTransform
        }}>
        Form Label Heading Six</h6>
        <input name="firstname" type="text" placeholder="input area"
          style={{
            fontFamily: placeholderText
          }} 
        />
        <h6
          style={{
            color: `#${bodyText}`,
            textTransform: labelTransform,
            fontFamily: labelText
          }}>
          Form Label Heading Six</h6>
        <input name="firstname" type="text" placeholder="input area"
          style={{
            fontFamily: placeholderText
          }}
        />
        <h6
          style={{
            color: `#${bodyText}`,
            textTransform: labelTransform,
            fontFamily: labelText
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
          className="button"
          style={{
            background: `#${accent}`
          }}
          type="button">Button</button>
      </form>
    </section>
  )
}

export default Sidebar;