import React from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';

const Styleguide = (props) =>  {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, subStyle, textTransform, bodyFont, labelText, subWeight, subTransform, bodyWeight, paraLineHeight } = props.match.params;
    return (
      <div style={{ background: `#${background}` }}>
        <header style={{ background: `#${topBar}` }}></header>
        <main>
          <section className="leftside">
            <h1
              style={{
                color: `#${bodyText}`,
                fontFamily: mainHeading
              }}>
              Heading One</h1>
            <p
              style={{
                color: `#${bodyText}`,
                fontFamily: bodyFont,
                fontWeight: bodyWeight,
                lineHeight: paraLineHeight
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia adipisci beatae, dolore, ad nihil possimus voluptas. Necessitatibus pariatur, obcaecati, culpa iste, cumque ea minus iusto.</p>
            <h2
              style={{
                color: `#${bodyText}`,
                fontFamily: mainHeading
              }}>
              Heading Two</h2>
            <h3
              style={{
                color: `#${bodyText}`,
                fontFamily: subHeading,
                fontStyle: subStyle,
                fontWeight: subWeight,
                textTransform: subTransform
              }}>
              Heading Three</h3>
            <p
              style={{
                color: `#${bodyText}`,
                fontFamily: bodyFont,
                fontWeight: bodyWeight,
                lineHeight: paraLineHeight
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia adipisci beatae, dolore, ad nihil possimus voluptas. Necessitatibus pariatur, obcaecati.
              <a style={{ color: `#${accent}` }} href="#">This is a link.</a></p>
            <h4
              style={{
                color: `#${bodyText}`,
                fontFamily: mainHeading
              }}>
              Heading Four</h4>
            <h5
              style={{
                color: `#${bodyText}`,
                fontFamily: subHeading,
                fontStyle: subStyle,
                fontWeight: subWeight,
                textTransform: subTransform
              }}>
              Heading Five</h5>
            <p
              style={{
                color: `#${bodyText}`,
                fontFamily: bodyFont,
                fontWeight: bodyWeight,
                lineHeight: paraLineHeight
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia adipisci beatae, dolore, ad nihil possimus voluptas. Necessitatibus pariatur, obcaecati, culpa iste, cumque ea minus iusto.</p>
          </section>
          <Sidebar info={props.match.params} />
        </main>
        <Footer reload={() => props.reload(props.match)} location={props.match.path} info={props.match.params} getRandomStyle={props.getRandomStyle} />
      </div>
    )
}

export default Styleguide;