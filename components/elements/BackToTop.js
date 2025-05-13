
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (

                <div className="scroll-to-top">
                    <a className="scroll-to-target" href="#top">
                        <span className="fal fa-long-arrow-up"></span>
                    </a>
                </div>
            )}
        </>
    )
}