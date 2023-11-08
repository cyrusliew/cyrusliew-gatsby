import { graphql } from 'gatsby';

const pageQuery  = () => graphql`query ProjectByID($id: String!, $tags: [String!], $next: String, $prev: String) {
  currentProject: markdownRemark(id: {eq: $id}) {
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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  moreLikeThis: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    limit: 4
    filter: {id: {nin: [$id, $prev, $next]}, frontmatter: {templateKey: {eq: "project"}, tags: {in: $tags}}}
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
  next: markdownRemark(id: {eq: $next}) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  prev: markdownRemark(id: {eq: $prev}) {
    id
    fields {
      slug
    }
    frontmatter {
      title
      thumbnail {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`

export default pageQuery;
