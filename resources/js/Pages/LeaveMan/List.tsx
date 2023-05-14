import { Head } from "@inertiajs/react";

export default function List() {
    return (
        <>
            <Head title="Leave Management List"></Head>
            <div className="bg-gray-100 h-screen">
                <h1>Leave Management List</h1>
                <div className="bg-white p-4 m-4 rounded-lg">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
                <br/>
            </div>
        </>
    )
}
