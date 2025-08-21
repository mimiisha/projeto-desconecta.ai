import React from "react"

const Footer = () => {
    return (
        <footer className="w-full bg-bgFooter text-gray-300 pt-6 pb-10 mt-10 border-t border-gray-700 shadow-sm flex justify-center">
            <div className="px-4">
                <p className="text-sm text-center">
                    © {new Date().getFullYear()} Misha e Jayne — Todos os direitos reservados.<br />
                    Um projeto para inspirar a reconexão.
                </p>
            </div>
        </footer>
    )
}

export default Footer