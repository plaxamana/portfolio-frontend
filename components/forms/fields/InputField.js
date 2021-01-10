export default function InputField({ text, _for, _id, _name, _type, _required }) {
    
    if(_required) {
        return (
            <div className="flex flex-col text-left mb-2">
                <label 
                    htmlFor={_for}
                    className="font-medium text-sm mb-1"
                >{text} <strong className="text-red-500">*</strong></label>
                <input 
                    type={_type}
                    id={_id}
                    name={_name}
                    className="border border-gray-300 p-2"
                />
            </div>
        )
    }

    return (
        <div className="flex flex-col text-left mb-2">
            <label 
                htmlFor={_for}
                className="font-medium text-sm mb-1"
            >{text}</label>
            <input 
                type={_type}
                id={_id}
                name={_name}
                className="border border-gray-300 p-2"
            />
        </div>
    )
}