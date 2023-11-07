import { useState, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './global.css';
import { NextUIProvider } from '@nextui-org/system';
import { Button, Input, Link, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { Camera } from '@phosphor-icons/react';
 
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [url, setUrl] = useState<string>();
  const sendRequest = () => {
    global.ipcRenderer.send('capture', url)
  }
 
  return (
    <html className='dark bg-background'>
      <body>
        <NextUIProvider>
          <Navbar isBordered>
            <NavbarBrand>
              <Link href="#" color='foreground'>Demo Webscraper</Link>
            </NavbarBrand>
            <NavbarContent>
              <Input 
                value={url}
                onValueChange={setUrl}
                placeholder='URL of webpage'
                size='sm'
              />
              <Button size='lg' onClick={sendRequest}> Capture</Button>
            </NavbarContent>
          </Navbar>
          <Component {...pageProps} />
        </NextUIProvider>
      </body>
    </html>
  );
}