import React from 'react';

import Footer from './Footer';
import Sidebar from './Sidebar';

const Styleguide = (props) =>  {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading , subHeading , placeholderText, subHeadingStyle, textTransform, bodyFont, labelText } = props.match.params;
    return (
      <div>
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
                fontFamily: bodyFont
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
                fontStyle: subHeadingStyle
              }}>
              Heading Three</h3>
            <p
              style={{
                color: `#${bodyText}`,
                fontFamily: bodyFont
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
                fontStyle: subHeadingStyle
              }}>
              Heading Five</h5>
            <p
              style={{
                color: `#${bodyText}`,
                fontFamily: bodyFont
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia adipisci beatae, dolore, ad nihil possimus voluptas. Necessitatibus pariatur, obcaecati, culpa iste, cumque ea minus iusto.</p>
          </section>
          <Sidebar info={props.match.params} />
        </main>
        <Footer location={props.match.path} info={props.match.params} getRandomStyle={props.getRandomStyle} />
      </div>
    )
}

export default Styleguide;