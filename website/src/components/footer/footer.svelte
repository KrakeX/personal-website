<script>
    import {page} from '$app/stores';
    const linkedInIcon = 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg';

    const {protocol, host} = $page.url;
</script>
<footer class="p-4 bg-white dark:bg-gradient-to-r dark:from-secondary dark:to-quaternary rounded-lg shadow md:px-6 md:py-8 dark:bg-opacity-60 md:mt-8 mt-2">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://www.linkedin.com/in/paceduran/" class="flex items-center mb-4 sm:mb-0 sm:justify-between justify-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pablo Durán Celis</span>
        
            <span class="ml-2 svg-white "><img class="" height="25" width="25" src="{linkedInIcon}" /></span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm sm:mb-0 dark:text-white sm:justify-between justify-center">
            <li>
                <a href="/" class="mr-4 hover:underline md:mr-6 ">Professional Info</a>
            </li>
            <li>
                <a href="/personal" class="mr-4 hover:underline md:mr-6">Personal Info</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-primary lg:my-8" />
    <span class="block text-xs text-gray-500 text-center dark:text-white">Developed by <a href="{protocol}//{host}/" class="hover:underline">Pablo Durán Celis</a> - 2022
    </span>
</footer>

<style>
    .svg-white {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(339deg) brightness(101%) contrast(102%);
}
</style>