"use client";
import { getBubbleTeaLabels, getBubbleTeaList } from "@/api/BubbleTea";
import BubbleTeaList from "@/components/bubble-tea/BubbleTeaList";
import { iBubbleTea } from "@/model/BubbleTea";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [bubbleTeaLabels, setBubbleTeaLabels] =
    useState<Record<string, string>>();
  const [bubbleTeaList, setBubbleTeaList] = useState<
    Partial<Record<string, iBubbleTea[]>>
  >({});
  const fetchData = async () => {
    const bubbleTeaList: Partial<Record<string, iBubbleTea[]>> =
      await getBubbleTeaList();
    setBubbleTeaList(bubbleTeaList);
    const bubbleTeaLabels: Record<string, string> = await getBubbleTeaLabels();
    setBubbleTeaLabels(bubbleTeaLabels);
    console.log(bubbleTeaList);
    console.log(bubbleTeaLabels);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Grid container className="p-10">
        {bubbleTeaLabels && bubbleTeaList && (
          <BubbleTeaList data={bubbleTeaList} labels={bubbleTeaLabels} />
        )}
      </Grid>
    </main>
  );
}
