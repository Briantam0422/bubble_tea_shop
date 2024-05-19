"use client";
import { getBubbleTeaLabels, getBubbleTeaList } from "@/api/BubbleTea";
import BubbleTeaList from "@/components/bubble-tea/BubbleTeaList";
import Loading from "@/components/Loading";
import { iBubbleTea } from "@/model/BubbleTea";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
  const [bubbleTeaLabels, setBubbleTeaLabels] =
    useState<Record<string, string>>();
  const [bubbleTeaList, setBubbleTeaList] = useState<
    Partial<Record<string, iBubbleTea[]>>
  >({});

  const queryBubbleTeaList = useQuery({
    queryKey: ["bubble-tea"],
    queryFn: async () => {
      const data = await getBubbleTeaList();
      setBubbleTeaList(data);
      return data;
    },
  });

  const queryBubbleTeaLabels = useQuery({
    queryKey: ["bubble-tea-labels"],
    queryFn: async () => {
      const data = await getBubbleTeaLabels();
      setBubbleTeaLabels(data);
      return data;
    },
  });
  if (queryBubbleTeaList.isLoading || queryBubbleTeaLabels.isLoading) {
    return <Loading />;
  }

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
