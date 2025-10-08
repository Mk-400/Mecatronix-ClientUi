import React from 'react'

const Quote = () => {
    return (
        <section id="quote" className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold">Request a Quote</h2>
                <p className="mt-2 text-gray-600">Fill basic details and we will send a custom proposal.</p>
                <form className="mt-6 grid gap-3">
                    <input className="px-3 py-2 border rounded" placeholder="Name" />
                    <input className="px-3 py-2 border rounded" placeholder="Email or WhatsApp" />
                    <select className="px-3 py-2 border rounded">
                        <option>Choose project type</option>
                        <option>Single Page</option>
                        <option>Multi Page</option>
                        <option>E-commerce</option>
                        <option>Custom Web App</option>
                    </select>
                    <input className="px-3 py-2 border rounded" placeholder="Estimated budget (optional)" />
                    <textarea className="px-3 py-2 border rounded" rows={4} placeholder="Describe requirements"></textarea>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold">Request Quote</button>
                </form>
            </div>
        </section>
    )
}

export default Quote