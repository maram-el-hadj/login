import maram from '../assets/maram.jpg'
function Login () {
    return(
        <div className="container  flex  grid grid-cols-12 justify-center items-center  w-full h-screen ">
            <div className="  bg-white block  col-span-12 lg:col-span-6 rounded-2xl  w-md h-120 my-8 text-center ">
                <h1 className='text-rose-600 font-bold text-4xl my-8 '>LOGIN FORM</h1>
                <h5 className='text-xl pb-2'>Enter your login credentials </h5>
                <form action="" method="get" className="mx-8">
                    <input type="email" placeholder='EMAIL' className='bg-white  border-zinc-200 border py-2 pl-2 w-full my-2 text-slate-600 rounded-xs'  />
                    <input type="password" placeholder='PASSWORD ' className='bg-white border-zinc-200 border py-2 pl-2 w-full text-slate-600 rounded-xs'/>
                    <button type="submit" className='bg-rose-600 text-white py-2 my-2 w-full w-45 rounded-xs'>LOGIN</button>
                </form>
                <h6 className='text-slate-600 py-2'>Don't have an account ? <a className='text-rose-600' href=''>Sign up here </a></h6>


                
            </div>
            <div className="image  col-span-12 lg:col-span-6 w-sm   h-2xs  ">
                <img className='w-full rounded-e-2xl ' src={maram} alt="" /> 
                
            </div>
            

        </div>

    )
}
export default Login;
