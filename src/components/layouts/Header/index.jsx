import Image from '@/components/shared/Image'
import Search from '@/components/shared/Search'
import AppTypography from '@/components/shared/Typography'

import { HEADER_MENU } from '@/utils/constant'
import { Fragment } from 'react'

const Header = () => {
    const renderNavMenus = (menu, index) => {
        return (
            <AppTypography
                key={index}
                nodeType="option"
                variant="navbar-options"
            >
                {menu}
            </AppTypography>
        )
    }

    return (
        <Fragment>
            <header>
                <div className="flex"></div>
                {/* <div className="container mx-auto flex h-24  items-center justify-between">
                    <div className="flex items-center gap-x-5">
                        <Image
                            src="https://res.cloudinary.com/dczzp2imu/image/upload/engage4more/icons/engage4more-logo.png"
                            alt="Vercel Logo"
                            style={{ objectFit: 'contain' }}
                            className="dark:invert"
                            width={168}
                            height={40}
                            priority
                        />
                        <nav className="ml-2 flex items-center gap-x-8">
                            {HEADER_MENU.map(renderNavMenus)}
                        </nav>
                    </div>
                </div> */}
            </header>
            <nav>
                <Search />
            </nav>
        </Fragment>
    )
}

export default Header
