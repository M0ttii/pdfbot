
const DotsSvg = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={2} cy={2} r={2} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={1.85} cy={17.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={17.85} cy={1.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={9.85} cy={1.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={17.85} cy={9.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={9.85} cy={9.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={17.85} cy={17.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={9.85} cy={17.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
    <circle cx={1.85} cy={9.85} r={1.85} fill="#F8F8F8" fillOpacity={0.88} />
  </svg>
)
export default DotsSvg
