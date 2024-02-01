export default function () {
    return (
        <div className="vh-100 gradient-custom">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-9 col-md-9 col-lg-7 col-xl-6">
                            <div className="carda">
                                <div className="card-body p-3">
                                    <h3 className="text-center mb-4 ">Chat</h3>
                                    <form>
                                        <div className=" form-outline mb-4">
                                            <input type="text" className="some2 " name="name" id="name" />
                                        </div>
                                        <div className="some d-flex justify-content-center">
                                            <input type="button" className="some-btn" name="submit" id="submit" value="Continue"  />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="footer-l">
                                © russek66@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}