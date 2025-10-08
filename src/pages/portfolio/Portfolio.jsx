import React from 'react'
import { SAMPLE_PORTFOLIO } from '../../helper/data_help'

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold">Portfolio</h2>
                <p className="mt-2 text-gray-600">Selected projects and demos.</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {SAMPLE_PORTFOLIO.map((p) => (
                        <div key={p.title} className="p-4 border rounded-lg bg-gray-50">
                            <div className="h-36 bg-white border rounded flex items-center justify-center">Screenshot</div>
                            <div className="mt-3">
                                <div className="font-semibold">{p.title}</div>
                                <div className="text-xs text-gray-500">{p.type}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio