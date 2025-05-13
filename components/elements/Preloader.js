
export default function Preloader() {
    return (
        <>

        <div className="loader-wrap">
            <div className="preloader">
                <div className="preloader-close">Preloader Close</div>
                <div id="handle-preloader" className="handle-preloader">
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                        <div className="txt-loading">
                            <span data-text-preloader="b" className="letters-loading">
                                b
                            </span>
                            <span data-text-preloader="l" className="letters-loading">
                                l
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="c" className="letters-loading">
                                c
                            </span>
                            <span data-text-preloader="k" className="letters-loading">
                                k
                            </span>
                            <span data-text-preloader="c" className="letters-loading">
                                c
                            </span>
                            <span data-text-preloader="a" className="letters-loading">
                                a
                            </span>
                            <span data-text-preloader="t" className="letters-loading">
                                t
                            </span>
                            <span data-text-preloader="s" className="letters-loading">
                                s
                            </span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        </>
    )
}
