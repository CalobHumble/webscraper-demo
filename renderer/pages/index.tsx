import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Image } from '@nextui-org/react'


const IndexPage = () => {

  const [image, setImage] = useState<string>();

  useEffect(() => {
    const handleScreenshot = (_event, args) => setImage(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('screenshot', handleScreenshot)
  }, [])

  return (
    <main>
      {image && <Image src={`data:image/png;base64,${image}`} alt='screen shot' />}
    </main>
  )
}

export default IndexPage
