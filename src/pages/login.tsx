import { GetStaticProps, NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {
  Button, Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap'

import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { deleteCookie, getCookie } from 'cookies-next'

import Image from 'next/image'
import { LoginDocument, LoginQuery } from '../../graphql/generated'
import { datocms } from '../lib/datocms'

type Props = { result: LoginQuery }

const Login: NextPage<Props> = ({ result }) => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const getRedirect = () => {
    const redirect = getCookie('redirect')
    if (redirect) {
      deleteCookie('redirect')
      return redirect.toString()
    }

    return '/'
  }

  const login = async (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setSubmitting(true)

    const res = await axios.post('api/mock/login')
    if (res.status === 200) {
      router.push(getRedirect())
    }
    setSubmitting(false)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={8}>
            <Row id="Box">
              <Col md={7} className="bg-white border p-5">
                <div className="">
                  <h1>Login</h1>
                  <p className="text-black-50">Sign in to Account IQ</p>

                  <form onSubmit={login}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faUser}
                          fixedWidth
                        />
                      </InputGroup.Text>
                      <Form.Control
                        name="username"
                        required
                        disabled={submitting}
                        placeholder="Username"
                        aria-label="Username"
                        defaultValue="Username"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon
                          icon={faLock}
                          fixedWidth
                        />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        disabled={submitting}
                        placeholder="Password"
                        aria-label="Password"
                        defaultValue="Password"
                      />
                    </InputGroup>

                    <Row>
                      <Col xs={6}>
                        <Button className="px-4" variant="primary" type="submit" disabled={submitting}>Login</Button>
                      </Col>
                      <Col xs={6} className="text-end">
                        <Button className="px-0" variant="link" type="submit">
                          Forgot
                          password?
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              {result.allLogins.map((LoginDisp) => (
                <Col key={LoginDisp.id} md={5} className="bg-primary text-white d-flex align-items-center justify-content-center p-5" style={{ backgroundColor: LoginDisp?.brandColour?.hex || 'grey' }}>
                  <div key={LoginDisp.id} className="text-center">
                    <Image width={75} height={75} src={LoginDisp?.brandLogo?.url || ''} alt={LoginDisp?.brandLogo?.alt || 'Honeywell'} />
                    <h3>{LoginDisp?.loginTitle || ''}</h3>
                    {LoginDisp?.loginIntro}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // retrieving the list of all articles
  const result = await datocms(LoginDocument)

  return {
    props: { result },
    revalidate: 60, // In second
  }
}

export default Login
