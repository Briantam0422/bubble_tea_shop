"use client";
import { getBubbleTeaList } from "@/api/BubbleTea";
import BubbleTeaList from "@/components/bubble-tea/BubbleTeaList";
import SearchBar from "@/components/bubble-tea/SearchBar";
import { iBubbleTea } from "@/model/BubbleTea";
import { Divider, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  const [bubbleTeaList, setBubbleTeaList] = useState<iBubbleTea[]>([]);
  const fetchData = async () => {
    const bubbleTeaList: iBubbleTea[] = await getBubbleTeaList();
    setBubbleTeaList(bubbleTeaList);
    console.log(bubbleTeaList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Grid container className="p-10 md:p-20">
        <SearchBar />
      </Grid>
      <Divider />
      <Grid container className="p-10 md:p-20">
        <BubbleTeaList data={bubbleTeaList} />
      </Grid>
    </main>
  );
}
