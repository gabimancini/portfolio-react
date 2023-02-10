const Links = ({ id, href, children, download, target }) => {
  return (
    <li key={id}><a href={href} target={target} className='font-satoshiMedium text-nav pr-8 ' download={download} >{children}</a></li>
  )
}
export default Links;