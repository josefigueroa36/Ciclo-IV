import React from 'react'
import { BarraNav } from './BarraNav'
import { PiePag } from './PiePag'
import './../assets/css/FormLogin.css'
export const Login = () => {
    return (
        <div>

            <BarraNav />


            <form action='/Dashboard' className="form d-flex justify-content-center align-items-center">
                <div className="conten bg-white p-5  rounded-5 text-secondary shadow">
                    <div className="d-flex justify-content-center">
                        <img
                            className='icon-login'
                            src="./assets/img/login-icon.svg"
                            alt="login-icon"
                        />
                    </div>
                    <div className="text-center fs-1 fw-bold">Login</div>
                    <div className="input-group mt-4">
                        <div className="input-group-text icon">
                            <img
                                className='username-icon'
                                src="./assets/img/username-icon.svg"
                                alt="username-icon"
                            />
                        </div>
                        <input
                            className="form-control bg-light"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="input-group mt-1">
                        <div className="input-group-text icon">
                            <img
                                className='password-icon'
                                src="./assets/img/password-icon.svg"
                                alt="password-icon"
                            />
                        </div>
                        <input
                            className="form-control bg-light"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                        <div className="d-flex justify-content-around mt-1 pt-1">
                            <a
                                href="#"
                                className="recu-contra text-decoration-none text-info fw-semibold fst-italic">
                                Forgot your password?
                            </a>
                        </div>
                    <button type='submit' className="btn btn-info text-white w-50 mt-4 fw-semibold shadow-sm">
                        Ingresar
                    </button>
                    <div className="d-flex gap-1 justify-content-center mt-1">
                        <div>¿No tienes una cuenta?</div>
                        <a href="/Registro"
                            className="text-decoration-none text-info fw-semibold">
                            Registrate
                        </a>
                    </div>
                </div>
            </form>
            
            <PiePag />
        </div>
    )
}
