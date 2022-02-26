import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getHeadData } from '../utils/ConfigHeader'
import NavBar from '../Components/DropDown/NavBar'
const Header = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTopHeader(
        sort: {fields: createdAt, order: ASC}
        filter: {node_locale: {eq: "en-US"}}
      ) {
        nodes {
          title
          firstLevelDropdown {
            submenu:firstLevelNavItem {
              title
              secondLevelDropdown {
                submenu:secondLevelNavitems {
                  title
                  thirdLevelSubmenu {
                    submenu:navItems {
                      title 
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log("--- Data header", data)
  const { allContentfulTopHeader: { nodes: items } } = data
   const headerArray= getHeadData(items)
  return (
    <div>
      <NavBar menuItems={headerArray}/>
        <h1>Custom Header</h1>
    </div>
  )
}

export default Header