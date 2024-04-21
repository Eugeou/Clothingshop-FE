import RegForm from "../form/reg-form"
import Card from "antd/es/card/Card"

function Register()
{
    return (
        <div className="py-12">
            <div className ="flex grid grid-cols-3 gap-4">
                <Card className="col-start-2 mt-20 bg-white shadow-xl h-[810px]">
                    <h1 className=" text-center text-xl font-bold text-blue-500">Sign up</h1>
                    <h2 className=" text-center font-semibold mt-1">Welcome back!</h2>

                    <RegForm />

                </Card>
            </div>
        </div>
    )
}

export default Register

