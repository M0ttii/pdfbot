import * as React from "react"
const AlertSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      strokeWidth={3.5}
      d="M30 22.5v10m0 10h.024M26.538 9.73 5.975 45.245c-1.14 1.97-1.71 2.955-1.626 3.763a2.5 2.5 0 0 0 1.016 1.763c.658.478 1.796.478 4.072.478h41.125c2.276 0 3.414 0 4.072-.478a2.5 2.5 0 0 0 1.016-1.763c.084-.808-.486-1.793-1.627-3.763L33.461 9.729c-1.136-1.963-1.704-2.944-2.446-3.274a2.5 2.5 0 0 0-2.031 0c-.742.33-1.31 1.311-2.446 3.274Z"
    />
  </svg>
)
export default AlertSVG
