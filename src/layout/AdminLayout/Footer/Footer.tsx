import React from 'react'

export default function Footer() {
  return (
    <footer className="footer flex-column flex-md-row border-top d-flex align-items-center justify-content-between px-4 py-2">
      <div>
        Bootstraped WIP Example
        {' '}
        2023 -
        Prototype.
      </div>
      <div className="ms-md-auto">
        Uses :  &nbsp;
        <a className="text-decoration-none" href="@layout/AdminLayout/AdminLayout">CoreUI UI Components | </a>
        <a className="text-decoration-none" href="https://www.datocms.com">With DatoCMS Data - 30-60 Sec Refresh </a>
      </div>
    </footer>
  )
}
