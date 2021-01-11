import InputField from './fields/InputField'
import Textarea from './fields/TextareaField'
import Submit from '../buttons/PrimaryBtn'

export default function Contact() {
    return(
        <div className="container mx-auto mt-16 px-4 text-center" id="contact">
            <h2 className="font-bold text-xl mb-6">Want to contact me? Shoot me a line below!</h2>
            <form action="#">
                <InputField 
                    text="First Name"
                    _for="fname"
                    _id="fname"
                    _name="fname"
                    _type="text"
                    _required={true}
                />
                <InputField 
                    text="Last Name"
                    _for="lname"
                    _id="lname"
                    _name="lname"
                    _type="text"
                    _required={false}
                />
                <InputField 
                    text="Email"
                    _for="email"
                    _id="email"
                    _name="email"
                    _type="email"
                    _required={true}
                />
                <Textarea 
                    text="Message"
                    _for="message"
                    _name="message"
                    _id="message"
                    _required={true}
                />
                <button
                    className="my-6 block bg-blue-500 text-white py-2 px-6 font-medium w-full"
                >Submit</button>
            </form>
        </div>
    )
}