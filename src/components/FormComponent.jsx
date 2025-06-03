import React, { useState } from 'react'

const FormComponent = ({ setShow }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")

    const handleSubmit = () => {

        if (name, email, password, confirmPass) {
            alert("successfully completed")
            setShow(true)
        }

    }
    console.log({ name, email, password, confirmPass });
    return (
        <div className='w-full h-screen bg-slate-300'>

            <div className='h-3/4 flex justify-center items-center'>
                <div className=' border w-2/3 text-center '>

                    <form onSubmit={handleSubmit} action="">

                        <div className=''>
                            <p className='uppercase text-4xl font-extrabold text-amber-700'>Login</p>
                        </div>

                        <div className='py-3 flex justify-center items-center gap-3'>
                            <label htmlFor="">name</label>
                            <input required value={name} onChange={((e) => setName(e.target.value))} type="text" placeholder='Please enter your name' className=' p-2 bg-transparent border-2' />
                        </div>

                        <div className='py-3 flex justify-center items-center gap-3'>
                            <label htmlFor="">email</label>
                            <input required value={email} onChange={((e) => setEmail(e.target.value))} type="email" placeholder='Please enter your email' className=' p-2 bg-transparent border-2' />
                        </div>

                        <div className='py-3 flex justify-center items-center gap-3'>
                            <label htmlFor="">Password</label>
                            <input required value={password} onChange={((e) => setPassword(e.target.value))} type="password" placeholder='Please enter your Password' className=' p-2 bg-transparent border-2' />
                        </div>

                        <div className='py-3 flex justify-center items-center gap-3'>
                            <label htmlFor="">Confirm Password</label>
                            <input required value={confirmPass} onChange={((e) => setconfirmPass(e.target.value))} type="password" placeholder='Please enter your Password' className=' p-2 bg-transparent border-2' />
                        </div>

                        <div className='py-3 flex justify-center items-center gap-3'>
                            <button type='reset' className='uppercase border rounded shadow bg-red-500 px-3 py-1 text-white'>cancel</button>
                            <button type='submit' className='uppercase border rounded shadow bg-green-500 px-3 py-1 text-white'>submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default FormComponent