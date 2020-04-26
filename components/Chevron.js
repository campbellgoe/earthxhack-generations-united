export default ({ left = false }) => {
  return (<svg className="Chevron"
    style={{
      transform: `rotate(${left ? '180deg' : '0deg'})`,
      fill: 'white'
    }}
    width={32}
    focusable="false"
    viewBox="0 0 24 24"
    ariaHidden="true"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
  </svg>)
}