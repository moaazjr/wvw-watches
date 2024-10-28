import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./login/useUser";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
