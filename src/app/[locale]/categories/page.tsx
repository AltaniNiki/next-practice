"use client"

import * as React from "react";

import { usePage } from "@/context/PageContext";

export default function Categories() {

    const { setCurrentPage, currentPage } = usePage();

    React.useEffect(() => {
        setCurrentPage('Categories')
    }, [])
    return (
        <div>
            Categories
        </div>
    )
}