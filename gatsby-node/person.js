const slash = require('slash')
const path = require('path')
const { getPersonId } = require('../utils/person')

const person = path.resolve(process.cwd(), 'src/components/person.js')
const personTemplate = path.resolve(process.cwd(), 'src/components/person-page/index.js')

module.exports = async ({ graphql, boundActionCreators: { createPage } }) => {
  const result = await graphql(
    `
      {
        allContentfulPerson {
          edges {
            node {
              id
              name
              lastname
              position
              vk
              telegram
              twitter
              slack
              photo {
                file {
                  url
                }
              }
              company
              podcasts {
                title
                number
              }
            }
          }
        }
      }
    `,
  )

  const finalEdges = result.data.allContentfulPerson.edges.map(edge => {
    const newEdge = Object.assign({}, edge)
    newEdge.node.personId = getPersonId(newEdge.node.name, newEdge.node.lastname)

    return newEdge
  })

  createPage({
    path: '/person',
    component: slash(person),
    context: {
      data: finalEdges,
    },
  })

  finalEdges.forEach(({ node }, id) => {
    createPage({
      path: `/person/${node.personId}`,
      component: slash(personTemplate),
      context: {
        data: node,
        id,
      },
    })
  })
}
