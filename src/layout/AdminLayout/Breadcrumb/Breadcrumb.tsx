import { Breadcrumb as BSBreadcrumb } from 'react-bootstrap'

export default function Breadcrumb() {
  return (
    <BSBreadcrumb listProps={{ className: 'my-0 ms-2 align-items-center' }}>
      <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        Welcome
      </BSBreadcrumb.Item>
      <BSBreadcrumb.Item
        linkProps={{ className: 'text-decoration-none' }}
        href="/"
      >
        News
      </BSBreadcrumb.Item>
      <BSBreadcrumb.Item active>Insights</BSBreadcrumb.Item>
      <BSBreadcrumb.Item active>Resources</BSBreadcrumb.Item>
    </BSBreadcrumb>
  )
}
