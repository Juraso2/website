import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

import "../styles.scss"

// markup
const IndexPage = ({ data }) => {
  React.useEffect(() => {
    UIkit.use(Icons);

    const progressBars = document.getElementsByClassName('uk-progress');

    [...progressBars].forEach(element => {
      UIkit.scrollspy(element, {
        repeat: false
      });

      UIkit.util.on(element, 'inview', () => {
        element.value = element.dataset.value;
      });

      UIkit.util.on(element, 'outview', (e) => {
        element.value = 0;
      });
    });
  }, [])

  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Daniel Jurewicz | Web developer</title>
        <meta name="description" content="Full Stack Developer skupiony na Frontendzie. Nie straszny mi JavaScript, PHP, Vue czy React. Dużą uwagę przykładam do nauki nowych technologii w świecie IT." />
        <meta name="robots" content="index, nofollow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="canonical" href="https://daniel-jurewicz.pl" />
      </Helmet>

      <Header location={data.strapi.homepage.Location} phone={data.strapi.homepage.Phone} email={data.strapi.homepage.Email} name={data.strapi.homepage.Name} surname={data.strapi.homepage.Surname} title={data.strapi.homepage.Title} />

      {data.strapi.homepage.Section.map((section, i) => {
        return (<Section key={i} content={section} />)
      })}

      <Footer location={data.strapi.homepage.Location} phone={data.strapi.homepage.Phone} email={data.strapi.homepage.Email} />
    </>
  )
}

export const pageQuery = graphql`
  query HomepageQuery {
    strapi {
      homepage {
        Name
        Surname
        Title
        Location
        Phone
        Email
        Section {
          ... on STRAPI_ComponentSectionsSection {
            Title
            Description
            section {
              Components {
                ... on STRAPI_ComponentContentText {
                  __typename
                  Content
                }
                ... on STRAPI_ComponentContentOutnumberedElement {
                  __typename
                  Title
                  From
                  To
                  Location
                  Position
                }
                ... on STRAPI_ComponentContentSkillsList {
                  __typename
                  skills {
                    Title
                    Percent
                  }
                }
                ... on STRAPI_ComponentContentProjectsList {
                  __typename
                  projects {
                    Title
                    Description
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
  ;

export default IndexPage
