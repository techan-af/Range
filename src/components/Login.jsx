import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import logo from "../assets/logo.png"
const Login = () => {
  return (
    <div className='flex bg-slate-200 justify-center items-center w-full h-[100vh]'>
                {/* <section className="bg-white h-[100vh]">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    
                    <div className="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-blue-200 border-white">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-900
                                            ">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-gray-900 bg-primary-600 hover:bg-blue-800 
                                hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-700">
                                    Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to={"/signup"} >Sign up</Link></span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                </section> */}
            <div className='left bg-blue-500 w-80 h-[24rem] shadow-md flex items-center justify-center'>
                <img src={logo} alt="" className='w-60' />
            </div>
            <div className='right bg-white w-80 h-[24rem] shadow-md flex flex-col items-center'>
                <div className='heading text-2xl font-bold mt-10'><p>LOGIN</p></div>
                <div className='username mt-4'>
                    <input type="text" placeholder='username' required className='border border-black rounded-sm h-8 w-60 p-2' />
                </div>
                <div className='username mt-4'>
                    <input type="text" placeholder='password' required className='border border-black rounded-sm h-8 w-60 p-2' />
                </div>
                <div className='flex justify-between gap-10 mt-4'>
                    <div className='forgot flex gap-2'>
                        <input type="checkbox" name="" id="" className='border' />
                        <p className='text-blue-500 text-xs'>Remember Me</p>
                    </div>
                    <div className=''>
                        <p className='text-blue-500 text-xs'>Forgot Password</p>
                    </div>
                </div>
                <div className='submit'>
                    <button className='mt-4 border bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 '>Login</button>
                </div>
                <div className='signUp mt-4'>
                    <p className='text-sm'>Don't have an account? <span className='font-medium'><Link to={"/signup"} >Sign up</Link></span></p>
                </div>
            </div>
    </div>
  )
}

export default Login