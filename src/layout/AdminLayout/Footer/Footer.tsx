import React from 'react'

export default function Footer() {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        <a className="text-decoration-none" href="https://coreui.io">CoreUI </a>
        <a className="text-decoration-none" href="https://coreui.io">
          Bootstraped Example
        </a>
        {' '}
        2023
        Prototype.
      </div>
      <div className="ms-md-auto">
        Based on &nbsp;
        <a className="text-decoration-none" href="@layout/AdminLayout/AdminLayout">CoreUI UI Components with</a>
        <a className="text-decoration-none" href="https://www.datocms.com"> DatoCMS</a>
      </div>
    </footer>
  )
}
