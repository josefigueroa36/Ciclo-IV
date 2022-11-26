import React from 'react'
import './../assets/css/FormLogin.css'
export const FormLogin = () => {
    return (
        <div>
            <div>
                <img
                    className='icon-login'
                    src=""
                    alt="icon-login"
                />
            </div>
            <h1>Login</h1>
            <div>
                <div>
                    <img
                        className='username-icon'
                        src=""
                        alt="username-icon"
                    />
                </div>
                <input type="text" placeholder='Username' />
            </div>
            <div>
                <div>
                    <img
                        className='password-icon'
                        src=""
                        alt="password-icon"
                    />
                </div>
                <input type="password" placeholder='Password' />
            </div>
            <div>

                <div>
                    <input type="checkbox" name="" id="" />
                    <span>Remember me</span>
                </div>
                <div>
                    <a href="">Forgot your password?</a>
                </div>
            </div>
        </div>
    )
}
