import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, users }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b-2">
                                    <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                        Nama
                                    </th>
                                    <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                        E-Mail
                                    </th>
                                    <th className="px-6 py-3 text-left text-lg font-medium text-black">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.index} className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            &nbsp;
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
