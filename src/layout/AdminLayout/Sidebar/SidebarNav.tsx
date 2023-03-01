import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBell,
  faFileLines,
  faStar,
  IconDefinition,
} from '@fortawesome/free-regular-svg-icons'
import {
  faBug,
  faCalculator,
  faChartPie,
  faChevronUp, faCode,
  faDroplet,
  faGauge,
  faLayerGroup,
  faLocationArrow,
  faPencil,
  faPuzzlePiece,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import React, {
  PropsWithChildren, useContext, useEffect, useState,
} from 'react'
import {
  Accordion, AccordionContext, Badge, Button, Nav, useAccordionButton,
} from 'react-bootstrap'
import classNames from 'classnames'
import Link from 'next/link'

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

type SidebarNavGroupToggleProps = {
  eventKey: string;
  icon: IconDefinition;
  setIsShow: (isShow: boolean) => void;
} & PropsWithChildren

const SidebarNavGroupToggle = (props: SidebarNavGroupToggleProps) => {
  // https://react-bootstrap.github.io/components/accordion/#custom-toggle-with-expansion-awareness
  const { activeEventKey } = useContext(AccordionContext)
  const {
    eventKey, icon, children, setIsShow,
  } = props

  const decoratedOnClick = useAccordionButton(eventKey)

  const isCurrentEventKey = activeEventKey === eventKey

  useEffect(() => {
    setIsShow(activeEventKey === eventKey)
  }, [activeEventKey, eventKey, setIsShow])

  return (
    <Button
      variant="link"
      type="button"
      className={classNames('rounded-0 nav-link px-3 py-2 d-flex align-items-center flex-fill w-100 shadow-none', {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
      {children}
      <div className="nav-chevron ms-auto text-end">
        <FontAwesomeIcon size="xs" icon={faChevronUp} />
      </div>
    </Button>
  )
}

type SidebarNavGroupProps = {
  toggleIcon: IconDefinition;
  toggleText: string;
} & PropsWithChildren

const SidebarNavGroup = (props: SidebarNavGroupProps) => {
  const {
    toggleIcon,
    toggleText,
    children,
  } = props

  const [isShow, setIsShow] = useState(false)

  return (
    <Accordion as="li" bsPrefix="nav-group" className={classNames({ show: isShow })}>
      <SidebarNavGroupToggle icon={toggleIcon} eventKey="0" setIsShow={setIsShow}>{toggleText}</SidebarNavGroupToggle>
      <Accordion.Collapse eventKey="0">
        <ul className="nav-group-items list-unstyled">
          {children}
        </ul>
      </Accordion.Collapse>
    </Accordion>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Dashboard
        <small className="ms-auto"><Badge bg="info" className="ms-auto">NEW</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons">
        Sample (SSR)
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </SidebarNavItem>
      <SidebarNavItem icon={faCode} href="/pokemons/client">
        Sample (CSR)
        <small className="ms-auto"><Badge bg="danger" className="ms-auto">DEMO</Badge></small>
      </SidebarNavItem>
      <SidebarNavTitle>Useful Links</SidebarNavTitle>
      <SidebarNavItem icon={faDroplet} href="https://coreui.io/demos/next-js/1.0/dark/components/colors.html">Colors</SidebarNavItem>
      <SidebarNavItem icon={faPencil} href="https://coreui.io/demos/next-js/1.0/dark/components/typography.html">Typography</SidebarNavItem>
      <SidebarNavTitle>Types of Available Components</SidebarNavTitle>

      <SidebarNavItem icon={faChartPie} href="https://coreui.io/demos/next-js/1.0/dark/plugins/charts">Charts</SidebarNavItem>

      <SidebarNavGroup toggleIcon={faFileLines} toggleText="Forms">
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/form-control">Form Control</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/select.html">Select</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/checks-radios.html">Checks and radios</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/range.html">Range</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/input-group.html">Input group</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/floating-labels.html">Floating labels</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/layout.html">Layout</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/forms/validation.html">Validation</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faStar} toggleText="Icons">
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/icons/coreui-icons-free.html">CoreUI Icons</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/icons/coreui-icons-brand.html">CoreUI Icons - Brand</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/icons/coreui-icons-flag.html">CoreUI Icons - Flag</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavGroup toggleIcon={faBell} toggleText="Notifications">
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/notifications/alerts.html">Alerts</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/notifications/badge.html">Badge</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/notifications/modals.html">Modals</SidebarNavItem>
        <SidebarNavItem href="https://coreui.io/demos/next-js/1.0/dark/components/notifications/toasts.html">Toasts</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={faCalculator} href="https://coreui.io/demos/next-js/1.0/dark/components/widgets">
        Widgets
        <small className="ms-auto"><Badge bg="info">NEW</Badge></small>
      </SidebarNavItem>

      <SidebarNavTitle>Misc</SidebarNavTitle>

      <SidebarNavGroup toggleIcon={faStar} toggleText="Pages">
        <SidebarNavItem icon={faRightToBracket} href="login">Login</SidebarNavItem>
        <SidebarNavItem icon={faAddressCard} href="register">Register</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="404.html">Error 404</SidebarNavItem>
        <SidebarNavItem icon={faBug} href="500.html">Error 500</SidebarNavItem>
      </SidebarNavGroup>

      <SidebarNavItem icon={faFileLines} href="docs.html">Docs</SidebarNavItem>
    </ul>
  )
}
