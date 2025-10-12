import { useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../styles/theme.config";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import "@appwrite.io/pink-icons";

function MyApp({ Component, pageProps }) {
    const [isMounted, setIsMounted] = useState(false);
    const { isDarkMode } = useDarkMode();

    const theme = isDarkMode ? {
        ...darkTheme,
        name: 'dark'
    } : {
        ...lightTheme,
        name: 'light'
    };

    useEffect(() => {
        setIsMounted(true);
        if (isDarkMode) {
            document.documentElement.classList.add('theme-dark');
        } else {
            document.documentElement.classList.remove('theme-dark');
        }
    }, [isDarkMode]);

    if (!isMounted) return null;

    return (
        <>
            <GoogleAnalytics />
            <ThemeProvider theme={theme}>
                <Head>
                    <meta name="apple-mobile-web-app-title" content="Автошина" />
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link rel="icon" href="/avtoshinaicon.ico" />
                    <link rel="apple-touch-icon" href="/apple-icon.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-96x96.png" />
                </Head>
                <GlobalStyle />
                <Layout>
                    <DefaultSeo
                        canonical={SEO.openGraph.url}
                        {...SEO}
                        additionalMetaTags={[
                            {
                                name: 'keywords',
                                content: SEO.openGraph.keywords,
                            },
                        ]}
                    />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
