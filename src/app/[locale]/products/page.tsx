"use client"
import * as React from "react";
import Grid from "@mui/material/Grid"
import BasicTable from "@/components/BasicTable";


export default function Products() {

    const [headers, setHeaders] = React.useState([
        {
            id: 1,
            title: "Product",
            code: "product",
            key: "product",
            show: true
        },
        {
            id: 2,
            title: "Description",
            code: "description",
            key: "description",
            show: true
        },
        {
            id: 3,
            title: "Category",
            code: "category",
            key: "category",
            show: true
        },
        {
            title: "Price",
            code: "price",
            key: "price",
            show: true
        }
    ])


    const [data, setData] = React.useState([{
        id: 1,
        product: "product 1",
        description: "Description 1",
        category: "Category 1",
        price: 10
    }, {
        id: 2,
        product: "product 2",
        description: "Description 2",
        category: "Category 1",
        price: 13
    }, {
        id: 3,
        product: "product 3",
        description: "Description 3",
        category: "Category 2",
        price: 12
    },
    {
        id: 4,
        product: "product 4",
        description: "Description 4",
        category: "Category 1",
        price: 13
    }, {
        id: 5,
        product: "product 5",
        description: "Description 5",
        category: "Category 5",
        price: 12
    },
    {
        id: 6,
        product: "product 6",
        description: "Description 6",
        category: "Category 6",
        price: 13
    }, {
        id: 7,
        product: "product 7",
        description: "Description 7",
        category: "Category 2",
        price: 12
    }, {
        id: 8,
        product: "product 8",
        description: "Description 8",
        category: "Category 2",
        price: 12
    }, {
        id: 9,
        product: "product 9",
        description: "Description 9",
        category: "Category 2",
        price: 12
    }, {
        id: 10,
        product: "product 10",
        description: "Description 10",
        category: "Category 2",
        price: 12
    }, {
        id: 11,
        product: "product 11",
        description: "Description 11",
        category: "Category 2",
        price: 12
    }])

    const [perPage, setPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)

    const onPageChange = (pageValue: number) => {
        setPage(pageValue)
    }

    const onRowsPerPageChange = (value: number) => {
        setPerPage(value)
    }
    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <BasicTable headers={headers} data={data} perPage={perPage} page={page} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange}></BasicTable>
            </Grid>
        </Grid>
    )
}