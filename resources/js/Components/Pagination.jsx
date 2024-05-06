import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <div className="flex justify-center max-w-7xl mt-8 space-x-2">
            {links.map((link, index) => (
                <Link 
                    key={index}
                    href={link.url}
                    className=
                    {
                        link.active
                            ? "bg-blue-500 text-white px-4 py-2 border border-blue-500 rounded-md"
                            : "text-primary hover:bg-blue-700 hover:text-white px-4 py-2 border rounded-md"
                    }
                    dangerouslySetInnerHTML={{ __html:link.label }}
                />
            ))}
        </div>
    );
}
