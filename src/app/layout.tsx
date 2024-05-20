import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import MaterialUiProvider from "@/providers/MaterialUiProvider";
import TanStackQueryProvider from "@/providers/TanStackQueryProvider";
import ReduxStoreProvider from "@/providers/ReduxStoreProvider";

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Bubble Tea Shop",
  description: "Choose your favorite bubble tea!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackQueryProvider>
          <ReduxStoreProvider>
            <MaterialUiProvider>{children}</MaterialUiProvider>
          </ReduxStoreProvider>
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
