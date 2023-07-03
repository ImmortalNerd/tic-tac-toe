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
        let cache = JSON.parse(JSON.stringify(prev)); //deep copy
        cache[i][j] = x ? "X" : "O";
        return cache;
      });
      setX((prev) => !prev);
    },
    [x]
  );

  const winnerCount = 3;

  const isWinner = useCallback(
    (player) => {
      let directions = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
      ];

      for (let direction of directions) {
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (table[i][j] === player) {
              let isWon = true;
              for (let m = 0; m < winnerCount; m++) {
                if (
                  (table?.[(i + m) * direction[0]]?.[(j + m) * direction[1]] ??
                    1) !== player
                ) {
                  isWon = false;
                }
              }
              if (isWon) console.log(`Player ${player} won`);
            }
          }
        }
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
