<template>
    <section>
        <div class="text-black text-3xl font-bold flex justify-center items-center mt-12 mb-4">SHOP</div>
        <div class="text-black text-large flex justify-center items-center mb-8">Login In To Your Account</div>
        <div>
            <form class="flex justify-center items-center">
                <div class="bg-gray-50 p-12 rounded-lg mb-12">
                    <div class="grid grid-cols-2 gap-10">
                        <div class="mb-5">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div class="mb-5">
                            <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                    </div>
                    <div>
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                        <div class="grid grid-cols-3 gap-10">
                            <div class="">
                                <div class="relative">
                            <input type="text" id="base-input"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pr-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Day">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1 pointer-events-none">
                                <svg class="w-3 h-3 text-black-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                </svg>
                            </div>
                        </div>
                            </div>
                            <div class="">
                                    <div class="relative">
                                <input type="text" id="base-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pr-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Month">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1 pointer-events-none">
                                    <svg class="w-3 h-3 text-black-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                    </svg>
                                </div>
                            </div>
                            </div>
                            <div class="">
                                    <div class="relative">
                                <input type="text" id="base-input"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-40 pr-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Year">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1 pointer-events-none">
                                    <svg class="w-3 h-3 text-black-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                    </svg>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                        <div class="relative">
                            <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="USA">
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1 pointer-events-none">
                                    <svg class="w-3 h-3 text-black-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                                    </svg>
                                </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <h3 class="mb-2">Gender</h3>
                        <div class="grid grid-cols-3">
                            <div>
                                <input type="radio" value="0">
                                <span class="pl-2">Male</span>
                            </div>
                            <div>
                                <input type="radio"  value="1">
                                <span class="pl-2">Female</span>
                            </div>
                            <div>
                                <input type="radio" value="2">
                                <span class="pl-2">Undisclosed</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mt-6">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mt-6">
                        <button class="px-6 py-3 w-full bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">Sign In</button>
                    </div>
                    <div class="text-black flex justify-center items-center mt-4">
                        <p>Doesn't have an account yet?<router-link to="/register">Sign up</router-link></p>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>