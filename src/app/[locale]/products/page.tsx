"use client"
import * as React from "react";
import Grid from "@mui/material/Grid"
import BasicTable from "@/components/BasicTable";
import axios from "axios"


export default function Products() {

    const [headers, setHeaders] = React.useState([
        {
            id: 1,
            title: "Product",
            code: "title",
            key: "title",
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

    const [data, setData] = React.useState([])


    const [perPage, setPerPage] = React.useState(10)
    const [page, setPage] = React.useState(0)

    const onPageChange = (pageValue: number) => {
        setPage(pageValue)
    }

    const onRowsPerPageChange = (value: number) => {
        setPerPage(value)
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const resp = await axios.get(`https://dummyjson.com/products?limit=10&skip=10`)
            setData(resp?.data?.products)
        } catch (e) {
            throw e;
        }

    }
    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <BasicTable
                    headers={headers}
                    data={data}
                    perPage={perPage}
                    page={page}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}>
                </BasicTable>
            </Grid>
        </Grid>
    )
}