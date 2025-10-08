import React from 'react'
import { NAV } from '../../helper/data_help'

const MobileMenu = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md border">
                ☰
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    {NAV.map((n) => (
                        <a key={n.id} href={n.id} className="block px-4 py-2 text-sm">
                            {n.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MobileMenu