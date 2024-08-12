# Gatsby

A static site generator with super powers.

## Queries
* Page Queries
* * Can be dynamic with variables
* * Only be run on a top level page

Example: Filtering - Wes Bos's pizza page
Name could be anything really.

Exported from the page, Gatsby will get the data and pass it to the page component.

Name dooesn't matter
Example taken from a dynamically generated page.
The slug is passed in from the context object.

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }



* Static Queries
* * Can not be dynamic, no variables passed in
* * Can be run anywhere



## Gatsby Image
Plugin to handle all the hard and/or tedious things with images on the web.
* Compression
* File Type
* Sourceset/Picture
* Ratio
* Resize
* Lazy Load
* Lazy Load Thumbnail
