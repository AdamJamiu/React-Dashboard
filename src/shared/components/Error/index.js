
function NotFound() {
  return <>404 Page not found</>
}

function ServerError() {
  return <>Server Error</>
}
export default Object.assign(NotFound, {
ServerError
})
