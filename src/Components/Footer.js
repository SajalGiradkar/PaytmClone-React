import React from 'react'

import './Footer.css';
const Footer = () => {
    return (
        <div className='Footer-container'>
            <div className="footer">
                <div className="footer-first-div">
                    <div className='download-icons'>
                        <span>Download Paytm App <br /> to Pay from anywhere</span>
                        <img src={'https://assetscdn1.paytm.com/frontendcommonweb/71229188.svg'} alt="" />
                        <img src={'https://assetscdn1.paytm.com/frontendcommonweb/33d9d7f1.svg'} alt="" />
                    </div>
                    <div className="social-icons">
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <div className="footer-links">
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Investor Relations
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    More About Paytm
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Company
                </div>
                <div className="links">
                    Career
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Recharge & Pay Bills
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Pay Loan EMI, Insurance Premiums & Education Fee
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Book Travel & Entertainment
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Investments & Miscellaneous
                    plus
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Insurance (Powered by Paytm Insurance Broking Private Limited)
                    plus
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Loans and Credit Cards
                </div>
                <div className="links">
                    <i className="fas fa-plus"></i>
                    Financial Tools & Calculators
                </div>
            </div>
        </div>
    )
}

export default Footer