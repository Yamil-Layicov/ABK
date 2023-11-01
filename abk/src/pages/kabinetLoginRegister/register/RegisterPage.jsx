import './registerPage.scss'

const RegisterPage = () => {
  return (
    <div className='loginKabinet'>
          <form >
            <div>
            <input type="text" placeholder='ad soyad'/>
            </div>
            <div>
            <input type="email" placeholder='email'/>
            </div>
            <div>
            <input type="number" placeholder='number'/>
            </div>
            <div>
            <input type="text" placeholder='company'/>
            </div>
            <button>Daxil ol</button>
          </form>
    </div>
  )
}   

export default RegisterPage