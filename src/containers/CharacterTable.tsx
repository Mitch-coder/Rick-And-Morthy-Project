import React, { useMemo, useState } from "react";
import {Column, useRowSelect, useTable,useGlobalFilter} from "react-table"
import { ICharacter } from "../models/character";
import { getFavoriteCharacters, toogleFavoriteCharacter } from "../utils/toggleFavoriteCharacter";
import { FavoriteButton } from "./FavoriteButton";
import { GlobalFilter } from "./GlobalFilter";
import './imgCharacter.css'
import TableStyle from 'react-bootstrap/Table'

type Props={
    data: ICharacter[],
}
const columns:Column<ICharacter>[]= [
    {
        Header:"#",
        accessor:"id",
    },
    {
        Header:"Name",
        accessor:"name",
    },
    {
        Header:"Status",
        accessor:"status",
    },
    {
        Header:"Species",
        accessor:"species",
    },
    // {
    //     Header:"Type",
    //     accessor:"type",
    // },
    {
        Header:"Gender",
        accessor:"gender",
    },
    {
        Header:"Origin",
        //@ts-ignore
        accessor:"origin.name",
    },
    {
        Header:"Image",
        accessor:"image",
        Cell:({value}) =>(
            <img src={value}
            width={120} id="imgContainer"/>
        )
    },
    {
        Header:"Created",
        accessor:"created",
    },
];

function Table( props:Props){
    const favoriteArray = getFavoriteCharacters() as number[]

    const data = useMemo(()=>props.data,[props.data])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state,
        setGlobalFilter
    } = useTable({ columns, data },
        useGlobalFilter,useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns)=>{
                return[
                    ...columns,
                    {
                        id:'selection',
                        Header:"AddFavorites",
                        Cell:({row}) =>(
                            
                            <FavoriteButton {...row.getToggleRowSelectedProps()} />
                        )
                    },
             
                ]
            })
        }
        )

        const {globalFilter} = state

    const firstPageRows = rows.slice(0,20)

    return(
    <>
    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
    <TableStyle variant="dark" responsive>
        <thead> {headerGroups.map((headerGroup)=>
            (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    { headerGroup.headers
                    .map((column)=>(
                         <th {...column.getHeaderProps()} scope="col">
                           {column.render("Header")}
                         </th>
                        ))}
                </tr>
            )
            )}
        </thead> 
        <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row)=>{
                {prepareRow(row)}
                return (
                           <tr {...row.getRowProps()}>
                        {row.cells.map((cell)=>{
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                        }
                        )}
                    </tr>
                )
            }
            )}
        </tbody>
    </TableStyle>
    {/* <pre>
        <code>
            {JSON.stringify(
                {
                    selectedFlatRows:selectedFlatRows.map((row) =>toogleFavoriteCharacter( row.original.id))
                }
            )
            }
        </code>
    </pre> */}
    </>
    )
}

export  default Table