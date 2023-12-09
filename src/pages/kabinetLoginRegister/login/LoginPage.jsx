import './loginPage.scss'

const LoginPage = () => {
  return (
    <div className='loginKabinet'>
          <form >
            <div>
            <input type="email" placeholder='email'/>
            </div>
            <div>
            <input type="password" placeholder='password'/>
            </div>
            <button>Daxil ol</button>
          </form>
    </div>
  )
}

export default LoginPage