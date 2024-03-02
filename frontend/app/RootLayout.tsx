"use client";
import "./globals.css";
import Hero from "./ui/common/hero";
import { archivo } from "./ui/common/fonts";
import Footer from "./ui/common/footer";
import AppBar from "./ui/common/app-bar/app-bar";
import { ReactNode, useState, createContext } from "react";
import ContactSection from "./ui/contact/ContactSection";

const bodyClasses =
  "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-400";

const ThemeContext = createContext<null | string>(null);

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("");
    } else {
      setTheme("dark");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <html lang="pl" className={`scroll-smooth ${theme}`}>
        <body className={`${archivo.className} ${bodyClasses}`}>
          <AppBar toggleTheme={toggleTheme} />
          <Hero />
          <main className="text-center">{children}</main>
          <ContactSection />
          <Footer />
        </body>
      </html>
    </ThemeContext.Provider>
  );
}

export default RootLayout;
