import API from "./Components/HomePage";
export const metadata = {
    title: 'API Docs of BSE - Store || Free and Unlimited Requests',
    description: 'Unlock boundless possibilities with API Docs on BSE - Store, your go-to resource for free and unlimited requests. Elevate your development experience with comprehensive documentation, seamlessly integrating diverse APIs into your projects. Join our community and turn your ideas into reality today.',
    openGraph: {
      title: 'API Docs of BSE - Store || Free and Unlimited Requests',
      description: 'Unlock boundless possibilities with API Docs on BSE - Store, your go-to resource for free and unlimited requests. Elevate your development experience with comprehensive documentation, seamlessly integrating diverse APIs into your projects. Join our community and turn your ideas into reality today.',
      images: 'https://i.postimg.cc/SK6HC0YG/Screenshot-138.png',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'API Docs of BSE - Store || Free and Unlimited Requests',
      description: 'Unlock boundless possibilities with API Docs on BSE - Store, your go-to resource for free and unlimited requests. Elevate your development experience with comprehensive documentation, seamlessly integrating diverse APIs into your projects. Join our community and turn your ideas into reality today.',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: ['https://i.postimg.cc/SK6HC0YG/Screenshot-138.png'],
    }
  }
export default function APIHome(){
    return(
        <>
        <API/>
        </>
    )
}