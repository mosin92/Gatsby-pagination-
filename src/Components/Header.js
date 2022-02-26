import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
const Header = () => {
    const { languages, originalPath } = useI18next();
    return (
        <div>
            <h1> Header Title </h1>
            <ul>
                {
                    languages.map((item, i) => (
                        <li key={item}>
                            <Link to={originalPath} language={item}>
                                {item}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Header