import { UserProvider } from "./context/usercontext";
import "./globals.css";
export const metadata = {
  title: "TempLeah",
  description: "Created by Leah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
