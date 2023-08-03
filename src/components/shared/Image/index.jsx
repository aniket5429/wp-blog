import Image from 'next/image'

const AppImage = props => {
    return (
        <Image
            src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/site-logo.svg"
            className="dark:invert"
            alt="Vercel Logo"
            priority
            {...props}
        />
    )
}

export default AppImage
