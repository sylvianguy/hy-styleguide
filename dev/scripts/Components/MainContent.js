import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainContent = ({info, getRandomStyle, location, reload }) => {
  let { topBar, footerBar, accent, bodyText, background, borders, headerText, buttonText, mainHeading, subHeading, placeholderText, subStyle, textTransform, bodyFont, labelText, subWeight, subTransform, bodyWeight, paraLineHeight } = info;


  return (
    <div style={{ background: `#${background}`}} >
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
        <Sidebar info={info} />
      </main>
      <Footer reload={reload} location={location} info={info} getRandomStyle={getRandomStyle} />
    </div>
  )
}

export default MainContent;