import React from 'react'

export default function ComFooter() {
  return (
    <footer className='d-flex flex-column p-3 p-md-4 gap-3 gap-md-0 flex-md-row justify-content-md-between footer-dashboard'>
      <div>
        <span className="fw-normal fontSize-16">2020 BooWallet. All right reserved.</span>
      </div>
      <div className="d-flex flex-row gap-5">
        <span className="fw-light fontSize-16">+62 5637 8882 9901</span>
        <span className="fw-light fontSize-16">contact@booWallet.com</span>
      </div>
    </footer>
  )
}
