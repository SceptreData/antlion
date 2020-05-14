import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                email
              }
            }
            menu {
              label
              path
            }
            url
            title
            copyright
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export { useSiteMetadata }
export default useSiteMetadata
