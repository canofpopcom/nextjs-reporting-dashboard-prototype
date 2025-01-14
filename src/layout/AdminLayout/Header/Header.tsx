import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Breadcrumb from '@layout/AdminLayout/Breadcrumb/Breadcrumb'
import HeaderFeaturedNav from '@layout/AdminLayout/Header/HeaderFeaturedNav'
import HeaderNotificationNav from '@layout/AdminLayout/Header/HeaderNotificationNav'
import HeaderProfileNav from '@layout/AdminLayout/Header/HeaderProfileNav'
import { Button, Container, Form } from 'react-bootstrap'
import Image from 'next/image'

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
  clientNo: number;
  clientNoSet?: (clientNo: number) => void;
}

export default function Header(props: HeaderProps) {
  const {
    toggleSidebar, toggleSidebarMd, clientNo, clientNoSet,
  } = props

  return (
    <header className="header sticky-top mb-4 p-2 border-bottom">
      <Container fluid className="header-navbar d-flex align-items-center">
        <Button variant="link" className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none" type="button" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button variant="link" className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none" type="button" onClick={toggleSidebarMd}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Link href="/" className="header-brand d-md-none text-decoration-none">
          <Image width={100} height={30} src="https://www.datocms-assets.com/94718/1677628191-logo-dark-1.svg" alt="Hotwire" />
          <span className="px-2 pr-4 font-weight-bold align-middle">Account IQ</span>
        </Link>
        <div className="header-nav d-none d-md-flex">
          <HeaderFeaturedNav />
        </div>
        <div className="header-nav ms-auto d-none">
          {' '}
          <Form.Select
            defaultValue={clientNo}
            className="d-inline-block w-auto hidden"
            aria-label="Item per page"
            onChange={(event) => {
              if (clientNoSet) {
                clientNoSet(parseInt(event.target.value, 10))
              }
            }}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
          </Form.Select>
        </div>
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </Container>
      <div className="header-divider border-top my-2 ms-n2 me-n2" />
      <Container fluid>
        <Breadcrumb />
      </Container>
    </header>
  )
}
