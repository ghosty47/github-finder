import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div classname='w-100 mt-20'>
      <img 
      src={spinner} 
      alt="" 
      className="text-center mx-auto" />
    </div>
  )
}

export default Spinner
