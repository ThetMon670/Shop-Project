<template>
    <section>
        <div class="text-black text-3xl font-bold flex justify-center items-center mt-12 mb-4">SHOP</div>
        <div class="text-black text-large flex justify-center items-center mb-8">Login In To Your Account</div>
        <div>
            <form class="flex justify-center items-center">
                <div class="bg-gray-50 p-12 rounded-lg">
                    <div class="mb-5">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="mb-5">
                        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div class="flex gap-4 pt-2 mb-4">
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me</label>
                        </div>
                    <div>
                            <p class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 pl-44">Forget your password?</p>
                    </div>
                    </div>
                    <div>
                        <button class="px-6 py-3 w-115 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">Sign In</button>
                    </div>
                    <div class="grid grid-cols-3 items-center pt-6">
                        <hr class="w-36">
                        <p class="pl-4">or Continue with</p>
                        <hr class="w-36">
                    </div>
                    <div class="grid grid-cols-3 gap-8 items-center pt-6">
                        <div class="px-4 py-4 bg-gray-100 rounded-lg pl-14 hover:bg-gray-200">
                            <img src="../assets/img/Google.png" class="w-7 h-7">
                        </div>
                        <div class="px-4 py-4 bg-gray-100 rounded-lg pl-14 hover:bg-gray-200">
                            <img src="../assets/img/Facebook.png" class="w-7 h-7">
                        </div>
                        <div class="px-4 py-4 bg-gray-100 rounded-lg pl-14 hover:bg-gray-200">
                            <img src="../assets/img/Twitter.png" class="w-7 h-7">
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="text-black flex justify-center items-center mt-6">
            <p>Doesn't have an account yet?<router-link to="/register">Sign up</router-link></p>
        </div>
    </section>
</template>