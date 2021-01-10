export default function TextareaField({ text, _for, _id, _name, _required }) {
    
    if(_required) {
        return(
            <div className="flex flex-col text-left mb-2">
                <label 
                    htmlFor={_for}
                    className="font-medium text-sm mb-1"
                >{text} <strong className="text-red-500">*</strong></label>
                <textarea 
                    name={_name} 
                    id={_id} 
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
            <textarea 
                name={_name} 
                id={_id} 
                className="border border-gray-300 p-2"
            />
        </div>
    )
}