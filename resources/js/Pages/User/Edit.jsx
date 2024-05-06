import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Selectbox from '@/Components/Selectbox';
import Roles from '../../Data/Roles.json';
import { Head, useForm } from '@inertiajs/react';

export default function Edit({ auth, user }) {
    const { data, setData, patch, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
        role: user.role
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('users.update', user.id), {
            preserveScroll: true,
            onSuccess: () => {
                alert("Successfully edit user!");
            }
        })
    };
    
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create user" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="max-w-xl">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Edit User</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Editing information of employee.
                            </p>
                        </header>

                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    className="mt-1 block w-full"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    isFocused
                                    autoComplete="name"
                                />

                                <InputError className="mt-2" message={errors.name} />
                            </div>

                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoComplete="username"
                                />

                                <InputError className="mt-2" message={errors.email} />
                            </div>

                            <div>
                                <InputLabel htmlFor="role" value="Role" />

                                <Selectbox 
                                    onChange={(e) => 
                                        setData("role", e.target.value)
                                    }

                                    id="role"
                                    currentValue={data.role}
                                    options={Roles}
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                <TextInput
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            {/* <div>
                                <InputLabel htmlFor="new_password" value="New Password" />

                                <TextInput
                                    id="new_password"
                                    value={data.password}
                                    onChange={(e) => setData('new_password', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <InputLabel htmlFor="new_password_confirmation" value="Confirm New Password" />

                                <TextInput
                                    id="new_password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('new_password_confirmation', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div> */}

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Save</PrimaryButton>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
