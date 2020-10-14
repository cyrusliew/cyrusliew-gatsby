import { graphql } from 'gatsby';

const pageQuery  = () => graphql`
query ProjectByID(
  $id: String!
  $tags: [String!]
  $next: String
  $prev: String
) {
  currentProject: markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      description
      tags
      platform
      onGoing
      completionDate
      url
      thumbnail {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  moreLikeThis: allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]},
    limit: 4,
    filter: {
      id: {
        nin: [$id, $prev, $next]
      }
      frontmatter: {
        templateKey: {
          eq: "project"
        },
        tags: {
          in: $tags
        }
      }
    }
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          tags
          thumbnail {
            childImageSharp {
              fluid(
                quality: 100
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  
  next: markdownRemark(id: { eq: $next }) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  
  prev: markdownRemark(id: { eq: $prev }) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  
}
`

export default pageQuery;
