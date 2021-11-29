import React, { useState } from 'react'

export default function BtnFilter({ className, name, click }) {

    return (
        <button
            className={className}
            onClick={click}
        >
        {name}
        </button>
    )
}