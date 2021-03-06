// External Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// Internal Dependencies
import Header from './header';
import Footer from './footer';
import withAuthentication from './session/withAuthentication';
import './layout.css';

// Component Definition
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      // SHORT SYNTAX FOR REACT FRAGMENT
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Website for the ReactJS Dallas User Group',
            },
            {
              name: 'keywords',
              content:
                'react, reactjs, JavaScript, frontend, web development, dallas',
            },
          ]}
        >
          <html lang="en" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
            rel="stylesheet"
          />
        </Helmet>
        <main style={{ minHeight: '100vh' }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: '0 auto',
              minHeight: '92vh',
              padding: 0,
            }}
          >
            {children}
          </div>
          <Footer />
        </main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withAuthentication(Layout);
