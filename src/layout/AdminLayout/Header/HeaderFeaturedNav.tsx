import Link from 'next/link'
import { Nav } from 'react-bootstrap'

export default function HeaderFeaturedNav() {
  return (
    <Nav>
      <Nav.Item>
        <Link href="/" passHref legacyBehavior>
          <Nav.Link className="p-2 fw-semibold">Account IQ</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  )
}
