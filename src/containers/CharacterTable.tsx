import { useEffect, useMemo, useState } from "react";
import {
  Column,
  useTable,
  useGlobalFilter,
} from "react-table";
import { ICharacter } from "../models/character";
import {
  getFavoriteCharacters,
  toogleFavoriteCharacter,
} from "../utils/toggleFavoriteCharacter";
// import { GlobalFilter } from "./GlobalFilter";
import "./imgCharacter.css";
import TableStyle from "react-bootstrap/Table";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Button } from "react-bootstrap";

type Props = {
  data: ICharacter[];
};

const FavoriteButton = ({ row }) => {
  const [isLike, setIsLike] = useState(false);
  const data = row.original as ICharacter;

  useEffect(() => {
    const favoriteCharacters = getFavoriteCharacters() as number[];

    const isFavorite = !favoriteCharacters.every((id) => id !== data.id);

    setIsLike(isFavorite);
  }, []);

  const Icon = isLike ? MdFavorite : MdFavoriteBorder;

  return (
    <Button
      variant="btn btn-dark"
      size="sm"
      id="btn-like"
      onClick={() => {
        toogleFavoriteCharacter(data.id);

        setIsLike(!isLike);

        localStorage.setItem(`like-${data.id}`, JSON.stringify(!isLike));
      }}
    >
      <Icon size={"32px"}></Icon>
    </Button>
  );
};

function CharacterTable(props: Props) {
  const data = useMemo(() => props.data, [props.data]);

  const columns: Column<ICharacter>[] = [
    {
      Header: "#",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Species",
      accessor: "species",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Origin",
      //@ts-ignore
      accessor: "origin.name",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: ({ value }) => <img src={value} width={120} id="imgContainer" />,
    },
    {
      Header: "Created",
      accessor: "created",
    },
    {
      id: "selection",
      Header: "AddFavorites",
      Cell: FavoriteButton,
    },
  ];

  const {
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<ICharacter>(
    {
      columns,
      data,
    },
    useGlobalFilter
  );

  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <TableStyle variant="dark" responsive>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} scope="col">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            {
              prepareRow(row);
            }
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableStyle>
    </>
  );
}

export default CharacterTable;
