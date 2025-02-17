interface IFormProps  {
    title: string;
    label: string;
    types: string;
}

export default function Form({title, label, types}: IFormProps) {
    return(
        <div className="py-10 bg-blue h-[20vh]">
            <form>
                <label htmlFor={label}>{title}</label>
                <input type={types} className="py-2 outline-none" />
            </form>
        </div>
    )
}