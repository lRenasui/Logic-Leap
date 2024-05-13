import CardIcon from "../components/card-icon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payment.css";

export default function Payment() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Section for the product details */}
          <div className="col-md-6">
            <div className="bg-white">
              <div className="product-header">
                <img src="/produto.png" alt="Logo" height="70" />
                <span className="product-title">Creativortex</span>
              </div>
              <p className="product-info">Up to 100 users - Initial Payment</p>
              <div className="d-flex justify-content-between mb-2">
                    <p>€649.99 a year</p>
                    <p className="product-price">€649.99</p>
                </div>
              <hr></hr>
              <div className="d-flex justify-content-between mb-2">
                    <p>Total</p>
                    <p>€649.99</p>
                </div>
            </div>
          </div>


          
          {/* Section for the payment form */}
          <div className="col-md-6">
            <div className="bg-white">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="antonio@empresa.pt"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardholder" className="form-label">
                    Cardholder name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardholder"
                    placeholder="António José Gomes Mendes"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardnumber" className="form-label">
                    Card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardnumber"
                    placeholder="4242 4242 4242 4242"
                  />
                </div>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="expiry" className="form-label">
                      Expiration date
                    </label>
                    <input type="date" className="form-control" id="expiry" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="cvc" className="form-label">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvc"
                      placeholder="321"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country">
                      <option selected>Portugal</option>
                      {/* Additional country options */}
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="postal-code" className="form-label">
                      Postal code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="postal-code"
                      placeholder="1234-123"
                    />
                  </div>
                </div>
                <br></br>
                <button type="submit" className="btn-primary">
                  Finish payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
