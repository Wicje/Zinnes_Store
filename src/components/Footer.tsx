import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>JOIN OUR NEWSLETTER</h3>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="SIGN UP WITH YOUR EMAIL"
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>CUSTOMER CARE</h4>
          <p>Shipping & Returns</p>
          <p>Order Tracking</p>
          <p>About Us</p>
        </div>

        <div>
          <h4>SHOP</h4>
          <p>New Arrivals</p>
          <p>All Collections</p>
        </div>

        <div>
          <h4>CONTACT</h4>
          <p>Email Us</p>
          <p>Social Media</p>
        </div>
      </div>

      <div className="footer-brand">
        TOTEME
      </div>
    </footer>
  )
}
