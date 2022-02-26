import { Link } from 'gatsby'
import React from 'react'

const Pagination = ({ currentPage, totalPage }) => {
    const prevPageUrl =
        currentPage === 2
            ? "/blog"
            : `/blog/${parseInt(currentPage, 10) - 1}`;
    const nextPageUrl = `/blog/${parseInt(currentPage, 10) + 1}`;
    const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPage, 10);
    const prevDisabled = parseInt(currentPage, 10) === 1;
    return (
        <ol>
            <li>
                {prevDisabled && <span>Previous page</span>}
                {!prevDisabled && (
                    <Link to={prevPageUrl}>
                        Previous page
                    </Link>
                )}
            </li>
            <li>
                Page {currentPage} of {totalPage}
            </li>
            <li>
                {nextDisabled && <span>Next page</span>}
                {!nextDisabled && (
                    <Link to={nextPageUrl}>
                        Next page
                    </Link>
                )}
            </li>
        </ol>
    )
}

export default Pagination