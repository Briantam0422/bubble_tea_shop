"use client";
import { getBubbleTeaLabels, getBubbleTeaList } from "@/api/BubbleTea";
import BubbleTeaList from "@/components/bubble-tea/BubbleTeaList";
import Loading from "@/components/Loading";
import ShoppingCartFloatingButton from "@/components/shopping-cart/ShoppingCartFloatingButton";
import {
  setBubbleTeaGroupByLabels,
  setBubbleTeaLabels,
} from "@/store/bubble-tea/bubbleTeaListSlice";
import { useAppSelector, useAppStore } from "@/store/hooks";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const store = useAppStore();
  const bubbleTeaState = useAppSelector((state) => state.bubbleTea);
  const queryBubbleTeaList = useQuery({
    queryKey: ["bubble-tea"],
    queryFn: async () => {
      const data = await getBubbleTeaList();
      store.dispatch(setBubbleTeaGroupByLabels(data));
      return data;
    },
  });

  const queryBubbleTeaLabels = useQuery({
    queryKey: ["bubble-tea-labels"],
    queryFn: async () => {
      const data = await getBubbleTeaLabels();
      store.dispatch(setBubbleTeaLabels(data));
      return data;
    },
  });
  if (queryBubbleTeaList.isLoading || queryBubbleTeaLabels.isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <ToastContainer position="top-center" />
      <div className="relative">
        <Grid container className="p-10">
          {bubbleTeaState &&
            bubbleTeaState.bubbleTeaLabels &&
            bubbleTeaState.bubbleTeaGroupByLabels && (
              <BubbleTeaList
                data={bubbleTeaState.bubbleTeaGroupByLabels}
                labels={bubbleTeaState.bubbleTeaLabels}
              />
            )}
        </Grid>
        <ShoppingCartFloatingButton />
      </div>
    </main>
  );
}
