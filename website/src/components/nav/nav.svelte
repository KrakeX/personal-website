<script>
    import {page} from '$app/stores'
</script>
<nav class="flex justify-center dark:bg-gradient-to-r dark:from-secondary dark:via-secondary dark:to-quaternary dark:bg-opacity-60 rounded-t-lg h-12 items-center max-h-full">
    <a class:text-tertiary={$page.url.pathname === '/'} class="md:mx-4 mx-2 md:text-lg text-xs hover:dark:bg-quaternary hover:dark:text-tertiary rounded p-1" href="/">Professional Background</a>
    <a class:text-tertiary={$page.url.pathname === '/personal'} class="md:mx-4 mx-2 md:text-lg text-xs hover:dark:bg-quaternary hover:dark:text-tertiary rounded p-1" href="/personal">Personal Background</a>
</nav>

<style>
    a:hover{
        text-decoration: underline;
    }
</style>