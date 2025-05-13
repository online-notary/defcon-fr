import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>

            <section className="page-title" style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title">
                            <h1>{breadcrumbTitle}</h1>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}
