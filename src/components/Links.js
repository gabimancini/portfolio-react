const Links = ({ id, href, children, download, target,clickEvent }) => {
  return (
    <li key={id}><a href={href} target={target} className='links' download={download} onClick={clickEvent} >{children}</a></li>
  )
}
export default Links;