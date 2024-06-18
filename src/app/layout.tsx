import GlobalLocker from "@/packages/mini-app/components/global-locker/GlobalLocker";
import TelegramThemeProvider from "@/themes/TelegramThemeProvider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import classNames from "classnames/bind";
import { Black_Ops_One, Roboto } from "next/font/google";
import Script from "next/script";
import Initial from "../components/Initial";
import IntlProvider from "../external/IntlProvider";
import { messages } from "../locale";
import "../styles/globals.scss";
import flattenMessages from "../utils/helpers";
import styles from "./Layout.module.scss";
import VerificationThemeProvider from "./providers/VerificationProvider";

const cn = classNames.bind(styles);

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof (typeof messages)["en"];
    }
  }
  type Nullable<T> = T | null | undefined;
  type Coords<T = number> = {
    lat: T;
    lng: T;
    addressName?: string;
  };
}

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const blackOpsOne = Black_Ops_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-black-ops-one",
});

export const metadata = {
  title: "MemeProf",
  description: "Developed by",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${blackOpsOne.variable}`}>
        <VerificationThemeProvider>
          <TelegramThemeProvider>
            <IntlProvider
              locale="en"
              defaultLocale="en"
              messages={flattenMessages(messages.en)}
            >
              <Theme>
                <main className={cn("root")}>
                  <div className={cn("root__pattern")}>{children}</div>
                </main>
              </Theme>
            </IntlProvider>
            <Script
              src="https://telegram.org/js/telegram-web-app.js"
              strategy="beforeInteractive"
            />
            <Initial />
            <GlobalLocker />
          </TelegramThemeProvider>
        </VerificationThemeProvider>
      </body>
    </html>
  );
}
