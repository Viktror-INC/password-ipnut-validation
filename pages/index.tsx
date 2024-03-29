import Head from "next/head";
import { LinearProgress, LinearProgressProps, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import passwordValidation from "src/utils/passwordValidation";

const defaultSectionsLength = {
  color: "primary" as LinearProgressProps["color"],
  length: 0,
};

export default function Home() {
  const [password, setPassword] = useState("");
  const [sectionsLength, setSectionsLength] = useState(defaultSectionsLength);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const passwordSetData = {
    shortPass: () => setSectionsLength({ color: "red", length: 100 }),
    easyPass: () => setSectionsLength({ color: "red", length: 30 }),
    mediumPass: () => setSectionsLength({ color: "yellow", length: 60 }),
    hardPass: () => setSectionsLength({ color: "green", length: 100 }),
    defaultPass: () => setSectionsLength(defaultSectionsLength),
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-[300px] mt-5 ml-5 flex flex-col gap-y-2">
          <TextField
            className="w-full"
            label="Password"
            value={password}
            variant="outlined"
            onChange={(event) => {
              setPassword(event.target.value);
              passwordValidation({
                password: event.target.value,
                passwordSetData,
              });
            }}
            helperText={errorMessage}
          />
          <LinearProgress
            className="bg-gray-300"
            color={sectionsLength.color}
            variant="determinate"
            value={sectionsLength.length}
          />
        </div>
      </main>
    </>
  );
}
