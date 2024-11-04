import React from 'react'
import PropTypes from 'prop-types';

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
    return (
        <tr>
            {
                isHeader ? (
                    <>
                        {
                            textSecondCell ? (
                                <>
                                    <th>{textFirstCell}</th>
                                    <th>{textSecondCell}</th>
                                </>
                            ) : (
                                <th colSpan="2">{textFirstCell}</th>
                            )
                        }
                    </>
                ) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )
            }
        </tr>
    )
}
