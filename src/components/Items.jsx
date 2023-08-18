import { useState } from 'react';

const Items = ({userId}) => {
    console.log("rerendering items ...")
    const [items, setItems] = useState("")
    const [showToast, setShowToast] = useState(null);

    
    const onSubmit = () => {
        console.log("submitting items ...", items)
    }

    return (
        <>
            <div className="mt-8 flex items-center justify-center">
                <input placeholder="enter items" value={items} class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"/>
            </div>
            <div className="mt-2">
                <button onClick={()=> onSubmit()} className="w-full bg-slate-200 px-4 py-2 rounded-md" > Submit </button>
            </div>

            { showToast && (
                <div id="toast-simple" class="sticky top-[80vh] flex items-center w-full p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow" role="alert">
                    <svg class="w-5 h-5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLineCap="round" strokeLineJoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                    </svg>
                    <div class="pl-4 text-sm font-normal">Updated successfully.</div>
                    <div class="pl-4 text-sm font-normal">
                        <span class="text-sm font-normal">{showToast.join(', ')} </span>    
                    </div>
                </div>
            )}
            
        </>
    )
}

export default Items;