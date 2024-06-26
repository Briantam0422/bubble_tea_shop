import { iBubbleTea } from "@/model/BubbleTea";
import { Alert, Grid } from "@mui/material";
import BubbleTeaListGroup from "./BubbleTeaListGroup";

type BubbleTeaListType = {
  data: Partial<Record<string, iBubbleTea[]>>;
  labels: Record<string, string>;
};

export default function BubbleTeaList({ data, labels }: BubbleTeaListType) {
  return (
    <Grid container spacing={2} rowSpacing={2}>
      {data && Object.keys(data).length > 0 ? (
        Object.keys(data).map(function (key: string) {
          if (data[key] != undefined) {
            const label: string = labels[key];
            const items = data[key];
            return (
              <>
                {items != undefined && (
                  <Grid key={key} item xs={12}>
                    <BubbleTeaListGroup items={items} label={label} />
                  </Grid>
                )}
              </>
            );
          }
        })
      ) : (
        <div className="p-10">
          <Alert className="w-full" variant="outlined" severity="info">
            Oh, Sorry! Bubble tea not found. Please try another one :)
          </Alert>
        </div>
      )}
    </Grid>
  );
}
