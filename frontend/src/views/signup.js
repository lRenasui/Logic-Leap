import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
    return(
           <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-left"><strong>Sign up</strong></h3>
                            <p className="text-left">Already have an account? <a href="#">Login</a></p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="firstName">First name</label>
                                        <input type="text" className="form-control mr-3" id="firstName" placeholder="António" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="Mendes" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="antoniomendes@empresa.pt" />
                                    <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="********" />
                                </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="********" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="country">Country</label>
                                        <select id="country" className="form-control">
                                            <option value="United States">Estados Unidos</option>
                                            <option value="United Kingdom">Inglaterra</option>
                                            <option value="Canada">Canadá</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Germany">Alemanha</option>
                                            <option value="France">França</option>
                                            <option value="Italy">Itália</option>
                                            <option value="Spain">Espanha</option>
                                            <option value="Brazil">Brasil</option>
                                            <option value="China">China</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japão</option>
                                            <option value="Russia">Russia</option>
                                            <option selected>Portugal</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="phoneNumber">Phone number</label>
                                        <input type="text" className="form-control" id="phoneNumber" placeholder="+351 999999999" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="role" id="business" value="business" defaultChecked />
                                        <label className="form-check-label" htmlFor="business">Business</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="role" id="manager" value="manager" />
                                        <label className="form-check-label" htmlFor="manager">Manager</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="businessName">Business’ name</label>
                                    <input type="text" className="form-control" id="businessName" placeholder="Inteligência Lda." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Business’ website</label>
                                    <input type="text" className="form-control" id="website" placeholder="inteligencialda.pt" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mt-1">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

