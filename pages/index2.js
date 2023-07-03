import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";

export default function Home() {
  const [table, setTable] = useState(Array(5).fill(Array(5).fill("")));
  const [x, setX] = useState(true);

  const handleClick = useCallback(
    (i, j) => {
      setTable((prev) => {
        let cache = JSON.parse(JSON.stringify(prev));
        cache[i][j] = x ? "X" : "O";
        return cache;
      });
      setX((prev) => !prev);
    },
    [x]
  );

  const isWinner = useCallback(
    (player) => {
      for (let row of table) {
        let win = row.every((item) => item === player);
        if (win) {
          window.alert(`${player} Won`);
        }
      }
      for (let j = 0; j <= 4; j++) {
        // let col = table.map(row => row[j])
        let arr = [];
        for (let row of table) {
          arr.push(row[j]);
        }
        if (arr.every((item) => item === player)) {
          window.alert(`${player} Won`);
        }
      }
      let diag = [];
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (i === j) {
            diag.push(table[i][j]);
          }
        }
      }
      if (diag.every((item) => item === player)) {
        window.alert(`${player} Won`);
      }
      diag = [];
      for (let i = 0; i < 5; i++) {
        for (let j = 4; j >= 0; j--) {
          if (i === 4 - j) {
            diag.push(table[i][j]);
          }
        }
      }
      if (diag.every((item) => item === player)) {
        window.alert(`${player} Won`);
      }
    },
    [table]
  );

  useEffect(() => {
    isWinner("X");
    isWinner("O");
  }, [isWinner]);

  return (
    <div className="container max-w-fit ms-48 mt-10">
      {table.map((arr, i) => {
        return (
          <div key={i} className="grid grid-cols-5 gap-1 my-1">
            {arr.map((item, j) => {
              return (
                <Box
                  key={j}
                  onClick={() => handleClick(i, j)}
                  sx={{
                    width: 70,
                    height: 70,
                    backgroundColor: "primary.main",
                  }}
                >
                  {item}
                </Box>
              );
            })}
          </div>
        );
      })}
      <div className="flex justify-center items-center">
        <Button
          variant="contained"
          color="error"
          onClick={() => setTable(Array(5).fill(Array(5).fill("")))}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
