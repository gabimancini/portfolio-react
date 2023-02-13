const Links = ({ id, href, children, download, target }) => {
  return (
    <li key={id}><a href={href} target={target} className='links' download={download} >{children}</a></li>
  )
}
export default Links;