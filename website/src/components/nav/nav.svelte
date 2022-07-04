<script>
    import {page} from '$app/stores'
    console.log('nav',$page);
</script>
<nav class="flex justify-center dark:bg-secondary dark:bg-opacity-60 rounded-t-lg h-12 items-center max-h-full">
    <a class:text-tertiary={$page.url.pathname === '/'} class="md:mx-4 mx-2 md:text-lg text-xs" href="/">Professional Background</a>
    <a class:text-tertiary={$page.url.pathname === '/personal'} class="md:mx-4 mx-2 md:text-lg text-xs" href="/personal">Personal Background</a>
</nav>

<style>
    a:hover{
        text-decoration: underline;
    }
</style>