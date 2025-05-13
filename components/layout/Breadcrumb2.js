import Link from "next/link"

export default function Breadcrumb2({ breadcrumbTitle2 }) {
    return (
        <>

        <section className="page-title centred">
            <div className="outer-container pt_120 pb_130 p_relative">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                <div className="auto-container">
                    <div className="content-box">
                        <h1 className="dark-title">{breadcrumbTitle2}</h1>
                        <ul className="bread-crumb">
                            <li><Link href="/">home</Link></li>
                            <li>{breadcrumbTitle2}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
