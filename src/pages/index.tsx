import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import { AdminLayout } from '@layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button, ButtonGroup, Card, Dropdown, ProgressBar,
} from 'react-bootstrap'
import { Bar, Line } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Image as DatoImage } from 'react-datocms'
/* Get Graph */
import { ClientsDocument, ClientsQuery } from '../../graphql/generated'
import { datocms } from '../lib/datocms'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
type Props = { result: ClientsQuery }

const Home: NextPage<Props> = ({ result }) => (

  <AdminLayout>
    <div className="row mt-2 mb-4 pt-6">
      <div className="col-sm-10 col-lg-9 mb-8 px-4">
        <h1 className="fw-semibold mb-4 text-uppercase">
          WELCOME TO THE
          <br />
          {result.allClients[0]?.clientName || ''}
          <span className="fw-normal"> ACCOUNT IQ </span>
          HUB
        </h1>
        <div className="row" dangerouslySetInnerHTML={{ __html: result.allClients[0]?.clientIntroSimple || '' }} />
      </div>
      <div className="col-sm-6 col-lg-3 mb-8 pt-2 pb-2">
        <div key={result.allClients[0]?.id}>
          {result.allClients[0]?.clientLogo?.responsiveImage
          && <DatoImage data={result.allClients[0].clientLogo.responsiveImage} />}
        </div>
      </div>
    </div>

    <div className="row">

      <div className="col-sm-6 col-lg-3">

        <Card bg="primary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                26K
                <span className="fs-6 ms-2 fw-normal">
                  (-12.4%
                  <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                  )
                </span>
              </div>
              <div>Data Point</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart1"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [65, 59, 84, 84, 51, 55, 40],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="info" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                $6.200
                <span className="fs-6 ms-2 fw-normal">
                  (40.9%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Data Point</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart2"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 39,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [1, 18, 9, 17, 34, 22, 11],
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="warning" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                2.49%
                <span className="fs-6 ms-2 fw-normal">
                  (84.7%
                  <FontAwesomeIcon icon={faArrowUp} fixedWidth />
                  )
                </span>
              </div>
              <div>Conversion Rate</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart3"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Line
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                }],
              }}
            />
          </div>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="danger" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                44K
                <span className="fs-6 ms-2 fw-normal">
                  (-23.6%
                  <FontAwesomeIcon icon={faArrowDown} fixedWidth />
                  )
                </span>
              </div>
              <div>Sessions</div>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-white shadow-none p-0"
                id="dropdown-chart4"
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
          <div className="mt-3 mx-3" style={{ height: '70px' }}>
            <Bar
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                  barPercentage: 0.6,
                }],
              }}
            />
          </div>
        </Card>
      </div>
    </div>

    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0">Traffic</h4>
            <div className="small text-black-50">January - March 2023</div>
          </div>
          <div className="d-none d-md-block">
            <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
              <input
                className="btn-check"
                id="option1"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option1">Day</label>
              <input
                className="btn-check"
                id="option2"
                type="radio"
                name="options"
                autoComplete="off"
                defaultChecked
              />
              <label
                className="btn btn-outline-secondary active"
                htmlFor="option2"
              >
                Month
              </label>
              <input
                className="btn-check"
                id="option3"
                type="radio"
                name="options"
                autoComplete="off"
              />
              <label className="btn btn-outline-secondary" htmlFor="option3">Year</label>
            </ButtonGroup>
            <Button variant="primary">
              <FontAwesomeIcon icon={faDownload} fixedWidth />
            </Button>
          </div>
        </div>
        <div
          style={{
            height: '300px',
            marginTop: '40px',
          }}
        >
          <Line
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(13, 202, 240, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              }, {
                label: 'My Second dataset',
                borderColor: 'rgba(25, 135, 84, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
              }, {
                label: 'My Third dataset',
                borderColor: 'rgba(220, 53, 69, 1)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              }],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  beginAtZero: true,
                  max: 250,
                  ticks: {
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="row row-cols-1 row-cols-md-5 text-center">
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Visits</div>
            <div className="fw-semibold">29.703 Users (40%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="success"
              now={40}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Unique</div>
            <div className="fw-semibold">24.093 Users (20%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="info"
              now={20}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Page views</div>
            <div className="fw-semibold">78.706 Views (60%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="warning"
              now={60}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">New Users</div>
            <div className="fw-semibold">22.123 Users (80%)</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="danger"
              now={80}
            />
          </div>
          <div className="col mb-sm-2 mb-0">
            <div className="text-black-50">Bounce Rate</div>
            <div className="fw-semibold">40.15%</div>
            <ProgressBar
              className="progress-thin mt-2"
              variant="primary"
              now={40}
            />
          </div>
        </div>
      </Card.Footer>
    </Card>

    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#3b5998' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faFacebookF}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">89k</div>
                <div className="text-uppercase text-black-50 small">friends</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">459</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#00aced' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faTwitter}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">65.9k</div>
                <div className="text-uppercase text-black-50 small">followers</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">1.792</div>
                <div className="text-uppercase text-black-50 small">tweets</div>
              </div>
            </div>
          </Card.Body>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <a className="twitter-timeline" data-width="auto" data-height="500" data-theme="light" href={result.allClients[0]?.url || ''}>
                  Tweets by
                  {result.allClients[0]?.clientName || '' }
                </a>
                <script async src="https://platform.twitter.com/widgets.js"> </script>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ '--bs-card-cap-bg': '#4875b4' } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">500+</div>
                <div className="text-uppercase text-black-50 small">contacts</div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">292</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

    </div>

    <div className="row">
      <div className="col-md-12">
        <Card className="mb-4">
          <Card.Header>
            <strong>Account List Overview</strong>
          </Card.Header>
          <Card.Body>
            <div className="row">
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-info px-3 mb-3">
                      <small className="text-black-50">
                        New Clients
                      </small>
                      <div className="fs-5 fw-semibold">9,123</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="border-start border-4 border-danger px-3 mb-3">
                      <small className="text-black-50">
                        Recurring Clients
                      </small>
                      <div className="fs-5 fw-semibold">22,643</div>
                    </div>
                  </div>

                </div>

                <hr className="mt-0" />

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Monday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={34}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={78}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Tuesday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={56}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={94}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Wednesday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={12}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={67}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Thursday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={43}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={91}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Friday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={22}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={73}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Saturday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={53}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={82}
                    />
                  </div>
                </div>

                <div className="row mb-4 align-items-center">
                  <div className="col-3">
                    <span className="text-black-50 small">
                      Sunday
                    </span>
                  </div>
                  <div className="col">
                    <ProgressBar
                      className="progress-thin mb-1"
                      variant="primary"
                      now={9}
                    />
                    <ProgressBar
                      className="progress-thin"
                      variant="danger"
                      now={69}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="row">
                  <div className="col-6">
                    <div className="border-start border-4 border-warning px-3 mb-3">
                      <small className="text-black-50">
                        Pageviews
                      </small>
                      <div className="fs-5 fw-semibold">78,623</div>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="border-start border-4 border-success px-3 mb-3">
                      <small className="text-black-50">
                        Organic
                      </small>
                      <div className="fs-5 fw-semibold">49,123</div>
                    </div>
                  </div>

                </div>

                <hr className="mt-0" />

                <div className="mb-5">
                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faMars} fixedWidth />
                        Male
                      </div>
                      <div className="ms-auto fw-semibold">43%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="warning"
                      now={43}
                    />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex mb-1">
                      <div>
                        <FontAwesomeIcon className="me-2" icon={faVenus} fixedWidth />
                        Female
                      </div>
                      <div className="ms-auto fw-semibold">37%</div>
                    </div>
                    <ProgressBar
                      className="progress-thin"
                      variant="warning"
                      now={37}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faSearch} fixedWidth />
                      Organic Search
                    </div>
                    <div className="ms-auto fw-semibold me-2">191.235</div>
                    <div className="text-black-50 small">(56%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={56}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faFacebookF} fixedWidth />
                      Facebook
                    </div>
                    <div className="ms-auto fw-semibold me-2">51.223</div>
                    <div className="text-black-50 small">(15%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={15}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faTwitter} fixedWidth />
                      Twitter
                    </div>
                    <div className="ms-auto fw-semibold me-2">37.564</div>
                    <div className="text-black-50 small">(11%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={11}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon className="me-2" icon={faLinkedinIn} fixedWidth />
                      LinkedIn
                    </div>
                    <div className="ms-auto fw-semibold me-2">27.319</div>
                    <div className="text-black-50 small">(8%)</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="success"
                    now={8}
                  />
                </div>
              </div>
            </div>

            <br />

            <div className="table-responsive">
              <table className="table border mb-0">
                <thead className="table-light fw-semibold">
                  <tr className="align-middle">
                    <th className="text-center">
                      <FontAwesomeIcon icon={faUsers} fixedWidth />
                    </th>
                    <th>Name</th>
                    <th>Account</th>
                    <th>Location</th>
                    <th>Notes</th>
                    <th>Outreach activity</th>
                    <th>Date Added</th>
                    <th aria-label="Action" />
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Person --> */}
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>First / Last Name</div>
                      <div className="small text-black-50">
                        <span>Job Title and Company</span>
                        {' '}
                        | Added: Jan 1, 2022
                      </div>
                    </td>
                    <td>
                      <div className="text-black-50">Account Name</div>
                    </td>
                    <td>
                      <small className="text-black-50">Town, Name, Country</small>
                    </td>
                    <td className="text-left">
                      <div className="text-black-50">Notes</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Activity Level
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td>
                      <div className="small text-black-50">01/02/22</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  {/* <!-- Person --> */}
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>First / Last Name</div>
                      <div className="small text-black-50">
                        <span>Job Title and Company</span>
                        {' '}
                        | Added: Jan 1, 2022
                      </div>
                    </td>
                    <td>
                      <div className="text-black-50">Account Name</div>
                    </td>
                    <td>
                      <small className="text-black-50">Town, Name, Country</small>
                    </td>
                    <td className="text-left">
                      <div className="text-black-50">Notes</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Activity Level
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td>
                      <div className="small text-black-50">01/02/22</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  {/* <!-- Person --> */}
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>First / Last Name</div>
                      <div className="small text-black-50">
                        <span>Job Title and Company</span>
                        {' '}
                        | Added: Jan 1, 2022
                      </div>
                    </td>
                    <td>
                      <div className="text-black-50">Account Name</div>
                    </td>
                    <td>
                      <small className="text-black-50">Town, Name, Country</small>
                    </td>
                    <td className="text-left">
                      <div className="text-black-50">Notes</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Activity Level
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td>
                      <div className="small text-black-50">01/02/22</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  {/* <!-- Person --> */}
                  <tr className="align-middle">
                    <td className="text-center">
                      <div className="avatar avatar-md d-inline-flex position-relative">
                        <Image
                          fill
                          className="rounded-circle"
                          src="/assets/img/avatars/1.jpg"
                          alt="user@email.com"
                        />
                        <span
                          className="avatar-status position-absolute d-block bottom-0 end-0 bg-success rounded-circle border border-white"
                        />
                      </div>
                    </td>
                    <td>
                      <div>First / Last Name</div>
                      <div className="small text-black-50">
                        <span>Job Title and Company</span>
                        {' '}
                        | Added: Jan 1, 2022
                      </div>
                    </td>
                    <td>
                      <div className="text-black-50">Account Name</div>
                    </td>
                    <td>
                      <small className="text-black-50">Town, Name, Country</small>
                    </td>
                    <td className="text-left">
                      <div className="text-black-50">Notes</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-start">
                          <div className="fw-semibold">50%</div>
                        </div>
                        <div className="float-end">
                          <small className="text-black-50">
                            Activity Level
                          </small>
                        </div>
                      </div>
                      <ProgressBar className="progress-thin" variant="success" now={50} />
                    </td>
                    <td>
                      <div className="small text-black-50">01/02/22</div>
                    </td>
                    <td>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          as="button"
                          bsPrefix="btn"
                          className="btn-link rounded-0 text-black-50 shadow-none p-0"
                          id="action-user1"
                        >
                          <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Info</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger"
                            href="#/action-3"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  // retrieving the list of all articles
  const result = await datocms(ClientsDocument)
  return {
    props: { result },
    revalidate: 30, // In second
  }
}
export default Home
