export function ConanSignUp() {
  return (
    <section
      id="signUp"
      className="sign-up py-5 bg-blue white text-center"
      style={{background: 'linear-gradient(265.35deg, #2C4257 51.72%, #7BA7D3 98.82%)'}}
    >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="h2 white d-flex justify-content-center" id="signUpTitle">
                        <div className="position-relative"><img src="/letter.svg" alt="Sign Up"
                                                            className="position-absolute letter lazy"/></div>
                        <span>SIGN ME UP FOR RELEASE UPDATES</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
