<script>
    import Nav from '../components/nav/nav.svelte'
    import Footer from '../components/footer/footer.svelte'
</script>
<div class="flex flex-col bg-white dark:bg-primary py-4 mx-auto text-teal dark:text-white min-h-screen justify-between">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl py-4 text-center">
        <span class="block text-white dark:text-white xl:inline uppercase" >Pablo Durán Celis</span>
        <span class="block text-secondary xl:inline">Software Engineer</span>
      </h1>
    <Nav/>
    <div class="container xl:max-w-6xl max-w-none mx-auto dark:bg-secondary dark:bg-opacity-30 md:px-8 md:py-4 pt-2 px-2 rounded-b-lg">
        <slot/>
    </div>
    <Footer/>
    
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>