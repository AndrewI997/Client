import { Page } from "@/types/page"
import { Category } from "@/types/cetegory"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

interface Props {
    pageProps: {
        pages?: Page[]
        categories: Category[]
    }
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({
    children,
    pageProps: { categories = [], ...pageProps },
}) => {
    return (
        <>
            <Navbar />
            <main className="fit">{children}</main>
            <Footer />
        </>
    )
}